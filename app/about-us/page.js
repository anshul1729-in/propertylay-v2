import Reveal from '@/components/Reveal';
import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Propertylay — founded by Chirag Vohra, specialising in luxury farmhouses, villas, and premium plots near Delhi NCR.',
};

const values = [
  { title: 'Transparency',  desc: 'Every deal is handled with full legal clarity. No hidden costs, no surprises — ever.' },
  { title: 'Curation',      desc: 'We only work with projects we genuinely believe in. Quality over quantity, always.' },
  { title: 'Long-term View',desc: 'We think like investors. Every property we recommend has strong appreciation potential.' },
  { title: 'Client First',  desc: 'Our job is not done at possession. We stay with you through every stage of your journey.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <img
          src="https://www.propertylay.com/assets/images/banner2.webp"
          alt="About Propertylay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 text-center text-white">
          <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">Our Story</p>
          <h1 className="font-display text-5xl font-light">About Us</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-snug mb-5">
              Curated Living,<br />
              <em className="not-italic text-gold">Elevated Experience</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-sm text-muted leading-relaxed mb-4">
              Propertylay was founded by <strong className="text-charcoal font-medium">Chirag Vohra</strong> with a singular mission — to make luxury real estate accessible, transparent, and genuinely rewarding for every client.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Unlike traditional brokers who chase volume, we focus on a small number of carefully vetted projects. Every plot, farmhouse, and villa in our portfolio has been assessed for location quality, legal clarity, infrastructure, and growth potential before we present it to a single client.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-8">
              Our clients range from first-time buyers seeking a weekend retreat, to seasoned investors looking for high-appreciation assets in the Delhi NCR belt. We guide both with the same commitment: your interests above all else.
            </p>
            <Link href="/enquiry" className="btn-outline-dark">
              Talk to Us
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <img
                src="https://www.propertylay.com/assets/images/banner.webp"
                alt="Luxury property"
                className="w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-7 text-white">
                <div className="font-display text-4xl font-light">5+</div>
                <p className="text-[0.72rem] tracking-[0.12em] uppercase mt-1 text-white/70">Years of Excellence</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-3">What Drives Us</p>
              <h2 className="font-display text-4xl font-light text-charcoal">Our Core Values</h2>
              <div className="gold-line mt-4" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="bg-white p-7 border-t-2 border-gold">
                  <h3 className="font-display text-xl font-medium text-charcoal mb-3">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-center">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.18em] uppercase text-gold mb-4">Ready to invest?</p>
          <h2 className="font-display text-4xl font-light text-white mb-8">
            Let's Find Your Perfect Property
          </h2>
          <Link href="/enquiry" className="btn-gold">
            Book a Free Consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
