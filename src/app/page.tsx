"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Stat } from "@/components/site/Stat";
import { Testimonial } from "@/components/site/Testimonial";
import { LogosMarquee } from "@/components/site/LogosMarquee";

import { 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  Target, 
  TrendingUp,
  Lightbulb,
  Settings,
  CheckCircle,
  Users,
  BarChart
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Strategy & Adoption",
    description: "From pilot to scale with governance and change management."
  },
  {
    icon: CheckCircle,
    title: "AI Readiness Score",
    description: "Fast assessment to identify gaps and quick wins."
  },
  {
    icon: Target,
    title: "Digital Modernization Blueprint",
    description: "Practical 90-day plan with priorities."
  },
  {
    icon: Users,
    title: "Customer Experience Optimization",
    description: "AI-assisted service and personalization."
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Automations that save hours each week."
  },
  {
    icon: Zap,
    title: "Tailored AI Solutions",
    description: "Custom co-pilots and domain models."
  }
];

const stats = [
  { value: "2023", label: "Founded", delay: 0 },
  { value: "100+", label: "Clients Served", delay: 0.1 },
  { value: "100+", label: "Projects Delivered", delay: 0.2 },
  { value: "15+", label: "Years of Experience", delay: 0.3 }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Logos */}
      <LogosMarquee />

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero mb-6">
              Comprehensive AI Solutions for SMB & Mid-Market
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI consulting services 
              to help your organization harness the full potential of artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              Our expertise speaks through measurable results and successful AI transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <Testimonial
            quote="L3 Strategy Partners transformed our AI capabilities from concept to production in record time. Their expertise in both technical implementation and strategic planning made all the difference."
            author="Sarah Chen"
            role="Chief Technology Officer"
            company="TechForward Inc"
          />
        </div>
      </section>


    </div>
  );
}
