"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { useLanguage } from "@/lib/language-context";
import { MapPin, Building, Clock, ArrowRight, ArrowLeft, Tag } from "lucide-react";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const title = lang === "ar" ? project.titleAr : project.title;
  const client = lang === "ar" ? project.clientAr : project.client;
  const location = lang === "ar" ? project.locationAr : project.location;
  const sector = lang === "ar" ? project.sectorAr : project.sector;
  const scope = lang === "ar" ? project.scopeAr : project.scope;

  return (
    <div className="group relative flex flex-col bg-arch-900 border border-arch-750/70 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-brand-500/50 hover:bg-arch-850/80 transition-all duration-300">
      {/* Cover Image Container with Dark Cinematic Tone */}
      <div className="relative w-full h-56 sm:h-64 bg-arch-950 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arch-950 via-arch-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Badges on Top */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-bold bg-arch-950/85 text-arch-200 backdrop-blur-md border border-arch-700/80 shadow-md">
            <Tag className="w-3 h-3 text-brand-400" />
            <span>{sector}</span>
          </span>

          {project.contractValue && (
            <span className="inline-flex items-center px-3 py-1 rounded-lg text-[11px] font-bold bg-brand-500 text-white shadow-md font-mono">
              {project.contractValue}
            </span>
          )}
        </div>

        {project.inheritedFromASA && (
          <div className="absolute bottom-2.5 start-3">
            <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-arch-200 bg-arch-950/90 px-2.5 py-0.5 rounded-md border border-arch-700 backdrop-blur-md shadow-xs">
              {lang === "ar" ? "سابقة أعمال الشركاء" : "Heritage Portfolio"}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
        <div>
          {/* Location & Client meta */}
          <div className="flex items-center gap-4 text-xs text-arch-400 mb-2">
            <div className="flex items-center gap-1 truncate">
              <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            {project.duration && (
              <div className="flex items-center gap-1 shrink-0 font-mono">
                <Clock className="w-3.5 h-3.5 text-arch-500 shrink-0" />
                <span>{lang === "ar" ? project.durationAr : project.duration}</span>
              </div>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-2 mb-2">
            <Link href={`/projects/${project.slug}`}>
              {title}
            </Link>
          </h3>

          {/* Client */}
          <div className="flex items-center gap-1.5 text-xs text-brand-400 font-semibold mb-3">
            <Building className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span className="truncate">{client}</span>
          </div>

          {/* Scope excerpt */}
          <p className="text-xs text-arch-300 leading-relaxed line-clamp-2">
            {scope}
          </p>
        </div>

        {/* Card Footer: Detail Link */}
        <div className="pt-4 border-t border-arch-800 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.disciplines.slice(0, 2).map((disc, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-arch-800 text-brand-300 border border-arch-700"
              >
                {lang === "ar" && project.disciplinesAr ? project.disciplinesAr[idx] : disc}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-400 group-hover:text-brand-300 transition-colors"
          >
            <span>{lang === "ar" ? "تفاصيل" : "Dossier"}</span>
            <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
