"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { sectorsData } from "@/data/sectors";
import { companyProfile } from "@/data/company";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { PromoVideoModal } from "@/components/PromoVideoModal";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building,
  Cpu,
  Sparkles,
  Play,
  Film,
} from "lucide-react";

export default function HomePage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-arch-950 text-arch-200">
      {/* =========================================================
          1. HERO SECTION - LUXURY MIDNIGHT NAVY & BLUEPRINT MESH
      ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-arch-950 via-arch-900 to-arch-950 overflow-hidden border-b border-arch-800">
        {/* Architectural Background Imagery with Deep Navy Filter */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/the-gate-tower.jpg"
            alt="Elite Engineering Landmark"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 filter contrast-125 brightness-95 scale-102"
          />
          {/* Multi-layered cinematic gradient overlays (not black - rich midnight navy) */}
          <div className="absolute inset-0 bg-gradient-to-r from-arch-950 via-arch-950/90 to-arch-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-arch-950 via-transparent to-arch-950/80" />

          {/* Technical Blueprint Engineering Grid */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid-md opacity-35 pointer-events-none" />

          {/* Ambient Radial Lighting Glow (Emerald & Oceanic Cyan) */}
          <div className="absolute top-1/4 start-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 end-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/35 text-brand-300 text-xs sm:text-sm font-bold tracking-wide shadow-lg backdrop-blur-md animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Headlines */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              {t.hero.headline}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-brand-400">
                {t.hero.subheadline}
              </span>
            </h1>

            <p className="pt-2 text-base sm:text-xl text-arch-300 leading-relaxed max-w-2xl font-normal">
              {t.hero.description}
            </p>
          </div>

          {/* Primary, Secondary, & Video CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-4 rounded-xl text-sm sm:text-base font-bold bg-brand-500 hover:bg-brand-400 text-white shadow-xl shadow-brand-500/30 transition-all hover:shadow-brand-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-arch-900/90 hover:bg-arch-850 text-brand-300 border border-brand-500/40 shadow-xl backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-brand-500/20 group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-brand-500 text-arch-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <Play className="w-3.5 h-3.5 ps-0.5 fill-current" />
              </div>
              <span>{lang === "ar" ? "شاهد الفيلم الدعائي (2:00 د)" : "Watch Corporate Film (2:00)"}</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-arch-850/80 hover:bg-arch-800 text-white border border-arch-700/80 shadow-lg backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand-500/50"
            >
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </div>

          {/* Stat Pillars Banner - Luminous Glass Cards */}
          <div className="w-full pt-10 sm:pt-14 mt-4 border-t border-arch-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {companyProfile.stats.map((st, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1.5 p-5 rounded-2xl bg-arch-900/80 border border-arch-750/70 shadow-xl backdrop-blur-xl hover:border-brand-500/50 hover:bg-arch-850/80 transition-all group"
              >
                <span className="text-2xl sm:text-4xl font-black text-brand-400 font-sans tracking-tight font-mono group-hover:text-brand-300 transition-colors">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm text-arch-300 font-medium leading-snug">
                  {lang === "ar" ? st.labelAr : st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CORPORATE INTRODUCTION & CLASS 1 CREDENTIALS
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-arch-900 border-b border-arch-800 relative bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.home.aboutSectionSubtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {t.home.aboutSectionTitle}
              </h2>

              <p className="text-sm sm:text-base text-arch-300 leading-relaxed">
                {t.home.aboutDescription1}
              </p>

              <p className="text-sm sm:text-base text-arch-300 leading-relaxed">
                {t.home.aboutDescription2}
              </p>

              {/* Pillars checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-arch-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{lang === "ar" ? "اعتماد وزارة البلديات والإسكان (الدرجة الأولى)" : "MOMRAH Certified Class 1 Contractor"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-arch-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{lang === "ar" ? "تنسيق هندسي كامل بنظام الـ BIM LOD 500" : "100% BIM LOD 500 Clash Resolution"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-arch-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{lang === "ar" ? "خبرة هندسية متوارثة لأكثر من 35 عاماً" : "35+ Years Proven Multi-National Legacy"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-arch-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{lang === "ar" ? "التزام تام بكود البناء السعودي SBC و NFPA" : "Full SBC & NFPA Regulatory Compliance"}</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <span>{t.home.aboutCta}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual: MOMRAH Class 1 Certificate Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-arch-850/90 border border-brand-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden group backdrop-blur-xl">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-500 via-teal-400 to-emerald-400" />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[11px] font-bold text-brand-400 uppercase tracking-wider block mb-1">
                      {lang === "ar" ? "الاعتماد الرسمي بالمملكة" : "Government Accreditation"}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {lang === "ar" ? "شهادة تصنيف الدرجة الأولى" : "MOMRAH Class 1 Classification"}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative w-full h-52 rounded-xl bg-arch-950 border border-arch-750 overflow-hidden mb-5 shadow-inner">
                  <Image
                    src="/images/certificates/classification-momrah-class1.jpg"
                    alt="MOMRAH Class 1 Certificate"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top filter contrast-110 group-hover:scale-102 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 start-3">
                    <span className="px-2.5 py-1 rounded bg-arch-900/90 text-[11px] font-mono font-bold text-brand-300 border border-arch-700 shadow-md">
                      Cert No: 2025002625
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-arch-300 border-t border-arch-750/70 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-arch-400">{lang === "ar" ? "مجال التشييد والبناء:" : "Building & Construction:"}</span>
                    <span className="font-bold text-white">{lang === "ar" ? "الدرجة الأولى (تقييم 82 / BBB+)" : "Class 1 (Score 82 / BBB+)"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-arch-400">{lang === "ar" ? "التشغيل والصيانة:" : "Operation & Maintenance:"}</span>
                    <span className="font-bold text-white">{lang === "ar" ? "الدرجة الأولى (تقييم 89.75 / BBB+)" : "Class 1 (Score 89.75 / BBB+)"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-arch-400">{lang === "ar" ? "صلاحية الاعتماد:" : "Accreditation Validity:"}</span>
                    <span className="font-mono font-bold text-brand-400">17/03/2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED PROJECTS PORTFOLIO GRID
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-arch-950 border-b border-arch-800 relative bg-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                {t.home.featuredProjectsSubtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.home.featuredProjectsTitle}
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-arch-900 border border-arch-750 hover:border-brand-500 text-white transition-all shadow-md hover:bg-arch-850"
            >
              <span>{t.home.viewAllProjects}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. CORE ENGINEERING SERVICES & CAPABILITIES
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-arch-900 border-b border-arch-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
              {t.home.servicesSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.home.servicesTitle}
            </h2>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed">
              {t.home.servicesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-arch-850 hover:bg-arch-800 text-white border border-arch-700 transition-colors shadow-md hover:border-brand-500/50"
            >
              <span>{t.home.viewAllServices}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. BIM TECHNOLOGY & VIRTUAL DESIGN CONSTRUCTION
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-arch-950 border-b border-arch-800 relative overflow-hidden bg-dots">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 start-1/3 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: BIM Rendering */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden bg-arch-900 border border-arch-750 shadow-2xl group">
                <div className="relative w-full h-72 sm:h-96">
                  <Image
                    src="/assets/BIM-2880w-BQ4SgD8G.jpg"
                    alt="BIM 3D MEP Coordination"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-950 via-arch-950/30 to-transparent" />
                </div>
                <div className="p-6 bg-arch-900 border-t border-arch-800">
                  <div className="flex items-center justify-between text-xs text-arch-300 font-semibold">
                    <span className="text-brand-400 font-bold">LOD 300 – 500 Modeling</span>
                    <span className="font-mono text-arch-400">Revit · Navisworks · ISO 19650</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content: BIM Advantage */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>{t.home.bimSubtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {t.home.bimTitle}
              </h2>

              <p className="text-sm sm:text-base text-arch-300 leading-relaxed">
                {t.home.bimText1}
              </p>

              <p className="text-sm sm:text-base text-arch-300 leading-relaxed">
                {t.home.bimText2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-arch-900 border border-arch-750 shadow-md flex flex-col gap-1">
                  <span className="text-2xl font-black text-brand-400 font-sans font-mono">0</span>
                  <span className="text-xs text-arch-200 font-semibold">
                    {lang === "ar" ? "تعارضات ميدانية متبقية عند بدء التركيب" : "Outstanding Field Clashes on Site"}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-arch-900 border border-arch-750 shadow-md flex flex-col gap-1">
                  <span className="text-2xl font-black text-brand-400 font-sans font-mono">-25%</span>
                  <span className="text-xs text-arch-200 font-semibold">
                    {lang === "ar" ? "توفير في هدر المواد والجدول الزمني" : "Schedule Compression & Material Savings"}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/bim"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25 transition-all"
                >
                  <span>{t.home.learnMoreBim}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. WHY CHOOSE Elite
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-arch-900 border-b border-arch-800 relative bg-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
              {t.home.whyEliteSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.home.whyEliteTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-arch-850/80 border border-arch-750 shadow-xl flex flex-col gap-3 backdrop-blur-md hover:border-brand-500/40 hover:bg-arch-800 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.home.strength1Title}
              </h3>
              <p className="text-xs sm:text-sm text-arch-300 leading-relaxed">
                {t.home.strength1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-arch-850/80 border border-arch-750 shadow-xl flex flex-col gap-3 backdrop-blur-md hover:border-brand-500/40 hover:bg-arch-800 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.home.strength2Title}
              </h3>
              <p className="text-xs sm:text-sm text-arch-300 leading-relaxed">
                {t.home.strength2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-arch-850/80 border border-arch-750 shadow-xl flex flex-col gap-3 backdrop-blur-md hover:border-brand-500/40 hover:bg-arch-800 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.home.strength3Title}
              </h3>
              <p className="text-xs sm:text-sm text-arch-300 leading-relaxed">
                {t.home.strength3Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-arch-850/80 border border-arch-750 shadow-xl flex flex-col gap-3 backdrop-blur-md hover:border-brand-500/40 hover:bg-arch-800 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold font-mono">
                04
              </div>
              <h3 className="text-lg font-bold text-white">
                {t.home.strength4Title}
              </h3>
              <p className="text-xs sm:text-sm text-arch-300 leading-relaxed">
                {t.home.strength4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. SECTORS OF OPERATION OVERVIEW
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-arch-950 border-b border-arch-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                {t.home.sectorsSubtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2">
                {t.home.sectorsTitle}
              </h2>
            </div>
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-400 hover:text-brand-300"
            >
              <span>{lang === "ar" ? "استعراض كافة القطاعات" : "Explore All Sectors"}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorsData.map((sector) => {
              const title = lang === "ar" ? sector.titleAr : sector.title;
              const sub = lang === "ar" ? sector.subtitleAr : sector.subtitle;
              return (
                <Link
                  key={sector.id}
                  href={`/sectors`}
                  className="group relative rounded-2xl overflow-hidden bg-arch-900 border border-arch-750 p-6 flex flex-col justify-end min-h-[260px] hover:border-brand-500/60 transition-all shadow-xl"
                >
                  <Image
                    src={sector.image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top opacity-55 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-950 via-arch-950/50 to-transparent" />

                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-arch-300 leading-relaxed line-clamp-2">
                      {sub}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. CLOSING EXECUTIVE CTA BANNER - MIDNIGHT NAVY & GLOWING AURA
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-arch-900 to-arch-950 text-white relative overflow-hidden border-t border-arch-800">
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-brand-500/15 border border-brand-500/35 flex items-center justify-center text-brand-400 shadow-xl backdrop-blur-md">
            <Building className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t.home.ctaBannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-arch-300 leading-relaxed max-w-2xl font-normal">
            {t.home.ctaBannerSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-brand-500 hover:bg-brand-400 text-white shadow-xl shadow-brand-500/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.home.ctaContactBtn}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2-Minute Corporate Video Showcase Modal */}
      <PromoVideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </div>
  );
}
