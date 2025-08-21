"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            className="text-xl lg:text-2xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            L3 delivers proven strategies to modernize, automate, and improve business outcomes for SMBs and mid-market organizations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-cyan-600 hover:bg-amber-500 text-white font-semibold text-lg px-8 py-4 h-auto transition-all duration-300 group hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact" aria-label="Book a consultation to get started" className="relative">
                <span className="relative z-10 group-hover:underline decoration-2 underline-offset-4">
                  Book Consultation Now
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      

    </section>
  );
}
