"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, PenTool } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[20vh] flex flex-col items-center justify-center text-center pt-20">
      
      {/* タグ：優しいパステル調 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        <Badge icon={<Brain size={14} />} text="Psychology Student" color="bg-orange-100 text-orange-700 border-orange-200" />
        <Badge icon={<Code2 size={14} />} text="Prototyper" color="bg-blue-100 text-blue-700 border-blue-200" />
        <Badge icon={<PenTool size={14} />} text="Service Design" color="bg-green-100 text-green-700 border-green-200" />
      </motion.div>

      {/* メインタイトル */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-800 mb-6 max-w-4xl leading-tight"
      >
        アプリ開発ひよっこ
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          野村直矢のポートフォリオ
        </span>
      </motion.h1>

      {/* サブタイトル */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-base sm:text-lg text-stone-600 max-w-2xl mb-10 leading-relaxed px-4"
      >
        東大教育学部で心理学を学んでいました。
        <br className="hidden sm:block" />
        趣味でAIを使ってアプリ開発をしています。
        <br />
        拙作をまとめているのでよければごゆっくりご覧ください。
      </motion.p>
    </section>
  );
}

function Badge({ icon, text, color }: { icon: React.ReactNode; text: string; color: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${color}`}>
      {icon}
      {text}
    </span>
  );
}