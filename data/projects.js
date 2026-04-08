export const projects = [
  {
    slug: 'pranna-farm-plots',
    name: 'Pranna Farm Plots',
    tagline: 'Premium farmland in a pristine natural setting',
    category: 'Farm Plots',
    location: 'Greater Noida West',
    price: '₹ 25 Lac onwards',
    area: '200 – 500 sq. yards',
    status: 'Open for Bookings',
    coverImage: 'https://www.propertylay.com/assets/images/banner.webp',
    gallery: [
      'https://www.propertylay.com/assets/images/banner.webp',
      'https://www.propertylay.com/assets/images/g1.webp',
      'https://www.propertylay.com/assets/images/g2.webp',
    ],
    highlights: [
      'RERA approved project',
      'Gated community with 24/7 security',
      'Landscaped green corridors',
      'Internal road network with street lighting',
      'Clubhouse & recreational amenities',
    ],
    description:
      'Pranna Farm Plots offer a rare opportunity to own a piece of lush farmland just minutes from the city. Designed for those who seek a peaceful retreat without sacrificing convenience, every plot is carefully demarcated with proper registry, legal clearance, and surrounded by planned greenery.',
  },
  {
    slug: 'graama-villa-plots',
    name: 'Graama Villa Plots',
    tagline: 'Expansive villa plots with countryside character',
    category: 'Villa Plots',
    location: 'Yamuna Expressway',
    price: '₹ 35 Lac onwards',
    area: '300 – 800 sq. yards',
    status: 'Open for Bookings',
    coverImage: 'https://www.propertylay.com/assets/images/banner2.webp',
    gallery: [
      'https://www.propertylay.com/assets/images/banner2.webp',
      'https://www.propertylay.com/assets/images/g3.webp',
      'https://www.propertylay.com/assets/images/g4.webp',
    ],
    highlights: [
      'Wide frontage plots',
      'Vastu-compliant layout',
      'Ready for immediate construction',
      'Township-level amenities',
      'Close to Yamuna Expressway Industrial Development Authority',
    ],
    description:
      'Graama Villa Plots combine the charm of countryside living with modern infrastructure. Set along the Yamuna Expressway corridor — one of the fastest appreciating real estate belts in North India — these plots offer both lifestyle and strong investment returns.',
  },
  {
    slug: 'sunview-city',
    name: 'Sunview City',
    tagline: 'Residential plots in a planned urban township',
    category: 'Residential Plots',
    location: 'NH-24, Hapur',
    price: '₹ 12 Lac onwards',
    area: '100 – 300 sq. yards',
    status: 'Open for Bookings',
    coverImage: 'https://www.propertylay.com/assets/images/banner3.webp',
    gallery: [
      'https://www.propertylay.com/assets/images/banner3.webp',
      'https://www.propertylay.com/assets/images/g5.webp',
      'https://www.propertylay.com/assets/images/services1.webp',
    ],
    highlights: [
      'Affordable entry point',
      'Approved layout with clear titles',
      'Underground electricity & water supply',
      'Parks & community spaces',
      'Excellent connectivity via NH-24',
    ],
    description:
      'Sunview City is a thoughtfully planned residential township that makes premium living accessible. With clear legal titles, underground utilities, and a strategic location on the NH-24 corridor, it is ideal for first-time buyers and savvy investors alike.',
  },
  {
    slug: 'sportsville-farms',
    name: 'Sportsville Farms',
    tagline: 'Farm plots with integrated sports & wellness amenities',
    category: 'Farm Plots',
    location: 'Sohna Road, Gurugram',
    price: '₹ 45 Lac onwards',
    area: '500 – 2000 sq. yards',
    status: 'Limited Inventory',
    coverImage: 'https://www.propertylay.com/assets/images/banner4.webp',
    gallery: [
      'https://www.propertylay.com/assets/images/banner4.webp',
      'https://www.propertylay.com/assets/images/g6.webp',
      'https://www.propertylay.com/assets/images/g7.webp',
    ],
    highlights: [
      'Cricket ground & football field',
      'Jogging & cycling tracks',
      'Organic farming plots',
      'Weekend villa construction allowed',
      'Swimming pool & spa in clubhouse',
    ],
    description:
      'Sportsville Farms is unlike any other farm plot project in the NCR. Combining the serenity of farmland ownership with a world-class sports and wellness complex, it is the ultimate weekend destination that you can also call home. Limited plots available.',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
