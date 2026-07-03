"use client";

import type { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/** Card wrapper with a soft radial highlight that follows the cursor. */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const background = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(45,212,255,0.12), transparent 65%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div onMouseMove={onMove} className={`group relative ${className}`}>
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}
