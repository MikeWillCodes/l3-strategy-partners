"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="card p-8 max-w-4xl mx-auto"
    >
      <Quote className="h-8 w-8 text-primary mb-6" />
      
      <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-medium">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white font-semibold mr-4">
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-white/85">{role} at {company}</div>
        </div>
      </div>
    </motion.div>
  );
}
