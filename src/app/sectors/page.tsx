"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { sectorsData } from "@/data/sectors";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, ArrowLeft, Building2 } from "lucide-react";

export default function SectorsPage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full bg-arch-950 min-h-screen text-arch-200 relative overflow-hidden">
      {/* Background blueprint grid & ambient auras */}
      <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-brand-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Header Banner */}
      <section className="relative z-10 py-20 sm:py-28 border-b border-arch-750/60 bg-arch-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arch-850/90 border border-brand-500/30 text-brand-400 text-xs font-mono tracking-widest uppercase shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "الأسواق والمجالات التخصصية" : "Market Verticals & Built Environments"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {lang === "ar" ? "قطاعات العمل والبيئات العمرانية" : "Industries & Built Environments"}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "خبرات هندسية متخصصة تصمم وتنفذ لتلائم المتطلبات الصارمة لكل قطاع من المستشفيات إلى الأبراج السحابية."
                : "Specialized engineering capabilities tailored to the distinct operational rigor of healthcare, cultural, high-rise, commercial, and industrial facilities."}
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Showcase List */}
      <section className="relative z-10 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
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
              className="rounded-3xl bg-arch-900/90 border border-arch-750/70 p-6 sm:p-10 shadow-2xl hover:border-brand-500/50 transition-all overflow-hidden backdrop-blur-md relative"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className={`lg:col-span-5 relative ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-arch-850 border border-arch-750/80 shadow-xl group">
                    <Image
                      src={sector.image}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arch-950/80 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block">
                    {subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {title}
                  </h2>
                  <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
                    {desc}
                  </p>

                  {/* Core disciplines */}
                  <div className="pt-2">
                    <span className="text-xs font-mono font-bold text-arch-400 block mb-3 uppercase tracking-wider">
                      {lang === "ar" ? "التخصصات الرئيسية في هذا القطاع:" : "Key Sector Disciplines:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {disciplines.map((d, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-arch-850 border border-brand-500/30 text-xs font-mono font-bold text-brand-300"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/projects?sector=${sector.title}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-400 text-arch-950 shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>{lang === "ar" ? "عرض مشاريع هذا القطاع" : "View Sector Projects"}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Selected Projects in this Sector */}
              {linkedProjects.length > 0 && (
                <div className="mt-10 pt-8 border-t border-arch-750/60">
                  <span className="text-xs font-mono font-bold text-arch-400 uppercase tracking-wider block mb-5">
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
