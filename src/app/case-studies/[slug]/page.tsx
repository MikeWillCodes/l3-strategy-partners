"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Case study data structure for detail pages
const caseStudyDetails = {
  "oilfield-services-efficiency": {
    title: "Oilfield Services Efficiency",
    industry: "Energy Services",
    outcome: "20% equipment downtime reduction, $750K annual savings",
    client: {
      type: "Private Company",
      industry: "Energy Services",
      revenue: "$50M–$100M",
      size: "200–800 employees",
      region: "Houston / North America",
      engagement: "4 months"
    },
    challenge: "A mid-market oilfield services company faced significant challenges with unplanned equipment failures across multiple drilling sites, resulting in costly downtime and delayed operations. Manual monitoring processes couldn't predict equipment failures, leading to emergency repairs and lost revenue. The lack of real-time visibility into field operations made it difficult to optimize resource allocation and maintain equipment performance standards.",
    solution: "L3 implemented a comprehensive predictive maintenance platform with real-time field dashboards. Our solution included IoT sensor deployment across critical drilling equipment, machine learning (ML) models for failure prediction, and automated alert systems for maintenance teams. We developed custom dashboards providing real-time visibility into equipment performance, drilling progress, and maintenance schedules across all field locations.",
    impact: "• Reduced unplanned equipment downtime by 20% through predictive maintenance\n• Achieved $750,000 in annual cost savings from improved equipment utilization\n• Increased field productivity by 15% through optimized maintenance scheduling\n• Improved safety metrics by 25% with proactive equipment monitoring\n• Enhanced decision-making with real-time operational dashboards",
    testimonial: {
      quote: "The predictive maintenance system has transformed our field operations. We now prevent equipment failures before they impact our drilling schedules.",
      author: "Field Operations Manager",
      company: "Private Energy Services Company"
    }
  },
  "specialty-clinic-scheduling-optimization": {
    title: "Specialty Clinic Scheduling Optimization",
    industry: "Healthcare (Specialty Clinic)",
    outcome: "18% scheduling utilization improvement, $900K additional revenue",
    client: {
      type: "Private Company",
      industry: "Healthcare (Specialty Clinic)",
      revenue: "< $30M",
      size: "< 100 employees",
      region: "Houston / North America",
      engagement: "3 months"
    },
    challenge: "A small specialty clinic struggled with inefficient patient scheduling that resulted in high no-show rates and underutilized appointment slots. Manual scheduling processes couldn't predict patient behavior patterns, leading to gaps in the schedule and lost revenue opportunities. The clinic lacked data-driven insights to optimize appointment types, timing, and patient engagement strategies while maintaining HIPAA compliance.",
    solution: "L3 developed a HIPAA-compliant predictive analytics platform for scheduling optimization. Our solution analyzed de-identified patient patterns, appointment history, and treatment preferences to predict optimal scheduling windows and reduce no-shows. The platform included automated patient engagement tools that send personalized reminders and follow-up communications while maintaining strict privacy protections. We implemented predictive models for appointment demand forecasting and resource allocation.",
    impact: "• Improved patient scheduling utilization by 18% through predictive analytics\n• Generated $900,000 in additional annual revenue from optimized appointment scheduling\n• Reduced patient no-show rates by 22% with targeted engagement\n• Increased patient satisfaction scores by 15% through better scheduling experiences\n• Enhanced operational efficiency with automated scheduling workflows",
    compliance: "All patient data processing utilizes de-identified and aggregated information in full HIPAA compliance. The platform implements comprehensive encryption, role-based access controls, and detailed audit logging to ensure patient privacy protection throughout the analytics process.",
    testimonial: {
      quote: "The scheduling optimization has transformed our clinic operations while maintaining the highest privacy standards.",
      author: "Clinic Administrator",
      company: "Private Specialty Clinic"
    }
  },
  "law-firm-knowledge-automation": {
    title: "Law Firm Knowledge Automation",
    industry: "Legal Services",
    outcome: "35% faster legal research, $400K annual recovery",
    client: {
      type: "Private Company",
      industry: "Legal Services",
      revenue: "$50M–$100M",
      size: "150–600 employees",
      region: "Houston / North America",
      engagement: "5 months"
    },
    challenge: "A mid-market law firm struggled with inefficient legal research processes that consumed excessive billable hours and delayed client responses. Associates spent significant time searching through case precedents and legal documents manually, leading to billable hour leakage and reduced profitability. The firm's knowledge management system was fragmented, making it difficult to leverage institutional knowledge effectively and maintain competitive response times.",
    solution: "L3 implemented an AI-powered document search and knowledge automation platform. Our solution included natural language processing for legal document analysis, intelligent search functionality for case precedents, and automated brief generation tools. We developed custom workflows for document review, case law research, and client communication templates. The platform integrated with existing legal databases to provide comprehensive search capabilities across all firm resources.",
    impact: "• Cut legal research time by 35% through AI-powered document search\n• Recovered $400,000 annually in billable hours through improved efficiency\n• Improved client response speed by 28% with automated research tools\n• Enhanced document accuracy with 95% precision in legal precedent matching\n• Increased attorney productivity by 22% through streamlined workflows",
    testimonial: {
      quote: "The AI knowledge platform has revolutionized our legal research capabilities and significantly improved our client service delivery.",
      author: "Managing Partner",
      company: "Private Law Firm"
    }
  },
  "accounting-firm-workflow-automation": {
    title: "Accounting Firm Workflow Automation",
    industry: "Accounting",
    outcome: "28% faster month-end close, 1,200 hours saved annually",
    client: {
      type: "Private Company",
      industry: "Accounting",
      revenue: "< $30M",
      size: "< 100 employees",
      region: "Houston / North America",
      engagement: "3 months"
    },
    challenge: "A small accounting firm faced significant challenges with manual month-end close processes that required extensive overtime and delayed client reporting. Manual reconciliations were time-consuming and error-prone, creating audit readiness issues and staff burnout. The firm lacked automated workflows for routine accounting tasks, resulting in inefficient resource allocation and reduced client capacity.",
    solution: "L3 developed an automated workflow platform for month-end close processes and reconciliations. Our solution included automated journal entry processing, bank reconciliation workflows, and exception reporting systems. We implemented machine learning models for transaction categorization and anomaly detection. The platform featured automated audit trail generation and compliance reporting to improve audit readiness and regulatory compliance.",
    impact: "• Reduced month-end close cycles by 28% through automated reconciliations\n• Saved 1,200 staff hours annually with workflow automation\n• Improved audit readiness with 95% accuracy in automated processes\n• Enhanced client capacity by 20% through operational efficiency gains\n• Reduced overtime costs by 35% during peak accounting periods",
    testimonial: {
      quote: "The workflow automation has transformed our month-end processes and allowed us to serve more clients with the same team.",
      author: "Managing Partner",
      company: "Private Accounting Firm"
    }
  },
  "construction-project-analytics": {
    title: "Construction Project Analytics",
    industry: "Construction",
    outcome: "15% reduction in project overruns, $1.1M annual savings",
    client: {
      type: "Private Company",
      industry: "Construction",
      revenue: "$50M–$100M",
      size: "200–800 employees",
      region: "Houston / North America",
      engagement: "6 months"
    },
    challenge: "A mid-market general contractor struggled with project cost overruns and schedule delays that impacted profitability and client relationships. Manual project tracking couldn't provide real-time visibility into subcontractor performance, material costs, and project progress. The lack of predictive analytics made it difficult to identify potential issues early and implement corrective actions before they became costly problems.",
    solution: "L3 implemented a comprehensive project analytics platform with predictive modeling capabilities. Our solution included real-time project tracking dashboards, subcontractor performance analytics, and cost prediction models. We developed automated reporting systems for project managers and implemented machine learning algorithms to predict potential delays and cost overruns. The platform integrated with existing project management tools and financial systems.",
    impact: "• Lowered project overruns by 15% through predictive project analytics\n• Saved $1.1M annually via improved project cost management\n• Improved project delivery timelines by 20% with real-time tracking\n• Enhanced subcontractor performance monitoring with 90% accuracy\n• Increased project profitability by 18% through better resource allocation",
    testimonial: {
      quote: "The project analytics platform has given us unprecedented visibility into our operations and significantly improved our project outcomes.",
      author: "Operations Director",
      company: "Private Construction Company"
    }
  },
  "real-estate-portfolio-intelligence": {
    title: "Real Estate Portfolio Intelligence",
    industry: "Real Estate",
    outcome: "22% leasing efficiency improvement, $2M additional NOI",
    client: {
      type: "Private Company",
      industry: "Real Estate",
      revenue: "$50M–$100M",
      size: "150–500 employees",
      region: "Houston / North America",
      engagement: "4 months"
    },
    challenge: "A mid-market real estate developer struggled with inefficient leasing processes and limited insights into tenant behavior patterns. Manual market analysis couldn't provide real-time visibility into leasing opportunities and tenant preferences. The lack of predictive modeling made it difficult to optimize lease terms, pricing strategies, and property positioning. Without data-driven insights, the company missed opportunities to maximize net operating income (NOI) and improve portfolio performance.",
    solution: "L3 developed a comprehensive portfolio intelligence platform with tenant behavior analytics and predictive lease modeling. Our solution included market analysis dashboards, tenant segmentation models, and automated lease optimization tools. We implemented machine learning algorithms to predict tenant preferences, optimal lease terms, and market timing. The platform integrated with existing property management systems to provide real-time insights into portfolio performance and leasing opportunities.",
    impact: "• Improved leasing efficiency by 22% through tenant behavior analytics\n• Generated $2M in additional NOI through optimized lease modeling\n• Enhanced market positioning with 95% accuracy in demand prediction\n• Reduced vacancy periods by 18% with predictive leasing strategies\n• Increased portfolio ROI by 15% through data-driven decision making",
    testimonial: {
      quote: "The portfolio intelligence platform has given us unprecedented insights into our market and significantly improved our leasing performance.",
      author: "Development Director",
      company: "Private Real Estate Developer"
    }
  },
  "logistics-route-optimization": {
    title: "Logistics Route Optimization",
    industry: "Industrial Services (Logistics)",
    outcome: "12% fuel cost reduction, 20% delivery improvement",
    client: {
      type: "Private Company",
      industry: "Industrial Services (Logistics)",
      revenue: "< $30M",
      size: "< 100 employees",
      region: "Houston / North America",
      engagement: "3 months"
    },
    challenge: "A small logistics company faced significant challenges with manual route planning that resulted in high fuel costs and inconsistent delivery performance. The lack of real-time optimization tools made it difficult to adapt to traffic conditions, customer changes, or operational constraints. Manual fleet monitoring couldn't provide insights into vehicle performance or maintenance needs, leading to unexpected breakdowns and service disruptions.",
    solution: "L3 implemented an ML-driven route optimization and fleet monitoring platform. Our solution included real-time route planning algorithms, GPS tracking integration, and automated dispatch systems. We developed machine learning models to predict optimal routes based on traffic patterns, delivery windows, and vehicle capabilities. The platform featured fleet monitoring dashboards and predictive maintenance alerts to improve operational reliability.",
    impact: "• Cut fuel costs by 12% through ML-driven route optimization\n• Improved on-time deliveries by 20% with real-time route adjustments\n• Enhanced fleet utilization by 18% through optimized scheduling\n• Reduced maintenance costs by 15% with predictive monitoring\n• Increased customer satisfaction scores by 25% through reliable service",
    testimonial: {
      quote: "The route optimization platform has transformed our delivery operations and significantly improved our cost efficiency.",
      author: "Operations Manager",
      company: "Private Logistics Company"
    }
  },
  "dental-network-patient-engagement": {
    title: "Dental Network Patient Engagement",
    industry: "Dental Clinics",
    outcome: "17% no-show reduction, $600K additional revenue",
    client: {
      type: "Private Company",
      industry: "Dental Clinics",
      revenue: "< $30M",
      size: "< 100 employees",
      region: "Houston / North America",
      engagement: "4 months"
    },
    challenge: "A small dental clinic network struggled with high patient no-show rates and ineffective patient communication that resulted in lost revenue and operational inefficiencies. Manual appointment reminders and follow-up processes were time-consuming and inconsistent. The clinics lacked data-driven insights to understand patient behavior patterns and optimize engagement strategies while maintaining HIPAA compliance for all patient communications.",
    solution: "L3 developed a HIPAA-compliant patient engagement analytics platform with automated communication workflows. Our solution analyzed de-identified patient patterns to predict no-show risk and optimize appointment reminders. The platform included automated SMS and email communication systems with personalized messaging while maintaining strict privacy protections. We implemented patient segmentation models and engagement optimization tools.",
    impact: "• Reduced no-show appointments by 17% through targeted patient engagement\n• Added $600,000 in annual revenue from improved appointment utilization\n• Enhanced patient satisfaction scores by 20% with personalized communications\n• Improved operational efficiency with 90% automation of patient reminders\n• Increased appointment booking rates by 15% through optimized scheduling",
    compliance: "All patient data processing utilizes de-identified and aggregated information in full HIPAA compliance. The platform implements comprehensive encryption, role-based access controls, and detailed audit logging to ensure patient privacy protection.",
    testimonial: {
      quote: "The patient engagement platform has significantly improved our appointment efficiency while maintaining the highest privacy standards.",
      author: "Practice Manager",
      company: "Private Dental Clinic"
    }
  },
  "med-spa-growth-marketing-analytics": {
    title: "Med Spa Growth Marketing Analytics",
    industry: "Health & Wellness (Med Spas)",
    outcome: "23% repeat visit increase, $1.2M additional revenue",
    client: {
      type: "Private Company",
      industry: "Health & Wellness (Med Spas)",
      revenue: "< $30M",
      size: "< 100 employees",
      region: "Houston / North America",
      engagement: "5 months"
    },
    challenge: "A small med spa network struggled with customer retention and marketing effectiveness across its locations. The business lacked integrated customer analytics to understand treatment preferences, booking patterns, and customer lifecycle value. Manual marketing efforts were inefficient and couldn't deliver personalized experiences. Without data-driven insights, the spas missed opportunities to optimize service offerings and maximize customer lifetime value while maintaining HIPAA-aligned governance.",
    solution: "L3 implemented a HIPAA-aligned growth marketing analytics platform with AI-driven customer segmentation and lifecycle marketing. Our solution analyzed de-identified customer data to identify treatment preferences, optimal engagement timing, and personalized marketing opportunities. The platform included automated marketing workflows, customer segmentation models, and predictive analytics for service demand. All systems were designed with strict privacy protections and HIPAA compliance.",
    impact: "• Boosted repeat visits by 23% through AI-driven customer segmentation\n• Increased annual revenue by $1.2M with lifecycle marketing optimization\n• Enhanced customer lifetime value by 30% through personalized experiences\n• Improved marketing ROI by 40% with targeted campaign automation\n• Achieved 95% customer satisfaction through personalized service recommendations",
    compliance: "All customer data processing utilizes de-identified and aggregated information in full HIPAA compliance. The platform implements advanced encryption, role-based access controls, and comprehensive audit trails to ensure customer privacy protection throughout the marketing analytics process.",
    testimonial: {
      quote: "The growth marketing platform has transformed our customer relationships and business performance while maintaining the highest privacy standards.",
      author: "Business Owner",
      company: "Private Med Spa Network"
    }
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = params;
  const caseStudy = caseStudyDetails[slug as keyof typeof caseStudyDetails];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Button asChild variant="ghost" className="text-white/70 hover:text-white p-0">
                <Link href="/case-studies" className="inline-flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Case Studies
                </Link>
              </Button>
            </motion.div>

            {/* Hero Content */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-page-hero mb-6"
            >
              {caseStudy.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl font-light text-primary mb-12"
            >
              {caseStudy.outcome}
            </motion.p>

            {/* Client Snapshot Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Client Snapshot</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-white/60 mb-1">Client</p>
                  <p className="text-white font-medium">{caseStudy.client.type}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Industry</p>
                  <p className="text-white font-medium">{caseStudy.client.industry}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Revenue</p>
                  <p className="text-white font-medium">{caseStudy.client.revenue}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Size</p>
                  <p className="text-white font-medium">{caseStudy.client.size}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Region</p>
                  <p className="text-white font-medium">{caseStudy.client.region}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Engagement</p>
                  <p className="text-white font-medium">{caseStudy.client.engagement}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Business Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-hero mb-6">Business Challenge</h2>
              <p className="text-lg text-white/85 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* L3 Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-hero mb-6">L3 Solution</h2>
              <p className="text-lg text-white/85 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>

            {/* Business Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-hero mb-6">Business Impact</h2>
              <div className="text-lg text-white/85 leading-relaxed">
                {caseStudy.impact.split('\n').map((bullet, index) => (
                  <p key={index} className="mb-3">
                    {bullet}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Compliance Note (Healthcare cases only) */}
            {(caseStudy as any).compliance && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Compliance & Privacy</h2>
                <p className="text-white/85 leading-relaxed">
                  {(caseStudy as any).compliance}
                </p>
              </motion.div>
            )}

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8"
              >
                <blockquote className="text-xl font-light text-white/90 mb-6 italic">
                  &ldquo;{caseStudy.testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-primary font-medium">{caseStudy.testimonial.author}</p>
                  <p className="text-white/60 text-sm">{caseStudy.testimonial.company}</p>
                </div>
              </motion.div>
            )}
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
            <h2 className="text-section-hero mb-8">
              Ready to achieve similar results?
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
