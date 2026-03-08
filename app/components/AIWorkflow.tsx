"use client";

import { motion } from "framer-motion";
import { Bot, Zap, FileJson, Cpu, Sparkles, Wrench } from "lucide-react";

export default function AIWorkflow() {
  return (
    <section className="py-24 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide mb-6">
              Engineering Style
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-800 mb-6">
              AI-Native Development
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              生成AIをフル活用した開発スタイル。
            </p>
          </motion.div>
        </div>

        {/* コンテンツエリア */}
        <div className="space-y-24">
          {/* 2. Google AI Studio & Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-1 relative"
            >
              {/* ▼▼ここにスクショ2（AI Studio）を配置▼▼ */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100 aspect-video flex items-center justify-center group">
                <img src="/images/workflow/studio.png" alt="Google AI Studio" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-bold text-stone-800">最新モデルで「対話型」開発</h3>
              </div>
              <p className="text-stone-600 leading-loose mb-6">
                自分はまだコード勉強中の身であり、コーディングは主にAIが担当。
                一般的なチャットボットではなく、Google AI Studioを活用しています。
                System Instructionで役割を定義し、Gemini 3.1 Proの長いコンテキストウィンドウを活かして、ワクワクする機能を考えたり、具体的なコードを出力したり。相棒と二人三脚で開発を進めます。
              </p>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                <p className="text-sm text-stone-500 italic">
                  &quot;CursorやClineなどエージェントAIも使ってみたけど、
                  「コードはAIだけど自分で作ってる！」感じがするStudioでの開発が気に入ってるんだよね。&quot;
                </p>
              </div>
            </motion.div>
          </div>

          {/* 1. Context Optimization (自作スクリプト) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  <FileJson size={24} />
                </div>
                <h3 className="text-2xl font-bold text-stone-800">大規模開発を支える「コンテキスト生成」</h3>
              </div>
              <p className="text-stone-600 leading-loose mb-6">
                プロジェクトが肥大化すると、AIは文脈を見失いがちです。
                そこで、プロジェクト構造と主要コードを一括でAIが理解可能な形式（Project Context for AI）に変換するPythonスクリプト"textify.py"をAIで作成し、運用しています。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-stone-600">
                  <Zap size={18} className="text-orange-500 mt-1 shrink-0" />
                  <span>除外設定（.gitignore的な）も完備し、トークンを節約</span>
                </li>
                <li className="flex items-start gap-2 text-stone-600">
                  <Zap size={18} className="text-orange-500 mt-1 shrink-0" />
                  <span>「不便ならツールを作る」精神で開発効率を最大化</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              {/* ▼▼ここにスクショ1（VS Codeとスクリプト）を配置▼▼ */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-900 aspect-video flex items-center justify-center group">
                <img src="/images/workflow/script.png" alt="Context Generation Script" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          
          {/* 3. Speed & Ideation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <InfoCard 
              icon={<Sparkles className="text-yellow-500" />}
              title="アイデアを即座に形へ"
              desc="「家計簿ってもっと面白くできそうだよな」感じた不便や「あったらいいな」を「そうだ、自分で作ろう」へ昇華できるようになったのは、AI時代の恩恵であり、開発で得た一番の学びかもしれません。"
            />
            <InfoCard 
              icon={<Bot className="text-green-500" />}
              title="AIは部下？"
              desc="僕にとってAIは相棒であり、友人です。アイデアを伝えても頓珍漢なコードを出すこともあります。そんな時には「惜しい！」「もうちょいこうしたいな」エールを送り、できたら「完璧！」「よくやった！」一緒に喜びます。（「AIが持つコンテキストに評価を下すことでアウトプットの質が高まる」というのももちろんありますが、なんかドラえもんみたいで愛着が湧いてきます笑）"
            />
            <InfoCard 
              icon={<Wrench className="text-blue-500" />}
              title="でもやっぱ自分で学ばなきゃ"
              desc="AIがいないと書けない...というコンプレックスも少なからずあります。仕事をしながら、自分で学びながら、本物の技術を少しずつ身につけていきたいな。"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-stone-50 rounded-xl border border-stone-100 shadow-sm"
    >
      <div className="mb-4">{icon}</div>
      <h4 className="font-bold text-stone-800 mb-2">{title}</h4>
      <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}