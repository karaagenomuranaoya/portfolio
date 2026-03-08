"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, CreditCard, Layers } from "lucide-react";
import Link from "next/link";

export default function NNoblesseShowcase() {
  return (
    <section id="latest-work" className="w-full bg-[#0a0a0a] py-24 border-b border-stone-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 左側：キャッチコピーと概要 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-sm font-bold tracking-widest uppercase mb-6">
                Latest Work
              </span>
              <div className="flex items-center gap-3 mb-4 text-orange-500">
                <CreditCard size={28} />
                <span className="text-2xl tracking-[0.3em] font-serif">N-NOBLESSE</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                かけがえのない<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  BEST TIME
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                設定も規約もすべて架空。<br className="hidden sm:block" />
                AIで作ったクレジットカード申込UI体験ページ。
              </p>
            </div>

            {/* サイトへのリンク */}
            <div className="pt-4">
              <Link href="https://n-noblesse.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-orange-600 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    申込体験をする <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 右側：ネタバレ＆技術解説エリア */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* 装飾の光 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-stone-800 rounded-2xl blur opacity-20" />
            
            <div className="relative bg-[#111] border border-stone-800 rounded-2xl p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-stone-800 pb-4">
                <Terminal className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold text-white">Developer's Note</h3>
              </div>
              
              <div className="space-y-6 text-sm sm:text-base text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-white">架空のクレジットカード申込ページ</strong>
                </p>
                <p>
                  架空のクレジットカード申し込みフォームの入力が体験できるサイトです。入力データはすべてクライアントサイド（ブラウザ内）で完結しており、外部サーバーへの送信・保存は一切行わっていません。申し込むだけで終わりなので悪しからず。シックで豪華、けれど見やすいUIにこだわりました。
                </p>
                
                <div className="bg-white/5 p-5 rounded-lg border border-white/10 space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <Layers className="text-orange-500 shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="text-white font-bold mb-1">こだわり</h4>
                      <p className="text-sm">
                        ・丁寧なバリデーション<br/>
                        ・郵便番号から住所自動入力<br/>
                        ・デモ入力機能で簡単に試せる<br/>
                        ・AIと作成した10章40条からなる架空の規約<br/>
                        ・年会費11,000円なのにコンシェルジュデスクまでつく、大盤振る舞いなプレミアム特典設定
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}