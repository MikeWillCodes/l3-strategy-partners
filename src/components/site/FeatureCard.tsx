"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      {/* Glass card with improved styling */}
      <div className="relative rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8 h-full transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(16,185,129,0.15)] group-hover:border-white/20">
        {/* Subtle abstract background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-fuchsia-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon section */}
        <div className="relative mb-6">
          <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-fuchsia-500/10 group-hover:from-emerald-500/20 group-hover:via-sky-500/20 group-hover:to-fuchsia-500/20 transition-all duration-500 group-hover:scale-110">
            <Icon className="h-8 w-8 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white/95 transition-colors duration-300">{title}</h3>
        <p className="text-white/85 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );
}
