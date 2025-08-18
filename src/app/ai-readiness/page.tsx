"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Brain, Target, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIReadinessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-hero mb-6">
              Get Your <span className="text-gradient">AI Readiness Score</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover where your organization stands and identify the fastest path to AI success with our comprehensive assessment.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 h-auto"
              >
                <a href="/contact" aria-label="Start your AI readiness assessment">
                  Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 text-text font-semibold text-lg px-8 py-4 h-auto"
              >
                <a href="/services" aria-label="Learn about our AI services">
                  Learn More
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display mb-6">What We Assess</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Our comprehensive evaluation covers the four critical pillars of AI readiness for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "Strategic Vision",
                description: "Leadership alignment, use case identification, and ROI planning for AI initiatives."
              },
              {
                icon: Target,
                title: "Data Foundation",
                description: "Data quality, accessibility, governance, and infrastructure readiness for AI applications."
              },
              {
                icon: Zap,
                title: "Technical Capabilities",
                description: "Current technology stack, integration capabilities, and technical team readiness."
              },
              {
                icon: Shield,
                title: "Organizational Change",
                description: "Change management capacity, skills gaps, and cultural readiness for AI adoption."
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                className="card p-8 hover:bg-panel-strong transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-text mb-4">{area.title}</h3>
                <p className="text-muted leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-y border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display mb-6">What You Get</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Receive a detailed report with actionable insights and a clear roadmap for your AI journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Detailed readiness score across all four pillars",
              "Prioritized list of quick wins and high-impact opportunities",
              "90-day action plan with specific next steps",
              "Technology recommendations tailored to your industry",
              "Skills gap analysis and training recommendations",
              "Risk assessment and mitigation strategies"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            className="card p-12 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Take the first step toward AI transformation. Our assessment typically takes 30-45 minutes and provides immediate value.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 h-auto"
            >
              <a href="/contact" aria-label="Schedule your AI readiness assessment">
                Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
