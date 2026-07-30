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
            <div className="relative rounded-3xl overflow-hidden glass-card border border-[#FFC107]/40 shadow-2xl bg-white p-3 group">
              <div className="relative w-full h-[450px] sm:h-[520px] rounded-2xl overflow-hidden bg-[#E8DCC4]">
                <img
                  src="/mypic.jpeg"
                  alt="Sai Teja Gajavelli - Founder & Chief Architect at Sai Creations"
                  className="w-full h-full object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette bottom gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 rounded-2xl pointer-events-none" />

                {/* Top-Left Founder Badge */}
                <div className="absolute top-4 left-4 glass-card px-3.5 py-1.5 rounded-xl bg-white/90 border border-[#FFC107]/40 shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF9800] animate-pulse" />
                  <span className="text-xs font-bold text-[#1E1E1E]">Founder & Chief Architect</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#FFC107]/40 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#FF9800] to-[#FFC107] flex items-center justify-center text-white font-bold shadow-sm shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1E1E1E]">Sai Teja Gajavelli</div>
                      <div className="text-xs text-[#666666]">Founder & Chief Architect</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#E65100]">Warangal 🇮🇳</div>
                    <div className="text-[10px] text-[#666666]">Sunlight Studio</div>
                  </div>
                </div>
              </div>
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
              Founded by <strong>Sai Teja Gajavelli</strong> on the principle that digital products should radiate clarity and warmth, <strong>Sai Creations</strong> is a modern studio crafting high-performance websites, autonomous AI applications, mobile apps, and timeless digital identities.
            </p>

            <p className="text-sm sm:text-base text-[#666666] font-body leading-relaxed mb-8">
              Under Sai Teja's engineering vision, we merge Stripe-level architectural rigor with Framer-level aesthetic magic — building software that captivates users and accelerates commercial growth for ambitious brands across India and globally.
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
