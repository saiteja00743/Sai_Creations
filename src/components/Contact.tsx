"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "₹50,000 – ₹1,00,000",
    projectType: "Website Design",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF9800", "#FFC107", "#FFE082", "#FFB74D"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#FFF8E8]/40 via-[#FFFDF8] to-[#FFF8E8]/60 relative overflow-hidden border-t border-[#FFC107]/15">
      {/* Background Sunlight Rays Decorative */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#FFE082]/30 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Booking Badge */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sunlight-badge-gradient text-[#E65100] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start A Conversation</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] tracking-tight mb-6">
                Let's Build Something Extraordinary.
              </h2>
              <p className="text-base sm:text-lg text-[#666666] font-body leading-relaxed">
                Have a project in mind, need a custom AI build, or want to discuss pricing? Fill out the form or schedule a direct consultation.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-2xl bg-white border border-[#FFC107]/30 shadow-sm flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4CAF50] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4CAF50]"></span>
              </span>
              <div>
                <div className="text-xs font-bold text-[#1E1E1E]">Currently Accepting New Projects</div>
                <div className="text-[11px] text-[#666666]">Typical response time: under 2 hours</div>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-[#FFC107]/20">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3E0] text-[#E65100] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#666666] font-medium">Email Us Directly</div>
                  <a href="mailto:gajavellisaiteja007@gmail.com" className="text-sm font-bold text-[#1E1E1E] hover:text-[#FF9800]">
                    gajavellisaiteja007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-[#FFC107]/20">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3E0] text-[#E65100] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#666666] font-medium">Call / WhatsApp</div>
                  <a href="tel:+918465996338" className="text-sm font-bold text-[#1E1E1E] hover:text-[#FF9800]">
                    +91 84659 96338
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-[#FFC107]/20">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3E0] text-[#E65100] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#666666] font-medium">Headquarters</div>
                  <div className="text-sm font-bold text-[#1E1E1E]">Kommala, Warangal, Telangana 🇮🇳</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#FFC107]/30 bg-white shadow-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#FFF3E0] text-[#FF9800] flex items-center justify-center mx-auto border-2 border-[#FF9800]/40 shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl text-[#1E1E1E]">
                    Thank You! Message Received.
                  </h3>

                  <p className="text-base text-[#666666] max-w-md mx-auto font-body">
                    We have received your project details. A senior partner from Sai Creations will get back to you within 2 hours with initial insights.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-sunlight-primary px-8 py-3 rounded-2xl font-bold text-sm"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-[#1E1E1E] mb-2">
                    Book Free Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ravi Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF8E8]/60 border border-[#FFC107]/30 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#FF9800] focus:bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. hello@yourbrand.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF8E8]/60 border border-[#FFC107]/30 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#FF9800] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Innovate Tech Solutions"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF8E8]/60 border border-[#FFC107]/30 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#FF9800] focus:bg-white"
                      />
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF8E8]/60 border border-[#FFC107]/30 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#FF9800] focus:bg-white cursor-pointer"
                      >
                        <option value="Under ₹25,000">Under ₹25,000</option>
                        <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                        <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                        <option value="₹1,00,000 – ₹5,00,000">₹1,00,000 – ₹5,00,000</option>
                        <option value="₹5,00,000+">₹5,00,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                      Primary Service Interested In
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "Website Design",
                        "Web Development",
                        "AI Agents & Automation",
                        "Mobile App",
                        "Branding",
                        "E-Commerce",
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            formData.projectType === type
                              ? "bg-[#FF9800] text-white border-[#FF9800]"
                              : "bg-[#FFF8E8] text-[#1E1E1E] border-[#FFC107]/25 hover:bg-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider block mb-2">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project goals, expected timeline, key features, and any specific requirements or references..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FFF8E8]/60 border border-[#FFC107]/30 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#FF9800] focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-sunlight-primary w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    {loading ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#666666]">
                    <ShieldCheck className="w-4 h-4 text-[#FF9800]" />
                    <span>Strict NDA & 100% Confidentiality Guaranteed</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
