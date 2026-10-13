# APEC For Contracting — Corporate Website
### شركة أيبك للمقاولات | الموقع الرسمي

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-emerald)](LICENSE)

> 🌐 **Live Public Website (Online Now):** [https://49432a3f4ca242.lhr.life](https://49432a3f4ca242.lhr.life)  
> 📦 **GitHub Repository:** [https://github.com/alyketkat93-create/apec-website](https://github.com/alyketkat93-create/apec-website)  
> ⚡ **Deploy to Vercel (1-Click):** [https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falyketkat93-create%2Fapec-website](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falyketkat93-create%2Fapec-website)

---

## 🏛️ Overview | نبذة عن المشروع

Production-grade corporate web application for **APEC For Contracting (شركة أيبك للمقاولات)**, an accredited Class 1 General & MEP Contractor based in Riyadh, Saudi Arabia. Backed by over 35 years of engineering heritage and certified BIM execution.

The platform is designed with a radiant daylight architectural design system (clean whites, light slates, and vivid emerald green brand accents), complete with full **bilingual (Arabic RTL & English LTR)** support across all 17 pages.

---

## ✨ Features | المميزات الرئيسية

- **Bilingual Experience (عربي / English)**: Instant language switching with complete RTL and LTR typographic alignment.
- **Radiant Architectural Aesthetic**: Modern, luminous corporate identity without gloomy dark palettes.
- **Projects Portfolio**: Live filtering by country (Saudi Arabia, Kuwait, Egypt/Heritage), sector, and engineering discipline, with detailed technical dossiers.
- **Engineering Disciplines**: Comprehensive catalogs for HVAC Chilled Water, Firefighting, Electrical MV/LV, Plumbing, BIM VDC, and Turnkey MEP.
- **BIM 3D/4D/5D Practice**: Interactive clash-detection and digital lifecycle visualization.
- **Executive Leadership**: Verified engineering founders (Eng. Tamim Badawi & Alaa Badawi).
- **Executive Portal (`/admin`)**: Internal management dashboard for project inquiries and recruitment.
- **Interactive Forms**: Verified client consultation and career application modals connected to Next.js API endpoints.

---

## 🚀 Getting Started | التشغيل المحلي

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/alyketkat93-create/apec-website.git
cd apec-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
# Compile optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Deploy to Vercel | النشر عبر Vercel

The fastest way to deploy this Next.js full-stack application online:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/alyketkat93-create/apec-website)

1. Connect your GitHub account on [Vercel](https://vercel.com).
2. Import `alyketkat93-create/apec-website`.
3. Click **Deploy**. Vercel will automatically build and publish the site with a free `*.vercel.app` domain and free SSL certificate.

---

## 📁 Project Structure

```
├── public/                 # Static assets, official logo, project photography
│   └── images/
│       ├── logo.png
│       ├── projects/
│       └── team/
├── src/
│   ├── app/                # Next.js 14 App Router routes
│   │   ├── about/          # Corporate Profile & Leadership
│   │   ├── admin/          # Executive Portal Dashboard
│   │   ├── bim/            # BIM & Virtual Design Construction
│   │   ├── careers/        # Vacancies & Application Flow
│   │   ├── contact/        # Headquarters, Map & Inquiries
│   │   ├── projects/       # Projects Catalog & [slug] Dossiers
│   │   ├── qhset/          # Quality, Safety & Environment
│   │   ├── sectors/        # Industry Verticals
│   │   ├── services/       # Services & [slug] Specifications
│   │   └── api/            # Serverless API routes
│   ├── components/         # Reusable UI components
│   ├── data/               # Structured corporate, project, & team data
│   ├── lib/                # Language context & dual translations
│   └── types/              # TypeScript interface definitions
└── tailwind.config.ts      # Custom design tokens & emerald brand theme
```

---

## 📄 License

Proprietary © APEC For Contracting. All rights reserved.
