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
    icon: Target,
    title: "Discovery Sprint",
    description: "2-week engagement to validate the problem, define success metrics, and produce a 90-day plan.",
    anchor: "discovery-sprint"
  },
  {
    icon: Users,
    title: "The PM Pod",
    description: "Your embedded PM team: Principal, Senior, and Associate PMs who run roadmap, sprints, and stakeholder alignment.",
    anchor: "pm-pod"
  },
  {
    icon: CheckCircle,
    title: "Delivery & Sprint Operations",
    description: "Backlog hygiene, sprint planning, QA handoff, and release notes that keep engineering unblocked.",
    anchor: "delivery-operations"
  },
  {
    icon: Brain,
    title: "Product Analytics & Metrics",
    description: "North Star Metric, KPI tree, tracking plan, and dashboards for clarity and accountability.",
    anchor: "product-analytics"
  },
  {
    icon: Zap,
    title: "Go-to-Market Alignment",
    description: "Positioning, pricing tests, and launch planning to ensure adoption and growth.",
    anchor: "go-to-market"
  },
  {
    icon: Settings,
    title: "Scaling & Org Design",
    description: "OKRs, hiring profiles, governance, and operating playbooks to scale product leadership.",
    anchor: "scaling-org-design"
  }
];

const serviceDetails = [
  {
    id: "discovery-sprint",
    title: "Discovery Sprint",
    subtitle: "Who it's for: Founders and teams that need clarity before building.",
    outcomes: [
      "Validated problem statement",
      "Success metrics + KPIs",
      "Prioritized opportunity list",
      "90-day plan"
    ],
    deliverables: "Research plan, interview notes, opportunity tree, success metrics sheet, 90-day plan",
    timeline: "2 weeks",
    kpis: "Decision confidence, # risks retired, time-to-plan",
    cta: "Start My Discovery Sprint",
    ctaLink: "/contact"
  },
  {
    id: "pm-pod",
    title: "The PM Pod",
    subtitle: "Your Product Management-as-a-Service (PMaaS) team.",
    outcomes: [
      "Roadmap clarity",
      "Predictable sprints",
      "Alignment across functions",
      "Faster iteration cycles"
    ],
    deliverables: "Roadmap, backlog, PRDs, release notes, stakeholder updates",
    timeline: "Ongoing, monthly",
    kpis: "On-time delivery %, sprint velocity, release frequency, adoption rate",
    cta: "Meet The PM Pod",
    ctaLink: "/contact"
  },
  {
    id: "delivery-operations",
    title: "Delivery & Sprint Operations",
    subtitle: "Install the operating system for shipping.",
    outcomes: [
      "Backlog hygiene",
      "QA handoffs",
      "Release cadence",
      "Sprint rituals"
    ],
    deliverables: "Working agreements, ticket templates, QA checklist, release template",
    timeline: "2–4 weeks",
    kpis: "Lead time, escaped bugs, planned vs delivered %",
    cta: "Optimize Delivery",
    ctaLink: "/contact"
  },
  {
    id: "product-analytics",
    title: "Product Analytics & Metrics",
    subtitle: "Make decisions with data, not guesswork.",
    outcomes: [
      "North Star Metric",
      "KPI tree",
      "Event schema",
      "Dashboards",
      "Experiment backlog"
    ],
    deliverables: "Metric tree, tracking plan, dashboard spec, experiment templates",
    timeline: "1–3 weeks",
    kpis: "Dashboard usage, experiment velocity, metric coverage %",
    cta: "Instrument My Product",
    ctaLink: "/contact"
  },
  {
    id: "go-to-market",
    title: "Go-to-Market Alignment",
    subtitle: "Connect product, marketing, and sales.",
    outcomes: [
      "Positioning",
      "Pricing tests",
      "Launch plan",
      "Enablement",
      "Post-launch AARs"
    ],
    deliverables: "Messaging brief, pricing test plan, launch checklist, enablement kit, post-launch review",
    timeline: "2–6 weeks",
    kpis: "Activation rate, conversion %, sales feedback adoption",
    cta: "Align GTM",
    ctaLink: "/contact"
  },
  {
    id: "scaling-org-design",
    title: "Scaling & Org Design",
    subtitle: "Graduate from heroics to a durable product org.",
    outcomes: [
      "OKRs",
      "Hiring profiles",
      "Governance",
      "Operating rhythm",
      "Playbooks"
    ],
    deliverables: "OKR packet, hiring scorecards, governance charter, process playbooks",
    timeline: "4–8 weeks",
    kpis: "Goal attainment %, planning accuracy, employee eNPS",
    cta: "Scale the Org",
    ctaLink: "/contact"
  }
];

const packages = [
  {
    name: "Discovery Sprint",
    duration: "2 weeks",
    description: "Validation, metrics, risks retired, 90-day plan",
    benefits: [
      "Validation",
      "Metrics", 
      "Risks retired",
      "90-day plan"
    ],
    cta: "Book a Discovery Sprint",
    ctaLink: "/contact",
    popular: false
  },
  {
    name: "The PM Pod", 
    duration: "Monthly",
    description: "Embedded PM leadership, roadmap + sprints, delivery + releases",
    benefits: [
      "Embedded PM leadership",
      "Roadmap + sprints",
      "Delivery + releases"
    ],
    cta: "Start My PM Pod",
    ctaLink: "/contact",
    popular: true
  },
  {
    name: "Scale",
    duration: "Quarterly", 
    description: "OKRs, hiring, governance, playbooks",
    benefits: [
      "OKRs",
      "Hiring", 
      "Governance",
      "Playbooks"
    ],
    cta: "Scale with L3",
    ctaLink: "/contact",
    popular: false
  }
];

export default function ServicesPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleStepClick = (_stepId: string) => {
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
              Product Management{" "}
              <span className="text-gradient">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/85 mb-8 max-w-3xl mx-auto"
            >
              From discovery to delivery, we embed product leadership so startups and SMBs ship the right product faster.
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
                  aria-label="Book a Discovery Sprint on Services page"
                >
                  Book a Discovery Sprint
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
              A proven three-step approach to product delivery
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
              Ready to Ship the Right Product?
            </h2>
            <p className="text-xl text-white/85 mb-8">
              Let&apos;s embed product leadership and give your team clarity, cadence, and confidence.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/contact">
                Book a Discovery Sprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}