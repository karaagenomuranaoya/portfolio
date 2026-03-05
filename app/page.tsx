import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AIChat from "./components/AIChat";
import AtsumeruShowcase from "./components/AtsumeruShowcase"; // 新規追加

export default function Home() {
  return (
    <div className="w-full flex flex-col relative">
      <Hero />
      
      {/* ここにドカンと配置！ */}
      <AtsumeruShowcase />
      
      {/* その他の作品は控えめに */}
      <Projects />
      
      <About />
      
      <AIChat />
    </div>
  );
}