"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Award, Terminal, Cpu, Zap, Feather, Layers, Code2, Globe2 } from "lucide-react";

export default function TrustedBy() {
  const brands = [
    { name: "Vortex Systems", icon: Terminal },
    { name: "Lumina Health", icon: Cpu },
    { name: "Aura Commerce", icon: Zap },
    { name: "Solstice Studio", icon: Feather },
    { name: "HyperScale", icon: Layers },
    { name: "Nexus AI", icon: Code2 },
    { name: "GlobalCraft", icon: Globe2 },
  ];

  return (
    <section className="py-12 bg-[#FFF8E8]/60 border-y border-[#FFC107]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#666666] flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
          <span>Trusted By Visionary Teams & Scale-ups Worldwide</span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9800]" />
        </p>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div className="flex overflow-hidden select-none space-x-12 py-2">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center space-x-12 min-w-full"
        >
          {brands.concat(brands).map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white/70 border border-[#FFC107]/20 shadow-xs hover:border-[#FF9800]/50 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <Icon className="w-5 h-5 text-[#666666] group-hover:text-[#FF9800] transition-colors" />
                <span className="font-heading font-bold text-base tracking-tight text-[#666666] group-hover:text-[#1E1E1E] transition-colors">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
