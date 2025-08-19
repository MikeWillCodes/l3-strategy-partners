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
      "Aligned vision and prioritized use-cases tied to measurable business value.",
      "Governance model (risk, data, ethics) and adoption plan.",
      "12-month roadmap with dependencies and investment profile.",
      "Change-management playbook and training paths."
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
    outcomes: [
      "Baseline maturity score across People, Data, Tech, Process, Risk with benchmark.",
      "Top 10 quick wins prioritized by impact/effort.",
      "Gap analysis for data, platform, and policy.",
      "30-60-90 plan with owners and checkpoints."
    ],
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
    outcomes: [
      "Target reference architecture (incl. RAG patterns) and platform choice rationale.",
      "Sequenced migration plan with cost envelope and risk controls.",
      "Reusable integration patterns and dev guardrails.",
      "Backlog with estimates for the first 90 days."
    ],
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
    outcomes: [
      "Faster resolution with agent assist and smart self-service.",
      "Higher CSAT and reduced average handle time.",
      "Personalization playbook across key journeys.",
      "Analytics + guardrails for quality and safety."
    ],
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
    outcomes: [
      "Hours saved and throughput increased in priority workflows.",
      "Error rate and rework reduced with auditable steps.",
      "SLA adherence improved with alerts and dashboards.",
      "Enablement kit so teams can scale automations."
    ],
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
    outcomes: [
      "Working prototype to production with clear acceptance tests.",
      "Secure data integrations and evaluation harness.",
      "Safety checklist and monitoring for drift/quality.",
      "Documented runbook for handoff and iteration."
    ],
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
    description: "Perfect for exploring AI opportunities and quick wins",
    benefits: [
      "AI readiness assessment",
      "Top 5 quick wins identified", 
      "30-day action plan"
    ],
    cta: "Get Started",
    ctaLink: "/contact",
    popular: false
  },
  {
    name: "Sprint", 
    duration: "6 weeks",
    description: "Ideal for building your AI foundation and first pilots",
    benefits: [
      "Complete AI strategy & roadmap",
      "2-3 pilots shipped to production",
      "Governance model & training"
    ],
    cta: "Plan My Sprint",
    ctaLink: "/contact",
    popular: true
  },
  {
    name: "Scale",
    duration: "12 weeks", 
    description: "Comprehensive transformation with multiple use cases",
    benefits: [
      "Platform architecture & patterns",
      "5+ use cases in production", 
      "Runbook for scaling AI"
    ],
    cta: "Scale with L3",
    ctaLink: "/contact",
    popular: false
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-8 py-4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                data-analytics="services_hero_cta_click"
              >
                <Link 
                  href="/contact"
                  aria-label="Book Consultation on Services page"
                >
                  Book Consultation
                </Link>
              </Button>
            </motion.div>
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
                <h2 className="text-section-hero-gradient mb-4">{service.title}</h2>
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
            <h2 className="text-section-hero-gradient mb-6">Service Packages</h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              Choose the engagement model that fits your timeline and transformation goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative card p-8 text-center min-h-[260px] min-w-[360px] group cursor-pointer hover:scale-105 hover:ring-2 hover:ring-primary/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 ${
                  pkg.popular ? 'border-primary/50 bg-primary/5' : ''
                }`}
                onClick={() => {
                  window.location.href = pkg.ctaLink;
                }}
                tabIndex={0}
                role="button"
                aria-label={`${pkg.name} package - ${pkg.description}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.location.href = pkg.ctaLink;
                  }
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-black text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-primary font-semibold text-lg mb-3">{pkg.duration}</p>
                  <p className="text-white/85 text-sm mb-4">{pkg.description}</p>
                </div>
                
                <div className="space-y-2 mb-8">
                  {pkg.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-white/85">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold group-hover:scale-105 transition-transform duration-200"
                    data-analytics="services_package_cta_click"
                    aria-label={`${pkg.cta} - ${pkg.name} package`}
                  >
                    {pkg.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
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
            <h2 className="text-section-hero-gradient mb-6">Our Engagement Process</h2>
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
              Let&apos;s discuss how our consulting services can help transform your organization.
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