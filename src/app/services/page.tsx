"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  Users, 
  Settings, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  TrendingUp
} from "lucide-react";
import { ThreeStepProcess } from "@/components/graphics/ThreeStepProcess";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Adoption",
    description: "From pilot to scale with governance and change management.",
    anchor: "ai-strategy"
  },
  {
    icon: CheckCircle,
    title: "AI Readiness Score",
    description: "Fast assessment to identify gaps and quick wins.",
    anchor: "ai-readiness"
  },
  {
    icon: Target,
    title: "Digital Modernization Blueprint",
    description: "Practical 90-day plan with priorities.",
    anchor: "digital-modernization"
  },
  {
    icon: Users,
    title: "Customer Experience Optimization",
    description: "AI-assisted service and personalization.",
    anchor: "customer-experience"
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Automations that save hours each week.",
    anchor: "process-automation"
  },
  {
    icon: Zap,
    title: "Tailored AI Solutions",
    description: "Custom co-pilots and domain models.",
    anchor: "tailored-solutions"
  }
];

const serviceDetails = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Adoption",
    subtitle: "Who it's for: Leaders who need an AI roadmap and a way to scale wins.",
    outcomes: [
      "Aligned vision, prioritized use-cases, and ROI model",
      "Governance (risk, data, ethics), operating model, and adoption plan", 
      "Change management and training playbook"
    ],
    deliverables: "Strategy deck, 12-month roadmap, governance charter, use-case backlog, training plan",
    timeline: "4–6 weeks",
    kpis: "Time saved per process, cycle-time reduction, adoption rate, incident rate, CSAT",
    cta: "Book Consultation",
    ctaLink: "/contact"
  },
  {
    id: "ai-readiness",
    title: "AI Readiness Score", 
    subtitle: "What you get: A 360° score across People, Data, Tech, Process, Risk with quick wins.",
    deliverables: "Benchmark scorecard, maturity heatmap, top 10 opportunities, 30-60-90 plan",
    timeline: "10 business days",
    kpis: "Baseline vs. target readiness, # quick wins shipped in 30 days",
    cta: "Get Your AI Readiness Score",
    ctaLink: "/ai-readiness"
  },
  {
    id: "digital-modernization",
    title: "Digital Modernization Blueprint (90 days)",
    subtitle: "Focus: Data foundations, platform choices, and integration plan.",
    deliverables: "Target architecture, reference patterns (including RAG), backlog with estimates, migration plan, cost envelope",
    timeline: "3–4 weeks planning + 90-day execution plan",
    kpis: "Data pipeline reliability, latency, cost per inference/process, security posture",
    cta: "See the 90-Day Plan",
    ctaLink: "/contact"
  },
  {
    id: "customer-experience",
    title: "Customer Experience Optimization",
    subtitle: "Use-cases: AI triage, agent assist, self-service, personalization.",
    deliverables: "Journey map with AI moments, bot/agent flows, pilot build, analytics and guardrails",
    timeline: "4–8 weeks to first pilot",
    kpis: "CSAT, first-contact resolution, average handle time, deflection rate, revenue per visitor",
    cta: "Improve CX",
    ctaLink: "/contact"
  },
  {
    id: "process-automation",
    title: "Process Automation", 
    subtitle: "Scope: Identify high-ROI automations across finance, ops, sales, and support.",
    deliverables: "Automation backlog, 2–3 pilots, documentation, training",
    timeline: "2–6 weeks to first production automation",
    kpis: "Hours saved/month, error rate, throughput, SLA adherence",
    cta: "Automate a Workflow",
    ctaLink: "/contact"
  },
  {
    id: "tailored-solutions",
    title: "Tailored AI Solutions",
    subtitle: "Examples: Team co-pilots, industry copilots, forecasting, compliance summarization, custom RAG apps.",
    deliverables: "Solution spec, prototype, integration, evaluation + safety checklist",
    timeline: "6–10 weeks typical MVP",
    kpis: "Task completion rate, speed-to-answer, cost per task, accuracy",
    cta: "Design Your Co-Pilot",
    ctaLink: "/contact"
  }
];

const packages = [
  {
    name: "Starter",
    duration: "2 weeks",
    description: "Discovery, readiness score, quick-wins plan"
  },
  {
    name: "Sprint", 
    duration: "6 weeks",
    description: "Roadmap, governance, 1–2 pilots shipped"
  },
  {
    name: "Scale",
    duration: "12 weeks", 
    description: "Platform patterns, runbook, 3–5 use-cases live"
  }
];

export default function ServicesPage() {
  const handleStepClick = (stepId: string) => {
    // Smooth scroll to engagement process accordion
    const element = document.getElementById('engagement-process');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-page-hero mb-6"
            >
              Expert AI Consulting{" "}
              <span className="text-gradient">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/85 mb-8 max-w-3xl mx-auto"
            >
              From strategy to implementation, we help SMBs and mid-market organizations turn AI into measurable business outcomes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:bg-panel-strong transition-colors duration-300 group cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(service.anchor);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {serviceDetails.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-16 ${index % 2 === 1 ? 'bg-panel/20' : ''}`}
        >
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-section-hero mb-4">{service.title}</h2>
                <p className="text-xl text-white/85 mb-8">{service.subtitle}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {service.outcomes && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Outcomes</h3>
                        <ul className="space-y-2">
                          {service.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                              <span className="text-white/85 text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Deliverables</h3>
                      <p className="text-white/85 text-sm">{service.deliverables}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Timeline</h3>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-primary mr-2" />
                        <span className="text-white/85 text-sm">{service.timeline}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Sample KPIs</h3>
                      <div className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-white/85 text-sm">{service.kpis}</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href={service.ctaLink}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Packages Section */}
      <section className="py-20 border-y border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero mb-6">Service Packages</h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              Choose the engagement model that fits your timeline and transformation goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
                <p className="text-primary font-medium mb-4">{pkg.duration}</p>
                <p className="text-white/85 text-sm">{pkg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Step Process */}
      <section id="engagement-process" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero mb-6">Our Engagement Process</h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              A proven three-step approach to AI transformation
            </p>
          </motion.div>

          <ThreeStepProcess onStepClick={handleStepClick} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-section-hero mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-white/85 mb-8">
              Let's discuss how our consulting services can help transform your organization.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}