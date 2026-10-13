"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ServicesPage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen text-slate-900">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/50 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {lang === "ar" ? "القدرات الهندسية الشاملة" : "Turnkey Execution"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.services.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.services.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-100/80 via-teal-50 to-emerald-50 border border-emerald-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {lang === "ar" ? "هل لديك استفسار هندسي لمشروعك القادم؟" : "Require Technical Scoping for an Upcoming Tender?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {lang === "ar"
                ? "يقدم مهندسونا دراسات الأحمال الحرارية وحسابات BIM والاستشارات الميكانيكية والكهربائية المتكاملة."
                : "Our engineering technical office delivers early-stage thermal calculations, BIM constructability reviews, and compliant tender submissions."}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shrink-0 shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            <span>{t.nav.requestConsultation}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
