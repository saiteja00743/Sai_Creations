"use client";

import React, { useState } from "react";
import { Sun, Sparkles, ArrowRight, Heart, Twitter, Github, Linkedin, Dribbble, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#FFF8E8] border-t border-[#FFC107]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Glow flare bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FFE082]/30 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF9800] via-[#FFC107] to-[#FFE082] flex items-center justify-center shadow-md">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-[#1E1E1E]">
                  Sai Creations
                </span>
                <span className="text-[10px] tracking-widest text-[#FF9800] uppercase font-semibold -mt-1">
                  Sunlight Studio
                </span>
              </div>
            </a>

            <p className="text-sm text-[#666666] leading-relaxed font-body">
              We design high-performance websites, AI-powered applications, mobile apps, branding, and digital experiences that make your business stand out.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Dribbble, href: "https://dribbble.com" },
              ].map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-[#FFC107]/25 text-[#1E1E1E] hover:bg-[#FF9800] hover:text-white hover:border-[#FF9800] flex items-center justify-center transition-all duration-300 shadow-xs"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-base text-[#1E1E1E] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-[#666666]">
              {["Home", "Services", "Projects", "About", "Process", "Testimonials", "Pricing", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-[#FF9800] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-[#1E1E1E] uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-[#666666]">
              {[
                "Website Design",
                "Web Development",
                "Mobile Apps",
                "AI Automation & Agents",
                "UI/UX Design",
                "Branding & Identity",
                "SEO & Growth",
              ].map((serv) => (
                <li key={serv}>
                  <a href="#services" className="hover:text-[#FF9800] transition-colors">
                    {serv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-[#1E1E1E] uppercase tracking-wider">
              Sunlight Dispatch
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Subscribe to get curated insights on AI tech stack trends, web performance tips, and design innovations.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-white border border-[#FF9800] text-xs font-bold text-[#E65100]">
                ✨ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#FFC107]/30 text-xs text-[#1E1E1E] focus:outline-none focus:border-[#FF9800]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#FF9800] text-white flex items-center justify-center hover:bg-[#F57C00] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FFC107]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#666666]">
          <div>
            © {new Date().getFullYear()} Sai Creations. All rights reserved. Sunlight Luxury Theme.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF9800] fill-[#FF9800]" />
            <span>for Ambitious Brands</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
