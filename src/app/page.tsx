"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { sectorsData } from "@/data/sectors";
import { companyProfile } from "@/data/company";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import {
  ShieldCheck,
  Award,
  TrendingUp,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building,
  Phone,
  Compass,
  Cpu,
  Workflow,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50 text-slate-900">
      {/* =========================================================
          1. HERO SECTION - LUMINOUS, RADIANT, DAYTIME ARCHITECTURAL
      ========================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white via-emerald-50/40 to-slate-50 overflow-hidden border-b border-slate-200">
        {/* Architectural Background Imagery with Soft Light Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/the-gate-tower.jpg"
            alt="APEC Engineering Landmark"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 filter contrast-110 brightness-115 scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white/60" />

          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #059669 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide shadow-xs animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Headlines */}
          <div className="max-w-4xl space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
              {t.hero.headline}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500">
                {t.hero.subheadline}
              </span>
            </h1>

            <p className="pt-3 text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t.hero.description}
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-4 rounded-xl text-sm sm:text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 transition-all hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 sm:px-9 py-4 rounded-xl text-sm sm:text-base font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </div>

          {/* Stat Pillars Banner */}
          <div className="w-full pt-10 sm:pt-14 mt-4 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {companyProfile.stats.map((st, idx) => (
              <div key={idx} className="flex flex-col gap-1 p-4 rounded-xl bg-white/80 border border-slate-200/60 shadow-xs backdrop-blur-sm">
                <span className="text-2xl sm:text-4xl font-black text-emerald-700 font-sans tracking-tight">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
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
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.home.aboutSectionSubtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {t.home.aboutSectionTitle}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.home.aboutDescription1}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.home.aboutDescription2}
              </p>

              {/* Pillars checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === "ar" ? "اعتماد وزارة البلديات والإسكان (الدرجة الأولى)" : "MOMRAH Certified Class 1 Contractor"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === "ar" ? "تنسيق هندسي كامل بنظام الـ BIM LOD 500" : "100% BIM LOD 500 Clash Resolution"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === "ar" ? "خبرة هندسية متوارثة لأكثر من 35 عاماً" : "35+ Years Proven Multi-National Legacy"}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === "ar" ? "التزام تام بكود البناء السعودي SBC و NFPA" : "Full SBC & NFPA Regulatory Compliance"}</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>{t.home.aboutCta}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual: MOMRAH Class 1 Certificate Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-white to-emerald-50/50 border border-slate-200 p-6 sm:p-8 shadow-xl overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400" />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      {lang === "ar" ? "الاعتماد الرسمي بالمملكة" : "Government Accreditation"}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {lang === "ar" ? "شهادة تصنيف الدرجة الأولى" : "MOMRAH Class 1 Classification"}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative w-full h-52 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden mb-5 shadow-xs">
                  <Image
                    src="/images/certificates/classification-momrah-class1.jpg"
                    alt="MOMRAH Class 1 Certificate"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 start-3">
                    <span className="px-2.5 py-1 rounded bg-white/95 text-[11px] font-mono font-bold text-emerald-800 border border-slate-200 shadow-xs">
                      Cert No: 2025002625
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{lang === "ar" ? "مجال التشييد والبناء:" : "Building & Construction:"}</span>
                    <span className="font-bold text-slate-900">{lang === "ar" ? "الدرجة الأولى (تقييم 82 / BBB+)" : "Class 1 (Score 82 / BBB+)"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{lang === "ar" ? "التشغيل والصيانة:" : "Operation & Maintenance:"}</span>
                    <span className="font-bold text-slate-900">{lang === "ar" ? "الدرجة الأولى (تقييم 89.75 / BBB+)" : "Class 1 (Score 89.75 / BBB+)"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{lang === "ar" ? "صلاحية الاعتماد:" : "Accreditation Validity:"}</span>
                    <span className="font-mono font-bold text-emerald-700">17/03/2027</span>
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
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                {t.home.featuredProjectsSubtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                {t.home.featuredProjectsTitle}
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white border border-slate-300 hover:border-emerald-500 text-slate-800 transition-all shadow-xs hover:bg-slate-50"
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
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {t.home.servicesSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {t.home.servicesTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: BIM Rendering */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
                <div className="relative w-full h-72 sm:h-96">
                  <Image
                    src="/assets/BIM-2880w-BQ4SgD8G.jpg"
                    alt="BIM 3D MEP Coordination"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
                <div className="p-6 bg-white border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
                    <span className="text-emerald-700 font-bold">LOD 300 – 500 Modeling</span>
                    <span className="font-mono">Revit · Navisworks · ISO 19650</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content: BIM Advantage */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>{t.home.bimSubtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {t.home.bimTitle}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.home.bimText1}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.home.bimText2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-1">
                  <span className="text-2xl font-black text-emerald-700 font-sans">0</span>
                  <span className="text-xs text-slate-700 font-semibold">
                    {lang === "ar" ? "تعارضات ميدانية متبقية عند بدء التركيب" : "Outstanding Field Clashes on Site"}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-1">
                  <span className="text-2xl font-black text-emerald-700 font-sans">-25%</span>
                  <span className="text-xs text-slate-700 font-semibold">
                    {lang === "ar" ? "توفير في هدر المواد والجدول الزمني" : "Schedule Compression & Material Savings"}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/bim"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all"
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
          6. WHY CHOOSE APEC
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {t.home.whyApecSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {t.home.whyApecTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.home.strength1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.strength1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.home.strength2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.strength2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.home.strength3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.strength3Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.home.strength4Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.home.strength4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. SECTORS OF OPERATION OVERVIEW
      ========================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                {t.home.sectorsSubtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2">
                {t.home.sectorsTitle}
              </h2>
            </div>
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
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
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 p-6 flex flex-col justify-end min-h-[260px] hover:border-emerald-500 transition-all shadow-md"
                >
                  <Image
                    src={sector.image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top opacity-55 group-hover:scale-105 group-hover:opacity-70 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
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
          8. CLOSING EXECUTIVE CTA BANNER - CHEERFUL & VIBRANT
      ========================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white relative overflow-hidden shadow-inner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center text-white shadow-lg backdrop-blur-sm">
            <Building className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t.home.ctaBannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed max-w-2xl font-medium">
            {t.home.ctaBannerSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-white text-emerald-800 hover:bg-emerald-50 shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.home.ctaContactBtn}</span>
              <ArrowIcon className="w-4 h-4 text-emerald-800" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
