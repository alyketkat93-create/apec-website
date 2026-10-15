"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { servicesData } from "@/data/services";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

export const ContactForm: React.FC<{ preselectedService?: string }> = ({
  preselectedService = "",
}) => {
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: preselectedService || servicesData[0].title,
    projectLocation: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError(lang === "ar" ? "يرجى ملء كافة الحقول الإلزامية المطلوبة." : "Please fill in all mandatory fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
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
          company: "",
          serviceInterest: servicesData[0].title,
          projectLocation: "",
          message: "",
          consent: false,
        });
      } else {
        const data = await res.json();
        setError(data.error || (lang === "ar" ? "حدث خطأ أثناء الإرسال" : "Submission failed"));
      }
    } catch (err) {
      setError(lang === "ar" ? "تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً." : "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-arch-900 border border-arch-750/80 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 via-teal-400 to-emerald-400" />

      {success ? (
        <div className="py-12 text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {t.contact.successTitle}
          </h3>
          <p className="text-sm text-arch-300 max-w-md mx-auto leading-relaxed">
            {t.contact.successText}
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-arch-800 text-white hover:bg-arch-750 border border-arch-700 transition-colors"
          >
            {lang === "ar" ? "إرسال استفسار جديد" : "Submit Another Inquiry"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-arch-300 mb-1.5">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-arch-950/80 border border-arch-700/80 text-xs sm:text-sm text-white placeholder:text-arch-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all"
                placeholder={lang === "ar" ? "المهندس / فهد المقرن" : "Eng. Alexander Vance"}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-arch-300 mb-1.5">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-arch-950/80 border border-arch-700/80 text-xs sm:text-sm text-white placeholder:text-arch-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all"
                placeholder="name@company.com"
              />
            </div>
          </div>

          {/* Row 2: Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-arch-300 mb-1.5">
                {t.contact.phoneLabel}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-arch-950/80 border border-arch-700/80 text-xs sm:text-sm text-white placeholder:text-arch-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all"
                placeholder="+966 5x xxx xxxx"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-arch-300 mb-1.5">
                {t.contact.companyLabel}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-arch-950/80 border border-arch-700/80 text-xs sm:text-sm text-white placeholder:text-arch-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all"
                placeholder={lang === "ar" ? "اسم الشركة أو الجهة المطورة" : "Development Group / Entity"}
              />
            </div>
          </div>

          {/* Row 3: Discipline & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-arch-300 mb-1.5">
                {t.contact.serviceLabel}
              </label>
              <select
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-arch-950/80 border border-arch-700/80 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all"
              >
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title} className="bg-arch-950 text-white">
                    {lang === "ar" ? svc.titleAr : svc.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-arch-300 mb-1.5">
                {t.contact.locationLabel}
              </label>
              <input
                type="text"
                value={formData.projectLocation}
                onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-arch-950/80 border border-arch-700/80 text-xs sm:text-sm text-white placeholder:text-arch-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all"
                placeholder={lang === "ar" ? "الرياض / نيوم / الشرقية / جدة" : "Riyadh / NEOM / Eastern Province"}
              />
            </div>
          </div>

          {/* Scope and Details */}
          <div>
            <label className="block text-xs font-semibold text-arch-300 mb-1.5">
              {t.contact.messageLabel}
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-arch-950/80 border border-arch-700/80 text-xs sm:text-sm text-white placeholder:text-arch-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all resize-none"
              placeholder={
                lang === "ar"
                  ? "يرجى توضيح نطاق المشروع المطلوب، المساحة التقديرية، التكييف، متطلبات الدفاع المدني أو الـ BIM..."
                  : "Detail project scope, estimated capacity, chilled water tons, MEP packages, BIM Level..."
              }
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="w-4 h-4 rounded border-arch-700 bg-arch-950 text-brand-500 focus:ring-brand-500"
            />
            <label htmlFor="consent" className="text-xs text-arch-400 cursor-pointer">
              {t.contact.consentLabel || (lang === "ar"
                ? "أوافق على قيام الفريق الهندسي بشركة إيليت بالتواصل لمناقشة المتطلبات الفنية والميزانية."
                : "I authorize Elite engineering team to contact regarding technical scopes and tender docs.")}
            </label>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-sm font-bold bg-brand-500 hover:bg-brand-400 text-arch-950 shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.contact.submitting}</span>
              </>
            ) : (
              <>
                <span>{t.contact.submitBtn}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
