"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Stat } from "@/components/site/Stat";
import { Testimonial } from "@/components/site/Testimonial";
import { LogosMarquee } from "@/components/site/LogosMarquee";

import { 
  Brain, 
  Zap, 
  Target, 
  Settings,
  CheckCircle,
  Users
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Discovery Sprint",
    description: "2-week engagement to validate the problem, define success metrics, and produce a 90-day plan."
  },
  {
    icon: Users,
    title: "The PM Pod",
    description: "Your dedicated PM Pod team — led by a Principal PM with support from Senior and Associate PMs. Together, they design your roadmap, run sprints, and drive outcomes."
  },
  {
    icon: CheckCircle,
    title: "Delivery & Sprint Operations",
    description: "Standups, backlog hygiene, acceptance criteria, and release notes that keep engineering unblocked."
  },
  {
    icon: Brain,
    title: "Product Analytics & Metrics",
    description: "North Star Metric, KPIs (key performance indicators), tracking plans, and dashboards for clarity."
  },
  {
    icon: Zap,
    title: "Go-to-Market Alignment",
    description: "Positioning, pricing experiments, launch checklists, and cross-functional coordination for adoption."
  },
  {
    icon: Settings,
    title: "Scaling & Org Design",
    description: "OKRs (Objectives and Key Results), process playbooks, and governance to scale product delivery."
  }
];

const stats = [
  { value: "10+", label: "FAANG PMs", delay: 0 },
  { value: "100+", label: "Products shipped", delay: 0.1 },
  { value: "20+", label: "Years of product leadership experience", delay: 0.2 }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Logos */}
      <LogosMarquee />

      {/* Features Section */}
      <section className="py-24 lg:py-40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero-gradient mb-6">
              L3 Delivers <span className="text-gradient">Product Management-as-a-Service</span>
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto">
              From discovery to delivery, we embed experienced product leadership so your team ships the right thing on time.
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
      <section className="py-24 lg:py-32 border-y border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero-gradient mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              Our product leadership is measured by shipped features and business impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 max-w-5xl mx-auto">
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
            quote="L3 gave us clarity and cadence. In two sprints, our PM Pod turned a vague backlog into a roadmap and helped us launch on schedule."
            author="Anonymous"
            role="CEO at Seed-stage SaaS Company"
            company=""
          />
        </div>
      </section>


    </div>
  );
}
