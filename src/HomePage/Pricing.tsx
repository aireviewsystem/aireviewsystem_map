import { Check, Award, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Simple, Transparent Pricing Plans</h2>
          <p className="text-gray-600 mt-2">No hidden charges. Just clear value that grows your business.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* First Year Plan */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 border-2 border-yellow-300 hover:border-yellow-400 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-gray-900 text-xl font-extrabold shadow">
                <Award className="w-4 h-4" /> Navratri Special Offer
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center">Go For Review Plan</h3>
            <div className="text-center mt-2 mb-1">
              <span className="text-xl md:text-2xl font-semibold text-gray-400 line-through mr-2">₹7,500</span>
              <span className="text-4xl md:text-5xl font-extrabold text-blue-700">₹6,500</span>
              <span className="text-2xl font-extrabold text-blue-700">/-</span>
            </div>
            <div className="text-center mb-2">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
              Limited Time Offer
              </span>
            </div>
            <p className="text-center text-gray-500 mb-6">One-time payment for the first year</p>

            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Custom QR code for your business</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>AI-generated personalized reviews</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Mobile-optimized review page</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Direct Google Reviews integration</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Unlimited scans & reviews</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>24/7 WhatsApp support</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Free updates & improvements</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Setup within 24 hours</span>
              </li>
            </ul>

            <div className="mt-6">
              <div className="flex items-center gap-2 rounded-xl bg-yellow-50 border border-yellow-200 px-4 py-3 text-yellow-800 text-sm">
                <span className="text-yellow-600">🔒</span>
                FREE Premium Standee included
              </div>
            </div>

            <a
              href="/#lead-form"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transition-all"
            >
              Get Your QR Code Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Renewal Plan */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 border border-gray-100 hover:border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 text-center">Renewal from Second Year</h3>
            <div className="text-center mt-2 mb-1">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-700">₹2,000</span>
              <span className="text-2xl font-extrabold text-blue-700">/-</span>
            </div>
            <p className="text-center text-gray-500 mb-6">Annual renewal for continued access</p>

            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Continued QR code access (no downtime)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Keep unlimited scans & reviews active</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Ongoing access to AI review generator</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Lifetime support & future upgrades</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Google review page remains live</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Annual platform maintenance & security updates</span>
              </li>
            </ul>

            <a
              href="/#lead-form"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg transition-all"
            >
              Renew Your Access <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-700 mt-10 font-medium">
          • Start with the first year plan, then enjoy affordable renewals
        </div>
        <p className="text-center text-gray-600 mt-2 max-w-3xl mx-auto">
          Get everything you need to transform your business reputation. No contracts, no hidden fees, just results.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
