import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AIChat from "./components/AIChat"; // 追加

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 relative">
      <Hero />
      <Projects />
      <About />
      
      {/* AIチャットを配置（fixedポジションなのでどこに置いてもOKですが、論理的には最後） */}
      <AIChat />
    </div>
  );
}