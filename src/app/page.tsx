"use client";

import React from "react";
import SunlightEffects from "@/components/SunlightEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FFFDF8] text-[#1E1E1E] selection:bg-[#FFE082] selection:text-[#1E1E1E]">
      {/* Sunlight Interactive Rays & Background Effects */}
      <SunlightEffects />

      {/* Sticky Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section */}
      <Hero />

      {/* Trusted By Client Marquee */}
      <TrustedBy />

      {/* Services Showcase */}
      <Services />

      {/* Why Choose Us & Animated Counters */}
      <WhyChooseUs />

      {/* Portfolio Showcase Grid */}
      <Portfolio />

      {/* About Sai Creations */}
      <About />

      {/* Process Methodology Timeline */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing & AI Cost Estimator */}
      <Pricing />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
