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
  Layers,
  Box,
} from "lucide-react";

export default function BimTechnologyPage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col w-full bg-arch-950 min-h-screen text-arch-200 relative overflow-hidden">
      {/* Background blueprint grid & ambient auras */}
      <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-brand-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Header Banner */}
      <section className="relative z-10 py-20 lg:py-28 border-b border-arch-750/60 bg-arch-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arch-850/90 border border-brand-500/30 text-brand-400 text-xs font-mono tracking-widest uppercase shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "الهندسة الرقمية وتقنيات النمذجة" : "Virtual Design & Construction (VDC)"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {t.bim.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-arch-300 leading-relaxed font-normal">
              {t.bim.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Executive Overview */}
      <section className="relative z-10 py-20 border-b border-arch-750/60 bg-arch-900/20 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-400">
                {lang === "ar" ? "رؤيتنا مع التكنولوجيا العالمية" : "Next-Gen Engineering Paradigm"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.bim.introTitle}
              </h2>
              <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
                {lang === "ar"
                  ? "نحن نقدم رؤية جديدة في الهندسة الكهربائية والميكانيكية من خلال تقنية BIM التي توفر التكلفة والوقت. هي عملية ذكية تعتمد على النماذج ثلاثية الأبعاد والتي تمنح المتخصصين في الهندسة المعمارية والهندسة والبناء (AEC) الرؤية والأدوات اللازمة لتخطيط المباني والبنية التحتية وتصميمها وإنشائها وإدارتها بشكل أكثر كفاءة."
                  : "We deliver a forward-looking paradigm in MEP engineering through advanced BIM workflows that dramatically conserve capital and time. Building Information Modeling is an intelligent 3D model-based process that equips architecture, engineering, and construction (AEC) professionals with the insight and tools to efficiently plan, design, construct, and manage buildings and infrastructure."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-arch-900/90 border border-brand-500/30 flex flex-col gap-1 shadow-lg">
                  <span className="text-3xl font-black text-brand-400 font-mono">LOD 500</span>
                  <span className="text-xs text-arch-300 font-medium">
                    {lang === "ar" ? "أعلى مستويات التفصيل الرقمي" : "Level of Development"}
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-arch-900/90 border border-arch-750/70 flex flex-col gap-1 shadow-lg">
                  <span className="text-3xl font-black text-white font-mono">ZERO</span>
                  <span className="text-xs text-arch-300 font-medium">
                    {lang === "ar" ? "تعارضات ميدانية متبقية" : "Site Clash Incidents"}
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-arch-900/90 border border-arch-750/70 flex flex-col gap-1 shadow-lg">
                  <span className="text-3xl font-black text-brand-400 font-mono">100%</span>
                  <span className="text-xs text-arch-300 font-medium">
                    {lang === "ar" ? "مخططات تنفيذية موحدة" : "CSD Synchronized"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-arch-900/90 border border-arch-750/80 shadow-2xl p-6 backdrop-blur-md">
                <Image
                  src="/images/bim/bim-architecture.jpg"
                  alt="BIM Concept Architecture"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover filter contrast-110 mb-4 shadow-md"
                />
                <span className="text-xs text-arch-400 block text-center font-mono">
                  {lang === "ar" ? "تنسيق متكامل بين كافة الأنظمة في نموذج رقمي موحد" : "Single synchronized federated 3D model uniting all trades"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIM vs Traditional Side-by-Side Comparison Matrix */}
      <section className="relative z-10 py-20 border-b border-arch-750/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-400">
              {lang === "ar" ? "تحول الصناعة من الرسومات إلى النماذج" : "The Industry Paradigm Shift"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.bim.comparisonTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Method */}
            <div className="rounded-3xl bg-arch-900/80 border border-red-500/30 p-8 sm:p-10 shadow-xl flex flex-col justify-between backdrop-blur-md">
              <div>
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-arch-750/60">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t.bim.tradTitle}
                    </h3>
                    <span className="text-xs text-red-400 font-mono font-semibold">
                      {lang === "ar" ? "مؤشرات متأخرة وخسائر ميدانية" : "Lagging Indicators & Site Waste"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-arch-300">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{t.bim.trad1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{t.bim.trad2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{t.bim.trad3}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{t.bim.trad4}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Elite BIM Method */}
            <div className="rounded-3xl bg-arch-900/90 border border-brand-500/50 p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-500" />
              <div>
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-arch-750/60">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/40 text-brand-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t.bim.bimMethodTitle}
                    </h3>
                    <span className="text-xs text-brand-400 font-mono font-semibold">
                      {lang === "ar" ? "مؤشرات رائدة ودقة منسقة في الوقت المناسب" : "Leading Indicators & Synchronized Precision"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-arch-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim1}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim3}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{t.bim.bim4}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIM Across the Facility Lifecycle */}
      <section className="relative z-10 py-20 border-b border-arch-750/60 bg-arch-900/20 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-400">
              {lang === "ar" ? "دورة حياة المشروع الرقمية" : "End-to-End Lifecycle"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.bim.lifecycleTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/40 flex flex-col gap-3 shadow-lg backdrop-blur-xs transition-colors">
              <span className="text-xs font-mono font-bold text-brand-400 tracking-wider">STEP 01</span>
              <h3 className="text-base font-bold text-white">{t.bim.stagePlanning}</h3>
              <p className="text-xs text-arch-300 leading-relaxed font-normal">{t.bim.stagePlanningDesc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/40 flex flex-col gap-3 shadow-lg backdrop-blur-xs transition-colors">
              <span className="text-xs font-mono font-bold text-brand-400 tracking-wider">STEP 02</span>
              <h3 className="text-base font-bold text-white">{t.bim.stageDesign}</h3>
              <p className="text-xs text-arch-300 leading-relaxed font-normal">{t.bim.stageDesignDesc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/40 flex flex-col gap-3 shadow-lg backdrop-blur-xs transition-colors">
              <span className="text-xs font-mono font-bold text-brand-400 tracking-wider">STEP 03</span>
              <h3 className="text-base font-bold text-white">{t.bim.stageBuild}</h3>
              <p className="text-xs text-arch-300 leading-relaxed font-normal">{t.bim.stageBuildDesc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/40 flex flex-col gap-3 shadow-lg backdrop-blur-xs transition-colors">
              <span className="text-xs font-mono font-bold text-brand-400 tracking-wider">STEP 04</span>
              <h3 className="text-base font-bold text-white">{t.bim.stageOperate}</h3>
              <p className="text-xs text-arch-300 leading-relaxed font-normal">{t.bim.stageOperateDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-gradient-to-r from-arch-900/90 via-arch-850/90 to-arch-900/90 border border-brand-500/40 p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl font-black text-white relative z-10">
            {lang === "ar" ? "هل ترغب في تطبيق تقنية الـ BIM في مشروعك القادم؟" : "Elevate Your Next Project with Elite's BIM Technical Office"}
          </h2>
          <p className="text-sm text-arch-300 max-w-2xl mx-auto relative z-10 leading-relaxed font-normal">
            {lang === "ar"
              ? "تواصل مع مهندسينا لحساب العائد الاستثماري وحل التعارضات واستخراج المخططات التنفيذية الدقيقة."
              : "Connect with our VDC coordination department for early clash resolution matrices, LOD 400 fabrication sheets, and cost-saving simulations."}
          </p>
          <div className="pt-2 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-brand-500 hover:bg-brand-400 text-arch-950 shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.nav.requestConsultation}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
