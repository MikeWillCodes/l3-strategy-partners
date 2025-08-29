import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L3 Strategy Partners | Product Management-as-a-Service (PMaaS)",
  description: "L3 delivers PM-as-a-Service (PMaaS): Discovery, roadmap, and delivery run by experienced Principal, Senior, and Associate PMs. Validate faster, build smarter, scale confidently.",
  keywords: ["Product Management", "PMaaS", "Product Strategy", "Startup PM", "Product Roadmap", "Discovery Sprint", "PM Pod"],
  openGraph: {
    title: "L3 Strategy Partners | Product Management-as-a-Service (PMaaS)",
    description: "L3 delivers PM-as-a-Service (PMaaS): Discovery, roadmap, and delivery run by experienced Principal, Senior, and Associate PMs. Validate faster, build smarter, scale confidently.",
  },
  twitter: {
    title: "L3 Strategy Partners | Product Management-as-a-Service (PMaaS)",
    description: "L3 delivers PM-as-a-Service (PMaaS): Discovery, roadmap, and delivery run by experienced Principal, Senior, and Associate PMs. Validate faster, build smarter, scale confidently.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
