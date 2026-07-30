"use client";

import React, { useState } from "react";
import { Sun, Heart, Github, Linkedin, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const socials = [
    {
      label: "Twitter / X",
      href: "https://x.com/Saigajavelli007",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/saiteja00743",
      icon: <Github className="w-4 h-4" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gajavelli-sai-teja-509266246",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      label: "Portfolio",
      href: "https://my-portfolio-crk3.vercel.app/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@its_me_tej_007",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/its_me_tejaa_007?igsh=eXV4ZnI4NjgzOXVq",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Sai_Teja_gajavelli__/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
  ];

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

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  title={soc.label}
                  aria-label={soc.label}
                  className="w-10 h-10 rounded-xl bg-white border border-[#FFC107]/25 text-[#1E1E1E] hover:bg-[#FF9800] hover:text-white hover:border-[#FF9800] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  {soc.icon}
                </a>
              ))}
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
