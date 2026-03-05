"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { GraduationCap, BookOpen, Code, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-1 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-2xl font-bold tracking-tight text-stone-800 sm:text-3xl mb-4">
            開発背景と、僕自身について
          </h2>
          <div className="h-0.5 w-16 bg-orange-400 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="flex">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-stone-600 leading-loose mb-10 whitespace-pre-line text-sm sm:text-base">
              {profile.bio}
            </p>

            {/* 学歴カード：紙のような質感に */}
            <div className="border-l-2 border-stone-300 pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-stone-500" size={20} />
                <h4 className="text-stone-800 font-medium">{profile.university.name}</h4>
              </div>
              <p className="text-stone-500 text-sm mb-4">{profile.university.major}</p>
              
              <div className="bg-white rounded-lg p-5 border border-stone-200 shadow-sm">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-2">Graduation Thesis</span>
                <p className="text-stone-700 text-sm font-medium mb-2">
                  {profile.university.thesis.title}
                </p>
                <p className="text-stone-500 text-xs leading-relaxed">
                  {profile.university.thesis.summary}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-10"
          >

          </motion.div>
        </div>
      </div>
    </section>
  );
}