"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "CEO & Founder",
      company: "Lumina AI Inc.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      review:
        "Sai Creations completely redefined our online presence. Their sunlight aesthetic and deep technical execution gave our AI software the luxury polish it deserved. Conversion rates surged by 340% within weeks!",
    },
    {
      name: "Elena Rostova",
      role: "Head of Product",
      company: "Solstice Atelier",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      review:
        "Working with Sai Creations was an extraordinary experience. They delivered our headless Shopify storefront ahead of deadline, with PageSpeed scores over 99. The glassmorphism UI feels incredibly modern.",
    },
    {
      name: "David Chen",
      role: "Co-Founder & CTO",
      company: "Aura Financial",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      review:
        "The team's mastery over React Native, Framer Motion, and autonomous AI agents is unmatched. They transformed our fintech app into a sleek, warm, intuitive financial command center.",
    },
    {
      name: "Sophia Martinez",
      role: "VP Marketing",
      company: "Vortex Systems",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      review:
        "If you want an agency that combines Silicon Valley level technical chops with world-class visual artistry, Sai Creations is the top choice. Our brand authority doubled immediately.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#FFFDF8] relative overflow-hidden">
      {/* Background Sunlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#FFE082]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Praise</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
            Trusted by Visionary Founders & Global Leaders.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed">
            Read what high-growth companies say about partnering with Sai Creations to elevate their digital products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-[#FFC107]/25 relative bg-white/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#FF9800] fill-[#FF9800]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#FFB74D]/30" />
                </div>

                {/* Review Text */}
                <p className="text-base text-[#1E1E1E] font-body leading-relaxed italic mb-8">
                  "{item.review}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#FFC107]/15">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-13 h-13 rounded-2xl object-cover border-2 border-[#FFC107]/40 shadow-sm"
                />
                <div>
                  <h4 className="font-heading font-bold text-base text-[#1E1E1E]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#666666] font-medium">
                    {item.role} • <span className="text-[#FF9800] font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
