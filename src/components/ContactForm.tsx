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
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400" />

      {success ? (
        <div className="py-12 text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.contact.successTitle}
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {t.contact.successText}
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          >
            {lang === "ar" ? "إرسال استفسار جديد" : "Submit Another Inquiry"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === "ar" ? "مثال: م. عبد الرحمن السعيد" : "e.g. Eng. Khalid Al-Fahad"}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Row 2: Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.contact.phoneLabel}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+966 5X XXX XXXX"
                dir="ltr"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.contact.companyLabel}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder={lang === "ar" ? "اسم المطور أو الشركة" : "Developer or Enterprise"}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Row 3: Service interest & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.contact.serviceLabel}
              </label>
              <select
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 transition-all shadow-xs"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {lang === "ar" ? s.titleAr : s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.contact.locationLabel}
              </label>
              <input
                type="text"
                value={formData.projectLocation}
                onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                placeholder={lang === "ar" ? "الرياض، جدة، الخبر، نيوم..." : "Riyadh, Jeddah, Khobar..."}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Message / Scope */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {t.contact.messageLabel}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                lang === "ar"
                  ? "يرجى ذكر نبذة موجزة عن حجم المشروع، نطاق الأعمال الكهروميكانيكية المطلوبة، والجدول الزمني المستهدف..."
                  : "Please describe the project scale, required MEP disciplines, estimated floor area, and target mobilization schedule..."
              }
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 transition-all shadow-xs resize-y"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 rounded bg-slate-50 border-slate-300 text-emerald-600 focus:ring-emerald-500"
            />
            <label htmlFor="consent" className="text-xs text-slate-600 cursor-pointer">
              {t.contact.consentLabel}
            </label>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.contact.submitting}</span>
              </>
            ) : (
              <>
                <span>{t.contact.submitBtn}</span>
                <Send className="w-4 h-4 rtl:rotate-180" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
