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
  CheckCircle2,
  Users,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* Page Header */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-emerald-50/50 to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "ar" ? "الهوية والإرث الهندسي" : "Corporate Profile & Governance"}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              {t.about.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.about.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Foundation */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                {lang === "ar" ? "الجذور المؤسسية والخبرة الممتدة" : "Foundation & Heritage"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {t.about.ourStoryTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {companyProfile.foundingRoots}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === "ar"
                  ? "على الرغم من أن شركة أيبك في مرحلتها المؤسسية المتجددة بالمملكة، إلا أن جذور فريقنا الهندسي والتنفيذي تمتد عميقاً في تراث شركة ASA للمقاولات التي تضم خبراء محترفين يتمتعون بأكثر من 35 عاماً من الخبرة الجماعية في تنفيذ المشاريع الكهروميكانيكية المعقدة عبر السعودية، الكويت، مصر، وإسبانيا."
                  : "While APEC represents a revitalized corporate entity in the Kingdom of Saudi Arabia, our executive roots extend deep into the heritage of ASA Contracting, bringing forward a seasoned cadre of engineers with over 35 years of collective execution on supertall skyscrapers, healthcare campuses, and industrial networks."}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex-1 min-w-[200px] shadow-xs">
                  <span className="text-3xl font-black text-emerald-700 font-sans block">35+</span>
                  <span className="text-xs text-slate-700 font-bold">
                    {lang === "ar" ? "عاماً من الإنجازات المتراكمة" : "Years Combined Engineering Legacy"}
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex-1 min-w-[200px] shadow-xs">
                  <span className="text-3xl font-black text-slate-900 font-sans block">Class 1</span>
                  <span className="text-xs text-slate-700 font-bold">
                    {lang === "ar" ? "تصنيف الدرجة الأولى (بلدي)" : "MOMRAH Certified Grade"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xl p-6 flex flex-col gap-5">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <span>{lang === "ar" ? "الاعتمادات الحكومية الرسمية" : "Verified Credentials"}</span>
                </h3>
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex justify-between shadow-xs">
                    <span className="text-slate-500">{lang === "ar" ? "السجل التجاري:" : "Commercial Registration:"}</span>
                    <span className="font-mono font-bold text-slate-900">1010943353</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex justify-between shadow-xs">
                    <span className="text-slate-500">{lang === "ar" ? "الرقم الضريبي ZATCA:" : "VAT Number:"}</span>
                    <span className="font-mono font-bold text-slate-900">311881290700003</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex justify-between shadow-xs">
                    <span className="text-slate-500">{lang === "ar" ? "تصنيف التشييد والبناء:" : "MOMRAH Construction:"}</span>
                    <span className="font-bold text-emerald-700">{lang === "ar" ? "الدرجة الأولى (BBB+)" : "First Class (BBB+)"}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex justify-between shadow-xs">
                    <span className="text-slate-500">{lang === "ar" ? "نسبة التوطين (قوى):" : "Qiwa Saudization:"}</span>
                    <span className="font-bold text-emerald-700">{companyProfile.registrations.saudizationStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.about.visionTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.visionText}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.about.missionTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            {/* Values */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.about.valuesTitle}
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">{t.about.value1Title}:</span>
                  <span>{t.about.value1Desc}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">{t.about.value2Title}:</span>
                  <span>{t.about.value2Desc}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">{t.about.value3Title}:</span>
                  <span>{t.about.value3Desc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Executive Board */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              {t.about.boardSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
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
                  className="group rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500/60 hover:shadow-xl transition-all"
                >
                  <div>
                    {/* Portrait Image */}
                    <div className="relative w-full h-72 rounded-xl overflow-hidden bg-slate-100 mb-5 border border-slate-200">
                      <Image
                        src={member.image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {name}
                    </h3>
                    <span className="text-xs text-emerald-700 font-bold block mb-4">
                      {role}
                    </span>

                    <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {bio.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
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
