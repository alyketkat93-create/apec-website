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
    <div className="flex flex-col w-full bg-slate-50 min-h-screen text-slate-800">
      {/* Top Banner */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>{t.admin.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-semibold">
                  v1.0 CMS
                </span>
              </h1>
              <p className="text-xs text-slate-500">{t.admin.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-slate-700 hover:text-emerald-700 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{lang === "ar" ? "معاينة الموقع" : "View Live Site"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block">{t.admin.totalProjects}</span>
              <span className="text-2xl font-bold text-slate-900 font-mono">{projectsList.length}</span>
            </div>
            <FolderKanban className="w-7 h-7 text-emerald-600 opacity-80" />
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block">{t.admin.newInquiries}</span>
              <span className="text-2xl font-bold text-emerald-700 font-mono">{inquiries.length}</span>
            </div>
            <MessageSquare className="w-7 h-7 text-emerald-600 opacity-80" />
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block">{t.admin.openVacancies}</span>
              <span className="text-2xl font-bold text-slate-900 font-mono">{jobVacancies.length}</span>
            </div>
            <Briefcase className="w-7 h-7 text-slate-400 opacity-80" />
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block">{t.admin.crStatus}</span>
              <span className="text-sm font-bold text-emerald-700 font-mono">Class 1 (Active)</span>
            </div>
            <ShieldCheck className="w-7 h-7 text-emerald-600 opacity-80" />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-5 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "projects"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            {t.admin.tabProjects} ({projectsList.length})
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`px-5 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "inquiries"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            {t.admin.tabInquiries} ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab("careers")}
            className={`px-5 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === "careers"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-slate-500 hover:text-slate-900"
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
                <Search className="w-4 h-4 absolute start-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter projects..."
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  className="w-full ps-9 pe-4 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                onClick={() => setShowAddProjectModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>{t.admin.addProject}</span>
              </button>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <table className="w-full text-start text-xs">
                <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-start">Project Title</th>
                    <th className="p-3 text-start">Client</th>
                    <th className="p-3 text-start">Location</th>
                    <th className="p-3 text-start">Sector</th>
                    <th className="p-3 text-start">Value</th>
                    <th className="p-3 text-end">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {projectsList
                    .filter((p) => p.title.toLowerCase().includes(projectSearch.toLowerCase()))
                    .map((proj) => (
                      <tr key={proj.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 font-semibold text-slate-900">{proj.title}</td>
                        <td className="p-3 text-slate-600">{proj.client}</td>
                        <td className="p-3 text-slate-500">{proj.location}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-medium">
                            {proj.sector}
                          </span>
                        </td>
                        <td className="p-3 font-mono text-emerald-700 font-bold">{proj.contractValue || "-"}</td>
                        <td className="p-3 text-end">
                          <Link
                            href={`/projects/${proj.slug}`}
                            target="_blank"
                            className="text-xs text-slate-500 hover:text-emerald-700 inline-flex items-center gap-1"
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
        )}

        {/* TAB 2: CLIENT INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="space-y-4">
            {inquiries.length > 0 ? (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">{inq.name}</span>
                        <span className="text-xs text-emerald-700 font-medium">
                          {inq.company} · {inq.serviceInterest}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {new Date(inq.date).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      <div>
                        <span className="text-slate-400">Email: </span>
                        <a href={`mailto:${inq.email}`} className="text-emerald-700 underline font-medium">
                          {inq.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400">Phone: </span>
                        <a href={`tel:${inq.phone}`} className="text-slate-800 font-medium">
                          {inq.phone}
                        </a>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <span className="text-slate-500 block mb-1 font-semibold">Message & Scope:</span>
                      <p className="leading-relaxed whitespace-pre-wrap">{inq.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-slate-500 rounded-xl bg-white border border-slate-200 shadow-sm">
                <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <span>No client inquiries recorded yet. Inquiries submitted via the contact form will appear here.</span>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CAREERS */}
        {activeTab === "careers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobVacancies.map((vac) => (
              <div key={vac.id} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{vac.title}</h3>
                    <span className="text-xs text-emerald-700 font-medium">{vac.department} · {vac.location}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    {vac.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{vac.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal: Add New Project */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Project Record</h3>
            <form onSubmit={handleAddProject} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Project Title (EN) *</label>
                <input
                  type="text"
                  required
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Project Title (AR)</label>
                <input
                  type="text"
                  value={newProject.titleAr}
                  onChange={(e) => setNewProject({ ...newProject, titleAr: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newProject.client}
                    onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Contract Value</label>
                  <input
                    type="text"
                    placeholder="e.g. 10,000,000 SAR"
                    value={newProject.contractValue}
                    onChange={(e) => setNewProject({ ...newProject, contractValue: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Scope of Work</label>
                <textarea
                  rows={3}
                  value={newProject.scope}
                  onChange={(e) => setNewProject({ ...newProject, scope: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors"
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
