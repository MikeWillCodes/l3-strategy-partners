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
    challenge: "A mid‑market oilfield services company faced escalating challenges with unplanned equipment failures across multiple drilling sites. Manual monitoring created blind spots that led to costly downtime, delayed schedules, and emergency repairs. Leadership needed a modern, affordable solution that would reduce risk, improve safety, and scale across field locations without a full system overhaul.",
    solution: "L3 applied our AI Strategy & Adoption framework to pinpoint the highest‑value use cases and secure stakeholder buy‑in. We ran an AI Readiness Score assessment to baseline data quality, infrastructure, and skills, then executed a focused Digital Modernization Blueprint (90 days) to stand up the core capability stack.\n\nWhat we delivered:\n\n• Data + Telemetry (Internet of Things): Deployed sensors on critical drilling equipment and built secure data pipelines for real‑time telemetry.\n\n• Predictive Maintenance (Tailored AI Solutions): Trained machine learning (ML) models tuned to the client's operating conditions to forecast failures and surface early warnings.\n\n• Process Automation: Implemented automated alerts, work order creation, and maintenance scheduling to reduce response lag and manual checks.\n\n• Decision Dashboards (Customer Experience Optimization—internal): Role‑based views for field supervisors, maintenance planners, and executives to track key performance indicators (KPIs), risk, and asset health.\n\n• Adoption & Governance (AI Strategy & Adoption): Playbooks, change‑management workshops, and runbooks to ensure sustained usage and measurable return on investment (ROI).",
    impact: "• 20% reduction in unplanned equipment downtime through predictive maintenance\n• $750K annual savings from improved equipment utilization and fewer emergency repairs\n• 15% increase in field productivity via optimized maintenance scheduling\n• 25% improvement in safety metrics due to proactive monitoring and alerts\n• Faster decisions with real‑time operational dashboards and clear KPI visibility",
    testimonial: {
      quote: "The predictive maintenance system has transformed our field operations. We can now prevent equipment failures before they impact our drilling schedules.",
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
    challenge: "A small specialty clinic struggled with inefficient patient scheduling that led to high no‑show rates and underutilized appointment slots. Manual processes could not anticipate demand or patient behavior patterns, creating gaps in the schedule and missed revenue. Leaders needed data‑driven insights to optimize appointment types, timing, and outreach—while maintaining strict Health Insurance Portability and Accountability Act (HIPAA) requirements and a seamless patient experience.",
    solution: "L3 began with AI Strategy & Adoption to align stakeholders on goals and success metrics, then ran an AI Readiness Score to baseline data quality, access controls, and workflows. A focused Digital Modernization Blueprint (90 days) stood up the core capability stack.\n\nWhat we delivered:\n\n• Demand Forecasting (Tailored AI Solutions): Built machine learning (ML) models on de‑identified, aggregated data to predict optimal scheduling windows by service line and provider.\n\n• Process Automation: Implemented automated waitlist backfilling, reminder cadences, and follow‑up workflows to reduce no‑shows and keep the schedule full.\n\n• Patient Outreach (Customer Experience Optimization): Personalized reminder timing and channels based on historic engagement and preferences—without using identifiable protected health information (PHI).\n\n• Operational Dashboards: Role‑based views for front desk, clinic managers, and executives to track utilization, no‑show rates, and revenue capture in real time.\n\n• Adoption & Playbooks (AI Strategy & Adoption): Staff training, SOPs, and governance guidelines to ensure consistent usage and measurable improvement over time.",
    impact: "• 18% increase in scheduling utilization driven by predictive analytics\n• $900K additional annual revenue captured from optimized appointment mix and backfilling\n• 22% reduction in no‑show rates through targeted reminders and automation\n• 15% improvement in patient satisfaction scores tied to smoother scheduling experiences\n• Higher operational efficiency from streamlined front‑office workflows",
    compliance: "All analytics used de‑identified and aggregated data in full HIPAA alignment. The solution enforces encryption, role‑based access controls, and audit logging to ensure PHI remains protected throughout data processing and outreach workflows.",
    testimonial: {
      quote: "The scheduling optimization has transformed our clinic operations while maintaining the highest privacy standards.",
      author: "Clinic Administrator",
      company: "Private Specialty Clinic"
    }
  },
  "law-firm-knowledge-automation": {
    title: "Law Firm Knowledge Automation",
    industry: "Legal Services",
    outcome: "35% faster legal research, $2.5M annual savings",
    client: {
      type: "Private Company",
      industry: "Legal Services",
      revenue: "$30M–$75M",
      size: "100–300 employees",
      region: "Houston / North America",
      engagement: "5 months"
    },
    challenge: "A Houston-based mid-sized law firm faced escalating inefficiencies in managing precedent libraries, contracts, and case knowledge. Attorneys and paralegals spent excessive time searching through fragmented databases and shared drives. This created long turnaround times, inconsistent use of precedents, and rising client dissatisfaction. Leadership sought a modern, secure system that could reduce research time, preserve institutional knowledge, and support compliance with legal and client confidentiality obligations.",
    solution: "L3 applied its AI Strategy & Adoption framework to identify bottlenecks in legal research and document management. After running an AI Readiness Score to baseline data structure and governance, we implemented a focused Digital Modernization Blueprint (90 days) to stand up the core AI capability stack.\n\nWhat we delivered:\n\n• Knowledge Automation (Tailored AI Solutions): Built an AI-powered knowledge assistant that indexed case law, contracts, and firm work product into a secure, searchable repository.\n\n• Natural Language Search (Customer Experience Optimization—internal): Attorneys can now query in plain English and retrieve relevant precedents instantly.\n\n• Process Automation: Automated version control, document tagging, and knowledge updates to reduce manual admin work.\n\n• Decision Dashboards: Partner-level dashboards with visibility into active matters, research hours saved, and precedent usage.\n\n• Governance Playbooks: Policies, access rights, and audit trails to ensure client confidentiality and ethical compliance.",
    impact: "• 35% reduction in average legal research time across practice groups\n• $2.5M annual savings in billable hours reallocated from manual research to client-facing work\n• 40% faster onboarding of new associates through easier access to firm knowledge\n• Higher client satisfaction scores from faster turnaround on deliverables\n• Stronger compliance with client confidentiality via role-based access controls and audit logging",
    compliance: "The solution was designed to meet legal confidentiality and professional responsibility standards. All documents were encrypted at rest and in transit, with fine-grained access controls. Audit trails ensured traceability of precedent use, aligning with both firm policy and client requirements.",
    testimonial: {
      quote: "The knowledge automation platform has transformed how our attorneys work. We spend less time digging through files and more time advising clients.",
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
    challenge: "A small accounting firm struggled with manual, error-prone month-end close processes that consumed extensive overtime and delayed reporting. Staff spent hours reconciling transactions, processing journal entries, and preparing reports — increasing burnout while limiting client capacity. Leadership needed a way to streamline operations, reduce manual workloads, and ensure compliance with audit and regulatory standards.",
    solution: "L3 applied its AI Strategy & Adoption framework to baseline data quality and workflows. Using the AI Readiness Score, we identified automation opportunities in reconciliation, journal entries, and exception reporting. We then delivered a Digital Modernization Blueprint (90 days) to establish automation workflows and compliance guardrails.\n\nWhat we delivered:\n\n• Automated Journal Processing: Streamlined journal entry creation and posting with AI-assisted validation.\n\n• Bank Reconciliation Automation: Automated matching and reconciliation of transactions, reducing manual review time.\n\n• Exception Reporting Systems: AI models flagged anomalies and transaction errors in real time.\n\n• Audit Trail Automation: Auto-generated audit logs and compliance reports for regulatory readiness.\n\n• Anomaly Detection Models: Machine learning models categorized transactions and highlighted risks proactively.",
    impact: "• 28% reduction in month-end close cycle time through workflow automation\n• 1,200 hours of staff time saved annually, reallocated to client-facing work\n• 95% accuracy in reconciliations, improving audit readiness\n• 20% increase in client capacity through efficiency gains\n• 35% reduction in overtime costs during peak periods",
    compliance: "The workflow platform included automated audit logs, encryption at rest and in transit, and compliance reporting to meet accounting and regulatory requirements. Fine-grained access controls safeguarded sensitive financial data, while automated audit trails ensured readiness for both internal and external reviews.",
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
    challenge: "A mid-market general contractor struggled with project cost overruns and schedule delays that impacted profitability and client relationships. Manual project tracking lacked real-time visibility into subcontractor performance, material costs, and progress across jobsites. Without predictive analytics, the firm was unable to identify risks early or implement corrective action, leading to missed deadlines, strained client trust, and rising operational costs.",
    solution: "L3 delivered a comprehensive project analytics platform with predictive modeling and real-time reporting. After running an AI Readiness Score and Digital Modernization Blueprint (90 days), we designed an integrated solution that connected field data, financial systems, and subcontractor performance into one platform.\n\nWhat we delivered:\n\n• Real-time Project Dashboards: Centralized visibility into subcontractor performance, costs, and project timelines.\n\n• Predictive Analytics Models: Machine learning models to flag likely delays, cost overruns, and resource shortages.\n\n• Automated Reporting: Customizable reports for project managers and executives to track KPIs daily.\n\n• Subcontractor Monitoring: Performance scoring system with alerts on quality, cost efficiency, and timeliness.\n\n• System Integration: Connected analytics platform to existing project management and financial software.",
    impact: "• 15% reduction in project overruns via predictive analytics\n• $1.1M annual savings through improved project cost management\n• 20% improvement in delivery timelines with real-time tracking\n• 90% accuracy in subcontractor performance monitoring\n• 18% increase in project profitability via better resource allocation",
    compliance: "The analytics platform was designed to comply with construction industry standards and contract governance requirements. All data was encrypted and securely integrated with financial systems, ensuring auditability of cost reporting and subcontractor performance data.",
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
    solution: "L3 developed a comprehensive portfolio intelligence platform with tenant behavior analytics and predictive lease modeling. Our solution included market analysis dashboards, tenant segmentation models, and automated lease optimization tools. We implemented machine learning algorithms to predict tenant preferences, optimal lease terms, and market timing. The platform integrated with existing property management systems to provide real-time insights into portfolio performance and leasing opportunities.\n\nWhat we delivered:\n\n• Market analysis dashboards with real-time visibility into tenant behavior and leasing trends\n\n• Tenant segmentation models to improve targeting and retention\n\n• Predictive lease modeling for optimal terms, pricing, and timing\n\n• Automated lease optimization tools to reduce manual processes\n\n• Integration with property management systems for seamless operations",
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
          <div className="max-w-3xl mx-auto">
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
              className="text-2xl font-light text-gradient mb-12"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Business Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-hero mb-8">Business Challenge</h2>
              {slug === 'oilfield-services-efficiency' ? (
                <div className="space-y-4">
                  <p className="text-lg text-white/85 leading-relaxed">
                    A mid‑market oilfield services company faced escalating challenges with unplanned equipment failures across multiple drilling sites.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Manual monitoring created blind spots that led to costly downtime, delayed schedules, and emergency repairs.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Leadership needed a modern, affordable solution that would reduce risk, improve safety, and scale across field locations without a full system overhaul.
                  </p>
                </div>
              ) : slug === 'specialty-clinic-scheduling-optimization' ? (
                <div className="space-y-4">
                  <p className="text-lg text-white/85 leading-relaxed">
                    A small specialty clinic struggled with inefficient patient scheduling that led to high no‑show rates and underutilized appointment slots.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Manual processes could not anticipate demand or patient behavior patterns, creating gaps in the schedule and missed revenue.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Leaders needed data‑driven insights to optimize appointment types, timing, and outreach—while maintaining strict Health Insurance Portability and Accountability Act (HIPAA) requirements and a seamless patient experience.
                  </p>
                </div>
              ) : slug === 'law-firm-knowledge-automation' ? (
                <div className="space-y-4">
                  <p className="text-lg text-white/85 leading-relaxed">
                    A Houston-based mid-sized law firm faced escalating inefficiencies in managing precedent libraries, contracts, and case knowledge.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Attorneys and paralegals spent excessive time searching through fragmented databases and shared drives. This created long turnaround times, inconsistent use of precedents, and rising client dissatisfaction.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Leadership sought a modern, secure system that could reduce research time, preserve institutional knowledge, and support compliance with legal and client confidentiality obligations.
                  </p>
                </div>
              ) : slug === 'accounting-firm-workflow-automation' ? (
                <div className="space-y-4">
                  <p className="text-lg text-white/85 leading-relaxed">
                    A small accounting firm struggled with manual, error-prone month-end close processes that consumed extensive overtime and delayed reporting.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Staff spent hours reconciling transactions, processing journal entries, and preparing reports — increasing burnout while limiting client capacity.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Leadership needed a way to streamline operations, reduce manual workloads, and ensure compliance with audit and regulatory standards.
                  </p>
                </div>
              ) : slug === 'construction-project-analytics' ? (
                <div className="space-y-4">
                  <p className="text-lg text-white/85 leading-relaxed">
                    A mid-market general contractor struggled with project cost overruns and schedule delays that impacted profitability and client relationships.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Manual project tracking lacked real-time visibility into subcontractor performance, material costs, and progress across jobsites.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Without predictive analytics, the firm was unable to identify risks early or implement corrective action, leading to missed deadlines, strained client trust, and rising operational costs.
                  </p>
                </div>
              ) : slug === 'real-estate-portfolio-intelligence' ? (
                <div className="space-y-4">
                  <p className="text-lg text-white/85 leading-relaxed">
                    A mid-market real estate developer struggled with inefficient leasing processes and limited insights into tenant behavior patterns.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Manual market analysis couldn't provide real-time visibility into leasing opportunities and tenant preferences.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    The lack of predictive modeling made it difficult to optimize lease terms, pricing strategies, and property positioning.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Without data-driven insights, the company missed opportunities to maximize net operating income (NOI) and improve portfolio performance.
                  </p>
                </div>
              ) : (
                <p className="text-lg text-white/85 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              )}
            </motion.div>

            {/* L3 Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-hero mb-8">L3 Solution</h2>
              {slug === 'oilfield-services-efficiency' ? (
                <div className="space-y-6">
                  <p className="text-lg text-white/85 leading-relaxed">
                    L3 applied our AI Strategy & Adoption framework to pinpoint the highest‑value use cases and secure stakeholder buy‑in. We ran an AI Readiness Score assessment to baseline data quality, infrastructure, and skills, then executed a focused Digital Modernization Blueprint (90 days) to stand up the core capability stack.
                  </p>
                  <div>
                    <p className="text-lg text-white/85 leading-relaxed mb-4">What we delivered:</p>
                    <ul className="space-y-3 text-lg text-white/85 leading-relaxed pl-6">
                      <li className="leading-relaxed">
                        <strong>Data + Telemetry (Internet of Things, IoT):</strong> Deployed sensors on critical drilling equipment and built secure data pipelines for real‑time telemetry.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Predictive Maintenance (Tailored AI Solutions):</strong> Trained machine learning (ML) models tuned to the client's operating conditions to forecast failures and surface early warnings.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Process Automation:</strong> Implemented automated alerts, work order creation, and maintenance scheduling to reduce response lag and manual checks.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Decision Dashboards (Customer Experience Optimization—internal):</strong> Role‑based views for field supervisors, maintenance planners, and executives to track key performance indicators (KPIs), risk, and asset health.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Adoption & Governance (AI Strategy & Adoption):</strong> Playbooks, change‑management workshops, and runbooks to ensure sustained usage and measurable return on investment (ROI).
                      </li>
                    </ul>
                  </div>
                </div>
              ) : slug === 'specialty-clinic-scheduling-optimization' ? (
                <div className="space-y-6">
                  <p className="text-lg text-white/85 leading-relaxed">
                    L3 began with AI Strategy & Adoption to align stakeholders on goals and success metrics, then ran an AI Readiness Score to baseline data quality, access controls, and workflows. A focused Digital Modernization Blueprint (90 days) stood up the core capability stack.
                  </p>
                  <div>
                    <p className="text-lg text-white/85 leading-relaxed mb-4">What we delivered:</p>
                    <ul className="space-y-3 text-lg text-white/85 leading-relaxed pl-6">
                      <li className="leading-relaxed">
                        <strong>Demand Forecasting (Tailored AI Solutions):</strong> Built machine learning (ML) models on de‑identified, aggregated data to predict optimal scheduling windows by service line and provider.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Process Automation:</strong> Implemented automated waitlist backfilling, reminder cadences, and follow‑up workflows to reduce no‑shows and keep the schedule full.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Patient Outreach (Customer Experience Optimization):</strong> Personalized reminder timing and channels based on historic engagement and preferences—without using identifiable protected health information (PHI).
                      </li>
                      <li className="leading-relaxed">
                        <strong>Operational Dashboards:</strong> Role‑based views for front desk, clinic managers, and executives to track utilization, no‑show rates, and revenue capture in real time.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Adoption & Playbooks (AI Strategy & Adoption):</strong> Staff training, SOPs, and governance guidelines to ensure consistent usage and measurable improvement over time.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : slug === 'law-firm-knowledge-automation' ? (
                <div className="space-y-6">
                  <p className="text-lg text-white/85 leading-relaxed">
                    L3 applied its AI Strategy & Adoption framework to identify bottlenecks in legal research and document management. After running an AI Readiness Score to baseline data structure and governance, we implemented a focused Digital Modernization Blueprint (90 days) to stand up the core AI capability stack.
                  </p>
                  <div>
                    <p className="text-lg text-white/85 leading-relaxed mb-4">What we delivered:</p>
                    <ul className="space-y-3 text-lg text-white/85 leading-relaxed pl-6">
                      <li className="leading-relaxed">
                        <strong>Knowledge Automation (Tailored AI Solutions):</strong> Built an AI-powered knowledge assistant that indexed case law, contracts, and firm work product into a secure, searchable repository.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Natural Language Search (Customer Experience Optimization—internal):</strong> Attorneys can now query in plain English and retrieve relevant precedents instantly.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Process Automation:</strong> Automated version control, document tagging, and knowledge updates to reduce manual admin work.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Decision Dashboards:</strong> Partner-level dashboards with visibility into active matters, research hours saved, and precedent usage.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Governance Playbooks:</strong> Policies, access rights, and audit trails to ensure client confidentiality and ethical compliance.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : slug === 'accounting-firm-workflow-automation' ? (
                <div className="space-y-6">
                  <p className="text-lg text-white/85 leading-relaxed">
                    L3 applied its AI Strategy & Adoption framework to baseline data quality and workflows. Using the AI Readiness Score, we identified automation opportunities in reconciliation, journal entries, and exception reporting. We then delivered a Digital Modernization Blueprint (90 days) to establish automation workflows and compliance guardrails.
                  </p>
                  <div>
                    <p className="text-lg text-white/85 leading-relaxed mb-4">What we delivered:</p>
                    <ul className="space-y-3 text-lg text-white/85 leading-relaxed pl-6">
                      <li className="leading-relaxed">
                        <strong>Automated Journal Processing:</strong> Streamlined journal entry creation and posting with AI-assisted validation.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Bank Reconciliation Automation:</strong> Automated matching and reconciliation of transactions, reducing manual review time.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Exception Reporting Systems:</strong> AI models flagged anomalies and transaction errors in real time.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Audit Trail Automation:</strong> Auto-generated audit logs and compliance reports for regulatory readiness.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Anomaly Detection Models:</strong> Machine learning models categorized transactions and highlighted risks proactively.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : slug === 'construction-project-analytics' ? (
                <div className="space-y-6">
                  <p className="text-lg text-white/85 leading-relaxed">
                    L3 delivered a comprehensive project analytics platform with predictive modeling and real-time reporting. After running an AI Readiness Score and Digital Modernization Blueprint (90 days), we designed an integrated solution that connected field data, financial systems, and subcontractor performance into one platform.
                  </p>
                  <div>
                    <p className="text-lg text-white/85 leading-relaxed mb-4">What we delivered:</p>
                    <ul className="space-y-3 text-lg text-white/85 leading-relaxed pl-6">
                      <li className="leading-relaxed">
                        <strong>Real-time Project Dashboards:</strong> Centralized visibility into subcontractor performance, costs, and project timelines.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Predictive Analytics Models:</strong> Machine learning models to flag likely delays, cost overruns, and resource shortages.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Automated Reporting:</strong> Customizable reports for project managers and executives to track KPIs daily.
                      </li>
                      <li className="leading-relaxed">
                        <strong>Subcontractor Monitoring:</strong> Performance scoring system with alerts on quality, cost efficiency, and timeliness.
                      </li>
                      <li className="leading-relaxed">
                        <strong>System Integration:</strong> Connected analytics platform to existing project management and financial software.
                      </li>
                    </ul>
                  </div>
                </div>
              ) : slug === 'real-estate-portfolio-intelligence' ? (
                <div className="space-y-6">
                  <p className="text-lg text-white/85 leading-relaxed">
                    L3 developed a comprehensive portfolio intelligence platform with tenant behavior analytics and predictive lease modeling. Our solution included market analysis dashboards, tenant segmentation models, and automated lease optimization tools. We implemented machine learning algorithms to predict tenant preferences, optimal lease terms, and market timing. The platform integrated with existing property management systems to provide real-time insights into portfolio performance and leasing opportunities.
                  </p>
                  <div>
                    <p className="text-lg text-white/85 leading-relaxed mb-4">What we delivered:</p>
                    <ul className="space-y-3 text-lg text-white/85 leading-relaxed pl-6">
                      <li className="leading-relaxed">
                        <strong>Market analysis dashboards</strong> with real-time visibility into tenant behavior and leasing trends
                      </li>
                      <li className="leading-relaxed">
                        <strong>Tenant segmentation models</strong> to improve targeting and retention
                      </li>
                      <li className="leading-relaxed">
                        <strong>Predictive lease modeling</strong> for optimal terms, pricing, and timing
                      </li>
                      <li className="leading-relaxed">
                        <strong>Automated lease optimization tools</strong> to reduce manual processes
                      </li>
                      <li className="leading-relaxed">
                        <strong>Integration with property management systems</strong> for seamless operations
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-white/85 leading-relaxed">
                  {caseStudy.solution}
                </p>
              )}
            </motion.div>

            {/* Business Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-hero mb-8">Business Impact</h2>
              {slug === 'oilfield-services-efficiency' ? (
                <ul className="space-y-3 text-lg text-white/85 pl-6">
                  <li className="leading-relaxed">20% reduction in unplanned equipment downtime through predictive maintenance</li>
                  <li className="leading-relaxed">$750K annual savings from improved equipment utilization and fewer emergency repairs</li>
                  <li className="leading-relaxed">15% increase in field productivity via optimized maintenance scheduling</li>
                  <li className="leading-relaxed">25% improvement in safety metrics due to proactive monitoring and alerts</li>
                  <li className="leading-relaxed">Faster decisions with real‑time operational dashboards and clear KPI visibility</li>
                </ul>
              ) : slug === 'specialty-clinic-scheduling-optimization' ? (
                <ul className="space-y-3 text-lg text-white/85 pl-6">
                  <li className="leading-relaxed">18% increase in scheduling utilization driven by predictive analytics</li>
                  <li className="leading-relaxed">$900K additional annual revenue captured from optimized appointment mix and backfilling</li>
                  <li className="leading-relaxed">22% reduction in no‑show rates through targeted reminders and automation</li>
                  <li className="leading-relaxed">15% improvement in patient satisfaction scores tied to smoother scheduling experiences</li>
                  <li className="leading-relaxed">Higher operational efficiency from streamlined front‑office workflows</li>
                </ul>
              ) : slug === 'law-firm-knowledge-automation' ? (
                <ul className="space-y-3 text-lg text-white/85 pl-6">
                  <li className="leading-relaxed">35% reduction in average legal research time across practice groups</li>
                  <li className="leading-relaxed">$2.5M annual savings in billable hours reallocated from manual research to client-facing work</li>
                  <li className="leading-relaxed">40% faster onboarding of new associates through easier access to firm knowledge</li>
                  <li className="leading-relaxed">Higher client satisfaction scores from faster turnaround on deliverables</li>
                  <li className="leading-relaxed">Stronger compliance with client confidentiality via role-based access controls and audit logging</li>
                </ul>
              ) : slug === 'accounting-firm-workflow-automation' ? (
                <ul className="space-y-3 text-lg text-white/85 pl-6">
                  <li className="leading-relaxed">28% reduction in month-end close cycle time through workflow automation</li>
                  <li className="leading-relaxed">1,200 hours of staff time saved annually, reallocated to client-facing work</li>
                  <li className="leading-relaxed">95% accuracy in reconciliations, improving audit readiness</li>
                  <li className="leading-relaxed">20% increase in client capacity through efficiency gains</li>
                  <li className="leading-relaxed">35% reduction in overtime costs during peak periods</li>
                </ul>
              ) : slug === 'construction-project-analytics' ? (
                <ul className="space-y-3 text-lg text-white/85 pl-6">
                  <li className="leading-relaxed">15% reduction in project overruns via predictive analytics</li>
                  <li className="leading-relaxed">$1.1M annual savings through improved project cost management</li>
                  <li className="leading-relaxed">20% improvement in delivery timelines with real-time tracking</li>
                  <li className="leading-relaxed">90% accuracy in subcontractor performance monitoring</li>
                  <li className="leading-relaxed">18% increase in project profitability via better resource allocation</li>
                </ul>
              ) : slug === 'real-estate-portfolio-intelligence' ? (
                <ul className="space-y-3 text-lg text-white/85 pl-6">
                  <li className="leading-relaxed">Improved leasing efficiency by 22% through tenant behavior analytics</li>
                  <li className="leading-relaxed">Generated $2M in additional NOI through optimized lease modeling</li>
                  <li className="leading-relaxed">Enhanced market positioning with 95% accuracy in demand prediction</li>
                  <li className="leading-relaxed">Reduced vacancy periods by 18% with predictive leasing strategies</li>
                  <li className="leading-relaxed">Increased portfolio ROI by 15% through data-driven decision making</li>
                </ul>
              ) : (
                <div className="text-lg text-white/85 leading-relaxed">
                  {caseStudy.impact.split('\n').map((bullet, index) => (
                    <p key={index} className="mb-3">
                      {bullet}
                    </p>
                  ))}
                </div>
              )}
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
              >
                <h3 className="text-xl font-semibold text-white mb-6">Client Testimonial</h3>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8">
                  <blockquote className="text-xl font-light text-white/90 mb-6 italic">
                    &ldquo;{caseStudy.testimonial.quote}&rdquo;
                  </blockquote>
                  <cite className="not-italic">
                    <p className="text-primary font-medium">&mdash; {caseStudy.testimonial.author}</p>
                    <p className="text-white/60 text-sm">{caseStudy.testimonial.company}</p>
                  </cite>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 bg-panel/20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-section-hero mb-8">
                {slug === 'oilfield-services-efficiency' 
                  ? 'Ready to improve uptime and reduce costs across your field operations?'
                  : slug === 'specialty-clinic-scheduling-optimization'
                  ? 'Ready to increase utilization and revenue without compromising privacy?'
                  : slug === 'law-firm-knowledge-automation'
                  ? 'Ready to modernize your firm\'s knowledge and cut research time?'
                  : slug === 'accounting-firm-workflow-automation'
                  ? 'Ready to modernize your accounting workflows and save hundreds of hours?'
                  : slug === 'construction-project-analytics'
                  ? 'Ready to cut overruns and increase profitability?'
                  : slug === 'real-estate-portfolio-intelligence'
                  ? 'Ready to achieve similar results?'
                  : 'Ready to achieve similar results?'
                }
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
        </div>
      </section>
    </div>
  );
}
