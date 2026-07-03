"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon, MapPinIcon, TerminalIcon } from "@/components/ui/icons";

const yearsShipping = new Date().getFullYear() - 2021;

const highlights = [
  "Pixel-perfect, responsive interfaces",
  "Accessibility & performance minded",
  "Smooth, meaningful motion",
  "Scalable component architecture",
];

const stats = [
  { value: yearsShipping, suffix: "+", label: "Years shipping" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Attention to detail" },
];

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  // Reduced motion shows the final value straight away without animating state.
  const display = reduce ? value : n;

  return (
    <div ref={ref} className="text-center">
      <div className="gradient-text-soft font-heading text-3xl font-bold sm:text-4xl">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Designing interfaces that just feel right"
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Bio */}
        <div>
          {site.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mb-5 text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 text-sm text-foreground/90"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-cyan/10 text-xs text-cyan">
                    <CheckIcon />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Profile card */}
        <Reveal delay={0.1}>
          <div className="gradient-border glass rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan to-violet font-heading text-2xl font-bold text-[#04050c] shadow-[0_0_28px_-6px_rgba(45,212,255,0.6)]">
                VC
              </div>
              <div>
                <div className="font-heading text-lg font-semibold">
                  {site.name}
                </div>
                <div className="text-sm text-muted">{site.role}</div>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-border/70 pt-6 font-mono text-sm">
              <div className="flex items-center gap-3 text-muted">
                <MapPinIcon className="text-cyan" />
                {site.location}
              </div>
              <div className="flex items-center gap-3 text-muted">
                <TerminalIcon className="text-cyan" />
                @ Division By Zero · since 2021
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border/70 pt-6">
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
