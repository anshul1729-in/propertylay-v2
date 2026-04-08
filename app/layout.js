import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Propertylay — Luxury Farmhouses, Villas & Premium Plots',
    template: '%s | Propertylay',
  },
  description:
    'Propertylay specialises in luxury farmhouses, villas, and premium plots near Delhi NCR. Curated high-value projects combining luxury, greenery, and long-term growth.',
  keywords: ['luxury farmhouse', 'villa plots', 'farm plots Noida', 'premium plots Delhi NCR', 'real estate investment'],
  openGraph: {
    title: 'Propertylay — Luxury Farmhouses, Villas & Premium Plots',
    description: 'Curated luxury real estate. Farmhouses, villas & premium plots near Delhi NCR.',
    url: 'https://www.propertylay.com',
    siteName: 'Propertylay',
    images: [{ url: 'https://www.propertylay.com/assets/images/banner.webp', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Propertylay — Luxury Farmhouses, Villas & Premium Plots',
    description: 'Curated luxury real estate near Delhi NCR.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#B8973A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
