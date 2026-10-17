"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { PromoVideoModal } from "@/components/PromoVideoModal";
import {
  Play,
  Film,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Building,
  Cpu,
  ArrowRight,
  ArrowLeft,
  FileText,
} from "lucide-react";

export default function VideoShowcasePage() {
  const { t, lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const chapters = [
    {
      act: "ACT I · 00:00 - 00:20",
      title: "The Genesis & Power",
      titleAr: "النشأة والإرث الهندسي",
      desc: "Introduction to Elite, 35+ years of cross-continental engineering heritage, and official MOMRAH Class-1 governmental accreditation.",
      descAr: "انطلاقة إيليت، وإرث أكثر من 35 عاماً من الخبرة الهندسية الدولية وتصنيف الدرجة الأولى (فئة أولى) من منصة بلدي.",
      badge: "MOMRAH Class 1",
    },
    {
      act: "ACT II · 00:20 - 00:45",
      title: "Turnkey Engineering Disciplines",
      titleAr: "القدرات الهندسية الشاملة",
      desc: "District chilled water central cooling plants, NFPA-certified UL/FM fire pump networks, and MV/LV electrical transformer distribution.",
      descAr: "محطات التبريد المركزي بالمياه المبردة، شبكات الحريق المعتمدة NFPA، وتوزيع الطاقة بمحطات الجهد المتوسط والمنخفض.",
      badge: "MEP Turnkey",
    },
    {
      act: "ACT III · 00:45 - 01:15",
      title: "Iconic Flagship Portfolio",
      titleAr: "سابقة الأعمال والمشاريع الأيقونية",
      desc: "44-story coastal skyscraper The Gate Tower, Al-Mounsiya Commercial Complex, Diriyah Gate cultural preservation, and Al-Shorouq Healthcare.",
      descAr: "برج ذا جيت الساحلي بارتفاع 44 دوراً، مجمع المونسية التجاري، حفظ التراث الثقافي ببوابة الدرعية، ومستشفيات الشروق.",
      badge: "175M+ SAR Value",
    },
    {
      act: "ACT IV · 01:15 - 01:35",
      title: "The BIM & VDC Revolution",
      titleAr: "ثورة الـ BIM والتوأمة الرقمية",
      desc: "Virtual construction to Level of Development (LOD) 500, federated 3D multi-trade models, clash elimination, and 25% schedule acceleration.",
      descAr: "النمذجة ثلاثية الأبعاد بدقة LOD 500، كشف وتصفير التعارضات الميدانية، وتوفير 25% من الجدول الزمني للتنفيذ.",
      badge: "LOD 500",
    },
    {
      act: "ACT V · 01:35 - 01:50",
      title: "Zero-Harm & Saudi Vision 2030",
      titleAr: "السلامة المهنية ورؤية 2030",
      desc: "Proactive Zero-Harm HSE policy, ISO 9001:2015 ITP quality verification, hydronic balancing audits, and green building efficiency.",
      descAr: "سياسة صفر حوادث الصارمة، خطط ضبط الجودة ITP، والمعايرة المعتمدة، ودعم مستهدفات كفاءة الطاقة لرؤية 2030.",
      badge: "Zero-Harm",
    },
    {
      act: "ACT VI · 01:50 - 02:00",
      title: "The Future Is Elite",
      titleAr: "المستقبل مع إيليت",
      desc: "Executive leadership commitment, Riyadh headquarters at Al-Nakheel Tower, and direct tender partnership invitations.",
      descAr: "التزام القيادة التنفيذية، المقر الرئيسي ببرج النخيل بالرياض، ودعوة للتعاون في المشاريع الإنشائية الكبرى.",
      badge: "Partner With Us",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-arch-950 min-h-screen text-arch-200 relative overflow-hidden">
      {/* Background blueprint grid & ambient auras */}
      <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[700px] h-[450px] bg-brand-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Header Banner */}
      <section className="relative z-10 py-20 sm:py-28 border-b border-arch-750/60 bg-arch-900/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-arch-850/90 border border-brand-500/30 text-brand-400 text-xs font-mono tracking-widest uppercase shadow-sm">
              <Film className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "الفيديو الدعائي الرسمي للشركة" : "Official 2-Minute Corporate Film"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {lang === "ar" ? "فيلم إيليت المؤسسي: هندسة المستقبل" : "Elite Corporate Showcase: Engineering the Future"}
            </h1>
            <p className="text-sm sm:text-base text-arch-300 leading-relaxed font-normal">
              {lang === "ar"
                ? "رحلة بصرية وسردية ممتدة لدقيقتين تستعرض قدرات إيليت الشاملة في أعمال الـ MEP والمشاريع السحابية وتقنية الـ BIM."
                : "A high-impact cinematic documentary highlighting Elite's turnkey electromechanical mastery, landmark skyscraper deliveries, and LOD 500 digital VDC coordination."}
            </p>
          </div>
        </div>
      </section>

      {/* CINEMA PREVIEW HERO CONTAINER */}
      <section className="relative z-10 py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl overflow-hidden bg-arch-900/90 border border-arch-750/80 shadow-2xl backdrop-blur-md p-4 sm:p-8 space-y-6">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-arch-750/60 bg-black shadow-2xl">
            <video
              src="/videos/elite-corporate-showcase-2min.mp4"
              poster="/images/projects/the-gate-tower.jpg"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-arch-950/80 border border-arch-750/60">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-pulse" />
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold text-white block">
                  {lang === "ar" ? "فيلم إيليت المؤسسي الرسمي · 120 ثانية" : "Official Elite Corporate Film · 120s"}
                </span>
                <span className="text-[11px] font-mono text-arch-400 block">
                  1080p Full HD · Dual Channel Master Audio · English Voiceover
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/videos/elite-corporate-showcase-2min.mp4"
                download="elite-corporate-showcase-2min.mp4"
                className="px-4 py-2.5 rounded-xl font-bold text-xs bg-brand-500 hover:bg-brand-400 text-arch-950 shadow-md shadow-brand-500/20 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === "ar" ? "تحميل ملف الفيديو (MP4)" : "Download Video (MP4)"}</span>
              </a>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="px-4 py-2.5 rounded-xl font-bold text-xs bg-arch-900 hover:bg-arch-850 text-white border border-arch-750/80 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span>{lang === "ar" ? "مشاهدة في وضع السينما الفائق" : "Launch Interactive Cinema HUD"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER BY CHAPTER BREAKDOWN */}
      <section className="relative z-10 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest block">
            {lang === "ar" ? "الفصول والمحاور الإخراجية" : "FILM STRUCTURE & SCENE MAP"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {lang === "ar" ? "المخطط الزمني الكامل للفيلم (دقيقتان)" : "Complete 120-Second Scene Breakdown"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-arch-900/90 border border-arch-750/70 hover:border-brand-500/40 shadow-xl space-y-3 backdrop-blur-md transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-brand-400">{ch.act}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-arch-850 border border-brand-500/30 text-brand-300 font-bold">
                  {ch.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {lang === "ar" ? ch.titleAr : ch.title}
              </h3>
              <p className="text-xs text-arch-300 leading-relaxed font-normal">
                {lang === "ar" ? ch.descAr : ch.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-arch-900/90 via-arch-850/90 to-arch-900/90 border border-brand-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-2 text-center md:text-start">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {lang === "ar" ? "هل ترغب في مناقشة متطلبات مشروعك القادم؟" : "Ready to Engineer Your Next Landmark Project?"}
            </h3>
            <p className="text-xs sm:text-sm text-arch-300 max-w-xl">
              {lang === "ar"
                ? "تواصل مع المكتب الفني لإيليت في برج النخيل بالرياض لدراسة المناقصات والمشاريع الكهروميكانيكية."
                : "Connect with Elite's technical office at Al-Nakheel Tower, Riyadh, for tender estimations and BIM constructability reviews."}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setVideoModalOpen(true)}
              className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-brand-500 hover:bg-brand-400 text-arch-950 shadow-lg shadow-brand-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <Play className="w-4 h-4 ps-0.5" />
              <span>{lang === "ar" ? "مشاهدة الفيلم" : "Play Film"}</span>
            </button>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-arch-900 border border-arch-750 text-white hover:border-brand-500/40 transition-all"
            >
              <span>{t.nav.requestConsultation}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal Component */}
      <PromoVideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </div>
  );
}
