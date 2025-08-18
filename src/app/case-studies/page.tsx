"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    title: "Global Manufacturing AI Transformation",
    company: "TechManufacturing Corp",
    industry: "Manufacturing",
    type: "Case Study",
    description: "Implemented end-to-end AI solutions resulting in 40% reduction in production downtime and $50M annual savings.",
    image: "/api/placeholder/400/250",
    tags: ["AI Strategy", "Predictive Maintenance", "Quality Control"]
  },
  {
    title: "Healthcare Data Platform Migration",
    company: "MedTech Solutions",
    industry: "Healthcare",
    type: "Partner Case",
    description: "Modernized legacy data systems to support real-time analytics and AI-powered diagnostic tools.",
    image: "/api/placeholder/400/250",
    tags: ["Data Modernization", "Healthcare AI", "Compliance"]
  },
  {
    title: "Financial Services Risk Management",
    company: "Global Bank Inc",
    industry: "Financial Services",
    type: "Case Study",
    description: "Deployed ML models for fraud detection and risk assessment, reducing false positives by 60%.",
    image: "/api/placeholder/400/250",
    tags: ["ML Models", "Risk Management", "Fraud Detection"]
  },
  {
    title: "Autonomous Vehicle Safety Platform",
    company: "AutoTech Innovations",
    industry: "Automotive",
    type: "Partner Case",
    description: "Built comprehensive safety validation framework for autonomous driving systems.",
    image: "/api/placeholder/400/250",
    tags: ["Autonomous Vehicles", "Safety", "Validation"]
  },
  {
    title: "Government AI Ethics Framework",
    company: "Federal Agency",
    industry: "Public Sector",
    type: "Case Study",
    description: "Developed responsible AI guidelines and governance framework for federal AI initiatives.",
    image: "/api/placeholder/400/250",
    tags: ["AI Ethics", "Governance", "Public Sector"]
  },
  {
    title: "Retail Personalization Engine",
    company: "E-Commerce Leader",
    industry: "Retail",
    type: "Partner Case",
    description: "Created AI-powered recommendation system increasing customer engagement by 35%.",
    image: "/api/placeholder/400/250",
    tags: ["Personalization", "Recommendations", "E-Commerce"]
  }
];

const industries = ["All", "Manufacturing", "Healthcare", "Financial Services", "Automotive", "Public Sector", "Retail"];
const offerings = ["All", "AI Strategy", "Data Modernization", "ML Models", "Safety", "Ethics"];

export default function CaseStudiesPage() {
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
              className="text-display mb-6"
            >
              Case Studies &{" "}
              <span className="text-gradient">Resources</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-muted mb-8 max-w-3xl mx-auto"
            >
              Explore real-world AI transformations and learn how we&apos;ve helped organizations 
              across industries achieve measurable success with artificial intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-6 items-center justify-center"
          >
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-muted mr-2">Industry:</span>
              {industries.map((industry) => (
                <Badge 
                  key={industry}
                  variant={industry === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20"
                >
                  {industry}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-muted mr-2">Offering:</span>
              {offerings.map((offering) => (
                <Badge 
                  key={offering}
                  variant={offering === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20"
                >
                  {offering}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:bg-panel-strong transition-colors duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-primary/20 to-purple-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant={study.type === "Case Study" ? "default" : "secondary"}>
                      {study.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-primary mb-3">{study.company}</p>
                  
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0"
                  >
                    <Link href="#" className="inline-flex items-center">
                      Read Case Study
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 bg-panel/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-title mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-muted mb-8">
              Join the growing list of organizations transforming their business with AI. 
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
