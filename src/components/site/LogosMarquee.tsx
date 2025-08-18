"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Import logos directly from src/images
import AmazonLogo from "@/images/Amazon_logo.svg";
import MicrosoftLogo from "@/images/Microsoft_logo_(2012).png";
import PayPalLogo from "@/images/PayPal.png";
import GartnerLogo from "@/images/Gartner_logo.png";
import EALogo from "@/images/Electronic_Arts_2020.svg";
import FingerprintLogo from "@/images/fingercheck.png";
import MetrixLogo from "@/images/METRIX.png";
import OTLogo from "@/images/ot.svg";

const logos = [
  { src: AmazonLogo, alt: "Amazon Logo", name: "Amazon" },
  { src: MicrosoftLogo, alt: "Microsoft Logo", name: "Microsoft" },
  { src: PayPalLogo, alt: "PayPal Logo", name: "PayPal" },
  { src: GartnerLogo, alt: "Gartner Logo", name: "Gartner" },
  { src: EALogo, alt: "Electronic Arts Logo", name: "Electronic Arts" },
  { src: FingerprintLogo, alt: "Fingercheck Logo", name: "Fingercheck" },
  { src: MetrixLogo, alt: "METRIX Logo", name: "METRIX" },
  { src: OTLogo, alt: "OT Logo", name: "OT" }
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
                className="flex-shrink-0 p-6 min-w-[160px] h-[80px] flex items-center justify-center group hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
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
