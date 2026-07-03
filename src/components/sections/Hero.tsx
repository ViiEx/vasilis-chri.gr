"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { site, socials } from "@/lib/content";
import { socialIconMap, ArrowDownIcon, MapPinIcon } from "@/components/ui/icons";
import { MagneticButton } from "@/components/ui/MagneticButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % site.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1.2em] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="gradient-text-soft absolute left-0 whitespace-nowrap font-semibold"
        >
          {site.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: intro */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3.5 py-1.5 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-sm text-cyan sm:text-base"
          >
            {"const developer = {"}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-[clamp(2.75rem,8vw,5rem)] font-bold leading-[0.95]"
          >
            <span className="text-foreground">Vasilis</span>
            <br />
            <span className="gradient-text text-glow">Christopoulos</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 text-xl text-muted sm:text-2xl"
          >
            <span className="text-foreground/80">I&apos;m a </span>
            <RotatingRole />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.tagline} Turning complex problems into interfaces that feel
            effortless.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-faint"
          >
            <MapPinIcon className="text-cyan" />
            {site.location}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href="#work">
              View my work
              <ArrowDownIcon className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Get in touch
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-white/5 text-lg text-muted transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_24px_-8px_rgba(45,212,255,0.7)]"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: code editor card */}
        <CodeCard />
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mx-auto mt-14 hidden flex-col items-center gap-2 text-faint sm:flex"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-cyan"
          />
        </span>
      </motion.a>
    </section>
  );
}

function CodeCard() {
  const reduce = useReducedMotion();

  const lines = [
    { indent: 0, content: <><span className="text-violet">const</span> <span className="text-cyan">developer</span> <span className="text-muted">=</span> <span className="text-foreground/60">{"{"}</span></> },
    { indent: 1, content: <><span className="text-pink">name</span><span className="text-muted">:</span> <span className="text-emerald-300">&apos;Vasilis Christopoulos&apos;</span><span className="text-muted">,</span></> },
    { indent: 1, content: <><span className="text-pink">role</span><span className="text-muted">:</span> <span className="text-emerald-300">&apos;Senior Frontend Developer&apos;</span><span className="text-muted">,</span></> },
    { indent: 1, content: <><span className="text-pink">location</span><span className="text-muted">:</span> <span className="text-emerald-300">&apos;Athens, Greece&apos;</span><span className="text-muted">,</span></> },
    { indent: 1, content: <><span className="text-pink">stack</span><span className="text-muted">:</span> <span className="text-foreground/60">[</span><span className="text-emerald-300">&apos;React&apos;</span><span className="text-muted">,</span> <span className="text-emerald-300">&apos;Next.js&apos;</span><span className="text-muted">,</span> <span className="text-emerald-300">&apos;TS&apos;</span><span className="text-foreground/60">]</span><span className="text-muted">,</span></> },
    { indent: 1, content: <><span className="text-pink">focus</span><span className="text-muted">:</span> <span className="text-emerald-300">&apos;clean, delightful UIs&apos;</span><span className="text-muted">,</span></> },
    { indent: 1, content: <><span className="text-pink">available</span><span className="text-muted">:</span> <span className="text-orange-300">true</span><span className="text-muted">,</span></> },
    { indent: 0, content: <span className="text-foreground/60">{"};"}</span> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
      className="relative mx-auto w-full max-w-md [perspective:1000px]"
    >
      {/* Glow */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-cyan/20 via-violet/10 to-transparent blur-2xl" />

      <div
        className={`gradient-border glass overflow-hidden rounded-2xl shadow-2xl ${
          reduce ? "" : "animate-float-slow"
        }`}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-faint">developer.ts</span>
        </div>

        {/* Code body */}
        <div className="overflow-x-auto px-5 py-5">
          <pre className="font-mono text-[13px] leading-relaxed sm:text-sm">
            <code>
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.12, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <span className="w-4 select-none text-right text-faint/50">
                    {idx + 1}
                  </span>
                  <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    {line.content}
                  </span>
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + lines.length * 0.12 }}
                className="ml-8 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyan"
              />
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
