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
    <footer className="bg-arch-950 text-arch-300 border-t border-arch-800 pt-16 pb-8 relative overflow-hidden bg-blueprint">
      {/* Ambient background light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial-glow pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-arch-800/80">
          {/* Col 1: Brand & Credentials (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 bg-arch-900 rounded-xl p-1 shadow-md border border-arch-750 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="APEC Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  APEC
                </span>
                <span className="text-xs font-semibold text-brand-400">
                  {lang === "ar" ? "شركة أيبك للمقاولات العامة والـ MEP" : "APEC For Contracting"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-arch-300 leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>

            {/* Official Credentials Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                <span>{lang === "ar" ? "مصنف الدرجة الأولى (بلدي)" : "MOMRAH Class 1 Certified"}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-arch-900 border border-arch-800 text-arch-300 text-xs font-mono">
                <span>CR: 1010943353</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-arch-900 border border-arch-800 text-arch-300 text-xs font-mono">
                <span>VAT: 311881290700003</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-300 transition-colors flex items-center gap-1.5 text-arch-400 hover:text-white">
                  <ChevronIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-300 transition-colors flex items-center gap-1.5 text-arch-400 hover:text-white">
                  <ChevronIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>{t.nav.services}</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-300 transition-colors flex items-center gap-1.5 text-arch-400 hover:text-white">
                  <ChevronIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>{t.nav.projects}</span>
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-brand-300 transition-colors flex items-center gap-1.5 text-arch-400 hover:text-white">
                  <ChevronIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>{t.nav.sectors}</span>
                </Link>
              </li>
              <li>
                <Link href="/bim" className="hover:text-brand-300 transition-colors flex items-center gap-1.5 text-arch-400 hover:text-white">
                  <ChevronIcon className="w-3.5 h-3.5 text-brand-400" />
                  <span>{t.nav.bim}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t.footer.disciplines}
            </h4>
            <ul className="space-y-2.5 text-sm text-arch-400">
              <li>
                <Link href="/services/hvac-systems" className="hover:text-white transition-colors">
                  {lang === "ar" ? "تكييف المياه المبردة المتطور" : "Advanced Chilled Water HVAC"}
                </Link>
              </li>
              <li>
                <Link href="/services/firefighting-systems" className="hover:text-white transition-colors">
                  {lang === "ar" ? "مكافحة الحرائق وحماية الحياة" : "Fire Protection & Safety"}
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-low-current" className="hover:text-white transition-colors">
                  {lang === "ar" ? "شبكات الكهرباء والتيار الخفيف" : "Electrical & Low-Current"}
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing-drainage" className="hover:text-white transition-colors">
                  {lang === "ar" ? "شبكات الصرف والمياه المضغوطة" : "Plumbing & Booster Plants"}
                </Link>
              </li>
              <li>
                <Link href="/services/bim-vdc" className="hover:text-white transition-colors">
                  {lang === "ar" ? "نمذجة وتنسيق الـ BIM LOD 500" : "BIM & VDC Digital Office"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-arch-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "برج النخيل، الدور 11، طريق الملك فهد، الرياض 12381، المملكة العربية السعودية"
                    : "Al-Nakheel Tower, 11th Fl, King Fahd Rd, Riyadh 12381, KSA"}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+966114886660" className="hover:text-white transition-colors" dir="ltr">
                  +966 11 488 6660
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="https://wa.me/966548132029" className="hover:text-white transition-colors" dir="ltr">
                  +966 54 813 2029
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:b.d@apec.com.sa" className="hover:text-white transition-colors">
                  b.d@apec.com.sa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-arch-400">
          <p>
            {t.footer.copyright}
          </p>

          <div className="flex items-center gap-6">
            <Link href="/qhset" className="hover:text-white transition-colors">
              {t.nav.qhse}
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              {t.nav.careers}
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              {t.nav.contact}
            </Link>
            <Link href="/admin" className="text-arch-500 hover:text-arch-300 transition-colors">
              Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
