"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  Bot,
  Globe,
  Layers,
  CheckCircle,
  Play,
  Star,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"ai" | "web" | "apps">("ai");

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FFF8E8]/70 to-[#FFFDF8]"
    >
      {/* Decorative Sun Rays in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial from-[#FFE082]/30 via-[#FFB74D]/10 to-transparent blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Top Sunlight Badge & Founder Avatar */}
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs sm:text-sm font-semibold shadow-sm"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9800] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9800]"></span>
                </span>
                <Sparkles className="w-4 h-4 text-[#FF9800]" />
                <span>Sunlight Theme • Premium Digital & AI Studio</span>
              </motion.div>

              <motion.a
                href="#about"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#FFC107]/40 shadow-xs hover:border-[#FF9800] transition-colors"
              >
                <img
                  src="/mypic.jpeg"
                  alt="Sai Teja Gajavelli"
                  className="w-6 h-6 rounded-full object-cover object-top border border-[#FF9800]"
                />
                <span className="text-xs font-bold text-[#1E1E1E]">Sai Teja Gajavelli</span>
              </motion.a>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1E1E1E] leading-[1.1] mb-6"
            >
              Building{" "}
              <span className="sunlight-text-gradient underline decoration-[#FFC107]/40 decoration-wavy underline-offset-8">
                Beautiful
              </span>{" "}
              Digital Experiences That Grow Businesses.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-[#666666] leading-relaxed font-body mb-8 max-w-2xl"
            >
              We design high-performance websites, AI-powered applications, mobile apps, branding, and digital experiences that make your business stand out.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#contact"
                className="btn-sunlight-primary px-8 py-4 rounded-2xl text-base font-semibold flex items-center gap-3 group shadow-lg"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="btn-sunlight-secondary px-7 py-4 rounded-2xl text-base font-semibold flex items-center gap-2.5"
              >
                <Play className="w-4 h-4 text-[#FF9800] fill-[#FF9800]" />
                <span>View Portfolio</span>
              </a>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-6 border-t border-[#FFC107]/20 grid grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FF9800]" />
                <span className="text-xs sm:text-sm font-medium text-[#1E1E1E]">100% Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FF9800]" />
                <span className="text-xs sm:text-sm font-medium text-[#1E1E1E]">Ultra-Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#FF9800] fill-[#FF9800]" />
                <span className="text-xs sm:text-sm font-medium text-[#1E1E1E]">5.0 Client Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column Interactive Floating Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Orb Behind Card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FF9800]/30 via-[#FFC107]/20 to-[#FFE082]/40 blur-2xl transform rotate-3 scale-105" />

            {/* Main Interactive Glass Card */}
            <div className="relative glass-card rounded-3xl p-6 border border-[#FFC107]/30 shadow-[0_20px_50px_rgba(255,152,0,0.15)] bg-white/80 backdrop-blur-xl">
              {/* Header Bar of Dashboard */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#FFC107]/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5252]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFC107]" />
                  <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
                  <span className="ml-2 text-xs font-mono font-medium text-[#666666]">
                    Sai-Creations-OS v2.4
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF3E0] text-[11px] font-semibold text-[#E65100]">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Live Engine</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-2 mb-5 bg-[#FFF8E8] p-1.5 rounded-xl">
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "ai"
                      ? "bg-white text-[#E65100] shadow-sm"
                      : "text-[#666666] hover:text-[#1E1E1E]"
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Agents</span>
                </button>
                <button
                  onClick={() => setActiveTab("web")}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "web"
                      ? "bg-white text-[#E65100] shadow-sm"
                      : "text-[#666666] hover:text-[#1E1E1E]"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Web App</span>
                </button>
                <button
                  onClick={() => setActiveTab("apps")}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "apps"
                      ? "bg-white text-[#E65100] shadow-sm"
                      : "text-[#666666] hover:text-[#1E1E1E]"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>UI Design</span>
                </button>
              </div>

              {/* Dynamic Content Cards */}
              <div className="space-y-4">
                {/* Metric 1 */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF3E0]/70 to-[#FFE0B2]/40 border border-[#FFB74D]/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-[#666666] uppercase tracking-wider mb-1">
                      Conversion Rate
                    </div>
                    <div className="text-2xl font-bold font-heading text-[#1E1E1E]">
                      +348% <span className="text-xs text-[#4CAF50] font-normal">vs avg agency</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#FF9800] shadow-sm">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>

                {/* Metric 2 / Graph simulation */}
                <div className="p-4 rounded-2xl bg-white border border-[#FFC107]/20 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#1E1E1E]">
                      Real-Time Performance Score
                    </span>
                    <span className="text-xs font-bold text-[#FF9800]">99 / 100</span>
                  </div>
                  <div className="w-full bg-[#FFF8E8] h-3 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#FF9800] via-[#FFC107] to-[#FFB74D] rounded-full"
                    />
                  </div>
                </div>

                {/* Sub Features */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-[#FFC107]/20 flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF9800]" />
                    <span className="text-xs font-medium text-[#1E1E1E]">Next.js 15 Ready</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-[#FFC107]/20 flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF9800]" />
                    <span className="text-xs font-medium text-[#1E1E1E]">Autonomous AI</span>
                  </div>
                </div>
              </div>

              {/* Floating Overlays */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl glass-card bg-white/90 border border-[#FFC107]/30 shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF9800] to-[#FFC107] flex items-center justify-center text-white font-bold shadow-md">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E1E1E]">Sunlight Engine</div>
                  <div className="text-[11px] text-[#666666]">0.02s Load Time</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
