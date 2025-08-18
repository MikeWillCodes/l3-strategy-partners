"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IrisRing } from "@/components/ui/IrisRing";
import { Database, Brain, Zap, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Database,
    name: "Data Engine",
    description: "Modern data infrastructure platform for AI-ready organizations",
    features: [
      "Real-time data processing and transformation",
      "Cloud-native architecture with auto-scaling",
      "Advanced data quality monitoring",
      "Integrated ML feature store",
      "Enterprise security and compliance"
    ]
  },
  {
    icon: Brain,
    name: "Model Evaluation",
    description: "Comprehensive AI model testing and validation platform",
    features: [
      "Automated model performance testing",
      "Bias detection and fairness analysis",
      "A/B testing for model versions",
      "Explainability and interpretability tools",
      "Continuous monitoring and alerts"
    ]
  },
  {
    icon: Zap,
    name: "GenAI Platform",
    description: "Enterprise-ready generative AI application development suite",
    features: [
      "Pre-trained foundation models",
      "Custom model fine-tuning tools",
      "Prompt engineering workspace",
      "Multi-modal AI capabilities",
      "Production deployment automation"
    ]
  }
];

export default function ProductsPage() {
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
              AI-Powered Products for{" "}
              <span className="text-gradient">Enterprise Scale</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/85 mb-8 max-w-3xl mx-auto"
            >
              Transform your organization with our suite of enterprise-grade AI products, 
              designed for scalability, security, and seamless integration.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 mr-4">
                      <product.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      <p className="text-white/85">{product.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-white/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10 text-primary"
                  >
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
            
            {/* Visual Element */}
            <div className="relative lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <IrisRing size={300} thickness={3} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="card p-8 text-center">
                      <h3 className="text-xl font-semibold text-gradient mb-2">
                        AI Products
                      </h3>
                      <p className="text-white/85 text-sm">
                        Enterprise Ready
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
            <h2 className="text-section-hero mb-6">
              Ready to Transform Your AI Capabilities?
            </h2>
            <p className="text-xl text-white/85 mb-8">
              Discover how our products can accelerate your AI journey and deliver measurable business value.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/contact">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
