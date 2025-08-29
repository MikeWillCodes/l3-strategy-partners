import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About L3 Strategy Partners | PM-as-a-Service (PMaaS)",
  description: "Meet L3's product leaders. We deliver PM-as-a-Service: discovery, roadmap, and delivery run by Principal, Senior, and Associate PMs.",
  keywords: ["Product Management", "PMaaS", "Product Strategy", "Team", "About", "Product Leaders"],
  openGraph: {
    title: "About L3 Strategy Partners | PM-as-a-Service (PMaaS)",
    description: "Meet L3's product leaders. We deliver PM-as-a-Service: discovery, roadmap, and delivery run by Principal, Senior, and Associate PMs.",
  },
  twitter: {
    title: "About L3 Strategy Partners | PM-as-a-Service (PMaaS)",
    description: "Meet L3's product leaders. We deliver PM-as-a-Service: discovery, roadmap, and delivery run by Principal, Senior, and Associate PMs.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
