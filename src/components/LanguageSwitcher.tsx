"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      aria-label="Toggle language"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border backdrop-blur-md shadow-sm ${
        lang === "ar"
          ? "border-brand-500/50 bg-brand-500/15 text-brand-300 hover:bg-brand-500/25"
          : "border-arch-700 bg-arch-850/80 text-arch-200 hover:bg-arch-800 hover:text-white hover:border-arch-600"
      } ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-brand-400" />
      <span>{lang === "en" ? "العربية" : "English"}</span>
    </button>
  );
};
