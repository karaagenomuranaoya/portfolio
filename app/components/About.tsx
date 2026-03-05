"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { GraduationCap, BookOpen, Sparkles, User, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-stone-50/30">
      {/* 背景の装飾（あえて控えめに） */}
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
              開発背景と、僕自身について
            </h2>
          </div>
        
        </motion.div>

        {/* メインコンテンツエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* 左カラム：自己紹介文 (7/12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* モバイルのみ表示するプロフィールヘッダー */}
            <div className="md:hidden mb-8 p-4 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center gap-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-bold text-stone-800">{profile.name}</h3>
                <p className="text-xs text-stone-500">{profile.role}</p>
              </div>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="whitespace-pre-line text-[15px] sm:text-[16px] leading-loose text-stone-600 font-normal">
                {profile.bio}
              </p>
            </div>

            {/* GitHubリンクなどがあればここにボタンとして配置しても良い */}
          </motion.div>

          {/* 右カラム：学歴・研究 (5/12) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* 学歴セクション */}
            <div className="pl-2">
              <h3 className="flex items-center gap-2 text-stone-400 font-semibold text-sm uppercase tracking-wider mb-6">
                <GraduationCap size={16} />
                Background
              </h3>

              <div className="relative border-l-2 border-stone-200 pl-6 pb-2 ml-1 space-y-1">
                {/* タイムラインのドット */}
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-300 ring-4 ring-stone-50" />
                
                <h4 className="text-lg font-bold text-stone-800 leading-tight">
                  {profile.university.name}
                </h4>
                <p className="text-sm text-stone-500 font-medium">
                  {profile.university.major}
                </p>
              </div>
            </div>

            {/* 卒論カード（研究ノート風デザイン） */}
            <div className="group relative mt-2">
              <div className="absolute inset-0 bg-orange-100/50 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2 duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm border border-orange-100/80 rounded-2xl p-6 sm:p-7 shadow-sm transition-transform group-hover:-translate-y-1 duration-300">
                
                <div className="flex items-center gap-2 mb-4 text-orange-600">
                  <BookOpen size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">Research Theme</span>
                </div>

                <h5 className="text-base font-bold text-stone-800 mb-3 leading-snug">
                  {profile.university.thesis.title}
                </h5>

                <p className="text-sm text-stone-600 leading-relaxed mb-4 border-b border-stone-100 pb-4">
                  {profile.university.thesis.summary}
                </p>
              </div>
            </div>
            {/* 就職予定などの補足情報（あれば） */}
            <div className="bg-stone-100/50 rounded-xl p-4 flex items-start gap-3 mt-2">
              <MapPin size={16} className="text-stone-400 mt-1 flex-shrink-0" />
              <p className="text-xl text-stone-500 leading-relaxed">
                2026 Spring — Kanagawa, JP<br/>
                Next Career: SIer (Engineer)
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}