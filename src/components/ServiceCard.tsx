"use client";

import React from "react";
import Link from "next/link";
import { Service } from "@/types";
import { useLanguage } from "@/lib/language-context";
import {
  ThermometerSnowflake,
  Flame,
  Zap,
  Droplets,
  Layers,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ThermometerSnowflake,
  Flame,
  Zap,
  Droplets,
  Layers,
  Building2,
};

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const IconComponent = iconMap[service.iconName] || Building2;
  const title = lang === "ar" ? service.titleAr : service.title;
  const desc = lang === "ar" ? service.shortDescAr : service.shortDesc;
  const capabilities = lang === "ar" ? service.keyCapabilitiesAr : service.keyCapabilities;

  return (
    <div className="group relative flex flex-col justify-between bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:bg-emerald-50/20 transition-all duration-300">
      <div>
        {/* Top Icon Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center transition-all group-hover:bg-emerald-600 group-hover:text-white shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-semibold text-slate-500 group-hover:text-emerald-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
            {service.standards[0]}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
          <Link href={`/services/${service.slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          {desc}
        </p>

        {/* Highlight bullets */}
        <div className="space-y-2 mb-6">
          {capabilities.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors"
        >
          <span>{lang === "ar" ? "نطاق العمل والتفاصيل" : "Detailed Scope & Specs"}</span>
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
