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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl lg:text-6xl font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}
