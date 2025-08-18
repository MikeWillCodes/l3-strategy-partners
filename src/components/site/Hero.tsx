"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-hero mb-6"
          >
            Improve your business with{" "}
            <span className="text-gradient">AI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            L3 delivers proven strategies to modernize, automate, and improve business outcomes for SMBs and mid-market organizations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 h-auto"
            >
              <Link href="/contact" aria-label="Book a consultation to get started">
                Book Consultation Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white/5 text-text font-semibold text-lg px-8 py-4 h-auto"
            >
              <Link href="/ai-readiness" aria-label="Get your AI readiness score">
                <Play className="mr-2 h-5 w-5" />
                Get Your AI Readiness Score
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      

    </section>
  );
}
