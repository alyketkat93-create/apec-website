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
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border shadow-sm ${
        lang === "ar"
          ? "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
      } ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-emerald-600" />
      <span>{lang === "en" ? "العربية" : "English"}</span>
    </button>
  );
};
