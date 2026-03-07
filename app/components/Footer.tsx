"use client";

import { Mail, Check } from "lucide-react"; // Checkアイコンを追加
import { useState } from "react";

export default function Footer() {
  const email = "nomura.naoya.jobsearch@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // 2秒後にアイコンを元に戻す
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <footer className="w-full bg-stone-100 border-t border-stone-200 py-12 text-stone-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-stone-700 mb-2">Naoya Nomura</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
            <br className="sm:hidden" /> Built with Next.js, Tailwind & Gemini
          </p>
          <p className="text-sm">
            <br className="sm:hidden" /> なお、このポートフォリオは私が就職を予定する会社の配属希望アンケートへの回答の参考資料として作成したものです。閲覧できるのは現状URLをお送りした社内の方のみに限られます。
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex flex-col items-center group">
            {/* コピー完了メッセージ（ツールチップ） */}
            {copied && (
              <span className="absolute -top-10 bg-stone-800 text-white text-xs py-1 px-2 rounded shadow-sm animate-bounce">
                Copied!
              </span>
            )}
            
            <button
              onClick={handleCopy}
              className="p-3 rounded-full bg-white hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 border border-stone-200 hover:border-orange-200 flex items-center gap-2 group"
              aria-label="Copy email address"
            >
              <span className="group-hover:scale-110 block transition-transform">
                {copied ? <Check size={20} className="text-green-500" /> : <Mail size={20} />}
              </span>
              <span className="text-sm font-medium pr-1">{email}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}