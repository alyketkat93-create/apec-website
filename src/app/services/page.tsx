"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, ArrowLeft, ShieldCheck, Wrench } from "lucide-react";

export default function ServicesPage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full bg-arch-950 min-h-screen text-arch-200 relative overflow-hidden">
      {/* Ambient Lighting & Technical Blueprint Texture */}
      <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-brand-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Header Banner */}
      <section className="relative z-10 py-20 sm:py-28 border-b border-arch-750/60 bg-arch-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arch-850/90 border border-brand-500/30 text-brand-400 text-xs font-mono tracking-widest uppercase shadow-sm">
              <Wrench className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "القدرات الهندسية الشاملة" : "Turnkey Engineering Capabilities"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {t.services.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
              {t.services.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-arch-900/90 via-arch-850/90 to-arch-900/90 border border-arch-750/80 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center md:text-start relative z-10">
            <div className="inline-flex items-center gap-2 text-brand-400 font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>{lang === "ar" ? "استشارات تقنية وهندسية مبكرة" : "Early Technical Advisory"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
              {lang === "ar" ? "هل لديك استفسار هندسي لمشروعك القادم؟" : "Require Technical Scoping for an Upcoming Tender?"}
            </h3>
            <p className="text-xs sm:text-sm text-arch-300 max-w-xl leading-relaxed">
              {lang === "ar"
                ? "يقدم مهندسونا دراسات الأحمال الحرارية وحسابات BIM والاستشارات الميكانيكية والكهربائية المتكاملة وفق الكود السعودي SBC."
                : "Our engineering technical office delivers early-stage thermal calculations, BIM constructability reviews, and SBC compliant tender submissions."}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-brand-500 hover:bg-brand-400 text-arch-950 shrink-0 shadow-lg shadow-brand-500/25 cursor-pointer transition-all hover:scale-[1.02] relative z-10"
          >
            <span>{t.nav.requestConsultation}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
