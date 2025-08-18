import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { GradientOrb } from "@/components/ui/GradientOrb";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "L3 Strategy Partners - Unlock Your Path to Scalable AI Success",
  description: "Leading AI strategy consulting firm helping organizations develop scalable AI applications and data modernization solutions.",
  keywords: ["AI strategy", "data modernization", "AI consulting", "machine learning", "artificial intelligence"],
  authors: [{ name: "L3 Strategy Partners" }],
  creator: "L3 Strategy Partners",
  publisher: "L3 Strategy Partners",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "L3 Strategy Partners",
    title: "L3 Strategy Partners - Unlock Your Path to Scalable AI Success",
    description: "Leading AI strategy consulting firm helping organizations develop scalable AI applications and data modernization solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "L3 Strategy Partners - Unlock Your Path to Scalable AI Success",
    description: "Leading AI strategy consulting firm helping organizations develop scalable AI applications and data modernization solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen relative overflow-x-hidden`}>
        {/* Background gradient orbs */}
        <GradientOrb 
          className="fixed top-1/4 left-1/4 w-96 h-96 opacity-30 animate-float" 
          variant="iris"
        />
        <GradientOrb 
          className="fixed top-3/4 right-1/4 w-80 h-80 opacity-20 animate-float-delayed" 
          variant="cyan"
        />
        <GradientOrb 
          className="fixed top-1/2 right-1/3 w-64 h-64 opacity-25 animate-float-delayed-2" 
          variant="purple"
        />
        
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
