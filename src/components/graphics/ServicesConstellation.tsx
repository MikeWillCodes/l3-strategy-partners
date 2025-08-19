"use client";

import { motion } from "framer-motion";
import { Brain, Target, Lightbulb, Users, Settings, Zap, CheckCircle } from "lucide-react";

const services = [
  { 
    icon: Brain, 
    title: "AI Strategy & Adoption", 
    angle: 0,
    id: "ai-strategy"
  },
  { 
    icon: CheckCircle, 
    title: "AI Readiness Score", 
    angle: 60,
    id: "ai-readiness"
  },
  { 
    icon: Target, 
    title: "Digital Modernization", 
    angle: 120,
    id: "digital-modernization"
  },
  { 
    icon: Users, 
    title: "Customer Experience", 
    angle: 180,
    id: "customer-experience"
  },
  { 
    icon: Settings, 
    title: "Process Automation", 
    angle: 240,
    id: "process-automation"
  },
  { 
    icon: Zap, 
    title: "Tailored AI Solutions", 
    angle: 300,
    id: "tailored-solutions"
  }
];

interface ServicesConstellationProps {
  onServiceHover?: (serviceId: string | null) => void;
}

export function ServicesConstellation({ onServiceHover }: ServicesConstellationProps) {
  const radius = 140;
  const centerX = 200;
  const centerY = 200;

  return (
    <div 
      className="relative w-[400px] h-[400px] mx-auto"
      aria-label="Services constellation graphic"
    >
      {/* Central ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-32 h-32 rounded-full border-2 border-primary/30 bg-panel/20 backdrop-blur-sm flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-center"
          >
            <div className="text-sm font-semibold text-gradient mb-1">
              Business
            </div>
            <div className="text-xs text-white/85">
              Outcomes
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting service nodes */}
      {services.map((service, index) => {
        const x = centerX + radius * Math.cos((service.angle * Math.PI) / 180);
        const y = centerY + radius * Math.sin((service.angle * Math.PI) / 180);

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="absolute"
            style={{
              left: x - 20,
              top: y - 20,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => onServiceHover?.(service.id)}
              onMouseLeave={() => onServiceHover?.(null)}
              onFocus={() => onServiceHover?.(service.id)}
              onBlur={() => onServiceHover?.(null)}
              className="w-10 h-10 rounded-full card border border-primary/20 flex items-center justify-center group hover:border-primary/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-describedby={`service-${service.id}`}
              onClick={() => {
                const element = document.getElementById(service.id);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <service.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
              <span className="sr-only">{service.title}</span>
            </motion.button>
          </motion.div>
        );
      })}

      {/* Connecting lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(123, 92, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(124, 246, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(123, 92, 255, 0.1)" />
          </linearGradient>
        </defs>
        
        {services.map((service, index) => {
          const x = centerX + radius * Math.cos((service.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((service.angle * Math.PI) / 180);
          
          return (
            <motion.line
              key={`line-${index}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="url(#constellation-gradient)"
              strokeWidth="1"
              strokeDasharray="2,4"
            />
          );
        })}
      </svg>

      {/* Hidden descriptions for screen readers */}
      {services.map((service) => (
        <div
          key={`desc-${service.id}`}
          id={`service-${service.id}`}
          className="sr-only"
        >
          {service.title} service node
        </div>
      ))}
    </div>
  );
}
