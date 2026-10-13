"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { projectsData } from "@/data/projects";
import { companyProfile } from "@/data/company";
import { jobVacancies } from "@/data/careers";
import { Project, ClientInquiry } from "@/types";
import {
  FolderKanban,
  MessageSquare,
  Briefcase,
  ShieldCheck,
  Plus,
  Search,
  ExternalLink,
  Lock,
  Eye,
} from "lucide-react";

export default function AdminPortalPage() {
  const { t, lang } = useLanguage();

  const [activeTab, setActiveTab] = useState<"projects" | "inquiries" | "careers">("projects");
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [projectsList, setProjectsList] = useState<Project[]>(projectsData);
  const [projectSearch, setProjectSearch] = useState("");

  // Simple demo project creation modal state
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    titleAr: "",
    client: "",
    clientAr: "",
    location: "Riyadh, Saudi Arabia",
    locationAr: "الرياض، المملكة العربية السعودية",
    country: "sa" as const,
    sector: "Commercial" as const,
    sectorAr: "المباني التجارية",
    scope: "",
    scopeAr: "",
    contractValue: "",
    status: "Completed" as const,
    statusAr: "مكتمل",
    coverImage: "/images/projects/al-mounsiya.jpg",
  });

  // Fetch inquiries from backend API
  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => {
        if (data.inquiries) {
          setInquiries(data.inquiries);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.client) return;

    const slug = newProject.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const created: Project = {
      ...newProject,
      id: "proj_" + Date.now(),
      slug,
      featured: false,
      galleryImages: [newProject.coverImage],
      disciplines: ["Turnkey MEP", "HVAC"],
      disciplinesAr: ["أعمال MEP متكاملة", "تكييف مركزي"],
      summary: newProject.scope,
      summaryAr: newProject.scopeAr || newProject.scope,
      description: newProject.scope,
      descriptionAr: newProject.scopeAr || newProject.scope,
    };

    setProjectsList([created, ...projectsList]);
    setShowAddProjectModal(false);
    setNewProject({
      title: "",
      titleAr: "",
      client: "",
      clientAr: "",
      location: "Riyadh, Saudi Arabia",
      locationAr: "الرياض، المملكة العربية السعودية",
      country: "sa",
      sector: "Commercial",
      sectorAr: "المباني التجارية",
      scope: "",
      scopeAr: "",
      contractValue: "",
      status: "Completed",
      statusAr: "مكتمل",
      coverImage: "/images/projects/al-mounsiya.jpg",
    });
  };

  return (
    <div className="flex flex-col w-full bg-arch-950 min-h-screen text-arch-200 relative overflow-hidden">
      {/* Background blueprint grid & ambient auras */}
      <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-brand-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Top Banner */}
      <section className="relative z-10 bg-arch-900/80 border-b border-arch-750/70 py-6 px-4 sm:px-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span>{t.admin.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-arch-850 border border-brand-500/30 text-brand-300 font-mono font-semibold">
                  v1.0 CMS
                </span>
              </h1>
              <p className="text-xs text-arch-400 font-mono">{t.admin.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-mono text-arch-300 hover:text-white flex items-center gap-2 px-4 py-2 rounded-xl bg-arch-850 border border-arch-750/70 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "معاينة الموقع" : "View Live Site"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-arch-900/90 border border-arch-750/70 shadow-lg flex items-center justify-between backdrop-blur-md">
            <div>
              <span className="text-xs text-arch-400 block font-mono uppercase">{t.admin.totalProjects}</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">{projectsList.length}</span>
            </div>
            <FolderKanban className="w-8 h-8 text-brand-400 opacity-80" />
          </div>

          <div className="p-5 rounded-2xl bg-arch-900/90 border border-arch-750/70 shadow-lg flex items-center justify-between backdrop-blur-md">
            <div>
              <span className="text-xs text-arch-400 block font-mono uppercase">{t.admin.newInquiries}</span>
              <span className="text-2xl sm:text-3xl font-black text-brand-400 font-mono">{inquiries.length}</span>
            </div>
            <MessageSquare className="w-8 h-8 text-brand-400 opacity-80" />
          </div>

          <div className="p-5 rounded-2xl bg-arch-900/90 border border-arch-750/70 shadow-lg flex items-center justify-between backdrop-blur-md">
            <div>
              <span className="text-xs text-arch-400 block font-mono uppercase">{t.admin.openVacancies}</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">{jobVacancies.length}</span>
            </div>
            <Briefcase className="w-8 h-8 text-arch-500 opacity-80" />
          </div>

          <div className="p-5 rounded-2xl bg-arch-900/90 border border-arch-750/70 shadow-lg flex items-center justify-between backdrop-blur-md">
            <div>
              <span className="text-xs text-arch-400 block font-mono uppercase">{t.admin.crStatus}</span>
              <span className="text-sm font-bold text-brand-400 font-mono">Class 1 (Active)</span>
            </div>
            <ShieldCheck className="w-8 h-8 text-brand-400 opacity-80" />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-arch-750/60 mb-8 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer font-mono ${
              activeTab === "projects"
                ? "border-brand-500 text-brand-400"
                : "border-transparent text-arch-400 hover:text-white"
            }`}
          >
            {t.admin.tabProjects} ({projectsList.length})
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer font-mono ${
              activeTab === "inquiries"
                ? "border-brand-500 text-brand-400"
                : "border-transparent text-arch-400 hover:text-white"
            }`}
          >
            {t.admin.tabInquiries} ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab("careers")}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer font-mono ${
              activeTab === "careers"
                ? "border-brand-500 text-brand-400"
                : "border-transparent text-arch-400 hover:text-white"
            }`}
          >
            {t.admin.tabVacancies} ({jobVacancies.length})
          </button>
        </div>

        {/* TAB 1: PROJECTS MANAGEMENT */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute start-3 top-1/2 -translate-y-1/2 text-arch-400" />
                <input
                  type="text"
                  placeholder="Filter projects..."
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  className="w-full ps-9 pe-4 py-2.5 rounded-xl bg-arch-900 border border-arch-750/80 text-xs text-white placeholder-arch-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <button
                onClick={() => setShowAddProjectModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-500 text-arch-950 hover:bg-brand-400 transition-colors cursor-pointer shadow-lg shadow-brand-500/20"
              >
                <Plus className="w-4 h-4" />
                <span>{t.admin.addProject}</span>
              </button>
            </div>

            <div className="rounded-2xl border border-arch-750/70 bg-arch-900/90 overflow-hidden shadow-xl backdrop-blur-md">
              <div className="overflow-x-auto">
                <table className="w-full text-start text-xs">
                  <thead className="bg-arch-850/90 text-arch-400 font-mono uppercase tracking-wider border-b border-arch-750/70">
                    <tr>
                      <th className="p-3.5 text-start">Project Title</th>
                      <th className="p-3.5 text-start">Client</th>
                      <th className="p-3.5 text-start">Location</th>
                      <th className="p-3.5 text-start">Sector</th>
                      <th className="p-3.5 text-start">Value</th>
                      <th className="p-3.5 text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-arch-750/60 text-arch-300">
                    {projectsList
                      .filter((p) => p.title.toLowerCase().includes(projectSearch.toLowerCase()))
                      .map((proj) => (
                        <tr key={proj.id} className="hover:bg-arch-850/60 transition-colors">
                          <td className="p-3.5 font-bold text-white">{proj.title}</td>
                          <td className="p-3.5 text-arch-300">{proj.client}</td>
                          <td className="p-3.5 text-arch-400">{proj.location}</td>
                          <td className="p-3.5">
                            <span className="px-2.5 py-1 rounded-md bg-arch-850 text-brand-300 border border-brand-500/30 text-[10px] font-mono">
                              {proj.sector}
                            </span>
                          </td>
                          <td className="p-3.5 font-mono text-brand-400 font-bold">{proj.contractValue || "-"}</td>
                          <td className="p-3.5 text-end">
                            <Link
                              href={`/projects/${proj.slug}`}
                              target="_blank"
                              className="text-xs text-brand-400 hover:text-white inline-flex items-center gap-1 font-mono"
                            >
                              <span>View</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CLIENT INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="space-y-4">
            {inquiries.length > 0 ? (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 shadow-xl space-y-4 backdrop-blur-md"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-arch-750/60 pb-3">
                      <div>
                        <span className="text-base font-bold text-white block">{inq.name}</span>
                        <span className="text-xs text-brand-400 font-mono">
                          {inq.company} · {inq.serviceInterest}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-arch-400">
                        {new Date(inq.date).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-arch-300 font-mono">
                      <div>
                        <span className="text-arch-400">Email: </span>
                        <a href={`mailto:${inq.email}`} className="text-brand-400 underline font-medium">
                          {inq.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-arch-400">Phone: </span>
                        <a href={`tel:${inq.phone}`} className="text-white font-medium">
                          {inq.phone}
                        </a>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-arch-850/80 border border-arch-750/70 text-xs text-arch-200">
                      <span className="text-brand-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Message & Scope:</span>
                      <p className="leading-relaxed whitespace-pre-wrap">{inq.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-arch-400 rounded-2xl bg-arch-900/90 border border-arch-750/70 shadow-xl backdrop-blur-md">
                <MessageSquare className="w-10 h-10 text-arch-600 mx-auto mb-3" />
                <span className="text-sm">No client inquiries recorded yet. Inquiries submitted via the contact form will appear here.</span>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CAREERS */}
        {activeTab === "careers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobVacancies.map((vac) => (
              <div key={vac.id} className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 shadow-xl space-y-3 backdrop-blur-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{vac.title}</h3>
                    <span className="text-xs text-brand-400 font-mono">{vac.department} · {vac.location}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-arch-850 text-brand-300 border border-brand-500/30 text-[10px] font-mono font-bold">
                    {vac.status}
                  </span>
                </div>
                <p className="text-xs text-arch-300 leading-relaxed font-normal">{vac.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal: Add New Project */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-arch-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-arch-900 border border-arch-750/90 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-4">Add New Project Record</h3>
            <form onSubmit={handleAddProject} className="space-y-4 text-xs">
              <div>
                <label className="block text-arch-300 font-mono mb-1">Project Title (EN) *</label>
                <input
                  type="text"
                  required
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-arch-300 font-mono mb-1">Project Title (AR)</label>
                <input
                  type="text"
                  value={newProject.titleAr}
                  onChange={(e) => setNewProject({ ...newProject, titleAr: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-arch-300 font-mono mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newProject.client}
                    onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-arch-300 font-mono mb-1">Contract Value</label>
                  <input
                    type="text"
                    placeholder="e.g. 10,000,000 SAR"
                    value={newProject.contractValue}
                    onChange={(e) => setNewProject({ ...newProject, contractValue: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-arch-300 font-mono mb-1">Scope of Work</label>
                <textarea
                  rows={3}
                  value={newProject.scope}
                  onChange={(e) => setNewProject({ ...newProject, scope: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
                />
              </div>
              <div className="flex justify-end gap-2.5 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="px-4 py-2 rounded-xl bg-arch-850 text-arch-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-500 font-bold text-arch-950 hover:bg-brand-400 shadow-md transition-colors"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
