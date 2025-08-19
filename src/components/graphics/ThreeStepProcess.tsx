"use client";

import { motion } from "framer-motion";
import { Search, Target, Rocket } from "lucide-react";

const steps = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery & Assessment", 
    subtitle: "Weeks 1–2",
    icon: Search,
    description: "Stakeholder interviews, data/tech review, risk and policy check, quick-wins shortlist."
  },
  {
    id: "strategy",
    step: "02", 
    title: "Strategy & Planning",
    subtitle: "Weeks 3–6",
    icon: Target,
    description: "Prioritized roadmap, governance, architecture patterns, business case."
  },
  {
    id: "implementation",
    step: "03",
    title: "Implementation & Support",
    subtitle: "Weeks 7+", 
    icon: Rocket,
    description: "Pilots to production, measurement, training, runbooks."
  }
];

interface ThreeStepProcessProps {
  onStepClick?: (stepId: string) => void;
}

export function ThreeStepProcess({ onStepClick }: ThreeStepProcessProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Process timeline */}
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        
        {/* Connector line */}
        <div className="absolute hidden md:block top-1/2 left-1/4 right-1/4 h-px">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-primary/30 via-cyan-400/30 to-primary/30"
            style={{ transformOrigin: "left" }}
          />
        </div>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group relative z-10 mb-8 md:mb-0"
          >
            {/* Step node */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onStepClick?.(step.id)}
              className="relative w-24 h-24 rounded-full card border border-primary/20 hover:border-primary/40 flex flex-col items-center justify-center mb-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg group-hover:bg-primary/5"
              aria-describedby={`step-${step.id}-description`}
            >
              {/* Step number */}
              <div className="text-xs font-bold text-primary mb-1">
                {step.step}
              </div>
              
              {/* Icon */}
              <step.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            </motion.button>

            {/* Step content */}
            <div className="max-w-xs">
              <h3 className="text-lg font-semibold text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-primary mb-2 font-medium">
                {step.subtitle}
              </p>
              <p 
                id={`step-${step.id}-description`}
                className="text-sm text-white/85 leading-relaxed"
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile connector */}
      <div className="md:hidden absolute left-1/2 top-24 bottom-24 w-px -translate-x-1/2">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-b from-primary/30 via-cyan-400/30 to-primary/30"
          style={{ transformOrigin: "top" }}
        />
      </div>
    </div>
  );
}
