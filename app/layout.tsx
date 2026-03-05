import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 必要ならNoto Serif JPなどに変えても似合います
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naoya Nomura | AI-Driven Product Engineer",
  description: "企画から実装までをAIと共に駆け抜けるプロダクトエンジニアのポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} relative overflow-x-hidden`}>
        {/* 背景の装飾効果（木漏れ日のような優しい光） */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          {/* 左上の柔らかいオレンジ */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-200/40 rounded-full blur-[100px]" />
          {/* 右下の爽やかなグリーン */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-200/30 rounded-full blur-[100px]" />
          {/* 中央付近のハイライト */}
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-yellow-100/40 rounded-full blur-[80px]" />
        </div>
        
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-between px-4 sm:px-8 md:px-24 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}