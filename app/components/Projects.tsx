"use client";

import { useState } from "react";
import { projects, Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ▼▼▼ 修正：あつめる家計簿以外をフィルタリング ▼▼▼
  const otherProjects = projects.filter(p => p.id !== "atsumeru");

  return (
    <section id="projects" className="pt-24 pb-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* タイトル変更 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-stone-400 sm:text-3xl mb-4">
            Other Works
          </h2>
          <p className="text-stone-500">
            他にも、AIやWeb技術を使って実験的なアプリを作っています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* ▼▼▼ otherProjects をマップする ▼▼▼ */}
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* モーダル（既存のまま） */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-stone-900/5 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed right-4 top-4 md:absolute md:right-4 md:top-4 z-50 rounded-full bg-stone-100/80 p-2 text-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-colors backdrop-blur-sm shadow-sm"
              >
                <X size={24} />
              </button>

              {selectedProject.imgUrl && (
                <div className="w-full h-48 sm:h-64 md:h-72 relative bg-stone-100 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedProject.imgUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none" />
                </div>
              )}

              <div className="w-full bg-stone-50 px-6 py-8 sm:px-12 sm:py-10 border-b border-stone-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-800 mb-4 leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-stone-500 font-medium text-lg sm:text-xl">
                  {selectedProject.catchphrase}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  {selectedProject.demoUrl && (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white rounded-full font-medium transition-all shadow-sm">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-stone-50 text-stone-700 rounded-full font-medium transition-all border border-stone-200 shadow-sm">
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              <div className="px-6 py-10 sm:px-12 sm:py-12 bg-white space-y-12">
                {selectedProject.article?.map((section, idx) => (
                  <div key={idx} className="prose prose-stone max-w-none">
                    {section.heading && (
                      <h4 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 pb-2 border-b border-stone-100">
                        {section.heading}
                      </h4>
                    )}
                    {section.content && (
                       <p className="text-stone-600 leading-loose text-base sm:text-lg whitespace-pre-wrap">
                         {section.content}
                       </p>
                    )}
                    {section.image && (
                      <div className="mt-6 rounded-xl overflow-hidden border border-stone-100 shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={section.image} alt={section.heading || "Project image"} className="w-full h-auto object-cover" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}