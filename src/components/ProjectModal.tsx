"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Sparkles, Calendar, Layers, ShieldCheck } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  summary: string;
  results: string[];
  techStack: string[];
  liveUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md">
        {/* Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl glass-card rounded-3xl overflow-hidden border border-[#FFC107]/40 shadow-2xl bg-white/95 z-10 my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-[#FFC107]/20 bg-[#FFF8E8]/70">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF3E0] text-[#E65100] border border-[#FFB74D]/30 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-[#666666] font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#FF9800]" />
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white text-[#1E1E1E] hover:bg-[#FFF3E0] hover:text-[#E65100] transition-colors border border-[#FFC107]/25"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Title & Client */}
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1E1E1E] mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-[#666666] font-body">
                Built for <strong className="text-[#1E1E1E]">{project.client}</strong>
              </p>
            </div>

            {/* Visual Image Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-[#FFC107]/25 shadow-lg bg-[#FFF8E8] group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Summary & Impact */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-heading font-bold text-lg text-[#1E1E1E] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FF9800]" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-base text-[#666666] leading-relaxed font-body">
                  {project.summary}
                </p>

                {/* Key Results */}
                <div className="pt-4">
                  <h4 className="font-heading font-semibold text-sm text-[#1E1E1E] uppercase tracking-wider mb-3">
                    Measurable Results
                  </h4>
                  <div className="space-y-2">
                    {project.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-[#1E1E1E]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF9800] shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="md:col-span-5 space-y-6 bg-[#FFF8E8]/60 p-6 rounded-2xl border border-[#FFC107]/20">
                <div>
                  <h4 className="font-heading font-semibold text-xs text-[#666666] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#FF9800]" />
                    <span>Technologies Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl text-xs font-semibold bg-white text-[#E65100] border border-[#FFB74D]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#FFC107]/20">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4CAF50] mb-4">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Project Case Study</span>
                  </div>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="btn-sunlight-primary w-full py-3 rounded-xl font-medium text-sm text-center flex items-center justify-center gap-2"
                  >
                    <span>Request Similar Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
