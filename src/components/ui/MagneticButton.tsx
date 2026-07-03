"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

/** Button/link that leans toward the cursor on hover. */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 will-change-transform cursor-pointer";

  const styles =
    variant === "primary"
      ? "text-[#04050c] bg-gradient-to-r from-cyan to-violet shadow-[0_0_30px_-6px_rgba(45,212,255,0.6)] hover:shadow-[0_0_40px_-4px_rgba(168,85,247,0.7)]"
      : "text-foreground glass hover:border-cyan/50";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
