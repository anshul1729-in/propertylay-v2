'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Projects',
    href: '#',
    children: [
      { label: 'Pranna Farm Plots',      href: '/projects/pranna-farm-plots' },
      { label: 'Graama Villa Plots',     href: '/projects/graama-villa-plots' },
      { label: 'Sunview City',           href: '/projects/sunview-city' },
      { label: 'Sportsville Farms',      href: '/projects/sportsville-farms' },
    ],
  },
  { label: 'Enquiry',    href: '/enquiry' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://www.propertylay.com/assets/images/logo.jpg"
              alt="Propertylay"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-[0.82rem] font-medium tracking-wide uppercase transition-colors ${
                      scrolled ? 'text-charcoal hover:text-gold' : 'text-white hover:text-gold-light'
                    }`}
                  >
                    {link.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white shadow-lg border-t-2 border-gold py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-[0.82rem] text-charcoal hover:text-gold hover:bg-cream transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[0.82rem] font-medium tracking-wide uppercase transition-colors ${
                    scrolled ? 'text-charcoal hover:text-gold' : 'text-white hover:text-gold-light'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <a
            href="tel:+919953768643"
            className="hidden lg:flex items-center gap-2 btn-gold text-xs py-3 px-5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 99537 68643
          </a>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-cream overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className="w-full text-left py-3 text-sm font-medium text-charcoal tracking-wide uppercase flex justify-between items-center"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="pl-4 pb-2 space-y-1 border-l-2 border-gold ml-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm text-muted hover:text-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-charcoal tracking-wide uppercase hover:text-gold transition-colors border-b border-cream last:border-0"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="tel:+919953768643"
            className="block mt-4 btn-gold text-center text-xs py-3"
          >
            Call: +91 99537 68643
          </a>
        </div>
      </div>
    </header>
  );
}
