"use client";

import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  variant?: "iris" | "cyan" | "purple" | "green" | "orange";
  size?: "sm" | "md" | "lg" | "xl";
}

const variants = {
  iris: "bg-gradient-conic from-[#7cf6ff] via-[#7b5cff] via-[#ff6ad5] via-[#ffd36e] to-[#70ffa5]",
  cyan: "bg-gradient-radial from-cyan-400 to-blue-600",
  purple: "bg-gradient-radial from-purple-400 to-indigo-600",
  green: "bg-gradient-radial from-green-400 to-emerald-600",
  orange: "bg-gradient-radial from-orange-400 to-red-600",
};

const sizes = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-64 h-64",
  xl: "w-96 h-96",
};

export function GradientOrb({ 
  className, 
  variant = "iris", 
  size = "lg" 
}: GradientOrbProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none select-none",
        "opacity-20 mix-blend-screen",
        variants[variant],
        sizes[size],
        className
      )}
      style={{
        filter: "blur(80px)",
      }}
    />
  );
}
