"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@l3strategypartners.com",
    href: "mailto:info@l3strategypartners.com"
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Houston, Texas",
    href: "#"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <GradientOrb 
        className="absolute top-1/4 right-0 w-96 h-96 opacity-20 animate-float-delayed" 
        variant="purple"
      />
      <GradientOrb 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-15 animate-float" 
        variant="cyan"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-light tracking-tight text-white mb-8"
            >
              Connect with{" "}
              <span className="text-gradient">L3</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl leading-relaxed text-white/90 mb-10 max-w-4xl mx-auto"
            >
              Tell us about your goals and challenges. Our team will review your request and respond within 24 hours with next steps.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-section-hero mb-8">Get in Touch</h2>
                <ContactForm />
              </motion.div>
            </div>

            {/* Contact Info & Visual */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-white/85 font-medium">{info.label}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-primary transition-colors font-medium text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium text-lg">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="card p-8 text-center relative overflow-hidden">
                  {/* Gradient Spheres Illustration */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Ready to Scale Your AI?
                    </h3>
                    <p className="text-white/85 text-sm mb-6">
                      Join hundreds of organizations transforming their business with AI.
                    </p>
                    
                    {/* Visual representation */}
                    <div className="space-y-4">
                      <div className="flex justify-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse" />
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <div className="flex justify-center space-x-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-red-600 animate-pulse" style={{ animationDelay: '0.1s' }} />
                        <div className="w-8 h-8 rounded-full bg-gradient-conic from-primary via-purple-600 to-cyan-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </div>
                      <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 animate-pulse" style={{ animationDelay: '0.6s' }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Background blur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 backdrop-blur-sm" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 border-t border-white/10 bg-panel/20 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gradient mb-8">
              Ready to Scale with AI?
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-10">
              Join growing organizations building smarter, faster, and more resilient businesses with L3.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-4 text-lg"
            >
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}