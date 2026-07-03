"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiences } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="Where I've been building"
      />

      <div ref={ref} className="relative mt-14 pl-8 sm:pl-10">
        {/* Track */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-border sm:left-[11px]" />
        {/* Animated fill */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-cyan via-violet to-transparent sm:left-[11px]"
        />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05}>
              <div className="relative">
                {/* Node */}
                <span className="absolute -left-8 top-1.5 grid h-4 w-4 place-items-center sm:-left-10">
                  <span className="absolute h-4 w-4 rounded-full bg-cyan/20" />
                  {exp.current && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-cyan/40" />
                  )}
                  <span className="relative h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(45,212,255,0.6)]" />
                </span>

                <div className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-cyan/30 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <span className="rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-xs text-cyan">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mt-1 gradient-text-soft w-fit font-medium">
                    {exp.company}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Origin node */}
          <Reveal>
            <div className="relative">
              <span className="absolute -left-8 top-1.5 h-4 w-4 sm:-left-10">
                <span className="block h-4 w-4 rounded-full border-2 border-border bg-background" />
              </span>
              <p className="font-mono text-sm text-faint">
                {"// where the journey started"}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
