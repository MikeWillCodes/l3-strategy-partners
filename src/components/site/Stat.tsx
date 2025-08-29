"use client";

import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  delay?: number;
}

export function Stat({ value, label, delay = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center min-w-48"
    >
      <div className="text-display text-gradient mb-2 font-bold">
        {value}
      </div>
      <div className="text-white/85 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
