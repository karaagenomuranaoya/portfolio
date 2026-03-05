"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // 追加
import { profile } from "../data/profile";
import { GraduationCap, BookOpen, MapPin, Award, Cpu, Cloud, Baby, Languages } from "lucide-react";

export default function About() {
  // 資格データ
  const certifications = [
    { name: "基本情報技術者", icon: Cpu, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Azure Fundamentals", icon: Cloud, color: "text-sky-600", bg: "bg-sky-50" },
    { name: "保育士", icon: Baby, color: "text-pink-500", bg: "bg-pink-50" },
    { name: "英検 準1級", icon: Languages, color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-stone-50/30">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-stone-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* ヘッダーエリア */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-orange-400"></span>
              <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">About Me</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              僕自身について
            </h2>
          </div>
        </motion.div>

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* 左カラム：自己紹介文 (7/12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* モバイル/タブレット用ヘッダー（写真付き） */}
            {/* md:hidden を lg:hidden に変更し、PC表示になる直前まで表示するように調整 */}
            <div className="lg:hidden mb-8 p-4 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-orange-100 shadow-sm">
                <Image 
                  src="/images/profile/naoya.png" 
                  alt={profile.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-800">{profile.name}</h3>
                <p className="text-xs text-stone-500 font-medium">Engineer / Planner</p>
              </div>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="whitespace-pre-line text-[15px] sm:text-[16px] leading-loose text-stone-600 font-normal">
                {profile.bio}
              </p>
            </div>
          </motion.div>

          {/* 右カラム：写真・学歴・研究・資格 (5/12) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* PC用 顔写真エリア（新規追加） */}
            <div className="hidden lg:block mb-2">
               {/* ちょっと傾けて遊び心を演出 */}
              <div className="relative w-103 h-48 rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white mx-auto md:mx-0">
                <Image 
                  src="/images/profile/naoya.png" 
                  alt={profile.name} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>

            {/* 学歴 & 研究セクション */}
            <div>
              <h3 className="flex items-center gap-2 text-stone-400 font-semibold text-sm uppercase tracking-wider mb-6">
                <GraduationCap size={16} />
                Background
              </h3>

              <div className="relative border-l-2 border-stone-200 pl-6 pb-2 ml-1 mb-6">
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-300 ring-4 ring-stone-50" />
                <h4 className="text-lg font-bold text-stone-800 leading-tight">
                  {profile.university.name}
                </h4>
                <p className="text-sm text-stone-500 font-medium">
                  {profile.university.major}
                </p>
              </div>

              <div className="group relative">
                {/* 背景装飾 */}
                <div className="absolute inset-0 bg-orange-100/50 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2 duration-300" />
                
                {/* カード本体 */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-orange-100/80 rounded-2xl p-6 shadow-sm transition-transform group-hover:-translate-y-1 duration-300">
                  <div className="flex items-center gap-2 mb-3 text-orange-600">
                    <BookOpen size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Graduation Thesis</span>
                  </div>
                  
                  <h5 className="text-sm font-bold text-stone-800 mb-3 leading-snug">
                    {profile.university.thesis.title}
                  </h5>
                  
                  <p className="text-xs text-stone-600 leading-relaxed text-justify">
                    {profile.university.thesis.summary}
                  </p>
                </div>
              </div>
            </div>

            {/* 資格セクション */}
            <div>
              <h3 className="flex items-center gap-2 text-stone-400 font-semibold text-sm uppercase tracking-wider mb-4">
                <Award size={16} />
                Certifications
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white border border-stone-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`p-2 rounded-md ${cert.bg} ${cert.color}`}>
                      <cert.icon size={18} />
                    </div>
                    <span className="text-xs font-bold text-stone-700 leading-tight">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}