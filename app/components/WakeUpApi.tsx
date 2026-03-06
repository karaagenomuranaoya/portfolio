"use client";

import { useEffect } from "react";

export default function WakeUpApi() {
  useEffect(() => {
    // 開発環境(localhost)では無駄な起動を防ぐため実行しない（任意）
    if (process.env.NODE_ENV === "development") return;

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) return;

    // "Fire and Forget"（撃ちっ放し）
    // 結果を受け取る必要はない。ただアクセスして「起きろ！」と伝えるだけ。
    fetch(`${API_URL}/api/likes`, { mode: 'no-cors' })
      .catch(() => {
        // エラーが出ても無視する（ユーザーには関係ないため）
        // コンソールも汚さないように何もしない
      });
      
    console.log("🔥 Java API Pre-warming triggered...");
  }, []);

  // 画面には何も描画しない
  return null;
}