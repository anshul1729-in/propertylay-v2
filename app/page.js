import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/projects';
import ContactForm from '@/components/ContactForm';

/* ─── Schema.org structured data ────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Propertylay',
  description: 'Luxury farmhouses, villas, and premium plots near Delhi NCR.',
  telephone: '+91-99537-68643',
  email: 'contactus@propertylay.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Insignia Tower, Second Floor, Sector 126',
    addressLocality: 'Noida',
    addressCountry: 'IN',
  },
  url: 'https://www.propertylay.com',
};

const stats = [
  { number: '200+', label: 'Happy Clients' },
  { number: '4',    label: 'Premium Projects' },
  { number: '98%',  label: 'Client Satisfaction' },
  { number: '5+',   label: 'Years of Expertise' },
];

const steps = [
  {
    num: '01',
    title: 'Meet Our Agent',
    desc: 'Connect with our expert agents for a personalised consultation tailored to your property goals.',
  },
  {
    num: '02',
    title: 'Choose Location',
    desc: 'Explore handpicked locations combining lifestyle, connectivity, and long-term appreciation.',
  },
  {
    num: '03',
    title: 'Select Property',
    desc: 'Browse curated listings — farmhouses, villas, or residential plots — and find your perfect match.',
  },
  {
    num: '04',
    title: 'Confirm & Invest',
    desc: 'Complete the process with full transparency, legal clarity, and our end-to-end support.',
  },
];

const testimonials = [
  {
    name: 'Neha Gupta',
    review:
      'PropertyLay helped me find my first Premium Luxury Farm property with complete clarity and confidence. Their team explained everything from location to documents in a very simple and transparent manner.',
    role: 'Farm Plot Owner',
  },
  {
    name: 'Rakesh Verma',
    review:
      'I was looking for budget-friendly premium farm plots, and PropertyLay showed me the best options within a very short time. The transparency and support I received were unmatched.',
    role: 'Investor',
  },
  {
    name: 'Sumit Rajput',
    review:
      'From documentation to final possession, PropertyLay delivered top-class service. It genuinely felt like a family member was handling everything for me. Highly professional.',
    role: 'Villa Plot Owner',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* Background image with ken-burns */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://www.propertylay.com/assets/images/banner.webp"
            alt="Luxury farmhouse"
            className="hero-bg w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Pre-heading */}
          <p className="text-[0.75rem] tracking-[0.22em] uppercase text-gold-light mb-5 animate-fade-in">
            Luxury Real Estate · Delhi NCR
          </p>

          {/* Main heading */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 animate-fade-up"
            style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
          >
            Unlock Your<br />
            <em className="not-italic text-gold-light">Dream Property</em>
          </h1>

          {/* Sub */}
          <p
            className="text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            Curated farmhouses, villas, and premium plots that combine luxury,
            greenery, and long-term investment growth.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
          >
            <Link href="/projects/pranna-farm-plots" className="btn-gold">
              Explore Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/enquiry" className="btn-outline">
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[0.65rem] tracking-[0.15em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-gold animate-bounce" style={{ height: '40%' }} />
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">About Propertylay</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-snug text-charcoal mb-6">
              Crafting Spaces for<br />
              <em className="not-italic text-gold">a Balanced Life</em>
            </h2>
            <div className="gold-line-left" />
            <p className="text-muted text-sm leading-relaxed mb-6">
              Founded by <strong className="text-charcoal font-medium">Chirag Vohra</strong>, Propertylay specialises in luxury estate farmhouses, villas, and premium plots. We focus on carefully selected, high-value projects that combine luxury, greenery, and long-term growth potential.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Whether you want a peaceful weekend escape or a secure long-term investment, we guide you with complete transparency and deep market expertise.
            </p>
            <Link href="/about-us" className="btn-outline-dark">
              Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>

          {/* Image grid */}
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://www.propertylay.com/assets/images/g1.webp"
                alt="Luxury property"
                className="w-full h-52 object-cover"
              />
              <img
                src="https://www.propertylay.com/assets/images/g2.webp"
                alt="Premium plot"
                className="w-full h-52 object-cover mt-6"
              />
              <img
                src="https://www.propertylay.com/assets/images/g3.webp"
                alt="Farmhouse"
                className="w-full h-52 object-cover -mt-6"
              />
              <img
                src="https://www.propertylay.com/assets/images/g4.webp"
                alt="Villa plot"
                className="w-full h-52 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────── */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">Our Portfolio</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
                Featured Projects
              </h2>
              <div className="gold-line mt-4" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="property-card h-80">
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="overlay" />
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[0.65rem] tracking-[0.12em] uppercase bg-gold text-white px-3 py-1">
                        {project.category}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[0.7rem] tracking-wide text-white/60 mb-1 flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        </svg>
                        {project.location}
                      </p>
                      <h3 className="font-display text-2xl font-light text-white mb-1">{project.name}</h3>
                      <p className="text-sm text-white/60 mb-4">{project.tagline}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gold-light font-medium text-sm">{project.price}</span>
                        <span className="text-[0.7rem] tracking-wide text-white/50 group-hover:text-white transition-colors flex items-center gap-1">
                          View Details
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="text-center border-r border-white/10 last:border-r-0 px-4">
                  <div className="stat-number">{s.number}</div>
                  <p className="text-[0.72rem] tracking-[0.14em] uppercase text-white/40 mt-2">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────── */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">How It Works</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
                Four Steps to Your Property
              </h2>
              <div className="gold-line mt-4" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="relative">
                  {/* Number */}
                  <div className="font-display text-6xl font-light text-gold/15 mb-4 leading-none">
                    {step.num}
                  </div>
                  {/* Gold dot */}
                  <div className="w-10 h-px bg-gold mb-5" />
                  <h3 className="font-display text-xl font-medium text-charcoal mb-3">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  {/* Connector line (not on last) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gold/20 -z-10" style={{ width: 'calc(100% - 2rem)' }} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH BANNER CTA ───────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://www.propertylay.com/assets/images/banner3.webp"
          alt="Luxury farmland"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <Reveal>
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
            <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold-light mb-4">Limited Availability</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-snug mb-6">
              Your Perfect Plot is<br />Waiting for You
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-10">
              Our projects sell fast. Book a free consultation with our property experts today and secure your preferred location before it's gone.
            </p>
            <Link href="/enquiry" className="btn-gold">
              Book Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">What Clients Say</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
                Client Reviews
              </h2>
              <div className="gold-line mt-4" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="bg-white p-8 border-b-2 border-gold">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-gold fill-gold" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  {/* Quote mark */}
                  <div className="font-display text-5xl text-gold/20 leading-none mb-2">"</div>
                  <p className="text-sm text-muted leading-relaxed mb-6">{t.review}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-cream">
                    <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-xs font-medium text-gold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">{t.name}</p>
                      <p className="text-[0.7rem] text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────── */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-5">
              Feel Free to<br />Contact Us Anytime
            </h2>
            <div className="gold-line-left" />
            <p className="text-sm text-muted leading-relaxed mb-8">
              Have a property in mind, or just exploring your options? Our team is available Monday – Saturday, 10 AM to 7 PM. We respond to every enquiry within 4 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: 'phone', label: '+91 99537 68643', href: 'tel:+919953768643' },
                { icon: 'mail',  label: 'contactus@propertylay.com', href: 'mailto:contactus@propertylay.com' },
                { icon: 'map',   label: 'Sector 126, Noida — Insignia Tower, 2nd Floor', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
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
                  <span className="text-sm text-muted group-hover:text-charcoal transition-colors pt-2.5">{item.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
