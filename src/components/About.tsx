"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Sun, CheckCircle, ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FFFDF8] relative overflow-hidden">
      {/* Sunlight Flare Background */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gradient-to-l from-[#FFE082]/30 via-[#FFB74D]/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Floating Sunlight Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FF9800]/30 via-[#FFC107]/20 to-[#FFE082]/40 blur-2xl transform -rotate-3 scale-105" />

            {/* Main Featured Image Card */}
            <div className="relative rounded-3xl overflow-hidden glass-card border border-[#FFC107]/30 shadow-2xl bg-white p-3">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Sai Creations Creative Agency Team"
                className="w-full h-80 sm:h-[420px] object-cover rounded-2xl"
              />

              {/* Sunlight Rays Highlight Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl pointer-events-none" />

              {/* Floating Stat Badge Overlay */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 glass-card p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#FFC107]/40 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FF9800] to-[#FFC107] flex items-center justify-center text-white font-bold shadow-md shrink-0">
                    <Sun className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1E1E1E]">Sunlight Philosophy</div>
                    <div className="text-xs text-[#666666]">Warmth, Clarity, Speed & Precision</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Sai Creations</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6 leading-tight">
              We Create Digital Products That Inspire.
            </h2>

            <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed mb-6">
              Founded on the principle that digital experiences should radiate clarity and warmth, <strong>Sai Creations</strong> is an elite creative digital agency specializing in high-performance websites, autonomous AI applications, mobile software, and timeless branding.
            </p>

            <p className="text-sm sm:text-base text-[#666666] font-body leading-relaxed mb-8">
              We merge Stripe-level engineering rigor with Framer-level design magic. Our multidisciplinary team of designers, AI researchers, and full-stack engineers partner with ambitious founders to build products that captivate users and generate measurable commercial growth.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Sunlight Aesthetic Excellence",
                "Sub-100ms Performance Stack",
                "Custom Autonomous AI Integration",
                "Transparent Fixed Pricing",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#FF9800] shrink-0" />
                  <span className="text-sm font-semibold text-[#1E1E1E]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#process"
                className="btn-sunlight-primary inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-md"
              >
                <span>Discover Our Process</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
