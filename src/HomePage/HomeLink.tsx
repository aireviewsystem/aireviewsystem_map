import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Industries from './Industries';
import Features from './Features';
import Testimonials from './Testimonials';
import LeadForm from './LeadForm';
import FAQ from './FAQ';
import Footer from './Footer';

function HomeLink() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <LeadForm />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomeLink;