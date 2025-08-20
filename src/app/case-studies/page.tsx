"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Oilfield Services Efficiency",
    company: "Private Company",
    industry: "Energy Services (Mid‑Market)",
    description: "Reduced unplanned equipment downtime by 20% and saved $750K annually with predictive maintenance and real‑time field dashboards.",
    slug: "oilfield-services-efficiency"
  },
  {
    title: "Specialty Clinic Scheduling Optimization",
    company: "Private Company", 
    industry: "Healthcare (Specialty Clinic, SMB)",
    description: "Improved patient scheduling utilization by 18% and increased annual revenue by $900K using HIPAA‑compliant predictive analytics.",
    slug: "specialty-clinic-scheduling-optimization"
  },
  {
    title: "Law Firm Knowledge Automation",
    company: "Private Company",
    industry: "Legal Services (Mid‑Market)",
    description: "Cut legal research time by 35%, recovered $400K annually in billable hours, and improved client response speed with AI‑powered document search.",
    slug: "law-firm-knowledge-automation"
  },
  {
    title: "Accounting Firm Workflow Automation",
    company: "Private Company",
    industry: "Accounting (SMB)",
    description: "Reduced month‑end close cycles by 28%, saved 1,200 staff hours annually, and improved audit readiness with automated reconciliations.",
    slug: "accounting-firm-workflow-automation"
  },
  {
    title: "Construction Project Analytics",
    company: "Private Company",
    industry: "Construction (Mid‑Market GC)",
    description: "Lowered project overruns by 15% and saved $1.1M annually via predictive project analytics and subcontractor performance dashboards.",
    slug: "construction-project-analytics"
  },
  {
    title: "Real Estate Portfolio Intelligence",
    company: "Private Company",
    industry: "Real Estate (Mid‑Market Developer)",
    description: "Improved leasing efficiency by 22% and generated $2M in additional NOI through tenant behavior analytics and predictive lease modeling.",
    slug: "real-estate-portfolio-intelligence"
  },
  {
    title: "Logistics Route Optimization",
    company: "Private Company",
    industry: "Industrial Services (Logistics, SMB)",
    description: "Cut fuel costs by 12% and improved on‑time deliveries by 20% using ML‑driven route optimization and fleet monitoring.",
    slug: "logistics-route-optimization"
  },
  {
    title: "Dental Network Patient Engagement",
    company: "Private Company",
    industry: "Dental Clinics (SMB)",
    description: "Reduced no‑show appointments by 17% and added $600K in annual revenue with HIPAA‑compliant patient engagement analytics.",
    slug: "dental-network-patient-engagement"
  },
  {
    title: "Med Spa Growth Marketing Analytics",
    company: "Private Company",
    industry: "Health & Wellness (Med Spas, SMB)",
    description: "Boosted repeat visits by 23% and increased annual revenue by $1.2M using AI‑driven segmentation and lifecycle marketing under HIPAA‑aligned governance.",
    slug: "med-spa-growth-marketing-analytics"
  }
];



export default function CaseStudiesPage() {
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
              Client <span className="text-gradient">Success Stories</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/85 mb-8 max-w-3xl mx-auto"
            >
              See how L3 helps SMB and mid‑market organizations modernize, scale, and compete with AI‑powered solutions. 
              Each story highlights the challenge, the strategy, and the measurable results achieved.
            </motion.p>
          </div>
        </div>
      </section>



      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/case-studies/${study.slug}`}>
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] shadow-[0_0_40px_rgba(0,0,0,0.35)] p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_8px_60px_rgba(123,92,255,0.15)] hover:border-white/20 hover:bg-white/[0.06] cursor-pointer">
                    {/* Industry pill */}
                    <div className="mb-4">
                      <Badge 
                        variant="outline" 
                        className="px-3 py-1 text-xs font-medium bg-white/5 border-white/20 text-white/90 hover:bg-white/10"
                      >
                        {study.industry}
                      </Badge>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                      {study.title}
                    </h3>
                    
                    {/* Client label */}
                    <p className="text-sm text-primary mb-4 font-medium">{study.company}</p>
                    
                    {/* Teaser copy */}
                    <p className="text-white/85 text-sm mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-primary group-hover:text-white transition-all duration-300">
                      <span className="text-sm font-medium group-hover:underline">Read Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
              Ready to explore what AI can do for your business?
            </h2>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
