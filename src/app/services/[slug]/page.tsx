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
    <div className="flex flex-col w-full bg-slate-50 min-h-screen text-slate-900">
      {/* Breadcrumb strip */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            {t.nav.home}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-emerald-700 transition-colors">
            {t.nav.services}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-700 font-bold truncate max-w-xs">{title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-slate-50 border-b border-slate-200 overflow-hidden">
        {service.coverImage && (
          <div className="absolute inset-0 opacity-15">
            <Image
              src={service.coverImage}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover object-center filter contrast-110 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent" />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "ar" ? "المجالات الهندسية المعتمدة" : "Core Engineering Discipline"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Technical Scope & Deliverables */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            {/* Scope of Work */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileCheck2 className="w-6 h-6 text-emerald-600" />
                <span>{t.services.scopeTitle}</span>
              </h2>
              <div className="space-y-3">
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>{t.services.deliverablesTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-1 text-xs text-slate-700"
                  >
                    <span className="font-mono text-emerald-700 font-bold">0{idx + 1}.</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Linked Projects */}
            {linkedProjects.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
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
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-3">
                {t.services.standardsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {standards.map((std, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Fast Inquiry Component */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
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
