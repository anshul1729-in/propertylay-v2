import { projects } from '@/data/projects';

export default function sitemap() {
  const base = 'https://www.propertylay.com';
  const now  = new Date();

  const staticPages = [
    { url: base,              lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/enquiry`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const projectPages = projects.map((p) => ({
    url:             `${base}/projects/${p.slug}`,
    lastModified:    now,
    changeFrequency: 'weekly',
    priority:        0.9,
  }));

  return [...staticPages, ...projectPages];
}
