"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Case study data structure for detail pages
const caseStudyDetails = {
  "smart-manufacturing-modernization": {
    title: "Smart Manufacturing Modernization",
    industry: "Manufacturing",
    outcome: "18% downtime reduction, $850K annual savings",
    client: {
      type: "Private Company",
      industry: "Manufacturing",
      revenue: "$50M–$150M",
      size: "500–1,200 employees",
      region: "Midwest US",
      engagement: "6 months"
    },
    challenge: "A mid-sized manufacturing company struggled with unexpected equipment failures and quality control issues, leading to costly downtime and product defects. Their reactive maintenance approach resulted in 15-20% unplanned downtime monthly, severely impacting production schedules and customer deliveries. Legacy quality control systems relied on manual inspections, missing critical defects that reached customers.",
    solution: "L3 Strategy Partners implemented a comprehensive AI-driven predictive maintenance and quality control system. We deployed IoT sensors across critical equipment to monitor vibration, temperature, and performance metrics in real-time. Our machine learning models analyzed historical failure patterns and current sensor data to predict maintenance needs 2-4 weeks in advance. Additionally, we integrated computer vision systems for automated quality inspections, reducing human error and improving defect detection rates.",
    impact: "The transformation delivered immediate and sustained results. Equipment downtime decreased by 18%, translating to $850,000 in annual savings through improved production efficiency. Quality defects dropped by 24%, enhancing customer satisfaction and reducing warranty claims. The predictive maintenance system now prevents 85% of previously unexpected failures, allowing for planned maintenance during scheduled downtime windows.",
    testimonial: {
      quote: "L3's AI solutions transformed our operations from reactive to predictive. We now prevent problems before they occur, and our quality has never been better.",
      author: "Plant Operations Director",
      company: "Private Manufacturing Company"
    }
  },
  "healthcare-data-platform-upgrade": {
    title: "Healthcare Data Platform Upgrade",
    industry: "Healthcare",
    outcome: "12% diagnostic accuracy improvement, 35% faster reporting",
    client: {
      type: "Private Company",
      industry: "Healthcare",
      revenue: "$75M–$200M",
      size: "800–1,500 employees",
      region: "Southeast US",
      engagement: "5 months"
    },
    challenge: "A regional healthcare network faced challenges with fragmented data systems that prevented real-time access to patient information. Medical professionals spent excessive time searching for patient records across multiple systems, delaying care decisions. The lack of integrated analytics made it difficult to identify treatment patterns and improve diagnostic accuracy. HIPAA compliance reporting was manual and time-consuming, creating operational inefficiencies.",
    solution: "L3 designed and implemented a unified, HIPAA-aligned data platform that integrated all patient information systems into a single, secure environment. We deployed real-time analytics capabilities using de-identified and aggregated data to provide clinicians with comprehensive patient views and evidence-based treatment recommendations. The platform includes AI-powered diagnostic assistance tools that analyze patient symptoms, medical history, and lab results to suggest potential diagnoses and treatment options while maintaining strict privacy protections. Automated compliance reporting ensures HIPAA and regulatory requirements are met efficiently.",
    impact: "The modernized platform significantly improved patient care and operational efficiency while maintaining strict HIPAA compliance. Diagnostic accuracy increased by 12% through AI-assisted decision support tools using de-identified data patterns. Clinical reporting time was reduced by 35%, allowing medical staff to focus more on patient care. The integrated system eliminated data silos while preserving patient privacy through robust encryption and access controls. HIPAA compliance risk was reduced by 45% through automated monitoring and reporting.",
    compliance: "All data processing utilized de-identified and aggregated patient information in full HIPAA compliance. The platform implements advanced encryption, role-based access controls, and comprehensive audit trails to ensure patient privacy protection.",
    testimonial: {
      quote: "The integrated platform has revolutionized how we deliver patient care while maintaining the highest privacy standards. Our clinicians now have secure access to the insights they need.",
      author: "Chief Medical Officer",
      company: "Private Healthcare Network"
    }
  },
  "law-firm-knowledge-automation": {
    title: "Law Firm Knowledge Automation",
    industry: "Legal Services",
    outcome: "40% faster document review, $450K annual savings",
    client: {
      type: "Private Company",
      industry: "Legal Services",
      revenue: "$50M–$150M",
      size: "200–600 employees",
      region: "Northeast US",
      engagement: "4 months"
    },
    challenge: "A mid-sized law firm struggled with inefficient document review processes that consumed hundreds of billable hours monthly. Associates spent excessive time searching through case precedents and legal documents, leading to billable hour leakage and delayed client responses. The firm's knowledge management system was fragmented across multiple platforms, making it difficult to leverage institutional knowledge effectively. Manual document analysis increased the risk of missing critical information in complex cases.",
    solution: "L3 implemented an AI-powered knowledge automation platform that streamlined document review and legal research processes. Our solution includes natural language processing capabilities to analyze contracts, case law, and legal documents with high accuracy. We deployed intelligent search functionality that quickly identifies relevant precedents and extracts key information from large document sets. The platform also features automated brief generation and case summary tools that accelerate legal research while maintaining accuracy.",
    impact: "The knowledge automation system transformed the firm's operational efficiency and client service delivery. Document review time was reduced by 40%, allowing attorneys to focus on higher-value strategic work. Billable hour leakage decreased by $450,000 annually through more efficient time utilization. Client response times improved by 35% due to faster research and document preparation. The platform now processes over 10,000 legal documents monthly with 95% accuracy.",
    testimonial: {
      quote: "The AI knowledge platform has revolutionized our practice. We can now deliver faster, more comprehensive legal research while reducing costs for our clients.",
      author: "Managing Partner",
      company: "Private Law Firm"
    }
  },
  "dental-network-patient-analytics": {
    title: "Dental Network Patient Analytics",
    industry: "Healthcare (Dental Clinics)",
    outcome: "22% appointment utilization increase, $1.1M additional revenue",
    client: {
      type: "Private Company",
      industry: "Healthcare (Dental Clinics)",
      revenue: "$75M–$200M",
      size: "800–1,200 employees",
      region: "Southwest US",
      engagement: "5 months"
    },
    challenge: "A regional dental network faced challenges with suboptimal appointment scheduling and patient engagement, leading to high no-show rates and underutilized chair time. The network lacked integrated patient analytics across its 45 locations, making it difficult to identify patterns in patient behavior and optimize scheduling efficiency. Manual appointment management resulted in gaps in the schedule and missed revenue opportunities. Patient retention was declining due to poor communication and engagement strategies.",
    solution: "L3 developed a comprehensive, HIPAA-compliant patient analytics platform that optimized scheduling and engagement across the dental network. Our solution analyzes de-identified patient patterns, appointment history, and treatment preferences to predict optimal scheduling windows and reduce no-shows. The platform includes automated patient engagement tools that send personalized reminders, treatment recommendations, and follow-up communications while maintaining strict privacy protections. We also implemented predictive analytics for treatment planning and resource allocation.",
    impact: "The patient analytics platform significantly improved operational efficiency and patient satisfaction while maintaining full HIPAA compliance. Appointment utilization increased by 22% through optimized scheduling and reduced no-shows. The network generated an additional $1.1 million in annual revenue through improved chair utilization and patient retention. Patient satisfaction scores improved by 28% due to better communication and personalized care experiences. HIPAA compliance risk was reduced through automated privacy controls and audit trails.",
    compliance: "All patient data processing utilizes de-identified and aggregated information in full HIPAA compliance. The platform implements comprehensive encryption, role-based access controls, and detailed audit logging to ensure patient privacy protection.",
    testimonial: {
      quote: "The analytics platform has transformed our patient experience and operational efficiency while maintaining the highest privacy standards. Our scheduling optimization has been remarkable.",
      author: "Chief Operating Officer",
      company: "Private Dental Network"
    }
  },
  "logistics-operations-optimization": {
    title: "Logistics Operations Optimization",
    industry: "Logistics",
    outcome: "14% fuel cost reduction, 19% delivery improvement",
    client: {
      type: "Private Company",
      industry: "Logistics",
      revenue: "$100M–$300M",
      size: "1,000–1,500 employees",
      region: "Midwest US",
      engagement: "6 months"
    },
    challenge: "A regional logistics company struggled with inefficient route planning and fleet management that resulted in high fuel costs and inconsistent delivery performance. Manual route optimization couldn't adapt to real-time traffic conditions, weather delays, or dynamic customer requirements. The lack of integrated fleet monitoring made it difficult to identify maintenance needs and optimize vehicle utilization. Customer satisfaction was declining due to unpredictable delivery times and poor communication about shipment status.",
    solution: "L3 implemented an AI-driven logistics optimization platform that transformed route planning and fleet management operations. Our solution uses machine learning algorithms to analyze traffic patterns, weather data, vehicle performance, and customer requirements to optimize routes in real-time. The platform includes predictive fleet maintenance capabilities that monitor vehicle health and schedule maintenance proactively. We also deployed automated customer communication tools that provide real-time shipment tracking and delivery updates.",
    impact: "The logistics optimization platform delivered significant improvements in operational efficiency and customer satisfaction. Fuel costs decreased by 14% through optimized routing and reduced empty miles. On-time delivery performance improved by 19%, enhancing customer satisfaction and retention. Vehicle maintenance costs were reduced by 25% through predictive maintenance scheduling. The platform now optimizes over 2,500 daily routes across a 500-vehicle fleet.",
    testimonial: {
      quote: "The AI optimization platform has transformed our logistics operations. We're delivering faster and more efficiently while significantly reducing costs.",
      author: "VP of Operations",
      company: "Private Logistics Company"
    }
  },
  "oil-field-services-efficiency-platform": {
    title: "Oil Field Services Efficiency Platform",
    industry: "Energy Services",
    outcome: "21% equipment downtime reduction, $900K annual savings",
    client: {
      type: "Private Company",
      industry: "Energy Services",
      revenue: "$150M–$400M",
      size: "1,200–1,800 employees",
      region: "Texas/Southwest US",
      engagement: "6 months"
    },
    challenge: "An oil field services company faced significant challenges with equipment reliability and operational efficiency across multiple drilling sites. Unexpected equipment failures resulted in costly downtime and delayed drilling operations. The company lacked real-time visibility into equipment performance and field operations, making it difficult to optimize resource allocation and predict maintenance needs. Manual data collection and reporting processes created delays in decision-making and increased operational risks.",
    solution: "L3 developed a comprehensive field efficiency platform that provides real-time monitoring and predictive analytics for oil field operations. Our solution includes IoT sensor integration for continuous equipment monitoring, machine learning models for predictive maintenance, and automated field data collection systems. The platform features real-time dashboards that provide operations teams with instant visibility into equipment performance, drilling progress, and resource utilization across all field locations.",
    impact: "The efficiency platform significantly improved operational performance and cost management across the oil field services operation. Equipment downtime was reduced by 21% through predictive maintenance and proactive intervention. Annual operational savings of $900,000 were achieved through improved equipment utilization and reduced emergency repairs. Field productivity increased by 18% due to optimized resource allocation and real-time operational insights. The platform now monitors over 150 pieces of critical equipment across 25 active drilling sites.",
    testimonial: {
      quote: "The field efficiency platform has revolutionized our operations. We can now predict and prevent equipment issues before they impact our drilling schedules.",
      author: "Field Operations Manager",
      company: "Private Oil Field Services Company"
    }
  },
  "med-spa-network-growth-analytics": {
    title: "Med Spa Network Growth Analytics",
    industry: "Health & Wellness (Med Spas)",
    outcome: "25% repeat booking increase, $2.2M additional revenue",
    client: {
      type: "Private Company",
      industry: "Health & Wellness (Med Spas)",
      revenue: "$100M–$250M",
      size: "600–1,000 employees",
      region: "California/West Coast",
      engagement: "5 months"
    },
    challenge: "A growing med spa network struggled with customer retention and revenue optimization across its 35 locations. The network lacked integrated customer analytics to understand treatment preferences, booking patterns, and lifecycle value. Manual marketing efforts were inefficient and couldn't personalize communications effectively. The absence of data-driven insights made it difficult to optimize service offerings and pricing strategies while maintaining compliance with health privacy regulations.",
    solution: "L3 implemented a comprehensive, HIPAA-aligned customer growth analytics platform that optimized patient engagement and revenue generation across the med spa network. Our solution analyzes de-identified customer data to identify treatment preferences, optimal booking windows, and lifecycle marketing opportunities. The platform includes automated, personalized communication workflows that engage customers with relevant treatment recommendations and appointment reminders while maintaining strict privacy protections. We also developed predictive analytics for service demand forecasting and revenue optimization.",
    impact: "The growth analytics platform transformed customer engagement and business performance while maintaining full HIPAA compliance. Repeat bookings increased by 25% through personalized engagement and optimized treatment recommendations. The network generated an additional $2.2 million in annual revenue through improved customer retention and higher-value service bookings. Customer lifetime value increased by 35% due to more effective lifecycle marketing. HIPAA compliance risk was reduced through automated privacy controls and comprehensive audit systems.",
    compliance: "All customer data processing utilizes de-identified and aggregated information in full HIPAA compliance. The platform implements advanced encryption, role-based access controls, and comprehensive audit trails to ensure customer privacy protection throughout the analytics process.",
    testimonial: {
      quote: "The analytics platform has transformed our customer relationships and business growth while maintaining the highest privacy standards. Our personalized approach has significantly improved customer satisfaction.",
      author: "Chief Marketing Officer",
      company: "Private Med Spa Network"
    }
  },
  "ai-governance-ethics-program": {
    title: "AI Governance & Ethics Program",
    industry: "Public Sector",
    outcome: "22% compliance risk reduction through governance framework",
    client: {
      type: "Private Company",
      industry: "Public Sector",
      revenue: "$75M–$200M",
      size: "1,200–1,800 employees",
      region: "Mid-Atlantic US",
      engagement: "5 months"
    },
    challenge: "A large municipal government agency was implementing AI solutions across multiple departments but lacked comprehensive governance frameworks to ensure responsible AI deployment. Without clear ethical guidelines, different departments were developing AI applications inconsistently, creating potential bias and fairness issues. The absence of standardized compliance procedures increased regulatory risk and made it difficult to ensure AI systems met public trust standards. Staff needed training on AI ethics and responsible implementation practices.",
    solution: "L3 developed a comprehensive AI governance and ethics program tailored to public sector requirements. We created detailed ethical guidelines that address bias, fairness, transparency, and accountability in AI systems. Our team established governance structures including AI ethics committees, review processes, and compliance monitoring systems. We developed training programs for staff at all levels and created playbooks for responsible AI implementation that ensure consistency across all departments.",
    impact: "The governance program established a foundation for responsible AI adoption throughout the organization. Compliance risk exposure was reduced by 22% through standardized procedures and oversight mechanisms. All AI projects now follow consistent ethical guidelines, ensuring public trust and regulatory compliance. Staff training improved AI literacy across the organization, enabling more informed decision-making about AI implementations. The governance framework became a model for other public sector organizations.",
    testimonial: {
      quote: "L3 helped us build the governance foundation we needed to deploy AI responsibly. The frameworks ensure we maintain public trust while leveraging AI benefits.",
      author: "Chief Technology Officer",
      company: "Private Municipal Agency"
    }
  },
  "retail-personalization-engine": {
    title: "Retail Personalization Engine",
    industry: "Retail",
    outcome: "18% engagement increase, $3.5M additional revenue",
    client: {
      type: "Private Company",
      industry: "Retail",
      revenue: "$150M–$400M",
      size: "800–1,500 employees",
      region: "Southwest US",
      engagement: "4 months"
    },
    challenge: "A mid-market retail chain struggled with generic marketing approaches that failed to resonate with diverse customer segments. Their one-size-fits-all product recommendations resulted in low engagement rates and missed sales opportunities. Customer data was siloed across different touchpoints, preventing a unified view of shopping behavior. The lack of personalized experiences led to decreased customer loyalty and competitive disadvantage against e-commerce giants with sophisticated recommendation systems.",
    solution: "L3 designed and implemented an AI-powered personalization engine that unifies customer data from all touchpoints to create comprehensive customer profiles. Our machine learning algorithms analyze purchase history, browsing behavior, seasonal patterns, and demographic data to generate highly personalized product recommendations. The system provides real-time personalization across web, mobile, and email channels, ensuring consistent experiences. We also developed dynamic pricing and inventory optimization capabilities.",
    impact: "The personalization engine transformed customer engagement and business performance. Customer engagement increased by 18% through relevant, personalized experiences across all channels. The personalized recommendations generated an additional $3.5 million in annual revenue by improving conversion rates and average order values. Customer retention improved by 25% as personalized experiences increased satisfaction and loyalty. The system now processes over 1 million personalized recommendations daily.",
    testimonial: {
      quote: "The personalization engine has completely changed how we connect with customers. Sales have increased significantly, and customer satisfaction is at an all-time high.",
      author: "Chief Marketing Officer",
      company: "Private Retail Chain"
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
              <p className="text-lg text-white/85 leading-relaxed">
                {caseStudy.impact}
              </p>
            </motion.div>

            {/* Compliance Note (Healthcare cases only) */}
            {caseStudy.compliance && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[16px] shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Compliance & Privacy</h2>
                <p className="text-white/85 leading-relaxed">
                  {caseStudy.compliance}
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
