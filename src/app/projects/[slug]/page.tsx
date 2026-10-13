"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/lib/language-context";
import { ProjectCard } from "@/components/ProjectCard";
import {
  MapPin,
  Building,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Award,
} from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const title = lang === "ar" ? project.titleAr : project.title;
  const client = lang === "ar" ? project.clientAr : project.client;
  const location = lang === "ar" ? project.locationAr : project.location;
  const sector = lang === "ar" ? project.sectorAr : project.sector;
  const scope = lang === "ar" ? project.scopeAr : project.scope;
  const description = lang === "ar" ? project.descriptionAr : project.description;
  const summary = lang === "ar" ? project.summaryAr : project.summary;
  const duration = lang === "ar" ? project.durationAr : project.duration;
  const technicalFeatures =
    lang === "ar" && project.keyTechnicalFeaturesAr
      ? project.keyTechnicalFeaturesAr
      : project.keyTechnicalFeatures || [];

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && (p.sector === project.sector || p.country === project.country))
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* Breadcrumb strip */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            {t.nav.home}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/projects" className="hover:text-emerald-700 transition-colors">
            {t.nav.projects}
          </Link>
          <ChevronIcon className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-700 font-bold truncate max-w-xs">{title}</span>
        </div>
      </div>

      {/* Hero Visual Section */}
      <section className="relative min-h-[48vh] sm:min-h-[56vh] flex items-end bg-gradient-to-t from-slate-100 to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-35 filter contrast-105 brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-xs">
              {sector}
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white text-slate-800 border border-slate-200 shadow-xs">
              {project.status === "Completed"
                ? lang === "ar" ? "مشروع منجز بالكامل" : "Completed Delivery"
                : lang === "ar" ? "قيد التنفيذ" : "Active Contract"}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl">
            {title}
          </h1>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {project.inheritedFromASA && (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-3 shadow-xs">
                <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed font-medium">{t.projects.heritageNotice}</p>
              </div>
            )}

            {/* Overview Narrative */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {lang === "ar" ? "نظرة عامة على المشروع" : "Project Overview"}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                {summary}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Technical Highlights */}
            {technicalFeatures.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                  {t.projects.keyFeatures}
                </h3>
                <div className="space-y-3">
                  {technicalFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Executed Disciplines */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {t.projects.disciplines}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.disciplines.map((disc, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800"
                  >
                    {lang === "ar" && project.disciplinesAr ? project.disciplinesAr[idx] : disc}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {lang === "ar" ? "معرض صور المشروع" : "Project Visual Gallery"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm"
                    >
                      <Image
                        src={img}
                        alt={`${title} - Gallery image ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column: Project Metadata Sheet */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col gap-6 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {t.projects.projectDetailsTitle}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {t.projects.client}
                  </span>
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <Building className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{client}</span>
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {t.projects.location}
                  </span>
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{location}</span>
                  </span>
                </div>

                {project.contractValue && (
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                      {t.projects.value}
                    </span>
                    <span className="text-base font-black text-emerald-700 font-sans">
                      {project.contractValue}
                    </span>
                  </div>
                )}

                {duration && (
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                      {t.projects.duration}
                    </span>
                    <span className="font-semibold text-slate-800 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{duration}</span>
                    </span>
                  </div>
                )}

                {project.year && (
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                      {t.projects.year}
                    </span>
                    <span className="font-semibold text-slate-800 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{project.year}</span>
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {t.projects.scope}
                  </span>
                  <span className="text-xs text-slate-600 leading-relaxed block">
                    {scope}
                  </span>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full text-center py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all block cursor-pointer"
                >
                  {t.projects.inquireAboutSimilar}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Carousel / Grid */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-black text-slate-900 mb-8">
              {t.projects.relatedProjects}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
