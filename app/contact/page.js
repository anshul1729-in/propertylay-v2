import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Propertylay. Call, email, or visit our office in Sector 126, Noida.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-56 flex items-center justify-center">
        <img src="https://www.propertylay.com/assets/images/g5.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 text-center text-white">
          <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">Reach Out</p>
          <h1 className="font-display text-4xl font-light">Contact Us</h1>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Info cards */}
          <div className="space-y-5">
            <Reveal>
              <h2 className="font-display text-3xl font-light text-charcoal mb-2">Get In Touch</h2>
              <div className="w-10 h-px bg-gold mb-6" />
            </Reveal>

            {[
              {
                title: 'Phone',
                value: '+91 99537 68643',
                sub: 'Mon–Sat, 10 AM – 7 PM',
                href: 'tel:+919953768643',
                icon: 'phone',
              },
              {
                title: 'Email',
                value: 'contactus@propertylay.com',
                sub: 'We reply within 4 hours',
                href: 'mailto:contactus@propertylay.com',
                icon: 'mail',
              },
              {
                title: 'Office',
                value: 'Sector 126, Noida',
                sub: 'Insignia Tower, Second Floor',
                href: '#',
                icon: 'map',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <a href={item.href} className="flex gap-4 bg-cream p-5 hover:bg-gold/10 transition-colors group">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    {item.icon === 'phone' && (
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    )}
                    {item.icon === 'mail' && (
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    )}
                    {item.icon === 'map' && (
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.1em] uppercase text-muted mb-0.5">{item.title}</p>
                    <p className="text-sm font-medium text-charcoal">{item.value}</p>
                    <p className="text-xs text-muted mt-0.5">{item.sub}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Reveal delay={100}>
              <div className="bg-white p-8 border border-cream">
                <h3 className="font-display text-2xl font-light text-charcoal mb-6">Send a Message</h3>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map embed */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
          <Reveal>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.3610!3d28.5706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+126+Noida!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Propertylay Office Location"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
