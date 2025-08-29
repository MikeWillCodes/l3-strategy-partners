"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <section className="section-spacing relative z-10">
        <div className="container">
          <div className="narrow-wrapper text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-page-hero mb-6"
            >
              Connect with{" "}
              <span className="text-gradient">L3</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Tell us about your goals and challenges. Our team will review your request and respond within 24 hours with next steps.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing relative z-10">
        <div className="container">
          <div className="max-w-[860px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-section-hero mb-6 text-center">Get in Touch</h2>
              <div className="mt-12">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="section-spacing border-t border-white/10 bg-panel/20 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center narrow-wrapper"
          >
            <h2 className="text-section-hero mb-6">
              Ready to Scale with Product Leadership?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join growing organizations building smarter, faster, and more resilient businesses with L3.
            </p>
            <Button 
              asChild
              size="lg"
            >
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}