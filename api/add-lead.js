// Serverless function: Append lead to Google Sheets
// Requirements:
// - Set env vars in Vercel Project Settings:
//   GOOGLE_SERVICE_ACCOUNT_EMAIL
//   GOOGLE_PRIVATE_KEY            (use \n for newlines; we convert to real newlines)
//   GOOGLE_SHEETS_SPREADSHEET_ID  (the Sheet ID from the URL)
//   GOOGLE_SHEETS_TAB_NAME        (optional, defaults to 'Leads')
// - Share the target Google Sheet with the service account email as Editor.

import { google } from 'googleapis';

function stripWrapQuotes(s = '') {
  const t = String(s).trim();
  // Remove matching single or double quotes at both ends
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

function getAuth() {
  const clientEmail = stripWrapQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const privateKeyRaw = stripWrapQuotes(process.env.GOOGLE_PRIVATE_KEY || '');
  if (!clientEmail || !privateKeyRaw) {
    throw new Error('Missing Google service account credentials.');
  }
  // Replace escaped newlines
  const privateKey = privateKeyRaw.replace(/\\n/g, '\n');
  return new google.auth.JWT(
    clientEmail,
    undefined,
    privateKey,
    ['https://www.googleapis.com/auth/spreadsheets']
  );
}

function getSheetConfig() {
  const spreadsheetId = stripWrapQuotes(process.env.GOOGLE_SHEETS_SPREADSHEET_ID);
  const sheetName = stripWrapQuotes(process.env.GOOGLE_SHEETS_TAB_NAME || 'Leads');
  if (!spreadsheetId) throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID');
  // Escape single quotes in sheet name for A1 notation and wrap with quotes
  const escapedName = sheetName.replace(/'/g, "''");
  const a1Sheet = `'${escapedName}'`;
  return { spreadsheetId, sheetName: a1Sheet };
}

function getNowTimestamps() {
  const now = new Date();
  const iso = now.toISOString();
  const ist = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  });
  return { iso, ist };
}

export default async function handler(req, res) {
  // Basic CORS (allow local dev preview)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body || {};
    const {
      name = '',
      phone = '',
      businessName = '',
      businessType = '',
      city = '',
      businessDescription = '',
      businessServices = ''
    } = body;

    const { spreadsheetId, sheetName } = getSheetConfig();
    const auth = getAuth();
    const sheets = google.sheets({ version: 'v4', auth });
    const { iso, ist } = getNowTimestamps();

    const values = [[
      ist,               // Local (IST) timestamp, human-readable
      iso,               // ISO timestamp
      name,
      phone,
      businessName,
      businessType,
      city,
      businessDescription,
      businessServices
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values }
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Add lead error:', err);
    return res.status(500).json({ error: 'Failed to append to Google Sheets' });
  }
}
