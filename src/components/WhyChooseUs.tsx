"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Sparkles, Bot, Headphones, CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Sub-second load times, ultra-optimized Next.js codebases, and performance scores that rank consistently in the 99th percentile.",
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description:
        "Award-winning sunlight visual aesthetics, glassmorphism UI components, fluid micro-interactions, and Apple/Stripe level finish.",
    },
    {
      icon: Bot,
      title: "AI Powered",
      description:
        "Integrated custom AI agents, automated workflow pipelines, smart search, and generative capabilities built directly into your app.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Dedicated project managers, continuous security maintenance, real-time Slack channels, and round-the-clock technical care.",
    },
  ];

  const stats = [
    { value: 100, suffix: "+", label: "Projects Delivered", icon: Award },
    { value: 50, suffix: "+", label: "Happy Global Clients", icon: Users },
    { value: 5, suffix: "+", label: "Years Experience", icon: ShieldCheck },
    { value: 99, suffix: "%", label: "Client Satisfaction", icon: CheckCircle2 },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8E8]/50 via-[#FFFDF8] to-[#FFF8E8]/50 relative overflow-hidden border-y border-[#FFC107]/15">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#FFE082]/30 to-transparent blur-3xl rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Sai Creations</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
            Engineered for Precision, Designed to Inspire.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed">
            We don't just build websites; we craft digital assets that accelerate revenue, amplify brand prestige, and outpace competition.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-7 border border-[#FFC107]/25 relative group hover:-translate-y-2 transition-all duration-300 bg-white/80"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF9800] to-[#FFC107] flex items-center justify-center text-white mb-6 shadow-md shadow-[#FF9800]/25 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1E1E1E] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counters Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FFC107]/30 bg-gradient-to-r from-white via-[#FFF8E8] to-white shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#FFC107]/20">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`flex flex-col items-center justify-center ${i !== 0 ? "pt-6 lg:pt-0" : ""}`}>
                  <div className="w-10 h-10 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#E65100] mb-3 border border-[#FFB74D]/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#1E1E1E] mb-2 tracking-tight">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#666666]">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
