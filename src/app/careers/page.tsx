"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { jobVacancies } from "@/data/careers";
import { JobVacancy } from "@/types";
import {
  CheckCircle2,
  Send,
  Loader2,
  X,
  AlertCircle,
  Briefcase,
  Users,
} from "lucide-react";

export default function CareersPage() {
  const { t, lang } = useLanguage();

  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverNote: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleOpenModal = (job?: JobVacancy) => {
    setSelectedJob(job || null);
    setFormData({
      ...formData,
      position: job ? (lang === "ar" ? job.titleAr : job.title) : "",
    });
    setSuccess(false);
    setError("");
    setModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      setError(lang === "ar" ? "يرجى تعبئة كافة الحقول المطلوبة." : "Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          coverNote: "",
        });
      } else {
        const d = await res.json();
        setError(d.error || (lang === "ar" ? "حدث خطأ أثناء الإرسال" : "Submission failed"));
      }
    } catch (err) {
      setError(lang === "ar" ? "تعذر الاتصال بالخادم." : "Network error.");
    } finally {
      setSubmitting(false);
    }
  };

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
              <Users className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "رأس المال البشري والكفاءات" : "Human Capital & Culture"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {t.careers.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
              {t.careers.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Why Join APEC */}
      <section className="relative z-10 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-arch-750/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-3xl bg-arch-900/90 border border-arch-750/70 shadow-xl space-y-4 backdrop-blur-md">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold font-mono text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === "ar" ? "بيئة هندسية رائدة" : "Elite Engineering Rigor"}
            </h3>
            <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "العمل في أعقد المشاريع الكهروميكانيكية وتطبيقات الـ BIM ومحطات المياه المبردة الكبرى بالمملكة."
                : "Deliver complex MEP, supertall coastal skyscrapers, and district chilled water infrastructure."}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-arch-900/90 border border-arch-750/70 shadow-xl space-y-4 backdrop-blur-md">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold font-mono text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === "ar" ? "تمكين الكفاءات الوطنية" : "Saudi Vision 2030 Talent"}
            </h3>
            <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "نلتزم بنسبة توطين مرتفعة (الفئة الخضراء في منصة قوى) وبرامج تدريب متقدمة للمهندسين السعوديين."
                : "Proud Platinum-tier Saudization rating on Qiwa, empowering national engineering leaders."}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-arch-900/90 border border-arch-750/70 shadow-xl space-y-4 backdrop-blur-md">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center font-bold font-mono text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === "ar" ? "مسار مهني واعد" : "Global Career Trajectory"}
            </h3>
            <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "فرص حقيقية للترقي المهني والعمل مع قيادات تنفيذية صاحبة خبرات دولية تمتد لأكثر من 35 عاماً."
                : "Mentorship from board directors and technical chiefs with 35+ years of cross-continental delivery."}
            </p>
          </div>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="relative z-10 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-400">
              {t.careers.vacanciesSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              {t.careers.vacanciesTitle}
            </h2>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="px-6 py-3 rounded-xl text-xs font-bold bg-arch-900 border border-arch-750/90 text-arch-200 hover:border-brand-500/40 hover:text-white transition-all shadow-md cursor-pointer"
          >
            {t.careers.generalApplyBtn}
          </button>
        </div>

        <div className="space-y-6">
          {jobVacancies.map((job) => {
            const title = lang === "ar" ? job.titleAr : job.title;
            const dept = lang === "ar" ? job.departmentAr : job.department;
            const exp = lang === "ar" ? job.experienceAr : job.experience;
            const desc = lang === "ar" ? job.descriptionAr : job.description;
            const reqs = lang === "ar" ? job.requirementsAr : job.requirements;

            return (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-3xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/50 transition-all shadow-xl space-y-5 backdrop-blur-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-lg bg-arch-850 border border-brand-500/30 text-brand-300 text-xs font-mono font-bold">
                        {dept}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-arch-850 border border-arch-750/70 text-arch-300 text-xs font-mono">
                        {exp}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
                  </div>

                  <button
                    onClick={() => handleOpenModal(job)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-400 text-arch-950 shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.02] shrink-0 self-start sm:self-auto cursor-pointer"
                  >
                    <span>{t.careers.applyNow}</span>
                    <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
                  {desc}
                </p>

                {/* Requirements */}
                <div className="space-y-2 pt-3 border-t border-arch-750/60">
                  <span className="text-xs font-mono font-bold text-arch-400 block mb-2 uppercase tracking-wider">
                    {lang === "ar" ? "المؤهلات والمتطلبات الرئيسية:" : "Key Qualifications:"}
                  </span>
                  {reqs.map((r, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-arch-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-arch-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl rounded-3xl bg-arch-900 border border-arch-750/90 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 end-5 p-1.5 rounded-lg text-arch-400 hover:text-white hover:bg-arch-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-1">
              {selectedJob
                ? (lang === "ar" ? selectedJob.titleAr : selectedJob.title)
                : t.careers.generalApplicationTitle}
            </h3>
            <p className="text-xs text-arch-400 mb-6">
              {lang === "ar" ? "يرجى تعبئة بياناتك المهنية أدناه." : "Please fill in your application details below."}
            </p>

            {success ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-brand-500/10 border border-brand-500/40 text-brand-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {lang === "ar" ? "تم استلام طلبك بنجاح!" : "Application Received!"}
                </h4>
                <p className="text-xs text-arch-300 max-w-md mx-auto">
                  {t.careers.formSuccess}
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-brand-500 text-arch-950 hover:bg-brand-400"
                >
                  {lang === "ar" ? "إغلاق النافذة" : "Close Window"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono font-bold text-arch-300 mb-1">
                    {t.careers.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-arch-300 mb-1">
                      {t.careers.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-arch-300 mb-1">
                      {t.careers.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      dir="ltr"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-arch-300 mb-1">
                      {t.careers.formPosition} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-arch-300 mb-1">
                      {t.careers.formExperience}
                    </label>
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 7 Years in MEP"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-arch-300 mb-1">
                    {t.careers.formCoverLetter}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-arch-950/80 border border-arch-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500 transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-brand-500 hover:bg-brand-400 disabled:opacity-50 text-arch-950 shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{lang === "ar" ? "جارٍ الإرسال..." : "Submitting..."}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.careers.formSubmit}</span>
                        <Send className="w-4 h-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
