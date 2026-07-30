"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Eye, Layers } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "lumina-ai",
      title: "Lumina AI Platform",
      category: "AI Applications",
      client: "Lumina Intelligence Inc.",
      year: "2026",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Engineered an autonomous real-time generative AI workspace with live streaming charts, custom model fine-tuning interface, and sub-100ms response latency.",
      results: [
        "420% increase in daily active users within 60 days",
        "Sub-100ms streaming LLM response latency",
        "Featured on Product Hunt #1 Product of the Day",
      ],
      techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "OpenAI API", "Framer Motion"],
    },
    {
      id: "solstice-luxury",
      title: "Solstice Luxury E-Commerce",
      category: "Web Development",
      client: "Solstice Atelier London",
      year: "2025",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      summary:
        "High-fashion luxury e-commerce experience featuring 3D product previews, sunlight glassmorphic layout, and seamless 1-click Apple Pay checkout.",
      results: [
        "+215% boost in average order value (AOV)",
        "PageSpeed score 99/100 on desktop & mobile",
        "Custom Shopify Headless integration",
      ],
      techStack: ["Shopify Headless", "Next.js", "Three.js", "Tailwind CSS"],
    },
    {
      id: "aura-fintech",
      title: "Aura Wealth Mobile App",
      category: "Mobile Apps",
      client: "Aura Global Financial",
      year: "2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Next-generation wealth management and crypto portfolio tracking app designed with warm light theme visual aesthetic and biometric security.",
      results: [
        "Over $50M in assets tracked within Q1",
        "4.9 rating on Apple App Store",
        "Biometric 2FA & Hardware Security integration",
      ],
      techStack: ["React Native", "Expo", "TypeScript", "Node.js", "GraphQL"],
    },
    {
      id: "vortex-brand",
      title: "Vortex Systems Brand & UI Kit",
      category: "Branding",
      client: "Vortex Cloud Infrastructure",
      year: "2025",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Complete visual identity redesign, custom typography guidelines, design system tokens, and interactive website redesign for enterprise dev tools.",
      results: [
        "Unified 150+ UI component design tokens",
        "3x conversion rate on developer signup funnels",
        "Red Dot Design Award Nominee",
      ],
      techStack: ["Figma", "Design Tokens", "Tailwind CSS", "React Storybook"],
    },
    {
      id: "nexus-agent",
      title: "Nexus Customer AI Agent",
      category: "AI Applications",
      client: "Nexus Global Support",
      year: "2026",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Autonomous RAG customer service agent resolving 85% of tier-1 support tickets automatically with human escalation handoff.",
      results: [
        "85% autonomous ticket resolution rate",
        "$180,000 saved annually in support operations",
        "Instant multi-lingual translation in 40+ languages",
      ],
      techStack: ["Python", "FastAPI", "Pinecone Vector DB", "LangChain", "Next.js"],
    },
    {
      id: "zenith-realestate",
      title: "Zenith Sunlight Real Estate Portal",
      category: "Web Development",
      client: "Zenith Luxury Living",
      year: "2025",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Interactive architectural real estate platform with high-resolution 4K property walkthroughs, mortgage calculators, and lead capture engine.",
      results: [
        "14,000+ monthly high-intent buyer leads",
        "45-second average load reduction compared to legacy site",
      ],
      techStack: ["Next.js", "Mapbox GL", "Framer Motion", "Tailwind CSS"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "AI Applications", label: "AI Applications" },
    { id: "Web Development", label: "Web Development" },
    { id: "Mobile Apps", label: "Mobile Apps" },
    { id: "Branding", label: "Branding" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#FFF8E8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
            Selected Digital Products & Breakthrough Creations.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed">
            Explore our curated showcase of high-impact websites, AI software, mobile applications, and brand identities crafted for ambitious founders.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#FF9800] to-[#FFC107] text-white shadow-md shadow-[#FF9800]/25"
                    : "bg-white text-[#666666] border border-[#FFC107]/25 hover:bg-[#FFF8E8] hover:text-[#1E1E1E]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-3xl overflow-hidden border border-[#FFC107]/30 bg-white group hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                {/* Image Container with Zoom & Overlay */}
                <div className="relative h-64 overflow-hidden bg-[#FFF8E8]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#E65100] border border-[#FFB74D]/40 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* View Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-sunlight-primary px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer transform translate-y-2 group-hover:translate-y-0 transition-transform"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#FF9800] uppercase tracking-wider">
                      {project.client}
                    </span>
                    <span className="text-xs font-medium text-[#666666]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#1E1E1E] mb-3 group-hover:text-[#FF9800] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#666666] line-clamp-2 font-body mb-6">
                    {project.summary}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#FFC107]/15">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#FFF8E8] text-[#1E1E1E]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-9 h-9 rounded-full bg-[#FFF3E0] hover:bg-[#FF9800] hover:text-white text-[#E65100] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="View Project"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
