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
              <Building className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "المقر الرئيسي وقنوات التواصل" : "Global Headquarters"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {t.contact.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
              {t.contact.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Interactive Form */}
      <section className="relative z-10 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Corporate Information & Office Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-arch-900/90 border border-arch-750/70 shadow-2xl space-y-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-brand-400 font-mono text-xs uppercase tracking-wider">
                <Building className="w-4 h-4 text-brand-400" />
                <span>{t.contact.headquartersTitle}</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-arch-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-white block">
                      {lang === "ar"
                        ? "برج النخيل - الدور 11 - طريق الملك فهد"
                        : "Al-Nakheel Tower, 11th Floor, King Fahd Road"}
                    </span>
                    <span className="text-arch-400 block">
                      {lang === "ar"
                        ? "الرياض 12381، المملكة العربية السعودية"
                        : "Riyadh 12381, Kingdom of Saudi Arabia"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                  <div>
                    <span className="text-arch-400 block text-[11px] font-mono">{lang === "ar" ? "الهاتف الموحد:" : "Central Telephone:"}</span>
                    <a href="tel:+966114886660" className="font-bold text-white hover:text-brand-400 transition-colors" dir="ltr">
                      +966 11 488 6660
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                  <div>
                    <span className="text-arch-400 block text-[11px] font-mono">{lang === "ar" ? "واتساب وتطوير الأعمال:" : "WhatsApp Direct:"}</span>
                    <a href="https://wa.me/966548132029" className="font-bold text-white hover:text-brand-400 transition-colors" dir="ltr">
                      +966 54 813 2029
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                  <div>
                    <span className="text-arch-400 block text-[11px] font-mono">{lang === "ar" ? "البريد الإلكتروني التجاري:" : "Business Development Email:"}</span>
                    <a href="mailto:b.d@elite.com.sa" className="font-bold text-white hover:text-brand-400 transition-colors">
                      b.d@elite.com.sa
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-arch-500 shrink-0" />
                  <div>
                    <span className="text-arch-400 block text-[11px] font-mono">{lang === "ar" ? "ساعات العمل الرسمية:" : "Operating Hours:"}</span>
                    <span className="text-arch-200 font-medium">{t.contact.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Regulatory registration note */}
              <div className="pt-4 border-t border-arch-750/60 flex items-center justify-between text-xs text-arch-400 font-mono">
                <span>CR: 1010943353</span>
                <span className="text-brand-400 font-bold">{lang === "ar" ? "فئة أولى (بلدي)" : "MOMRAH Class 1"}</span>
              </div>
            </div>

            {/* Google Maps Interactive Container */}
            <div className="rounded-3xl overflow-hidden bg-arch-900 border border-arch-750/80 shadow-2xl h-64 sm:h-72 relative">
              <iframe
                title="Elite Riyadh Headquarters"
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
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
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
