"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Zap, CheckCircle, TrendingUp, Heart } from "lucide-react";

const stats = [
  { value: "10+", label: "FAANG PMs", delay: 0, icon: Users },
  { value: "100+", label: "Products shipped", delay: 0.1, icon: TrendingUp },
  { value: "1:1", label: "Client Focus", delay: 0.2, icon: Heart }
];

const teamHighlights = [
  {
    title: "Experienced Product Professionals",
    description: "Principal, Senior, and Associate PMs who translate strategy into roadmaps, PRDs (product requirement documents), and shipped releases."
  },
  {
    title: "Streamlined Delivery & Operations",
    description: "Backlog hygiene, sprint rituals, QA handoffs, and release notes that keep engineering unblocked."
  },
  {
    title: "Go-to-Market Experts",
    description: "Positioning, pricing experiments, launch planning, and post-launch reviews to drive adoption."
  }
];

const impactBullets = [
  "Deep experience across Microsoft, Amazon, Gartner, McKinsey, and BCG.",
  "Products spanning early-stage startups to enterprise product launches.",
  "Outcome-driven approach designed to ship the right features and drive adoption."
];

const values = [
  {
    icon: Target,
    title: "Client Focused",
    description: "We design around your goals and measure success by your outcomes."
  },
  {
    icon: Users,
    title: "Industry Experts",
    description: "Experience across top tech and consulting with deep domain knowledge."
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Rigorous methods and high standards that deliver reliable results."
  },
  {
    icon: Zap,
    title: "Immediate Impact",
    description: "Practical, lightweight engagements that show value early and often."
  }
];



export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Radial gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-50" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing relative">
        <div className="container">
          <div className="narrow-wrapper text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-page-hero mb-6"
            >
              Our Mission is to help startups build the right product,{" "}
              <span className="text-gradient">faster</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We deliver Product Management-as-a-Service (PMaaS): discovery, roadmap, and delivery discipline without the overhead of a full-time PM team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                asChild
                size="lg"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-spacing relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-section-hero mb-6">Who We Are</h2>
            <p className="text-2xl text-muted-foreground narrow-wrapper">
              Our team is comprised of experienced product leaders who are alumni of Amazon, Google, Microsoft, PayPal, Gartner, McKinsey, and BCG.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-padding hover:bg-panel-strong transition-colors duration-300 h-full"
              >
                <div className="flex flex-col gap-4 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-4 flex-1">
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-muted-foreground narrow-wrapper">
              At L3, we bridge the gap between vision and implementation, combining product expertise with strategic advisory to deliver tangible results for startups and growth companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-spacing border-y border-white/10 bg-panel/20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-section-hero mb-6">Impact</h2>
            <p className="text-xl text-muted-foreground narrow-wrapper">
              Founded to deliver nimble, high-impact product leadership without the bureaucracy of traditional firms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {impactBullets.map((bullet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-padding"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-cyan-400 mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{bullet}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-section-hero mb-6">Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-padding hover:bg-panel-strong transition-colors duration-300 h-full"
              >
                <div className="flex flex-col gap-4 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex flex-col gap-4 flex-1">
                    <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-spacing border-t border-white/10 bg-panel/20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-section-hero mb-6">Culture</h2>
            <div className="narrow-wrapper mt-12">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At L3, culture is more than a set of values — it&apos;s how we work every day. We prize innovation and continuous learning, encouraging curiosity and experimentation so our teams and clients can stay ahead of change. Collaboration is at the core of everything we do, with diverse skill sets and perspectives driving smarter problem-solving and better outcomes. We take ownership of results, holding ourselves accountable to our clients and to each other, and we set high standards of technical excellence in every engagement. Above all, our culture is anchored in client success: every decision, every deliverable, and every milestone is focused on helping organizations build the right product with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="section-spacing relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center narrow-wrapper"
          >
            <h2 className="text-section-hero mb-6">
              Ready to Ship the Right Product?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s embed product leadership and give your team clarity, cadence, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="/careers">
                  View Careers
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}