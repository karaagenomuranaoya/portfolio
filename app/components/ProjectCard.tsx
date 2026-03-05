"use client";

import { motion } from "framer-motion";
import { Project } from "../data/projects";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react"; // アイコン追加

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div
        onClick={onClick}
        className="h-full cursor-pointer overflow-hidden rounded-2xl bg-white border border-stone-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 flex flex-col"
      >
         {/* ▼▼▼ 画像エリアの修正 ▼▼▼ */}
        <div className="relative h-48 w-full overflow-hidden bg-stone-100">
           {/* 画像がある場合 */}
           {project.imgUrl ? (
             // eslint-disable-next-line @next/next/no-img-element
             <img
               src={project.imgUrl}
               alt={project.title}
               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
           ) : (
             // 画像がない場合のフォールバック（以前のデザイン）
             <>
               <div className={`absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 group-hover:scale-105 transition-transform duration-500`} />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl font-bold text-stone-300 group-hover:text-stone-400 transition-colors">
                   {project.title.substring(0, 2)}
                 </span>
               </div>
             </>
           )}
        </div>
        {/* ▲▲▲ 修正ここまで ▲▲▲ */}

        {/* コンテンツエリア */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 border border-stone-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mb-2 text-xl font-bold text-stone-800 group-hover:text-orange-600 transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          
          <p className="mb-4 text-sm text-stone-500 line-clamp-2 leading-relaxed">
            {project.catchphrase}
          </p>
          
          <div className="mt-auto pt-4 border-t border-stone-100">
             <span className="text-xs font-medium text-stone-400 group-hover:text-orange-600 transition-colors">
               View Details &rarr;
             </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}