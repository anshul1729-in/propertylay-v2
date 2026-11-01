# PropertyLay — Commercial Real Estate Web Platform

> **"A production commercial real estate web platform built with Next.js 14 App Router, dynamic listing portfolios, automated lead capture, and sub-second Core Web Vitals."**

[![Next.js](https://img.shields.io/badge/Next.js-14_App_Router-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌟 Key Engineering Features

- **Next.js 14 App Router Architecture:** Leverages React Server Components and nested route layouts to decouple static brand assets from dynamic real estate property portfolios.
- **Sub-Second Core Web Vitals:** Optimized image loading pipelines, modern web font configurations, and component splitting achieving sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).
- **Dynamic Inquiry & Lead Capture Workflows:** Responsive client-side forms integrated with defensive input validation, enquiry telemetry, and automated contact dispatches.
- **Search Engine Discoverability:** Implements programmatic dynamic XML sitemaps (`sitemap.js`), dynamic robots rules (`robots.js`), and open graph semantic metadata for high Google search indexing.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Styling:** Tailwind CSS, PostCSS
- **SEO & Performance:** Next.js Metadata API, dynamic sitemaps, responsive layout

---

## 📂 Project Structure

```text
propertylay-v2/
├── app/
│   ├── about-us/          # Corporate company profile
│   ├── contact/           # Office locations & direct contact channels
│   ├── enquiry/           # Dynamic property booking & inquiry pipeline
│   ├── projects/          # Commercial & residential listing catalog
│   ├── globals.css        # Tailwind styling & animations
│   ├── layout.js          # Root layout shell & metadata headers
│   ├── page.js            # High-conversion landing page
│   ├── robots.js          # Search engine crawler policies
│   └── sitemap.js         # Automated XML sitemap generator
├── components/            # Header, footer, property cards, inquiry modals
├── data/
│   └── projects.js        # Structured listing data schema
├── public/                # Static assets & brand media
└── tailwind.config.js     # Design theme tokens
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)

### 1. Clone & Install
```bash
git clone https://github.com/anshul1729-in/propertylay-v2.git
cd propertylay-v2
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```
