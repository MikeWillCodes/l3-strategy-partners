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
  title: "L3 Strategy Partners | PM-as-a-Service for Startups",
  description: "L3 delivers PM-as-a-Service (PMaaS): Discovery, roadmap, and delivery run by experienced Principal, Senior, and Associate PMs. Validate faster, build smarter, and scale confidently.",
  keywords: ["Product Management", "PMaaS", "Product Strategy", "Startup PM", "Product Roadmap", "Discovery Sprint"],
  authors: [{ name: "L3 Strategy Partners" }],
  creator: "L3 Strategy Partners",
  publisher: "L3 Strategy Partners",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-64.png", sizes: "64x64", type: "image/png" },
      { url: "/logo-128.png", sizes: "128x128", type: "image/png" },
      { url: "/logo-256.png", sizes: "256x256", type: "image/png" },
      { url: "/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/logo-128.png", sizes: "128x128", type: "image/png" },
      { url: "/logo-256.png", sizes: "256x256", type: "image/png" },
      { url: "/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "mask-icon",
        url: "/logo-512.png",
        color: "#0891b2",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "L3 Strategy Partners",
    title: "L3 Strategy Partners | PM-as-a-Service for Startups",
    description: "L3 delivers PM-as-a-Service (PMaaS): Discovery, roadmap, and delivery run by experienced Principal, Senior, and Associate PMs. Validate faster, build smarter, and scale confidently.",
    images: [
      {
        url: "/logo-1024.png",
        width: 1024,
        height: 1024,
        alt: "L3 Strategy Partners Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L3 Strategy Partners | PM-as-a-Service for Startups",
    description: "L3 delivers PM-as-a-Service (PMaaS): Discovery, roadmap, and delivery run by experienced Principal, Senior, and Associate PMs. Validate faster, build smarter, and scale confidently.",
    images: ["/logo-1024.png"],
  },
  manifest: "/site.webmanifest",
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
