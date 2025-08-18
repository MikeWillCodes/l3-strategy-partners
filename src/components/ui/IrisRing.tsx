"use client";

import { cn } from "@/lib/utils";

interface IrisRingProps {
  className?: string;
  size?: number;
  thickness?: number;
  animated?: boolean;
}

export function IrisRing({ 
  className, 
  size = 200, 
  thickness = 2,
  animated = true 
}: IrisRingProps) {
  return (
    <div
      className={cn(
        "relative rounded-full",
        animated && "animate-spin-slow",
        className
      )}
      style={{
        width: size,
        height: size,
        background: `conic-gradient(from 0deg, #7cf6ff, #7b5cff, #ff6ad5, #ffd36e, #70ffa5, #7cf6ff)`,
        mask: `radial-gradient(circle, transparent ${size/2 - thickness}px, black ${size/2}px)`,
        WebkitMask: `radial-gradient(circle, transparent ${size/2 - thickness}px, black ${size/2}px)`,
      }}
    >
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-white/10"
        style={{
          mask: `radial-gradient(circle, transparent ${size/2 - thickness}px, black ${size/2}px)`,
          WebkitMask: `radial-gradient(circle, transparent ${size/2 - thickness}px, black ${size/2}px)`,
        }}
      />
    </div>
  );
}
