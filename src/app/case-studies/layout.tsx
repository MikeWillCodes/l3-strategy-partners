import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L3 Case Studies | Coming Soon",
  description: "Request examples of PM-as-a-Service (PMaaS) work relevant to your stage and domain.",
  robots: "noindex, nofollow",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
