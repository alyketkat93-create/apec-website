"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import {
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Leaf,
  FileCheck2,
} from "lucide-react";

export default function QhsePage() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "معايير السلامة والجودة والبيئة" : "Integrated Management System (QHSE)"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {t.qhse.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
              {t.qhse.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: QA/QC, Safety, Environmental */}
      <section className="relative z-10 py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {/* QA / QC Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-brand-400 font-mono text-xs uppercase tracking-wider">
              <FileCheck2 className="w-4 h-4 text-brand-400" />
              <span>{lang === "ar" ? "ضبط وتوكيد الجودة" : "Quality Assurance & Control (QA/QC)"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {t.qhse.qaTitle}
            </h2>
            <p className="text-sm text-arch-300 leading-relaxed font-normal">
              {t.qhse.qaText}
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-arch-200 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "إعداد وتطبيق خطط فحص واختبار تفصيلية (ITP) لكل نشاط هندسي قبل التثبيت."
                    : "Detailed Inspection and Test Plans (ITP) enforced for every installation milestone."}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "تدقيق شهادات مطابقة المواد (Material Submittal Approval) من مختبرات معتمدة."
                    : "Material Submittal Approvals (MAR) strictly verified against Saudi Building Code (SBC)."}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "معايرة دورية لأجهزة القياس وأدوات الاختبار الهيدروستاتيكي والكهربائي."
                    : "Regular calibration of electrical test analyzers and hydrostatic test gauges."}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-arch-900/90 border border-arch-750/80 shadow-2xl space-y-5 backdrop-blur-md">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-brand-400" />
              <span>{lang === "ar" ? "وثائق الجودة المعتمدة لكل مشروع" : "Quality Assurance Documentation"}</span>
            </h3>
            <div className="space-y-3 text-xs text-arch-300">
              <div className="p-4 rounded-xl bg-arch-850/90 border border-arch-750/70">
                <span className="font-mono font-bold text-brand-400 block mb-0.5">Project Quality Plan (PQP)</span>
                <span className="text-arch-300">{lang === "ar" ? "خطة جودة المشروع الشاملة المعتمدة من الاستشاري" : "Customized quality plan tailored to client and consultant requirements."}</span>
              </div>
              <div className="p-4 rounded-xl bg-arch-850/90 border border-arch-750/70">
                <span className="font-mono font-bold text-brand-400 block mb-0.5">Method Statements (MS)</span>
                <span className="text-arch-300">{lang === "ar" ? "خطط طريقة العمل التفصيلية لسلامة ودقة كل عملية" : "Step-by-step engineering execution procedures."}</span>
              </div>
              <div className="p-4 rounded-xl bg-arch-850/90 border border-arch-750/70">
                <span className="font-mono font-bold text-brand-400 block mb-0.5">Testing & Balancing (TAB)</span>
                <span className="text-arch-300">{lang === "ar" ? "تقارير المعايرة والموازنة الهيدروليكية والهوائية المعتمدة" : "Third-party certified air and hydronic balancing."}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health & Safety Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-10 border-t border-arch-750/60">
          <div className="lg:col-span-5 p-8 rounded-3xl bg-arch-900/90 border border-amber-500/30 shadow-2xl space-y-4 lg:order-1 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-black font-mono text-2xl">
                0
              </div>
              <div>
                <span className="text-xs text-arch-400 uppercase font-mono tracking-wider block">{lang === "ar" ? "مبدأنا الأساسي" : "Core Commitment"}</span>
                <span className="text-xl font-bold text-white">{lang === "ar" ? "سياسة صفر حوادث" : "Zero Harm Policy"}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "نعتبر سلامة العاملين والمشرفين والزوار على رأس أولوياتنا، دون أي تهاون في معدات الوقاية الشخصية أو تصاريح العمل الساخن والمرتفعات."
                : "Workplace safety is non-negotiable. Strict adherence to PPE standards, hot work permits, and confined space safety protocols."}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5 lg:order-2">
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
              <HardHat className="w-4 h-4 text-amber-400" />
              <span>{lang === "ar" ? "السلامة والصحة المهنية" : "Workforce Health & Safety (HSE)"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {t.qhse.hseTitle}
            </h2>
            <p className="text-sm text-arch-300 leading-relaxed font-normal">
              {t.qhse.hseText}
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-arch-200 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "لقاءات السلامة اليومية التوعوية (Toolbox Talks) قبل انطلاق العمل." : "Daily on-site Toolbox Talks (TBT) before every shift."}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "نظام تصاريح العمل الآمن (PTW) للأعمال الكهربائية واللحام والارتفاعات." : "Permit-to-Work (PTW) control for electrical, lifting, and hot works."}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "مشرفو سلامة معتمدون من هيئة السلامة والصحة المهنية (OSHA / IOSH)." : "Certified safety officers on site monitoring continuous compliance."}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Sustainability Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-10 border-t border-arch-750/60">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-brand-400 font-mono text-xs uppercase tracking-wider">
              <Leaf className="w-4 h-4 text-brand-400" />
              <span>{lang === "ar" ? "الاستدامة والبيئة" : "Sustainability & Energy Efficiency"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {t.qhse.envTitle}
            </h2>
            <p className="text-sm text-arch-300 leading-relaxed font-normal">
              {t.qhse.envText}
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-arch-200 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "استخدام وسائط تبريد صديقة لطبقة الأوزون ذات معامل احترار عالمي منخفض (Low GWP)." : "Adoption of low-GWP refrigerants in all central chiller specifications."}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "محركات ومضخات متغيرة السرعة (VFD) لتقليل استهلاك الطاقة الكهربائية بنسبة تصل إلى 30%." : "Variable frequency drives reducing operating energy consumption by up to 30%."}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-arch-900/90 border border-brand-500/30 shadow-2xl space-y-4 backdrop-blur-md">
            <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block">
              {lang === "ar" ? "رؤية المملكة 2030" : "Saudi Vision 2030 Alignment"}
            </span>
            <h3 className="text-xl font-bold text-white">
              {lang === "ar" ? "مباني مستدامة وكفاءة استهلاك طاقة عالية" : "Sustainable Infrastructure Targets"}
            </h3>
            <p className="text-xs sm:text-sm text-arch-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "تسهم مشاريعنا الهندسية في دعم مستهدفات كفاءة الطاقة الوطنية من خلال العزل الحراري الفائق، شبكات التبريد الذكية، وتطبيق معايير المباني الخضراء (LEED ومستدام)."
                : "Contributing to the Kingdom's decarbonization goals through high thermal insulation, smart district chilled water loops, and Saudi Mostadam green building metrics."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
