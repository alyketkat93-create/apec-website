"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { teamData } from "@/data/team";
import { companyProfile } from "@/data/company";
import {
  ShieldCheck,
  Award,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-arch-950 text-arch-200">
      {/* Page Header with Blueprint Grid & Radial Glow */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-arch-950 via-arch-900 to-arch-950 border-b border-arch-800 overflow-hidden">
        {/* Technical Background Mesh */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-md opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial-glow opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/15 border border-brand-500/35 text-brand-300 text-xs font-bold shadow-md backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              <span>{lang === "ar" ? "الهوية والإرث الهندسي" : "Corporate Profile & Governance"}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {t.about.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-arch-300 leading-relaxed">
              {t.about.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Foundation */}
      <section className="py-20 bg-arch-900 border-b border-arch-800 relative bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                {lang === "ar" ? "الجذور المؤسسية والخبرة الممتدة" : "Foundation & Heritage"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t.about.ourStoryTitle}
              </h2>
              <p className="text-sm sm:text-base text-arch-200 leading-relaxed font-medium">
                {companyProfile.foundingRoots}
              </p>
              <p className="text-sm sm:text-base text-arch-300 leading-relaxed">
                {lang === "ar"
                  ? "على الرغم من أن شركة إيليت في مرحلتها المؤسسية المتجددة بالمملكة، إلا أن جذور فريقنا الهندسي والتنفيذي تمتد عميقاً في تراث شركة ASA للمقاولات التي تضم خبراء محترفين يتمتعون بأكثر من 35 عاماً من الخبرة الجماعية في تنفيذ المشاريع الكهروميكانيكية المعقدة عبر السعودية، الكويت، مصر، وإسبانيا."
                  : "While Elite represents a revitalized corporate entity in the Kingdom of Saudi Arabia, our executive roots extend deep into the heritage of ASA Contracting, bringing forward a seasoned cadre of engineers with over 35 years of collective execution on supertall skyscrapers, healthcare campuses, and industrial networks."}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="p-5 rounded-2xl bg-arch-850/90 border border-brand-500/30 flex-1 min-w-[200px] shadow-lg backdrop-blur-md">
                  <span className="text-3xl font-black text-brand-400 font-sans font-mono block">35+</span>
                  <span className="text-xs text-arch-300 font-bold">
                    {lang === "ar" ? "عاماً من الإنجازات المتراكمة" : "Years Combined Engineering Legacy"}
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-arch-850/90 border border-arch-750 flex-1 min-w-[200px] shadow-lg backdrop-blur-md">
                  <span className="text-3xl font-black text-white font-sans font-mono block">Class 1</span>
                  <span className="text-xs text-arch-300 font-bold">
                    {lang === "ar" ? "تصنيف الدرجة الأولى (بلدي)" : "MOMRAH Certified Grade"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-arch-850/90 border border-arch-750 shadow-2xl p-6 flex flex-col gap-5 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-400" />
                  <span>{lang === "ar" ? "الاعتمادات الحكومية الرسمية" : "Verified Credentials"}</span>
                </h3>
                <div className="space-y-3 text-xs text-arch-300">
                  <div className="p-3.5 rounded-xl bg-arch-950/80 border border-arch-800 flex justify-between shadow-xs">
                    <span className="text-arch-400">{lang === "ar" ? "السجل التجاري:" : "Commercial Registration:"}</span>
                    <span className="font-mono font-bold text-white">1010943353</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-arch-950/80 border border-arch-800 flex justify-between shadow-xs">
                    <span className="text-arch-400">{lang === "ar" ? "الرقم الضريبي ZATCA:" : "VAT Number:"}</span>
                    <span className="font-mono font-bold text-white">311881290700003</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-arch-950/80 border border-arch-800 flex justify-between shadow-xs">
                    <span className="text-arch-400">{lang === "ar" ? "تصنيف التشييد والبناء:" : "MOMRAH Construction:"}</span>
                    <span className="font-bold text-brand-400">{lang === "ar" ? "الدرجة الأولى (BBB+)" : "First Class (BBB+)"}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-arch-950/80 border border-arch-800 flex justify-between shadow-xs">
                    <span className="text-arch-400">{lang === "ar" ? "نسبة التوطين (قوى):" : "Qiwa Saudization:"}</span>
                    <span className="font-bold text-brand-400">{companyProfile.registrations.saudizationStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-arch-950 border-b border-arch-800 relative bg-blueprint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-arch-900 border border-arch-750/80 flex flex-col gap-4 shadow-xl hover:border-brand-500/50 hover:bg-arch-850/80 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.about.visionTitle}
              </h3>
              <p className="text-sm text-arch-300 leading-relaxed">
                {t.about.visionText}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-arch-900 border border-arch-750/80 flex flex-col gap-4 shadow-xl hover:border-brand-500/50 hover:bg-arch-850/80 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.about.missionTitle}
              </h3>
              <p className="text-sm text-arch-300 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-2xl bg-arch-900 border border-arch-750/80 flex flex-col gap-4 shadow-xl hover:border-brand-500/50 hover:bg-arch-850/80 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.about.valuesTitle}
              </h3>
              <div className="space-y-3 text-xs text-arch-300">
                <div>
                  <span className="font-bold text-white block mb-0.5">{t.about.value1Title}:</span>
                  <span>{t.about.value1Desc}</span>
                </div>
                <div>
                  <span className="font-bold text-white block mb-0.5">{t.about.value2Title}:</span>
                  <span>{t.about.value2Desc}</span>
                </div>
                <div>
                  <span className="font-bold text-white block mb-0.5">{t.about.value3Title}:</span>
                  <span>{t.about.value3Desc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Executive Board (Eng. Tamim Badawi & Alaa Badawi) */}
      <section className="py-20 lg:py-28 bg-arch-900 border-b border-arch-800 relative bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
              {t.about.boardSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t.about.boardTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamData.map((member) => {
              const name = lang === "ar" ? member.nameAr : member.name;
              const role = lang === "ar" ? member.roleAr : member.role;
              const bio = lang === "ar" ? member.bioAr : member.bio;
              return (
                <div
                  key={member.id}
                  className="group rounded-2xl bg-arch-850 border border-arch-750 p-6 flex flex-col justify-between hover:border-brand-500/60 hover:bg-arch-800 hover:shadow-2xl transition-all"
                >
                  <div>
                    {/* Portrait Image */}
                    <div className="relative w-full h-72 rounded-xl overflow-hidden bg-arch-950 mb-5 border border-arch-700">
                      <Image
                        src={member.image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                      {name}
                    </h3>
                    <span className="text-xs text-brand-400 font-bold block mb-4">
                      {role}
                    </span>

                    <ul className="space-y-1.5 text-xs text-arch-300 leading-relaxed border-t border-arch-750 pt-3">
                      {bio.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-brand-400 font-bold">•</span>
                          <span className="line-clamp-2">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
