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
    <div className="group relative flex flex-col justify-between bg-arch-900 border border-arch-750/70 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:border-brand-500/50 hover:bg-arch-850/80 transition-all duration-300">
      <div>
        {/* Top Icon Badge with Emerald Highlight */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center transition-all group-hover:bg-brand-500 group-hover:text-white shadow-md">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-semibold text-arch-400 group-hover:text-brand-300 bg-arch-800 px-2.5 py-0.5 rounded-md border border-arch-700">
            {service.standards[0]}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-300 transition-colors">
          <Link href={`/services/${service.slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-xs sm:text-sm text-arch-300 leading-relaxed mb-5">
          {desc}
        </p>

        {/* Highlight bullets */}
        <div className="space-y-2 mb-6">
          {capabilities.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-arch-300">
              <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-arch-800 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 group-hover:text-brand-300 transition-colors"
        >
          <span>{lang === "ar" ? "نطاق العمل والتفاصيل" : "Detailed Scope & Specs"}</span>
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
