"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function ProjectsPage() {
  const { t, lang } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "value" | "name">("newest");

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project) => {
        // Country filter
        if (selectedCountry !== "all" && project.country !== selectedCountry) {
          return false;
        }

        // Sector filter
        if (selectedSector !== "all" && project.sector !== selectedSector) {
          return false;
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = project.title.toLowerCase().includes(q) || project.titleAr.includes(q);
          const matchClient = project.client.toLowerCase().includes(q) || project.clientAr.includes(q);
          const matchLocation = project.location.toLowerCase().includes(q) || project.locationAr.includes(q);
          const matchScope = project.scope.toLowerCase().includes(q) || project.scopeAr.includes(q);
          if (!matchTitle && !matchClient && !matchLocation && !matchScope) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return (lang === "ar" ? a.titleAr : a.title).localeCompare(
            lang === "ar" ? b.titleAr : b.title
          );
        }
        if (sortBy === "value") {
          const valA = a.contractValue ? parseInt(a.contractValue.replace(/[^0-9]/g, "")) || 0 : 0;
          const valB = b.contractValue ? parseInt(b.contractValue.replace(/[^0-9]/g, "")) || 0 : 0;
          return valB - valA;
        }
        return (parseInt(b.year || "2020") || 0) - (parseInt(a.year || "2020") || 0);
      });
  }, [searchQuery, selectedCountry, selectedSector, sortBy, lang]);

  const sectorsList = useMemo(() => {
    return Array.from(new Set(projectsData.map((p) => p.sector)));
  }, []);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCountry("all");
    setSelectedSector("all");
    setSortBy("newest");
  };

  return (
    <div className="flex flex-col w-full bg-arch-950 min-h-screen text-arch-200">
      {/* Header Banner with Blueprint Background */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-arch-950 via-arch-900 to-arch-950 border-b border-arch-800 relative bg-blueprint overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-radial-glow opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
              {lang === "ar" ? "سابقة الأعمال الموثقة" : "Verified Credentials"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.projects.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed">
              {t.projects.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Interactive Filters */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {/* Filter Controls Bar */}
        <div className="bg-arch-900 border border-arch-750/80 rounded-2xl p-4 sm:p-6 mb-10 shadow-2xl space-y-4 backdrop-blur-xl">
          {/* Top Row: Search input + Sorting */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute start-3.5 top-1/2 -translate-y-1/2 text-arch-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.searchPlaceholder}
                className="w-full ps-10 pe-4 py-2.5 rounded-xl bg-arch-950/90 border border-arch-700/80 text-white placeholder:text-arch-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-arch-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-arch-300 font-bold whitespace-nowrap">
                {t.projects.sortBy}:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl bg-arch-950/90 border border-arch-700/80 text-white text-xs font-semibold focus:outline-none focus:border-brand-500"
              >
                <option value="newest" className="bg-arch-950 text-white">{t.projects.sortNewest}</option>
                <option value="value" className="bg-arch-950 text-white">{t.projects.sortValue}</option>
                <option value="name" className="bg-arch-950 text-white">{t.projects.sortName}</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Pill Filters (Country & Sector) */}
          <div className="pt-3 border-t border-arch-800 flex flex-wrap items-center justify-between gap-4">
            {/* Country Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setSelectedCountry("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCountry === "all"
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                    : "bg-arch-800 text-arch-300 hover:bg-arch-750 hover:text-white border border-arch-700"
                }`}
              >
                {t.projects.filterAllCountries}
              </button>
              <button
                onClick={() => setSelectedCountry("sa")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCountry === "sa"
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                    : "bg-arch-800 text-arch-300 hover:bg-arch-750 hover:text-white border border-arch-700"
                }`}
              >
                🇸🇦 {t.projects.filterKSA}
              </button>
              <button
                onClick={() => setSelectedCountry("kw")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCountry === "kw"
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                    : "bg-arch-800 text-arch-300 hover:bg-arch-750 hover:text-white border border-arch-700"
                }`}
              >
                🇰🇼 {t.projects.filterKuwait}
              </button>
              <button
                onClick={() => setSelectedCountry("eg")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCountry === "eg"
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                    : "bg-arch-800 text-arch-300 hover:bg-arch-750 hover:text-white border border-arch-700"
                }`}
              >
                🇪🇬 {t.projects.filterEgypt}
              </button>
            </div>

            {/* Sector Dropdown & Clear */}
            <div className="flex items-center gap-3">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-arch-950/90 border border-arch-700/80 text-white text-xs font-semibold focus:outline-none focus:border-brand-500"
              >
                <option value="all" className="bg-arch-950 text-white">{t.projects.filterAllSectors}</option>
                {sectorsList.map((sec) => (
                  <option key={sec} value={sec} className="bg-arch-950 text-white">
                    {sec}
                  </option>
                ))}
              </select>

              {(searchQuery || selectedCountry !== "all" || selectedSector !== "all") && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-brand-400 hover:text-brand-300 font-bold underline underline-offset-2"
                >
                  {t.projects.clearFilters}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Counter Strip */}
        <div className="flex items-center justify-between text-xs text-arch-400 mb-6">
          <span>
            {t.projects.showingCount}{" "}
            <strong className="text-white font-mono">{filteredProjects.length}</strong>{" "}
            {t.projects.ofTotal}{" "}
            <strong className="text-white font-mono">{projectsData.length}</strong>{" "}
            {t.projects.projectsCount}
          </span>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl bg-arch-900 border border-arch-800 p-8 flex flex-col items-center gap-4 shadow-xl">
            <SlidersHorizontal className="w-12 h-12 text-arch-500" />
            <h3 className="text-lg font-bold text-white">
              {t.projects.noResultsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-arch-300 max-w-md">
              {t.projects.noResultsText}
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-brand-500 text-white hover:bg-brand-400 shadow-md"
            >
              {t.projects.clearFilters}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
