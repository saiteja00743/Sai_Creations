"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calculator, Sparkles, Check, ArrowRight } from "lucide-react";

interface CostEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CostEstimatorModal({ isOpen, onClose }: CostEstimatorProps) {
  const [projectType, setProjectType] = useState<"website" | "app" | "ai" | "full">("website");
  const [pagesCount, setPagesCount] = useState<number>(5);
  const [needsAI, setNeedsAI] = useState<boolean>(true);
  const [needsBranding, setNeedsBranding] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<"standard" | "rush">("standard");

  if (!isOpen) return null;

  // Calculate dynamic price
  let basePrice = 2999;
  if (projectType === "app") basePrice = 5999;
  if (projectType === "ai") basePrice = 7999;
  if (projectType === "full") basePrice = 11999;

  const extraPagesCost = (pagesCount - 1) * 350;
  const aiCost = needsAI ? 1500 : 0;
  const brandingCost = needsBranding ? 1200 : 0;
  const multiplier = timeline === "rush" ? 1.3 : 1.0;

  const estimatedPrice = Math.round((basePrice + extraPagesCost + aiCost + brandingCost) * multiplier);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl glass-card rounded-3xl overflow-hidden border border-[#FFC107]/40 shadow-2xl bg-white/95 z-10 my-8 p-6 sm:p-8"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#FFC107]/20 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF9800] to-[#FFC107] flex items-center justify-center text-white shadow-md">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-[#1E1E1E]">
                  AI Project Cost Estimator
                </h3>
                <p className="text-xs text-[#666666]">Instant custom quote calculator</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FFF8E8] text-[#1E1E1E] hover:bg-[#FFF3E0] hover:text-[#E65100] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Step 1: Project Type */}
            <div>
              <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                1. Select Primary Project Scope
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "website", label: "Website" },
                  { id: "app", label: "Mobile App" },
                  { id: "ai", label: "AI Agent/RAG" },
                  { id: "full", label: "Full Suite" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setProjectType(t.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      projectType === t.id
                        ? "bg-[#FF9800] text-white border-[#FF9800] shadow-sm"
                        : "bg-[#FFF8E8] text-[#1E1E1E] border-[#FFC107]/25 hover:bg-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Page count slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider">
                  2. Number of Custom Views / Pages
                </label>
                <span className="text-sm font-bold text-[#E65100]">{pagesCount} Pages</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={pagesCount}
                onChange={(e) => setPagesCount(Number(e.target.value))}
                className="w-full accent-[#FF9800] cursor-pointer"
              />
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                3. Optional Add-on Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  onClick={() => setNeedsAI(!needsAI)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    needsAI ? "bg-[#FFF3E0] border-[#FF9800]" : "bg-[#FFF8E8] border-[#FFC107]/20"
                  }`}
                >
                  <span className="text-xs font-medium text-[#1E1E1E]">Custom AI Agent Integration</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needsAI ? "bg-[#FF9800] text-white" : "border border-[#666666]"}`}>
                    {needsAI && <Check className="w-3.5 h-3.5" />}
                  </div>
                </label>

                <label
                  onClick={() => setNeedsBranding(!needsBranding)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    needsBranding ? "bg-[#FFF3E0] border-[#FF9800]" : "bg-[#FFF8E8] border-[#FFC107]/20"
                  }`}
                >
                  <span className="text-xs font-medium text-[#1E1E1E]">Complete Brand Identity Suite</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${needsBranding ? "bg-[#FF9800] text-white" : "border border-[#666666]"}`}>
                    {needsBranding && <Check className="w-3.5 h-3.5" />}
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Speed */}
            <div>
              <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                4. Delivery Speed
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTimeline("standard")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    timeline === "standard"
                      ? "bg-[#1E1E1E] text-white border-[#1E1E1E]"
                      : "bg-[#FFF8E8] text-[#1E1E1E] border-[#FFC107]/25"
                  }`}
                >
                  Standard Delivery (3-4 Weeks)
                </button>
                <button
                  onClick={() => setTimeline("rush")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    timeline === "rush"
                      ? "bg-[#FF9800] text-white border-[#FF9800]"
                      : "bg-[#FFF8E8] text-[#1E1E1E] border-[#FFC107]/25"
                  }`}
                >
                  Priority Rush (10-14 Days)
                </button>
              </div>
            </div>

            {/* Total Result Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FFF3E0] via-[#FFE0B2] to-[#FFF3E0] border border-[#FFB74D]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#666666] uppercase tracking-wider">
                  Estimated Investment
                </span>
                <div className="font-heading font-extrabold text-3xl text-[#1E1E1E]">
                  ${estimatedPrice.toLocaleString()}{" "}
                  <span className="text-xs font-normal text-[#666666]">USD</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="btn-sunlight-primary px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
