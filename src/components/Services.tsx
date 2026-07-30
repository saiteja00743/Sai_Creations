"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Code2,
  Smartphone,
  Palette,
  Bot,
  Cpu,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  Rocket,
  ArrowUpRight,
  Filter,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "web" | "ai" | "design" | "growth";
  description: string;
  icon: any;
  deliverables: string[];
  badge?: string;
}

export default function Services() {
  const [filter, setFilter] = useState<string>("all");

  const services: ServiceItem[] = [
    {
      id: "website-design",
      title: "Website Design",
      category: "design",
      description:
        "Bespoke, sunlight-inspired luxury layouts built to captivate audiences and position your brand as an industry leader.",
      icon: Layout,
      deliverables: ["Responsive Layouts", "Design System", "Interactive Prototypes"],
      badge: "Popular",
    },
    {
      id: "web-development",
      title: "Web Development",
      category: "web",
      description:
        "Lightning-fast Next.js, React, and TypeScript applications engineered for peak performance and scale.",
      icon: Code2,
      deliverables: ["Next.js App Router", "Sub-second Load", "API Integration"],
    },
    {
      id: "mobile-apps",
      title: "Mobile Apps",
      category: "web",
      description:
        "Native-grade cross-platform iOS and Android mobile apps crafted with React Native and smooth animations.",
      icon: Smartphone,
      deliverables: ["iOS & Android", "Offline Sync", "App Store Submission"],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      category: "design",
      description:
        "Deep research-driven user flows, glassmorphism UI components, and intuitive design systems tailored for conversion.",
      icon: Palette,
      deliverables: ["User Journey Maps", "Figma Files", "Usability Testing"],
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      category: "ai",
      description:
        "Streamline complex business workflows with automated custom AI pipelines and intelligent integrations.",
      icon: Cpu,
      deliverables: ["Workflow Automation", "Zapier/Make", "Custom Scripting"],
      badge: "Trending",
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      category: "ai",
      description:
        "Autonomous LLM-driven AI agents, custom chatbots, and Retrieval-Augmented Generation (RAG) knowledge systems.",
      icon: Bot,
      deliverables: ["Custom RAG Agents", "24/7 Automation", "CRM Integration"],
      badge: "Featured",
    },
    {
      id: "branding",
      title: "Branding",
      category: "design",
      description:
        "Distinctive brand identities, logos, color palettes, visual guidelines, and brand strategy for modern founders.",
      icon: Sparkles,
      deliverables: ["Logo Suite", "Brand Guidelines", "Visual Identity"],
    },
    {
      id: "seo",
      title: "SEO Optimization",
      category: "growth",
      description:
        "Data-driven technical SEO, semantic structure, speed optimization, and content strategy to conquer search rankings.",
      icon: TrendingUp,
      deliverables: ["Technical Audit", "Keyword Strategy", "PageSpeed 99+"],
    },
    {
      id: "e-commerce",
      title: "E-Commerce",
      category: "web",
      description:
        "High-converting online storefronts powered by Shopify or Headless Commerce with seamless checkout experiences.",
      icon: ShoppingBag,
      deliverables: ["Custom Storefront", "Payment Gateways", "Inventory Sync"],
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      category: "growth",
      description:
        "Ultra-optimized, high-velocity landing pages engineered specifically to boost PPC campaigns and conversions.",
      icon: Rocket,
      deliverables: ["A/B Testing", "Conversion Focused", "Instant Analytics"],
    },
  ];

  const filteredServices =
    filter === "all"
      ? services
      : services.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#FFFDF8]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial from-[#FFE082]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Expertise</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
            World-Class Digital Capabilities Tailored for Growth.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed">
            From sunlight-inspired website designs to autonomous AI agents, we deliver end-to-end digital solutions that turn vision into revenue.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Services" },
              { id: "web", label: "Web & Apps" },
              { id: "ai", label: "AI Solutions" },
              { id: "design", label: "Design & Brand" },
              { id: "growth", label: "Growth & SEO" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-[#FF9800] to-[#FFC107] text-white shadow-md shadow-[#FF9800]/20"
                    : "bg-white text-[#666666] border border-[#FFC107]/25 hover:bg-[#FFF8E8] hover:text-[#1E1E1E]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card rounded-3xl p-7 border border-[#FFC107]/25 relative group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Bar inside Card */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFF3E0] to-[#FFE0B2] border border-[#FFB74D]/30 flex items-center justify-center text-[#E65100] group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#FF9800] group-hover:to-[#FFC107] group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FFF3E0] text-[#E65100] border border-[#FFB74D]/40 uppercase tracking-wider">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-[#1E1E1E] mb-3 group-hover:text-[#FF9800] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#666666] leading-relaxed mb-6 font-body">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables & Arrow */}
                  <div className="pt-4 border-t border-[#FFC107]/15">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#FFF8E8] text-[#1E1E1E] border border-[#FFC107]/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#E65100] group-hover:text-[#FF9800] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
