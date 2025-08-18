import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = {
  "Products": [
    { name: "Data Engine", href: "/products#data-engine" },
    { name: "Model Evaluation", href: "/products#model-evaluation" },
    { name: "GenAI Platform", href: "/products#genai-platform" },
  ],
  "Services": [
    { name: "AI Strategy", href: "/services#ai-strategy" },
    { name: "Data Modernization", href: "/services#data-modernization" },
    { name: "Model Operations", href: "/services#model-ops" },
    { name: "Safety & Alignment", href: "/services#safety" },
  ],
  "Company": [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg/80 backdrop-blur-xl">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and CTA */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gradient mb-4 block">
              L3
            </Link>
            <p className="text-muted mb-6 text-sm">
              Unlock your path to scalable AI success with our expert strategy consulting.
            </p>
            <Button 
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/85 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2024 L3 Strategy Partners. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/85 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/85 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/85 hover:text-white transition-colors text-sm">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
