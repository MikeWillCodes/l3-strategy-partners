"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const logos = [
  { name: "TechCorp", alt: "TechCorp logo" },
  { name: "DataFlow", alt: "DataFlow logo" },
  { name: "AI Systems", alt: "AI Systems logo" },
  { name: "CloudVenture", alt: "CloudVenture logo" },
  { name: "InnovateLab", alt: "InnovateLab logo" },
  { name: "FutureScale", alt: "FutureScale logo" },
  { name: "SmartGrid", alt: "SmartGrid logo" },
  { name: "NextGen AI", alt: "NextGen AI logo" },
  { name: "DataMind", alt: "DataMind logo" },
  { name: "ScaleUp", alt: "ScaleUp logo" },
  { name: "TechForward", alt: "TechForward logo" },
  { name: "AI Solutions", alt: "AI Solutions logo" }
];

export function LogosMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 border-y border-white/10">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted mb-12 font-medium"
        >
          Trusted by leading organizations worldwide
        </motion.p>
        
        <div 
          className="relative overflow-hidden"
          aria-label="Trusted by our clients"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{ x: isPaused ? undefined : [0, -50 + "%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-12 items-center"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 card p-4 min-w-[180px] text-center group hover:scale-105 transition-all duration-300"
              >
                <div 
                  className="text-lg font-semibold text-muted/60 group-hover:text-muted tracking-wide transition-colors duration-300"
                  aria-label={logo.alt}
                >
                  {logo.name}
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
