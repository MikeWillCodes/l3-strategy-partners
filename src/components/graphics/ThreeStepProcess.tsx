"use client";

import { motion } from "framer-motion";
import { Search, Target, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery & Assessment", 
    subtitle: "Weeks 1–2",
    icon: Search,
    description: "We start with a comprehensive assessment of your current AI readiness, data infrastructure, and business priorities to identify immediate opportunities.",
    deliverables: [
      "Stakeholder interviews and workshops",
      "Technology and data audit",
      "Risk and compliance assessment", 
      "Quick wins identification",
      "Baseline readiness scorecard"
    ],
    kpis: "Current maturity score, # immediate opportunities identified",
    cta: "Begin Discovery",
    ctaLink: "/contact"
  },
  {
    id: "strategy",
    step: "02", 
    title: "Strategy & Planning",
    subtitle: "Weeks 3–6",
    icon: Target,
    description: "Build a comprehensive AI strategy with prioritized roadmap, governance frameworks, and detailed implementation plans for your first pilots.",
    deliverables: [
      "12-month AI roadmap with priorities",
      "Governance model and risk framework",
      "Architecture patterns and platform choices",
      "Detailed business cases for pilots",
      "Change management plan"
    ],
    kpis: "ROI projections, pilot selection criteria, governance adoption",
    cta: "Plan My Strategy", 
    ctaLink: "/contact"
  },
  {
    id: "implementation",
    step: "03",
    title: "Implementation & Support",
    subtitle: "Weeks 7+", 
    icon: Rocket,
    description: "Execute your AI pilots with hands-on support, measure results, and scale successful use cases across your organization with ongoing guidance.",
    deliverables: [
      "2-3 AI pilots shipped to production",
      "Performance monitoring and dashboards",
      "Team training and enablement",
      "Scaling playbooks and templates",
      "Ongoing optimization support"
    ],
    kpis: "Pilot success rate, time to production, user adoption, ROI achieved",
    cta: "Launch My Pilot",
    ctaLink: "/contact"
  }
];

interface ThreeStepProcessProps {
  onStepClick?: (stepId: string) => void;
}

export function ThreeStepProcess({ onStepClick }: ThreeStepProcessProps) {
  return (
    <div className="space-y-16">
      {/* Enhanced Process Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          
          {/* Enhanced Connector line */}
          <div className="absolute hidden lg:block top-1/2 left-[16%] right-[16%] h-1">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-primary/40 via-cyan-400/40 to-primary/40 rounded-full"
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
              className="flex flex-col items-center text-center group relative z-10 mb-12 lg:mb-0"
            >
              {/* Enhanced Step node - 96px diameter */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onStepClick?.(step.id);
                  // Smooth scroll to the corresponding detail card
                  const element = document.getElementById(`detail-${step.id}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="relative w-24 h-24 rounded-full card border-2 border-primary/30 hover:border-primary/60 flex flex-col items-center justify-center mb-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg group-hover:bg-primary/10 group-hover:scale-110"
                aria-describedby={`step-${step.id}-description`}
                aria-label={`${step.title} - Click to learn more`}
              >
                {/* Step number */}
                <div className="text-sm font-bold text-primary mb-1">
                  {step.step}
                </div>
                
                {/* Enhanced Icon */}
                <step.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />

                {/* Enhanced Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              </motion.button>

              {/* Clear labels under nodes */}
              <div className="max-w-xs">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {step.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Mobile connector */}
        <div className="lg:hidden absolute left-1/2 top-24 bottom-32 w-1 -translate-x-1/2">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-b from-primary/40 via-cyan-400/40 to-primary/40 rounded-full"
            style={{ transformOrigin: "top" }}
          />
        </div>
      </div>

      {/* Detailed Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={`detail-${step.id}`}
            id={`detail-${step.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card p-6 hover:bg-panel-strong transition-colors duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-primary font-medium">{step.subtitle}</p>
              </div>
            </div>
            
            <p className="text-white/85 text-sm mb-4 leading-relaxed">
              {step.description}
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Deliverables</h4>
                <ul className="space-y-1">
                  {step.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start text-xs text-white/85">
                      <CheckCircle className="h-3 w-3 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Sample KPIs</h4>
                <p className="text-xs text-white/85">{step.kpis}</p>
              </div>
              
              <Button 
                asChild 
                size="sm" 
                className="w-full bg-primary hover:bg-primary/90 text-black font-medium"
                data-analytics="services_process_cta_click"
              >
                <Link 
                  href={step.ctaLink}
                  aria-label={`${step.cta} - ${step.title}`}
                >
                  {step.cta}
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
