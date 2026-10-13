"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { t, lang, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-slate-100/90 text-slate-700 border-t border-slate-200/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Credentials (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1 shadow-sm border border-slate-200 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="APEC Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                  APEC
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  {lang === "ar" ? "شركة أيبك للمقاولات العامة والـ MEP" : "APEC For Contracting"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>

            {/* Official Credentials Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === "ar" ? "مصنف الدرجة الأولى (بلدي)" : "MOMRAH Class 1 Certified"}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-mono shadow-xs">
                <span>CR: 1010943353</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-mono shadow-xs">
                <span>VAT: 311881290700003</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.nav.services}</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.nav.projects}</span>
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.nav.sectors}</span>
                </Link>
              </li>
              <li>
                <Link href="/bim" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.nav.bim}</span>
                </Link>
              </li>
              <li>
                <Link href="/qhset" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                  <ChevronIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.nav.qhse}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Disciplines */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">
              {t.footer.disciplines}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/services/hvac-and-chilled-water-systems" className="hover:text-emerald-700 transition-colors">
                  {lang === "ar" ? "تكييف المياه المبردة و VRF" : "Chilled Water & VRF HVAC"}
                </Link>
              </li>
              <li>
                <Link href="/services/fire-protection-and-life-safety" className="hover:text-emerald-700 transition-colors">
                  {lang === "ar" ? "شبكات مكافحة الحريق والإنذار" : "Firefighting & Alarm Systems"}
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-and-power-infrastructure" className="hover:text-emerald-700 transition-colors">
                  {lang === "ar" ? "البنية التحتية وتوزيع الطاقة" : "Electrical Substations & Power"}
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing-and-sanitary-infrastructure" className="hover:text-emerald-700 transition-colors">
                  {lang === "ar" ? "السباكة وتغذية المياه والصرف" : "Sanitary & Drainage Networks"}
                </Link>
              </li>
              <li>
                <Link href="/services/bim-and-digital-engineering-coordination" className="hover:text-emerald-700 transition-colors">
                  {lang === "ar" ? "التنسيق بنظام الـ BIM" : "Virtual Design & BIM 5D"}
                </Link>
              </li>
              <li>
                <Link href="/services/turnkey-mep-and-general-contracting" className="hover:text-emerald-700 transition-colors">
                  {lang === "ar" ? "المقاولات العامة المتكاملة" : "Turnkey MEP Contracting"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "برج النخيل - الدور 11 - طريق الملك فهد، الرياض، المملكة العربية السعودية"
                    : "Al-Nakheel Tower, 11th Floor, King Fahd Road, Riyadh, Saudi Arabia"}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+966114886660" className="hover:text-emerald-700 font-medium transition-colors" dir="ltr">
                  +966 11 488 6660
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="https://wa.me/966548132029" className="hover:text-emerald-700 font-medium transition-colors" dir="ltr">
                  +966 54 813 2029 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:b.d@apec.com.sa" className="hover:text-emerald-700 font-medium transition-colors">
                  b.d@apec.com.sa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span>{t.footer.copyright}</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-emerald-700 font-bold">{t.footer.vision2030}</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-emerald-700 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/careers" className="hover:text-emerald-700 transition-colors">
              {t.nav.careers}
            </Link>
            <Link href="/contact" className="hover:text-emerald-700 transition-colors">
              {t.nav.contact}
            </Link>
            <Link href="/admin" className="hover:text-emerald-700 text-slate-500 transition-colors">
              {lang === "ar" ? "لوحة الإدارة" : "Portal"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
