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
      <section className="py-20 lg:py-32 relative">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-light tracking-tight text-white mb-8"
            >
              Our Mission is to help startups build the right product,{" "}
              <span className="text-gradient">faster</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl leading-relaxed text-white/85 mb-10 max-w-4xl mx-auto"
            >
              We deliver Product Management-as-a-Service (PMaaS): discovery, roadmap, and delivery discipline without the overhead of a full-time PM team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero-gradient mb-6">Who We Are</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-2xl text-white/90 text-center max-w-4xl mx-auto leading-relaxed">
                Our team is comprised of experienced product leaders who are alumni of Amazon, Google, Microsoft, PayPal, Gartner, McKinsey, and BCG.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {teamHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 hover:scale-105 hover:shadow-2xl hover:border-white/20 transition-all duration-300 group min-h-[180px]"
                >
                  <div className="flex flex-col items-start h-full">
                    <CheckCircle className="h-8 w-8 text-emerald-400 mb-4 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                    <p className="text-white/90 leading-relaxed flex-grow">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                At L3, we bridge the gap between vision and implementation, combining product expertise with strategic advisory to deliver tangible results for startups and growth companies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 border-y border-white/10 bg-panel/20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero-gradient mb-6">Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Founded to deliver nimble, high-impact product leadership without the bureaucracy of traditional firms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                className="text-center p-6 card hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 mb-4">
                  <stat.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/85 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {impactBullets.map((bullet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2 mr-4 flex-shrink-0" />
                <p className="text-lg text-white/90 leading-relaxed">{bullet}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero-gradient mb-6">Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-10 hover:scale-[1.02] hover:bg-panel-strong hover:border-white/20 transition-all duration-300 group min-h-[220px]"
              >
                <div className="mb-8">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-colors duration-300">
                    <value.icon className="h-10 w-10 text-emerald-400" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-semibold text-white mb-6">{value.title}</h3>
                <p className="text-lg text-white/90 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 border-t border-white/10 bg-panel/20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero-gradient mb-6">Culture</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl text-white/90 leading-relaxed">
                At L3, culture is more than a set of values — it&apos;s how we work every day. We prize innovation and continuous learning, encouraging curiosity and experimentation so our teams and clients can stay ahead of change. Collaboration is at the core of everything we do, with diverse skill sets and perspectives driving smarter problem-solving and better outcomes. We take ownership of results, holding ourselves accountable to our clients and to each other, and we set high standards of technical excellence in every engagement. Above all, our culture is anchored in client success: every decision, every deliverable, and every milestone is focused on helping organizations build the right product with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gradient mb-8">
              Ready to Ship the Right Product?
            </h2>
            <p className="text-2xl text-white/90 mb-10 leading-relaxed">
              Let&apos;s embed product leadership and give your team clarity, cadence, and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-4 text-lg"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 text-white font-semibold rounded-2xl hover:border-white/30 transition-all duration-300 group px-8 py-4 text-lg"
              >
                <Link href="/careers">
                  View Careers
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}