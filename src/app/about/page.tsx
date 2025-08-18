"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stat } from "@/components/site/Stat";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";

const stats = [
  { value: "2019", label: "Founded", delay: 0 },
  { value: "50+", label: "Team Members", delay: 0.1 },
  { value: "200+", label: "Clients Served", delay: 0.2 },
  { value: "15+", label: "Countries", delay: 0.3 }
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We&apos;re committed to accelerating the development of safe and beneficial AI applications that create positive impact."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our diverse team brings together decades of experience in AI research, engineering, and strategic consulting."
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "We deliver measurable results through rigorous methodology and cutting-edge AI technologies."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Working with organizations worldwide to democratize AI and drive technological advancement."
  }
];

const teamCulture = [
  "Innovation and continuous learning",
  "Collaborative problem-solving",
  "Ethical AI development",
  "Diverse perspectives and inclusion",
  "Client success focus",
  "Technical excellence"
];

export default function AboutPage() {
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
              Our mission is to accelerate the development of{" "}
              <span className="text-gradient">AI applications</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/85 mb-8 max-w-3xl mx-auto"
            >
              L3 Strategy Partners is a leading AI consulting firm dedicated to helping organizations harness the transformative power of artificial intelligence responsibly and effectively.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="card overflow-hidden">
              <div className="h-96 bg-gradient-to-r from-primary/20 via-purple-600/20 to-cyan-400/20 relative flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Building the Future of AI</h3>
                  <p className="text-white/85">Our team at work creating next-generation AI solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero mb-6">Growing Global Impact</h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              Since our founding, we&apos;ve been committed to delivering exceptional results for our clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-section-hero mb-6">Our Values</h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 hover:bg-panel-strong transition-colors duration-300 group"
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/85 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 border-t border-white/10 bg-panel/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section-hero mb-6">Our Team Culture</h2>
              <p className="text-xl text-white/85 mb-8">
                We foster an environment where innovation thrives, diverse perspectives are valued, and everyone is empowered to contribute to meaningful AI advancement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamCulture.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                    <span className="text-white/85">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Team Culture Visual */}
              <div className="card p-8 text-center">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                      key={item}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/40" />
                    </div>
                  ))}
                </div>
                <p className="text-white/85 mt-6">
                  Diverse team working together
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-section-hero mb-6">
              Join Us in Shaping the Future of AI
            </h2>
            <p className="text-xl text-white/85 mb-8">
              Whether you&apos;re looking to transform your organization with AI or join our team, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 text-text font-semibold"
              >
                <Link href="#">
                  View Careers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}