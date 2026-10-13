"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { sectorsData } from "@/data/sectors";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function SectorsPage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen text-slate-900">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/50 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {lang === "ar" ? "الأسواق والمجالات التخصصية" : "Market Verticals"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {lang === "ar" ? "قطاعات العمل والبيئات العمرانية" : "Industries & Built Environments"}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "خبرات هندسية متخصصة تصمم وتنفذ لتلائم المتطلبات الصارمة لكل قطاع من المستشفيات إلى الأبراج السحابية."
                : "Specialized engineering capabilities tailored to the distinct operational rigor of healthcare, cultural, high-rise, commercial, and industrial facilities."}
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Showcase List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {sectorsData.map((sector, index) => {
          const title = lang === "ar" ? sector.titleAr : sector.title;
          const desc = lang === "ar" ? sector.descriptionAr : sector.description;
          const subtitle = lang === "ar" ? sector.subtitleAr : sector.subtitle;
          const disciplines = lang === "ar" ? sector.coreDisciplinesAr : sector.coreDisciplines;
          const linkedProjects = projectsData.filter((p) =>
            sector.keyProjects.includes(p.slug)
          );

          const isReversed = index % 2 === 1;

          return (
            <div
              key={sector.id}
              className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className={`lg:col-span-5 relative ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                    <Image
                      src={sector.image}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
                    {subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {desc}
                  </p>

                  {/* Core disciplines */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-700 block mb-2">
                      {lang === "ar" ? "التخصصات الرئيسية في هذا القطاع:" : "Key Sector Disciplines:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {disciplines.map((d, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/projects?sector=${sector.title}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all cursor-pointer"
                    >
                      <span>{lang === "ar" ? "عرض مشاريع هذا القطاع" : "View Sector Projects"}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Selected Projects in this Sector */}
              {linkedProjects.length > 0 && (
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-4">
                    {lang === "ar" ? "نماذج من مشاريعنا في هذا القطاع:" : "Sample Delivered Projects in Sector:"}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {linkedProjects.map((p) => (
                      <ProjectCard key={p.id} project={p} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
