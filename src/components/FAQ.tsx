"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, Search, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "process" | "tech" | "pricing";
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqs: FAQItem[] = [
    {
      category: "general",
      question: "What makes Sai Creations different from standard agencies?",
      answer:
        "We combine an exclusive sunlight luxury visual aesthetic with Silicon Valley level engineering standards. Rather than relying on generic templates, we engineer bespoke Next.js and AI applications designed for sub-second speeds, conversion excellence, and seamless brand authority.",
    },
    {
      category: "process",
      question: "How long does a typical website or AI project take?",
      answer:
        "Standard website and branding projects take approximately 3 to 4 weeks from discovery to launch. Custom AI agent systems or cross-platform mobile app builds generally range between 4 to 8 weeks depending on integration complexity.",
    },
    {
      category: "tech",
      question: "What technology stack do you use?",
      answer:
        "We build exclusively on modern, battle-tested technologies including React, Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Node.js, Python, OpenAI API, and Cloudflare/Vercel edge infrastructure.",
    },
    {
      category: "pricing",
      question: "Do you offer fixed-price quotes or hourly billing?",
      answer:
        "We work predominantly on a fixed-scope, fixed-price basis so you have absolute clarity on your investment from day one with zero hidden fees. We also offer ongoing monthly retainer options for continuous iteration.",
    },
    {
      category: "tech",
      question: "Can you build custom AI agents trained on our company data?",
      answer:
        "Yes! We specialize in Retrieval-Augmented Generation (RAG) AI agents and autonomous workflows. We securely index your company knowledge base, docs, and CRM data so your custom AI can handle customer inquiries, internal research, and workflow automation 24/7.",
    },
    {
      category: "process",
      question: "What happens after our digital product is launched?",
      answer:
        "All our projects include 30 days of post-launch warranty support, technical monitoring, and training. We also offer dedicated monthly support retainers for continuous feature additions and security maintenance.",
    },
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#FFFDF8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
            Frequently Asked Questions.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed">
            Everything you need to know about working with Sai Creations on your next digital venture.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-[#FF9800] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search any question (e.g. AI, pricing, timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#FFC107]/30 text-sm text-[#1E1E1E] placeholder:text-[#666666] focus:outline-none focus:border-[#FF9800] shadow-sm font-body"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#FF9800] shadow-md"
                    : "bg-white/80 border-[#FFC107]/20 hover:border-[#FFC107]/40"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-heading font-bold text-lg text-[#1E1E1E]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#FF9800] text-white rotate-180" : "bg-[#FFF3E0] text-[#E65100]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-[#FFC107]/15 pt-4 text-sm sm:text-base text-[#666666] font-body leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
