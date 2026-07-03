"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/** A soft spotlight that trails the pointer. Disabled on touch + reduced motion. */
export function CursorGlow() {
  const reduce = useReducedMotion();

  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  // Always mounted but parked off-screen until the pointer moves it, so on
  // touch / reduced-motion it simply stays invisible with no extra state.
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(45,212,255,0.10),rgba(168,85,247,0.06)_40%,transparent_70%)]"
    />
  );
}
