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
    challenge: "A regional healthcare network faced challenges with fragmented data systems that prevented real-time access to patient information. Medical professionals spent excessive time searching for patient records across multiple systems, delaying care decisions. The lack of integrated analytics made it difficult to identify treatment patterns and improve diagnostic accuracy. Compliance reporting was manual and time-consuming, creating operational inefficiencies.",
    solution: "L3 designed and implemented a unified data platform that integrated all patient information systems into a single, secure environment. We deployed real-time analytics capabilities that provide clinicians with comprehensive patient views and evidence-based treatment recommendations. The platform includes AI-powered diagnostic assistance tools that analyze patient symptoms, medical history, and lab results to suggest potential diagnoses and treatment options. Automated compliance reporting ensures regulatory requirements are met efficiently.",
    impact: "The modernized platform significantly improved patient care and operational efficiency. Diagnostic accuracy increased by 12% through AI-assisted decision support tools. Clinical reporting time was reduced by 35%, allowing medical staff to focus more on patient care. The integrated system eliminated data silos, providing clinicians with instant access to complete patient histories. Compliance reporting automation reduced administrative burden by 40%.",
    testimonial: {
      quote: "The integrated platform has revolutionized how we deliver patient care. Our clinicians now have all the information they need at their fingertips, leading to better outcomes.",
      author: "Chief Medical Officer",
      company: "Private Healthcare Network"
    }
  },
  "banking-risk-management-transformation": {
    title: "Banking Risk Management Transformation",
    industry: "Financial Services",
    outcome: "$1.2M fraud loss reduction, 28% fewer false positives",
    client: {
      type: "Private Company",
      industry: "Financial Services",
      revenue: "$100M–$300M",
      size: "600–1,000 employees",
      region: "Northeast US",
      engagement: "4 months"
    },
    challenge: "A mid-market community bank struggled with outdated fraud detection systems that generated excessive false positives, frustrating customers and overwhelming fraud investigation teams. The rule-based system couldn't adapt to evolving fraud patterns, resulting in genuine fraudulent transactions going undetected. Manual review processes created delays in transaction approvals, negatively impacting customer experience. Regulatory compliance reporting was labor-intensive and prone to errors.",
    solution: "L3 developed and deployed advanced machine learning models for real-time fraud detection and risk assessment. Our solution analyzes transaction patterns, customer behavior, geographic data, and external threat intelligence to identify suspicious activities with high precision. The ML models continuously learn from new fraud patterns, adapting to emerging threats automatically. We also implemented automated risk scoring for loan applications and created streamlined compliance reporting dashboards.",
    impact: "The AI-powered risk management system delivered substantial improvements in fraud prevention and customer experience. Annual fraud losses decreased by $1.2 million through more accurate threat detection. False positive rates dropped by 28%, reducing customer friction and investigation workload. Transaction approval times improved by 45%, enhancing customer satisfaction. The automated compliance reporting reduced regulatory preparation time by 60%.",
    testimonial: {
      quote: "L3's machine learning approach to fraud detection has been a game-changer. We're catching more real fraud while reducing false alarms that frustrated our customers.",
      author: "Chief Risk Officer",
      company: "Private Community Bank"
    }
  },
  "autonomous-vehicle-safety-framework": {
    title: "Autonomous Vehicle Safety Framework",
    industry: "Automotive",
    outcome: "15% faster regulatory approval, $600K testing cost reduction",
    client: {
      type: "Private Company",
      industry: "Automotive",
      revenue: "$200M–$500M",
      size: "1,000–2,000 employees",
      region: "West Coast US",
      engagement: "6 months"
    },
    challenge: "An autonomous vehicle technology company faced lengthy and expensive safety validation processes that delayed market entry and consumed significant resources. Traditional testing methods required millions of miles of real-world driving data, which was time-consuming and costly to collect. Regulatory agencies demanded comprehensive safety documentation that was difficult to compile from disparate testing systems. The lack of standardized safety metrics made it challenging to demonstrate vehicle safety to stakeholders and insurers.",
    solution: "L3 created a comprehensive AI-driven safety validation framework that combines simulation-based testing with real-world data analysis. Our system uses advanced modeling to simulate millions of driving scenarios, identifying edge cases and potential safety issues more efficiently than traditional road testing. We developed automated documentation systems that compile safety data according to regulatory standards and created standardized safety metrics that provide clear performance indicators to all stakeholders.",
    impact: "The safety framework significantly accelerated the company's path to market while reducing costs. Regulatory approval processes became 15% faster through comprehensive, well-documented safety evidence. Testing costs decreased by $600,000 annually through efficient simulation-based validation that reduced the need for extensive road testing. The standardized safety metrics improved stakeholder confidence and facilitated partnerships with insurance providers and fleet operators.",
    testimonial: {
      quote: "L3's safety framework gave us the confidence and documentation we needed to move forward with deployment. The simulation capabilities are incredibly sophisticated.",
      author: "VP of Safety Engineering",
      company: "Private Automotive Technology Company"
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
