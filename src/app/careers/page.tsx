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
    <div className="flex flex-col w-full bg-slate-50 min-h-screen text-slate-900">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/50 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {lang === "ar" ? "رأس المال البشري والكفاءات" : "Human Capital & Culture"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.careers.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.careers.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Why Join APEC */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {lang === "ar" ? "بيئة هندسية رائدة" : "Elite Engineering Rigor"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "العمل في أعقد المشاريع الكهروميكانيكية وتطبيقات الـ BIM ومحطات المياه المبردة الكبرى بالمملكة."
                : "Deliver complex MEP, supertall coastal skyscrapers, and district chilled water infrastructure."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {lang === "ar" ? "تمكين الكفاءات الوطنية" : "Saudi Vision 2030 Talent"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "نلتزم بنسبة توطين مرتفعة (الفئة الخضراء في منصة قوى) وبرامج تدريب متقدمة للمهندسين السعوديين."
                : "Proud Platinum-tier Saudization rating on Qiwa, empowering national engineering leaders."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {lang === "ar" ? "مسار مهني واعد" : "Global Career Trajectory"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "فرص حقيقية للترقي المهني والعمل مع قيادات تنفيذية صاحبة خبرات دولية تمتد لأكثر من 35 عاماً."
                : "Mentorship from board directors and technical chiefs with 35+ years of cross-continental delivery."}
            </p>
          </div>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {t.careers.vacanciesSubtitle}
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              {t.careers.vacanciesTitle}
            </h2>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
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
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/60 transition-all shadow-sm hover:shadow-md space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                        {dept}
                      </span>
                      <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold">
                        {exp}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                  </div>

                  <button
                    onClick={() => handleOpenModal(job)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all shrink-0 self-start sm:self-auto cursor-pointer"
                  >
                    <span>{t.careers.applyNow}</span>
                    <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {desc}
                </p>

                {/* Requirements */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-2">
                    {lang === "ar" ? "المؤهلات والمتطلبات الرئيسية:" : "Key Qualifications:"}
                  </span>
                  {reqs.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-xl rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 end-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {selectedJob
                ? (lang === "ar" ? selectedJob.titleAr : selectedJob.title)
                : t.careers.generalApplicationTitle}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {lang === "ar" ? "يرجى تعبئة بياناتك المهنية أدناه." : "Please fill in your application details below."}
            </p>

            {success ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {lang === "ar" ? "تم استلام طلبك بنجاح!" : "Application Received!"}
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {t.careers.formSuccess}
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white"
                >
                  {lang === "ar" ? "إغلاق النافذة" : "Close Window"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.careers.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-emerald-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.careers.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.careers.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      dir="ltr"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.careers.formPosition} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.careers.formExperience}
                    </label>
                    <input
                      type="text"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 7 Years in MEP"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.careers.formCoverLetter}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-emerald-600 resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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
