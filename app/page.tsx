import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AIChat from "./components/AIChat";
import AtsumeruShowcase from "./components/AtsumeruShowcase";
import AIWorkflow from "./components/AIWorkflow"; // 追加

export default function Home() {
  return (
    <div className="w-full flex flex-col relative">
      <Hero />
      
      {/* 1. メインプロダクトで実力を証明 */}
      <AtsumeruShowcase />

      {/* 2. それを支える開発スタイル（DX部への強烈なアピール） */}
      <AIWorkflow />
      
      {/* 3. その他の実験作 */}
      <Projects />
      
      {/* 4. 人となり */}
      <About />
      
      <AIChat />
    </div>
  );
}