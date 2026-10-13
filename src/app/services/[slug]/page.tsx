"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/lib/language-context";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  FileCheck2,
  Award,
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, lang, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  const title = lang === "ar" ? service.titleAr : service.title;
  const desc = lang === "ar" ? service.fullDescAr : service.fullDesc;
  const capabilities = lang === "ar" ? service.keyCapabilitiesAr : service.keyCapabilities;
  const deliverables = lang === "ar" ? service.deliverablesAr : service.deliverables;
  const standards = lang === "ar" ? service.standardsAr : service.standards;

  const linkedProjects = projectsData.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="flex flex-col w-full bg-arch-950 min-h-screen text-arch-200 relative overflow-hidden">
      {/* Background blueprint grid & ambient auras */}
      <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-35" />
      <div className="absolute top-10 right-1/4 w-[600px] h-[350px] bg-brand-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Breadcrumb strip */}
      <div className="relative z-10 bg-arch-900/80 border-b border-arch-750/70 py-3.5 px-4 sm:px-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-arch-400">
          <Link href="/" className="hover:text-brand-400 transition-colors">
            {t.nav.home}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-arch-600" />
          <Link href="/services" className="hover:text-brand-400 transition-colors">
            {t.nav.services}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-arch-600" />
          <span className="text-brand-400 font-bold truncate max-w-xs">{title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative z-10 py-20 sm:py-28 border-b border-arch-750/60 overflow-hidden bg-gradient-to-b from-arch-900/60 via-arch-950 to-arch-950">
        {service.coverImage && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={service.coverImage}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover object-center filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-arch-950 via-arch-950/80 to-transparent" />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arch-850/90 border border-brand-500/30 text-brand-400 text-xs font-mono tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "المجالات الهندسية المعتمدة" : "Core Engineering Discipline"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
              {desc}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Technical Scope & Deliverables */}
      <section className="relative z-10 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            {/* Scope of Work */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2.5">
                <FileCheck2 className="w-6 h-6 text-brand-400" />
                <span>{t.services.scopeTitle}</span>
              </h2>
              <div className="space-y-3">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/40 shadow-sm flex items-start gap-3.5 text-xs sm:text-sm text-arch-200 backdrop-blur-xs transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-brand-400" />
                <span>{t.services.deliverablesTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/30 shadow-sm flex flex-col gap-1.5 text-xs sm:text-sm text-arch-200 backdrop-blur-xs transition-colors"
                  >
                    <span className="font-mono text-brand-400 font-bold text-xs tracking-wider">
                      PHASE 0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Linked Projects */}
            {linkedProjects.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
                  {t.services.relatedProjectsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {linkedProjects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Standards & Direct Inquiry Form */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Standards & Certifications */}
            <div className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 space-y-4 shadow-xl backdrop-blur-md">
              <h4 className="text-xs font-bold text-brand-400 tracking-wider uppercase border-b border-arch-750/60 pb-3 font-mono">
                {t.services.standardsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-arch-850 border border-brand-500/30 text-xs font-mono font-bold text-brand-300"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Fast Inquiry Component */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">
                {t.services.inquireService}
              </h4>
              <ContactForm preselectedService={service.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
