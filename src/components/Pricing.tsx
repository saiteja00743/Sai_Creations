"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight, Zap, Calculator, ShieldCheck, Star } from "lucide-react";
import CostEstimatorModal from "./CostEstimatorModal";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"project" | "retainer">("project");
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      badge: "Essential MVP",
      priceProject: "$2,999",
      priceRetainer: "$1,800/mo",
      description: "Ideal for early-stage startups needing a sleek, fast, sunlight-inspired web presence.",
      popular: false,
      features: [
        "Up to 5 Custom Pages",
        "Next.js 15 & Tailwind CSS",
        "Mobile First Responsive Design",
        "Basic SEO & Analytics Integration",
        "Contact Form & Lead Capture",
        "2 Weeks Post-Launch Support",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      badge: "Most Popular",
      priceProject: "$5,999",
      priceRetainer: "$3,800/mo",
      description: "Complete digital product package with custom AI integration and advanced animations.",
      popular: true,
      features: [
        "Up to 12 Custom Pages",
        "Advanced Glassmorphism UI Systems",
        "Autonomous AI Agent or Chatbot",
        "Framer Motion Micro-Interactions",
        "Sub-Second Speed & Technical SEO",
        "CMS Integration (Sanity / Headless)",
        "30 Days Priority Support",
      ],
      cta: "Start Your Project",
    },
    {
      name: "Enterprise",
      badge: "Full Scale Studio",
      priceProject: "$11,999+",
      priceRetainer: "$7,500/mo",
      description: "Bespoke engineering for high-growth platforms, mobile apps, and custom RAG AI agents.",
      popular: false,
      features: [
        "Unlimited Custom Pages & Screens",
        "Cross-Platform iOS & Android Mobile Apps",
        "Custom LLM / Fine-tuned RAG Pipeline",
        "Complete Brand Identity & Logo Suite",
        "Dedicated Lead Architect & Designer",
        "24/7 SLA Guarantee & Slack Channel",
        "Quarterly Performance Audits",
      ],
      cta: "Contact Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FFF8E8]/40 relative overflow-hidden">
      {/* Cost Estimator Modal */}
      <CostEstimatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
            Predictable Pricing for World-Class Work.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed mb-8">
            Choose a fixed-scope project model or an ongoing dedicated agency retainer. No hidden fees.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-4">
            <div className="inline-flex p-1.5 rounded-full bg-white border border-[#FFC107]/30 shadow-sm">
              <button
                onClick={() => setBillingCycle("project")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  billingCycle === "project"
                    ? "bg-gradient-to-r from-[#FF9800] to-[#FFC107] text-white shadow-sm"
                    : "text-[#666666] hover:text-[#1E1E1E]"
                }`}
              >
                Fixed Project Rate
              </button>
              <button
                onClick={() => setBillingCycle("retainer")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  billingCycle === "retainer"
                    ? "bg-gradient-to-r from-[#FF9800] to-[#FFC107] text-white shadow-sm"
                    : "text-[#666666] hover:text-[#1E1E1E]"
                }`}
              >
                Monthly Retainer
              </button>
            </div>

            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF3E0] text-[#E65100] border border-[#FFB74D]/40 text-xs font-bold hover:bg-[#FFE0B2] transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#FF9800]" />
              <span>AI Cost Calculator</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 border relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-white border-[#FF9800] shadow-2xl scale-105 z-10"
                  : "bg-white/70 border-[#FFC107]/25 hover:bg-white hover:shadow-xl"
              }`}
            >
              <div>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF9800] to-[#FFC107] text-white text-xs font-extrabold shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-extrabold text-2xl text-[#1E1E1E]">
                    {plan.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FFF3E0] text-[#E65100] border border-[#FFB74D]/30">
                    {plan.badge}
                  </span>
                </div>

                <p className="text-sm text-[#666666] font-body mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-8 p-4 rounded-2xl bg-[#FFF8E8] border border-[#FFC107]/20">
                  <div className="font-heading font-extrabold text-4xl text-[#1E1E1E]">
                    {billingCycle === "project" ? plan.priceProject : plan.priceRetainer}
                  </div>
                  <span className="text-xs text-[#666666] font-medium">
                    {billingCycle === "project" ? "One-time investment" : "Billed monthly, cancel anytime"}
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                    Included Capabilities:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-[#1E1E1E]">
                      <div className="w-5 h-5 rounded-full bg-[#FFF3E0] text-[#FF9800] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-body text-xs sm:text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="#contact"
                  className={`w-full py-4 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                    plan.popular
                      ? "btn-sunlight-primary"
                      : "btn-sunlight-secondary"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
