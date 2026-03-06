"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Coffee, Server } from "lucide-react";

export default function LikeButton() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false); // ローカルでのクリック演出用

  // 環境変数からAPIのURLを取得
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/likes`;

  // 初回ロード時に現在のいいね数を取得
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCount(data.count);
      } catch (error) {
        console.error("API Error:", error);
        // エラー時はとりあえずnullのままにするか、0を表示するか
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, [API_URL]);

  // いいねボタンを押した時の処理
  const handleLike = async () => {
    // 楽観的UI更新（サーバーの応答を待たずに数字を増やす演出）
    setIsLiked(true);
    setCount((prev) => (prev !== null ? prev + 1 : 1));
    setTimeout(() => setIsLiked(false), 1000); // 1秒後にハートのエフェクトを戻す

    try {
      await fetch(API_URL, {
        method: "POST",
      });
      // 本当はここでサーバーから最新の値を返してもらうのが確実だが、
      // ユーザー体験優先でエラーがない限りは何もしない
    } catch (error) {
      console.error("Like Error:", error);
      // エラーなら数字を戻すなどの処理を入れるとなお良い
      setCount((prev) => (prev !== null ? prev - 1 : null));
    }
  };

  return (
    <section className="py-12 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* 技術アピールエリア */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-orange-800 text-xs font-mono">
          <Server size={14} />
          <span>Powered by Java (Spring Boot) on Render</span>
        </div>

        <h3 className="text-xl font-bold text-stone-700 mb-2">
          気に入っていただけましたか？
        </h3>
        <p className="text-sm text-stone-500 mb-8">
          このボタンは、Springで作成したバックエンドのJava APIと連携して動作しています。<br />
          （無料サーバーのため、APIの起動には時間がかかります。あと、すぐにデータが吹っ飛びます。<br />
          実はこのサイトにアクセスした時点で、APIにfetchリクエストを飛ばして「起こして」いるのですが<br />
          それでも起動せず押せなかったらごめんなさい。もうちょっと待ったら起動する...かも？）
        </p>

        {/* ボタン本体 */}
        <div className="relative inline-block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className="group relative flex items-center gap-4 px-8 py-4 bg-white border-2 border-stone-200 rounded-full shadow-sm hover:border-pink-300 hover:shadow-pink-100 transition-all duration-300"
          >
            {/* ハートアイコンのアニメーション */}
            <div className="relative">
              <Heart 
                size={32} 
                className={`transition-colors duration-300 ${isLiked ? "fill-pink-500 text-pink-500" : "text-stone-300 group-hover:text-pink-400"}`} 
              />
              <AnimatePresence>
                {isLiked && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    exit={{ scale: 2, opacity: 0 }}
                    className="absolute inset-0 text-pink-500"
                  >
                    <Heart size={32} className="fill-pink-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Total Likes</span>
              {isLoading ? (
                <div className="h-8 w-16 bg-stone-100 animate-pulse rounded mt-1" />
              ) : (
                <span className="text-3xl font-black text-stone-800 tabular-nums">
                  {count !== null ? count.toLocaleString() : "-"}
                </span>
              )}
            </div>
          </motion.button>

          {/* クリック時の+1エフェクト */}
          <AnimatePresence>
            {isLiked && (
              <motion.span
                initial={{ opacity: 1, y: -20, x: 0 }}
                animate={{ opacity: 0, y: -60 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl font-bold text-pink-500 pointer-events-none"
              >
                +1
              </motion.span>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}