"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  Building,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export const Header: React.FC = () => {
  const { t, lang, isRTL } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/projects", label: t.nav.projects },
    { href: "/sectors", label: t.nav.sectors },
    { href: "/bim", label: t.nav.bim },
    { href: "/qhset", label: t.nav.qhse },
    { href: "/careers", label: t.nav.careers },
    { href: "/contact", label: t.nav.contact },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Pre-Header Bar in Fresh Mint/Slate Tint */}
      <div className="bg-emerald-50/95 text-slate-700 text-xs border-b border-emerald-100/90 px-4 sm:px-8 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.nav.class1Badge}</span>
              <span className="text-emerald-300">|</span>
              <span className="text-slate-600 text-[11px] font-mono">CR: 1010943353</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Building className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "ar" ? "الرياض - برج النخيل - طريق الملك فهد" : "Riyadh - Al-Nakheel Tower, King Fahd Rd"}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+966114886660"
              className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span dir="ltr">+966 11 488 6660</span>
            </a>
            <a
              href="mailto:b.d@apec.com.sa"
              className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>b.d@apec.com.sa</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar in Crisp White & Luminous Glass */}
      <nav
        className={`w-full transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? "bg-white/95 border-b border-slate-200 shadow-md py-2.5"
            : "bg-white/90 border-b border-slate-100 shadow-sm py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-1 shadow-sm border border-slate-200/90 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="APEC Logo"
                fill
                sizes="(max-width: 640px) 48px, 56px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
                  APEC
                </span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-emerald-700 uppercase">
                {lang === "ar" ? "للمقاولات العامة والـ MEP" : "General & MEP Contracting"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 font-bold"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions: Language Switcher & Consultation CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs lg:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.nav.requestConsultation}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher className="text-[11px] px-2 py-1" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle Navigation Drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[header] bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl py-6 px-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 font-bold border-r-4 rtl:border-r-0 rtl:border-l-4 border-emerald-500"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowIcon className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-700 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{t.nav.class1Badge}</span>
                </div>
                <span className="font-mono text-slate-600">CR: 1010943353</span>
              </div>

              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-xl text-sm font-bold bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
              >
                {t.nav.requestConsultation}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
