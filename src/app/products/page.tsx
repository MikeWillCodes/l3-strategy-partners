import { redirect } from "next/navigation";
import { Metadata } from "next";

// This page is hidden and redirects to /services
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProductsPage() {
  // Server-side redirect to services page
  redirect("/services");
}