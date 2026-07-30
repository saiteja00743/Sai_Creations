"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function SunlightEffects() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9800] via-[#FFC107] to-[#FFE082] z-50 origin-left shadow-[0_0_12px_rgba(255,152,0,0.8)]"
        style={{ scaleX }}
      />

      {/* Mouse Sunlight Glow Beam */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 193, 7, 0.13), rgba(255, 152, 0, 0.04) 40%, transparent 80%)`,
        }}
      />

      {/* Fixed Ambient Floating Light Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top Left Golden Blob */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFE082]/40 via-[#FFB74D]/25 to-transparent blur-3xl animate-pulse-glow"
        />

        {/* Top Right Orange Warm Blob */}
        <div
          className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-[#FFB74D]/30 via-[#FFE0B2]/30 to-transparent blur-3xl animate-float"
        />

        {/* Center Soft Sunlight Blob */}
        <div
          className="absolute top-2/3 left-1/3 w-[36rem] h-[36rem] rounded-full bg-radial from-[#FFF3E0]/50 via-[#FFE082]/20 to-transparent blur-3xl"
        />
      </div>
    </>
  );
}
