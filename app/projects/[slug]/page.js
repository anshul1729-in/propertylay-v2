import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, getProjectBySlug } from '@/data/projects';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Propertylay`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end">
        <img
          src={project.coverImage}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <span className="text-[0.65rem] tracking-[0.14em] uppercase bg-gold text-white px-3 py-1 inline-block mb-4">
            {project.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-light text-white mb-2">
            {project.name}
          </h1>
          <p className="text-white/60 text-sm flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            {project.location}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left - main content */}
          <div className="lg:col-span-2 space-y-10">
            <Reveal>
              <div className="flex gap-6 flex-wrap">
                {[
                  { label: 'Price',  value: project.price },
                  { label: 'Area',   value: project.area },
                  { label: 'Status', value: project.status },
                ].map((item) => (
                  <div key={item.label} className="bg-cream px-6 py-4 min-w-[140px]">
                    <p className="text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-1">{item.label}</p>
                    <p className="font-display text-xl font-medium text-charcoal">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl font-light text-charcoal mb-4">About This Project</h2>
              <div className="w-10 h-px bg-gold mb-5" />
              <p className="text-muted text-sm leading-relaxed">{project.description}</p>
            </Reveal>

            {/* Highlights */}
            <Reveal>
              <h3 className="font-display text-2xl font-light text-charcoal mb-5">Key Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-muted">
                    <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Gallery */}
            <Reveal>
              <h3 className="font-display text-2xl font-light text-charcoal mb-5">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} ${i + 1}`}
                    className="w-full h-40 object-cover hover:opacity-90 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right - sticky enquiry */}
          <div>
            <Reveal>
              <div className="sticky top-24 bg-charcoal p-7">
                <h3 className="font-display text-2xl font-light text-white mb-1">Interested?</h3>
                <p className="text-white/40 text-xs mb-6 tracking-wide uppercase">Book a free site visit</p>
                <ContactForm dark />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl font-light text-charcoal mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex gap-4 bg-white p-4 hover:shadow-md transition-shadow">
                <img src={p.coverImage} alt={p.name} className="w-28 h-24 object-cover shrink-0" />
                <div className="py-1">
                  <span className="text-[0.65rem] tracking-wide uppercase text-gold">{p.category}</span>
                  <h4 className="font-display text-lg font-light text-charcoal mt-1 mb-1 group-hover:text-gold transition-colors">{p.name}</h4>
                  <p className="text-xs text-muted">{p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
