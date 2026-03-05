"use client";

import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-100 border-t border-stone-200 py-12 text-stone-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-stone-700 mb-2">Naoya Nomura</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
            <br className="sm:hidden" /> Built with Next.js, Tailwind & AI Co-pilot.
          </p>
        </div>

        <div className="flex space-x-6">
          <SocialLink href="https://github.com/karaagenomuranaoya" icon={<Github size={20} />} label="GitHub" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 border border-stone-200 hover:border-orange-200 group"
      aria-label={label}
    >
      <span className="group-hover:scale-110 block transition-transform">
        {icon}
      </span>
    </a>
  );
}