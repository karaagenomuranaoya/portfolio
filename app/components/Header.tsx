"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ロゴエリア */}
        <Link href="/" className="group">
          <span className="text-xl font-bold text-stone-700 group-hover:text-orange-600 transition-colors">
            Naoya Nomura
          </span>
          <span className="ml-2 text-xs text-stone-500 hidden sm:inline-block">
            技術とユーモアで誇れるプロダクトを。
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-stone-600 hover:text-orange-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-stone-200"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}