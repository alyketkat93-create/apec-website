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
    <div className="flex flex-col w-full bg-slate-50 min-h-screen text-slate-900">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/50 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {lang === "ar" ? "معايير السلامة والجودة والبيئة" : "Integrated Management System"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.qhse.pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.qhse.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: QA/QC, Safety, Environmental */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {/* QA / QC Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
              <FileCheck2 className="w-4 h-4" />
              <span>{lang === "ar" ? "ضبط وتوكيد الجودة" : "Quality Assurance & Control"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.qhse.qaTitle}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.qhse.qaText}
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "إعداد وتطبيق خطط فحص واختبار تفصيلية (ITP) لكل نشاط هندسي قبل التثبيت."
                    : "Detailed Inspection and Test Plans (ITP) enforced for every installation milestone."}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "تدقيق شهادات مطابقة المواد (Material Submittal Approval) من مختبرات معتمدة."
                    : "Material Submittal Approvals (MAR) strictly verified against Saudi Building Code (SBC)."}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === "ar"
                    ? "معايرة دورية لأجهزة القياس وأدوات الاختبار الهيدروستاتيكي والكهربائي."
                    : "Regular calibration of electrical test analyzers and hydrostatic test gauges."}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {lang === "ar" ? "وثائق الجودة المعتمدة لكل مشروع" : "Quality Assurance Documentation"}
            </h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Project Quality Plan (PQP)</span>
                <span className="text-slate-500">{lang === "ar" ? "خطة جودة المشروع الشاملة المعتمدة من الاستشاري" : "Customized quality plan tailored to client and consultant requirements."}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Method Statements (MS)</span>
                <span className="text-slate-500">{lang === "ar" ? "خطط طريقة العمل التفصيلية لسلامة ودقة كل عملية" : "Step-by-step engineering execution procedures."}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Testing & Balancing (TAB)</span>
                <span className="text-slate-500">{lang === "ar" ? "تقارير المعايرة والموازنة الهيدروليكية والهوائية المعتمدة" : "Third-party certified air and hydronic balancing."}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health & Safety Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-slate-200">
          <div className="lg:col-span-5 p-8 rounded-2xl bg-amber-50/60 border border-amber-200 shadow-xs space-y-4 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">
                0
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase font-bold block">{lang === "ar" ? "مبدأنا الأساسي" : "Core Commitment"}</span>
                <span className="text-lg font-bold text-slate-900">{lang === "ar" ? "سياسة صفر حوادث" : "Zero Harm Policy"}</span>
              </div>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {lang === "ar"
                ? "نعتبر سلامة العاملين والمشرفين والزوار على رأس أولوياتنا، دون أي تهاون في معدات الوقاية الشخصية أو تصاريح العمل الساخن والمرتفعات."
                : "Workplace safety is non-negotiable. Strict adherence to PPE standards, hot work permits, and confined space safety protocols."}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4 lg:order-2">
            <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
              <HardHat className="w-4 h-4" />
              <span>{lang === "ar" ? "السلامة والصحة المهنية" : "Workforce Health & Safety"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.qhse.hseTitle}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.qhse.hseText}
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "لقاءات السلامة اليومية التوعوية (Toolbox Talks) قبل انطلاق العمل." : "Daily on-site Toolbox Talks (TBT) before every shift."}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "نظام تصاريح العمل الآمن (PTW) للأعمال الكهربائية واللحام والارتفاعات." : "Permit-to-Work (PTW) control for electrical, lifting, and hot works."}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "مشرفو سلامة معتمدون من هيئة السلامة والصحة المهنية (OSHA / IOSH)." : "Certified safety officers on site monitoring continuous compliance."}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Sustainability Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-slate-200">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <Leaf className="w-4 h-4" />
              <span>{lang === "ar" ? "الاستدامة والبيئة" : "Sustainability & Energy Efficiency"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t.qhse.envTitle}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.qhse.envText}
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "استخدام وسائط تبريد صديقة لطبقة الأوزون ذات معامل احترار عالمي منخفض (Low GWP)." : "Adoption of low-GWP refrigerants in all central chiller specifications."}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{lang === "ar" ? "محركات ومضخات متغيرة السرعة (VFD) لتقليل استهلاك الطاقة الكهربائية بنسبة تصل إلى 30%." : "Variable frequency drives reducing operating energy consumption by up to 30%."}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-xs space-y-3">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">
              {lang === "ar" ? "رؤية المملكة 2030" : "Saudi Vision 2030 Alignment"}
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {lang === "ar" ? "مباني مستدامة وكفاءة استهلاك طاقة عالية" : "Sustainable Infrastructure Targets"}
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
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
