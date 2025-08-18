"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@l3strategy.com",
    href: "mailto:hello@l3strategy.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco, CA",
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
              className="text-display mb-6"
            >
              Let&apos;s Build the Future of{" "}
              <span className="text-gradient">AI Together</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-muted mb-8 max-w-3xl mx-auto"
            >
              Ready to transform your organization with AI? Our experts are here to help. Tell us about your project and let&apos;s start the conversation.
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
                <h2 className="text-title mb-8">Get in Touch</h2>
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
                <h3 className="text-xl font-semibold text-text mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <info.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">{info.label}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href}
                            className="text-text hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-text font-medium">{info.value}</p>
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
                    <h3 className="text-lg font-semibold text-text mb-4">
                      Ready to Scale Your AI?
                    </h3>
                    <p className="text-muted text-sm mb-6">
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
    </div>
  );
}