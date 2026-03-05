"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Smartphone, Code2, Database, Zap, Layers, Calculator, Gamepad2, AlertTriangle, MousePointer2 } from "lucide-react";

export default function AtsumeruPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* --- ナビゲーション --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-100 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            href="/#projects"
            className="inline-flex items-center text-stone-500 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">ポートフォリオに戻る</span>
          </Link>
        </div>
      </nav>

      {/* --- ヒーローセクション --- */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-bold tracking-wide mb-6">
              Featured Project / Flutter App
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-stone-800 mb-6 tracking-tight leading-tight">
              あつめる家計簿
            </h1>
            <p className="text-xl sm:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-medium">
              「面倒な記録」を「集める楽しさ」へ。<br />
              家計簿にガチャ要素を融合させた、<br className="sm:hidden" />
              毎日の入力が待ち遠しくなるアプリ。
            </p>
          </motion.div>

          {/* 技術スタックバッジ */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {["Flutter", "Dart", "Shared Preferences", "Riverpod", "Clean Architecture"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-md bg-stone-100 border border-stone-200 text-stone-600 text-xs font-mono">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
        
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* --- メインビジュアル & 概要 --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-100 rounded-3xl p-8 sm:p-12 shadow-inner border border-stone-200 flex items-center justify-center aspect-square md:aspect-auto md:h-[600px]"
          >
            {/* メイン画像：kibo.jpg (入力画面) */}
            <div className="relative w-full max-w-[320px] shadow-2xl rounded-[30px] overflow-hidden border-8 border-stone-800">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/images/atsumeru/kibo.jpg" alt="あつめる家計簿 入力画面" className="w-full h-auto" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-stone-800">
                <span className="text-orange-500">継続率</span>をデザインする。
              </h2>
              <p className="text-stone-600 leading-loose text-lg">
                家計簿が続かない最大の理由は「記録の面倒さ」と「見返りのなさ」にあります。<br />
                このアプリは、<strong className="text-stone-800 bg-orange-100 px-1">「入力＝ガチャチケット獲得」</strong>という報酬系を組み込むことで、
                ユーザーの行動変容を促します。<br />
                しかし、ただのゲームではありません。
                入力体験（UX）におけるストレスを極限まで排除し、
                ツールとしての実用性も徹底的に追求しました。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeaturePoint icon={<Zap size={20} />} title="爆速入力" desc="起動から入力完了まで最短3タップ。ストレスゼロのUI設計。" />
              <FeaturePoint icon={<Gamepad2 size={20} />} title="収集癖を刺激" desc="全アイテムに固有のフレーバーテキストを用意。集めるのが楽しい。" />
              <FeaturePoint icon={<Database size={20} />} title="完全オフライン" desc="Shared Preferencesを用いたローカル完結型。通信待ち時間なし。" />
              <FeaturePoint icon={<Calculator size={20} />} title="独自計算ロジック" desc="小数点を排除しつつ税計算を実現した、こだわりのキーボード。" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 詳細機能深掘りセクション --- */}
      <section className="bg-stone-50 py-24 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-32">
          
          {/* Feature 1: こだわりのキーボード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase">
                UX Design
              </div>
              <h3 className="text-3xl font-bold text-stone-800">
                「小数点」を捨てた、<br />
                逆転の発想のキーボード
              </h3>
              <p className="text-stone-600 leading-loose">
                家計簿において、小数点の入力ミスは計算誤差の元凶です。<br />
                そこで、キーボードから「.（ドット）」を排除しました。<br />
                代わりに実装したのが、<strong className="text-stone-800">「×」ボタンによる税計算トグル</strong>です。
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <p className="text-stone-600 text-sm">
                    <span className="font-bold text-stone-700">0ボタン → 1.08倍</span>：金額入力後に「×」を押すと、0ボタンが「8%」に変化。
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <p className="text-stone-600 text-sm">
                    <span className="font-bold text-stone-700">00ボタン → 1.1倍</span>：同時に00ボタンが「10%」に変化。ワンタップで税込計算完了。
                  </p>
                </li>
              </ul>
              <p className="text-xs text-stone-500 mt-4 bg-white p-4 rounded-lg border border-stone-200">
                <Code2 size={14} className="inline mr-1" />
                `SimpleCalculator` クラスで数式をパースし、最終的に `round()` で整数化することで、1円単位のズレも防いでいます。
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative shadow-xl rounded-[20px] overflow-hidden border-4 border-stone-200 w-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/atsumeru/x.jpg" alt="独自の税計算キーボード" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Feature 2: ガチャと狂気のフレーバーテキスト */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="flex flex-col gap-6 items-center">
               <div className="flex gap-4">
                 <div className="relative shadow-xl rounded-[20px] overflow-hidden border-4 border-stone-200 w-[200px]">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src="/images/atsumeru/bagu.jpg" alt="バグアイコン" className="w-full h-auto" />
                 </div>
                 <div className="relative shadow-xl rounded-[20px] overflow-hidden border-4 border-stone-200 w-[200px]">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src="/images/atsumeru/nezumi.jpg" alt="大ネズミ" className="w-full h-auto" />
                 </div>
               </div>
               <p className="text-xs text-center text-stone-400">
                 左：開発者の天敵「バグ」 / 右：夢の国へのオマージュ「大ネズミ」
               </p>
             </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase">
                Gamification & Writing
              </div>
              <h3 className="text-3xl font-bold text-stone-800">
                1日5回まで。<br />
                「バグ」すら愛せる収集要素
              </h3>
              <p className="text-stone-600 leading-loose">
                入力すると1日5回までガチャチケットが付与されます。<br />
                排出されるのは、実際にアプリアイコンとして使えるドット絵たち。<br />
                同じアイテムを引くとLv10まで進化し、色が変化していきます。
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h4 className="font-bold text-stone-800 flex items-center gap-2">
                  <MousePointer2 size={18} className="text-purple-600"/>
                  伝説の大ネズミ (Lv.10 Max)
                </h4>
                <p className="text-stone-600 italic text-sm border-l-4 border-purple-200 pl-4 py-1">
                  「夢を叶える方法はたった一つ。叶うまで死ぬ気で足掻き続けることだ。」<br />
                  夜の闇に消えていく彼のシルエットは、今も世界でもっとも愛されている。
                </p>
                <p className="text-xs text-stone-400 text-right">—— アプリ内フレーバーテキストより</p>
              </div>
              
              <p className="text-stone-600 text-sm">
                某テーマパークの主をリスペクトした「大ネズミ」や、開発中に苦しめられた「バグ」など、
                エンジニアならではのユーモアと物語を詰め込みました。
              </p>
            </div>
          </div>

          {/* Feature 3: 分析と管理 */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase mb-4">
                Visualization
              </div>
              <h3 className="text-3xl font-bold text-stone-800 mb-4">
                「見える化」も、美しく。
              </h3>
              <p className="text-stone-600">
                円グラフ、カレンダー、そして支払い方法別の管理。<br />
                Flutterの描画性能を活かし、サクサク動くレポート画面を実現しました。
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ScreenshotCard src="/images/atsumeru/gurafu.jpg" title="月次レポート" />
              <ScreenshotCard src="/images/atsumeru/karenda-.jpg" title="カレンダー" />
              <ScreenshotCard src="/images/atsumeru/himoku.jpg" title="費目リスト" />
              <ScreenshotCard src="/images/atsumeru/siharai.jpg" title="支払い管理" />
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-stone-200 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
               <div className="flex-1 space-y-3">
                 <h4 className="font-bold text-stone-800 flex items-center gap-2">
                   <AlertTriangle size={18} className="text-orange-500" />
                   Tips機能の実装
                 </h4>
                 <p className="text-stone-600 text-sm leading-relaxed">
                   初めてのユーザーが迷わないよう、「Tips（おまけページ）」を用意。
                   機能の説明だけでなく、家計簿を続けるコツなども掲載し、アプリ全体の「親しみやすさ」を底上げしています。
                 </p>
               </div>
               <div className="w-full md:w-1/3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/atsumeru/tips.jpg" alt="Tips画面" className="w-full h-auto rounded-lg border border-stone-100" />
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- コード/技術解説セクション --- */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-8 border-b border-stone-200 pb-4">
          Technical Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TechBlock 
            title="Clean Architecture & Repository Pattern"
            content="データ層（Shared Preferences）とUI層を分離。将来的にFirebaseやSQLiteへ移行することになっても、UIコードへの影響を最小限に抑える設計にしています。"
          />
          <TechBlock 
            title="Mixins for Flash Messages"
            content="`FlashMessageMixin` を作成し、複数の画面で共通して使う「保存しました」などの通知ロジックを共通化。コードの重複を防ぎ、メンテナンス性を向上させています。"
          />
          <TechBlock 
            title="Robust Calculator Logic"
            content="既存のライブラリに頼らず、`SimpleCalculator` クラスを自作。トークン解析を行い、演算子の優先順位（×÷を先に計算）を正しく処理しつつ、家計簿特有の整数丸め処理を組み込んでいます。"
          />
          <TechBlock 
            title="Data Migration Strategy"
            content="開発途中で「カテゴリ名管理」から「ID管理」へ移行した際、`_migrateCategoriesToIds` メソッドを実装。既存ユーザーのデータを壊すことなく、アプリ起動時に裏側でデータ構造を自動修復する仕組みを取り入れました。"
          />
        </div>
      </section>

      {/* --- フッター --- */}
      <section className="bg-stone-900 py-16 text-center text-stone-400">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Thank you for watching!</h2>
          <p className="mb-8 leading-relaxed">
            あつめる家計簿は、僕の「技術」と「遊び心」の集大成です。<br />
            これからも、「使っていて楽しい」「心地よい」と思えるプロダクトを作り続けていきます。
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all hover:scale-105"
          >
            他のプロジェクトも見る
            <ArrowLeft size={18} className="rotate-180" />
          </Link>
        </div>
      </section>

    </div>
  );
}

// --- サブコンポーネント ---

function FeaturePoint({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-2 bg-stone-100 rounded-lg text-stone-600 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-stone-800 text-sm mb-1">{title}</h4>
        <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ScreenshotCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="group space-y-3">
      <div className="relative shadow-lg rounded-[16px] overflow-hidden border border-stone-200 bg-stone-100 transition-transform duration-300 group-hover:-translate-y-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={title} className="w-full h-auto" />
      </div>
      <p className="text-center text-sm font-bold text-stone-600">{title}</p>
    </div>
  );
}

function TechBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-6 bg-white rounded-xl border border-stone-200 hover:border-orange-200 transition-colors">
      <h3 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
        <Layers size={18} className="text-stone-400" />
        {title}
      </h3>
      <p className="text-stone-600 text-sm leading-relaxed">
        {content}
      </p>
    </div>
  );
}