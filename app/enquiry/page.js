import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Book a Consultation',
  description: 'Book a free consultation with the Propertylay team. We will help you find the right luxury farmhouse, villa, or plot for your needs.',
};

const projects = [
  'Pranna Farm Plots',
  'Graama Villa Plots',
  'Sunview City — Residential Plots',
  'Sportsville Farms',
  'Not sure yet — please guide me',
];

export default function EnquiryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-56 flex items-center justify-center">
        <img src="https://www.propertylay.com/assets/images/banner4.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 text-center text-white">
          <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">Free Consultation</p>
          <h1 className="font-display text-4xl font-light">Book an Enquiry</h1>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-charcoal mb-2">We're here to help</h2>
            <div className="w-10 h-px bg-gold mb-5" />
            <p className="text-sm text-muted leading-relaxed mb-8">
              Fill in the form and one of our property advisors will call you back within 4 working hours to discuss your requirements, budget, and the best options available.
            </p>
            <div className="space-y-4">
              {[
                '100% Free — No obligation consultation',
                'Speak to a dedicated property advisor',
                'Site visits arranged on your schedule',
                'All legal and documentation support provided',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white p-8 border border-cream">
              <h3 className="font-display text-2xl font-light text-charcoal mb-6">Send an Enquiry</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
