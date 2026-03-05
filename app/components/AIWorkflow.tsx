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
              コーディングはAIに任せ、人間は「体験」と「意思決定」に集中する。<br />
              心理学で培った人間理解と、生成AIという武器を掛け合わせた開発スタイル。
            </p>
          </motion.div>
        </div>

        {/* コンテンツエリア */}
        <div className="space-y-24">

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
                一般的なチャットボットではなく、Google AI Studioを活用。
                System Instructionで役割を定義し、Gemini 3.1 Proの長いコンテキストウィンドウを活かして、ディレクトリ構成から設計思想までをAIと共有しながら開発を進めます。
              </p>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                <p className="text-sm text-stone-500 italic">
                  &quot;フレームワークやディレクトリの作成コマンドからAIに任せる。
                  人間は『どんな体験を作りたいか』の指示と、微調整に全振りする。&quot;
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3. Speed & Ideation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <InfoCard 
              icon={<Sparkles className="text-yellow-500" />}
              title="アイデアを即座に形へ"
              desc="「こうしたい」が湧き出たら、即座にAIに投げてプロトタイプ化。「あつめる家計簿」も構想からリリースまで約2週間のスピード感で実装しました。"
            />
            <InfoCard 
              icon={<Bot className="text-green-500" />}
              title="AIを部下ではなく相棒に"
              desc="設計とロジックを伝えれば動くものが作れる。AIの特性（ハルシネーション等）を理解した上で、適切にディレクションする能力を磨いています。もちろん、コードベースの理解も今後の課題としています。"
            />
            <InfoCard 
              icon={<Wrench className="text-blue-500" />}
              title="技術への好奇心"
              desc="Flutter, Next.js, Python... 必要な技術はAIと共に走りながら学ぶ。新しい技術スタックへの挑戦は、恐怖ではなく楽しみです。"
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