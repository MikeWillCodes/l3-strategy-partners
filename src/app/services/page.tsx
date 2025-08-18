"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Brain, 
  Database, 
  Cog, 
  Shield, 
  Building, 
  Car,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy",
    description: "Comprehensive AI strategy development and roadmap planning",
    details: "We help organizations define their AI vision, assess current capabilities, and create actionable roadmaps for AI transformation."
  },
  {
    icon: Database,
    title: "Data Modernization",
    description: "Transform legacy data systems into AI-ready infrastructure",
    details: "Modernize your data architecture with cloud-native solutions, real-time processing, and advanced analytics capabilities."
  },
  {
    icon: Cog,
    title: "Model Ops",
    description: "End-to-end ML model lifecycle management",
    details: "Streamline model development, deployment, monitoring, and maintenance with industry best practices and automation."
  },
  {
    icon: Shield,
    title: "Safety & Alignment",
    description: "Responsible AI development and ethical guidelines",
    details: "Ensure your AI systems are safe, ethical, and aligned with your organization's values and regulatory requirements."
  },
  {
    icon: Building,
    title: "Public Sector",
    description: "Specialized AI solutions for government and public organizations",
    details: "Navigate complex regulatory environments while implementing AI solutions that serve citizens and improve public services."
  },
  {
    icon: Car,
    title: "Automotive",
    description: "AI solutions for the automotive industry",
    details: "Accelerate autonomous vehicle development, manufacturing optimization, and connected car technologies."
  }
];

const process = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your current state and identify AI opportunities"
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Develop comprehensive AI strategy and implementation roadmap"
  },
  {
    step: "03",
    title: "Implementation & Support",
    description: "Execute the plan with ongoing support and optimization"
  }
];

const faqs = [
  {
    question: "How long does a typical AI strategy engagement take?",
    answer: "Most AI strategy projects range from 8-16 weeks, depending on the scope and complexity of your organization. We work closely with your team to ensure thorough analysis and actionable recommendations."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer comprehensive post-implementation support including monitoring, optimization, and maintenance services. Our team ensures your AI systems continue to deliver value as your organization grows."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise across multiple industries including technology, healthcare, financial services, manufacturing, automotive, and public sector. Our solutions are tailored to industry-specific requirements and regulations."
  },
  {
    question: "How do you ensure AI safety and ethical compliance?",
    answer: "We incorporate responsible AI principles from the beginning, including bias testing, explainability frameworks, and compliance with relevant regulations like GDPR, CCPA, and industry-specific standards."
  }
];

export default function ServicesPage() {
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
              className="text-display mb-6"
            >
              Expert AI Consulting{" "}
              <span className="text-gradient">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-muted mb-8 max-w-3xl mx-auto"
            >
              From strategy to implementation, our comprehensive consulting services help 
              organizations harness the full potential of artificial intelligence.
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
                className="card p-6 hover:bg-panel-strong transition-colors duration-300 group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-text mb-3">{service.title}</h3>
                <p className="text-muted text-sm mb-4">{service.description}</p>
                <p className="text-muted text-sm leading-relaxed">{service.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-y border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display mb-6">Our Engagement Process</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              A proven three-step approach to AI transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-gradient text-6xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Common questions about our AI consulting services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card px-6"
                >
                  <AccordionTrigger className="text-text hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            <h2 className="text-title mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-muted mb-8">
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
