"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    name: "SOC 2 Type II",
    description: "Security compliance"
  },
  {
    icon: Lock,
    name: "ISO 27001",
    description: "Information security"
  },
  {
    icon: Award,
    name: "FedRAMP",
    description: "Federal compliance"
  },
  {
    icon: CheckCircle,
    name: "GDPR",
    description: "Privacy protection"
  }
];

export function SecurityRibbon() {
  return (
    <section className="py-16 bg-panel/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-title mb-4">Enterprise-Grade Security</h2>
          <p className="text-muted text-lg">
            Your data and AI models are protected with industry-leading security standards
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center hover:bg-panel-strong transition-colors duration-300"
            >
              <cert.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-text mb-1">{cert.name}</h3>
              <p className="text-sm text-muted">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
