"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import { companyProfile } from "@/data/company";
import { ContactForm } from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "ar" ? "المقر الرئيسي وقنوات التواصل" : "Global Headquarters"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.contact.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t.contact.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Interactive Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Corporate Information & Office Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4 text-emerald-600" />
                <span>{t.contact.headquartersTitle}</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900 block">
                      {lang === "ar"
                        ? "برج النخيل - الدور 11 - طريق الملك فهد"
                        : "Al-Nakheel Tower, 11th Floor, King Fahd Road"}
                    </span>
                    <span className="text-slate-500 block">
                      {lang === "ar"
                        ? "الرياض 12381، المملكة العربية السعودية"
                        : "Riyadh 12381, Kingdom of Saudi Arabia"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">{lang === "ar" ? "الهاتف الموحد:" : "Central Telephone:"}</span>
                    <a href="tel:+966114886660" className="font-bold text-slate-900 hover:text-emerald-600 transition-colors" dir="ltr">
                      +966 11 488 6660
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">{lang === "ar" ? "واتساب وتطوير الأعمال:" : "WhatsApp Direct:"}</span>
                    <a href="https://wa.me/966548132029" className="font-bold text-slate-900 hover:text-emerald-600 transition-colors" dir="ltr">
                      +966 54 813 2029
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">{lang === "ar" ? "البريد الإلكتروني التجاري:" : "Business Development Email:"}</span>
                    <a href="mailto:b.d@apec.com.sa" className="font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                      b.d@apec.com.sa
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">{lang === "ar" ? "ساعات العمل الرسمية:" : "Operating Hours:"}</span>
                    <span className="text-slate-700 font-medium">{t.contact.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Regulatory registration note */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">CR: 1010943353</span>
                <span className="text-emerald-700 font-semibold">{lang === "ar" ? "فئة أولى (بلدي)" : "MOMRAH Class 1"}</span>
              </div>
            </div>

            {/* Google Maps Interactive Container */}
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm h-64 sm:h-72 relative">
              <iframe
                title="APEC Riyadh Headquarters"
                src={companyProfile.headquarters.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Proposal Form */}
          <div className="lg:col-span-7">
            <div className="space-y-4 mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {t.contact.formSubtitle}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
