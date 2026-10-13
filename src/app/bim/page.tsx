"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import {
  Cpu,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function BimTechnologyPage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen text-slate-900">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-emerald-50/50 to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "ar" ? "الهندسة الرقمية وتقنيات المستقبل" : "Virtual Design & Construction (VDC)"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              {t.bim.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.bim.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Executive Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                {lang === "ar" ? "رؤيتنا مع التكنولوجيا العالمية" : "Next-Gen Engineering Paradigm"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {t.bim.introTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === "ar"
                  ? "نحن نقدم رؤية جديدة في الهندسة الكهربائية والميكانيكية من خلال تقنية BIM التي توفر التكلفة والوقت. هي عملية ذكية تعتمد على النماذج ثلاثية الأبعاد والتي تمنح المتخصصين في الهندسة المعمارية والهندسة والبناء (AEC) الرؤية والأدوات اللازمة لتخطيط المباني والبنية التحتية وتصميمها وإنشائها وإدارتها بشكل أكثر كفاءة."
                  : "We deliver a forward-looking paradigm in MEP engineering through advanced BIM workflows that dramatically conserve capital and time. Building Information Modeling is an intelligent 3D model-based process that equips architecture, engineering, and construction (AEC) professionals with the insight and tools to efficiently plan, design, construct, and manage buildings and infrastructure."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex flex-col gap-1 shadow-xs">
                  <span className="text-2xl font-black text-emerald-700 font-sans">LOD 500</span>
                  <span className="text-xs text-slate-700 font-bold">
                    {lang === "ar" ? "أعلى مستويات التفصيل الرقمي" : "Level of Development"}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1 shadow-xs">
                  <span className="text-2xl font-black text-slate-900 font-sans">Zero</span>
                  <span className="text-xs text-slate-700 font-bold">
                    {lang === "ar" ? "تعارضات ميدانية متبقية" : "Site Clash Incidents"}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1 shadow-xs">
                  <span className="text-2xl font-black text-emerald-700 font-sans">100%</span>
                  <span className="text-xs text-slate-700 font-bold">
                    {lang === "ar" ? "مخططات تنفيذية موحدة" : "CSD Synchronized"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xl p-6">
                <Image
                  src="/images/bim/bim-architecture.jpg"
                  alt="BIM Concept Architecture"
                  width={600}
                  height={450}
                  className="rounded-xl object-cover filter contrast-105 mb-4 shadow-xs"
                />
                <span className="text-xs text-slate-600 block text-center font-medium">
                  {lang === "ar" ? "تنسيق متكامل بين كافة الأنظمة في نموذج رقمي موحد" : "Single synchronized federated 3D model uniting all trades"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIM vs Traditional Side-by-Side Comparison Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {lang === "ar" ? "تحول الصناعة من الرسومات إلى النماذج" : "The Industry Paradigm Shift"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.bim.comparisonTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Method */}
            <div className="rounded-2xl bg-white border border-red-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-100">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {t.bim.tradTitle}
                    </h3>
                    <span className="text-xs text-red-600 font-bold">
                      {lang === "ar" ? "مؤشرات متأخرة وخسائر ميدانية" : "Lagging Indicators & Site Waste"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{t.bim.trad1}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{t.bim.trad2}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{t.bim.trad3}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{t.bim.trad4}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* APEC BIM Method */}
            <div className="rounded-2xl bg-white border border-emerald-300 p-8 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500" />
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {t.bim.bimMethodTitle}
                    </h3>
                    <span className="text-xs text-emerald-700 font-bold">
                      {lang === "ar" ? "مؤشرات رائدة ودقة منسقة في الوقت المناسب" : "Leading Indicators & Synchronized Precision"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim1}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim2}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim3}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim4}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIM Across the Facility Lifecycle */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {lang === "ar" ? "دورة حياة المشروع الرقمية" : "End-to-End Lifecycle"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.bim.lifecycleTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-700">STEP 01</span>
              <h3 className="text-base font-bold text-slate-900">{t.bim.stagePlanning}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.bim.stagePlanningDesc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-700">STEP 02</span>
              <h3 className="text-base font-bold text-slate-900">{t.bim.stageDesign}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.bim.stageDesignDesc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-700">STEP 03</span>
              <h3 className="text-base font-bold text-slate-900">{t.bim.stageBuild}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.bim.stageBuildDesc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-700">STEP 04</span>
              <h3 className="text-base font-bold text-slate-900">{t.bim.stageOperate}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.bim.stageOperateDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-black text-white">
            {lang === "ar" ? "هل ترغب في تطبيق تقنية الـ BIM في مشروعك القادم؟" : "Elevate Your Next Project with APEC's BIM Technical Office"}
          </h2>
          <p className="text-sm text-emerald-100 max-w-2xl mx-auto">
            {lang === "ar"
              ? "تواصل مع مهندسينا لحساب العائد الاستثماري وحل التعارضات واستخراج المخططات التنفيذية الدقيقة."
              : "Connect with our VDC coordination department for early clash resolution matrices, LOD 400 fabrication sheets, and cost-saving simulations."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-white text-emerald-800 hover:bg-emerald-50 shadow-xl transition-all cursor-pointer"
          >
            <span>{t.nav.requestConsultation}</span>
            <ArrowIcon className="w-4 h-4 text-emerald-800" />
          </Link>
        </div>
      </section>
    </div>
  );
}
