"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Search,
  PenTool,
  Code,
  Rocket,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Uncovering your core goals & strategy",
      icon: Compass,
      description:
        "We immerse ourselves in your business objectives, target audience demographics, competitive landscape, and key performance indicators to formulate a rock-solid project blueprint.",
      deliverables: [
        "Discovery Workshop",
        "Technical Scope & Architecture",
        "Project Timeline & Milestones",
      ],
    },
    {
      num: "02",
      title: "Research",
      subtitle: "Data-driven UX & market intelligence",
      icon: Search,
      description:
        "Through deep user research, user journey mapping, and conversion audits, we establish the UX foundations that maximize user engagement and retention.",
      deliverables: [
        "User Personas & Flows",
        "Information Architecture",
        "Content Strategy & Wireframes",
      ],
    },
    {
      num: "03",
      title: "Design",
      subtitle: "Crafting the Sunlight visual design system",
      icon: PenTool,
      description:
        "We translate strategy into bespoke, sunlight-inspired visual interface mockups, component design tokens, micro-animations, and interactive Figma prototypes.",
      deliverables: [
        "High-Fidelity Figma Designs",
        "UI Design System Tokens",
        "Interactive Clickable Prototypes",
      ],
    },
    {
      num: "04",
      title: "Develop",
      subtitle: "Engineering pixel-perfect high-speed code",
      icon: Code,
      description:
        "Our engineers build your solution using Next.js 15, TypeScript, Framer Motion, and custom AI APIs, adhering to strict clean-code and accessibility standards.",
      deliverables: [
        "Clean Modular Codebase",
        "AI & API Integrations",
        "PageSpeed 99+ Optimization",
      ],
    },
    {
      num: "05",
      title: "Launch",
      subtitle: "Deployment, QA & continuous growth",
      icon: Rocket,
      description:
        "After rigorous cross-browser testing, SEO audits, and load testing, we launch your digital product with zero downtime and provide ongoing maintenance.",
      deliverables: [
        "Production Cloud Deployment",
        "SEO & Analytics Setup",
        "30 Days Post-Launch Warranty",
      ],
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#FFF8E8]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Methodology</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
            From Initial Spark to World-Class Launch.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed">
            Our structured 5-phase execution framework ensures seamless collaboration, complete transparency, and on-time delivery every single time.
          </p>
        </div>

        {/* Timeline Stepper Header Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "glass-card bg-white border-[#FF9800] shadow-lg shadow-[#FF9800]/15 translate-y-[-4px]"
                    : "bg-white/60 border-[#FFC107]/20 hover:bg-white hover:border-[#FFC107]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold font-mono ${isActive ? "text-[#FF9800]" : "text-[#666666]"}`}>
                    {step.num}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-[#FF9800] text-white"
                        : "bg-[#FFF3E0] text-[#E65100]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-heading font-bold text-base text-[#1E1E1E]">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detailed Showcase Box */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FFC107]/30 bg-white shadow-xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#FFF3E0] text-[#E65100] border border-[#FFB74D]/40 font-mono">
                  PHASE {steps[activeStep].num}
                </span>
                <span className="text-sm font-semibold text-[#FF9800]">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-3xl text-[#1E1E1E]">
                {steps[activeStep].title} Phase
              </h3>

              <p className="text-base text-[#666666] leading-relaxed font-body">
                {steps[activeStep].description}
              </p>

              <div>
                <h4 className="font-heading font-semibold text-xs text-[#1E1E1E] uppercase tracking-wider mb-3">
                  Key Deliverables Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#FFF8E8] border border-[#FFC107]/20 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF9800] shrink-0" />
                      <span className="text-xs font-semibold text-[#1E1E1E]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Visual Graphic */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] p-8 rounded-2xl border border-[#FFB74D]/30 flex flex-col justify-between min-h-[260px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#E65100] uppercase tracking-widest">
                  Sai Creations Workflow
                </span>
                <Sparkles className="w-5 h-5 text-[#FF9800]" />
              </div>

              <div className="my-6">
                <div className="text-4xl font-extrabold font-heading text-[#1E1E1E] mb-1">
                  0{activeStep + 1} / 05
                </div>
                <div className="text-sm font-medium text-[#666666]">
                  Stage Completion Status: 100% Verified
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#FFB74D]/30">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-[#1E1E1E] disabled:opacity-40 hover:bg-[#FFF8E8] transition-colors cursor-pointer"
                >
                  Previous
                </button>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="btn-sunlight-primary px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
