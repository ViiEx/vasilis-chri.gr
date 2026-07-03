"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  ArrowUpRightIcon,
  CheckIcon,
  ExternalLinkIcon,
} from "@/components/ui/icons";

export function Projects() {
  const featured = projects[0];

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        index="03"
        eyebrow="Selected Work"
        title="Things I've built"
        description="A look at what I've been crafting lately."
      />

      <div className="mt-14">
        <Reveal>
          <SpotlightCard className="gradient-border glass overflow-hidden rounded-3xl">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
              {/* Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                    {featured.status}
                  </span>
                  <span className="font-mono text-xs text-faint">Featured project</span>
                </div>

                <h3 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {featured.longDescription}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {featured.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-foreground/90">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-cyan/10 text-[10px] text-cyan">
                        <CheckIcon />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex-1" />
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-semibold text-[#04050c] shadow-[0_0_28px_-8px_rgba(45,212,255,0.7)] transition-shadow duration-300 hover:shadow-[0_0_36px_-6px_rgba(168,85,247,0.8)]"
                >
                  Visit {featured.href.replace("https://", "")}
                  <ExternalLinkIcon className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              {/* Mock preview */}
              <CampfirePreview />
            </div>
          </SpotlightCard>
        </Reveal>

        {/* CTA card */}
        <Reveal delay={0.1}>
          <a
            href="#contact"
            className="group mt-6 flex items-center justify-between gap-6 rounded-2xl border border-dashed border-border bg-white/[0.02] p-6 transition-colors duration-300 hover:border-cyan/40 sm:p-8"
          >
            <div>
              <h3 className="font-heading text-xl font-semibold sm:text-2xl">
                Have something in mind?
              </h3>
              <p className="mt-1 text-sm text-muted sm:text-base">
                I&apos;m always up for building the next thing. Let&apos;s make it real.
              </p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-white/5 text-xl text-cyan transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan/50 group-hover:shadow-[0_0_24px_-8px_rgba(45,212,255,0.7)]">
              <ArrowUpRightIcon />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** Stylized preview evoking the Campfire community app. */
function CampfirePreview() {
  const servers = ["#2dd4ff", "#a855f7", "#f472d0", "#5b8cff"];
  const channels = ["general", "introductions", "showcase"];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-violet/20 to-cyan/10 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-[#080a15] shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-white/[0.03] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 flex-1 truncate rounded-md bg-black/40 px-3 py-1 text-center font-mono text-[11px] text-faint">
            campfire.gr
          </span>
        </div>

        {/* App body */}
        <div className="flex h-[300px] text-xs">
          {/* Server rail */}
          <div className="flex flex-col items-center gap-3 border-r border-border/60 bg-black/30 px-3 py-4">
            {servers.map((c, i) => (
              <div key={i} className="relative">
                {i === 0 && (
                  <span className="absolute -left-3 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-white" />
                )}
                <div
                  style={{ backgroundColor: c }}
                  className={`h-9 w-9 shrink-0 rounded-2xl transition-all ${
                    i === 0 ? "rounded-xl" : "opacity-70"
                  }`}
                />
              </div>
            ))}
            <div className="grid h-9 w-9 place-items-center rounded-2xl border border-dashed border-border text-base text-emerald-300">
              +
            </div>
          </div>

          {/* Channels */}
          <div className="hidden w-36 flex-col gap-1 border-r border-border/60 bg-black/20 p-3 sm:flex">
            <div className="mb-2 font-heading text-sm font-semibold text-foreground">
              Campfire
            </div>
            {channels.map((ch, i) => (
              <div
                key={ch}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 font-mono ${
                  i === 0 ? "bg-white/10 text-foreground" : "text-faint"
                }`}
              >
                <span className="text-cyan/60">#</span>
                {ch}
              </div>
            ))}

            {/* Voice room */}
            <div className="mt-2 rounded-lg border border-cyan/20 bg-cyan/5 p-2">
              <div className="flex items-center gap-1.5 text-cyan">
                <VolumeIcon />
                <span className="font-mono">Lounge</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                {["#a855f7", "#2dd4ff", "#f472d0"].map((c, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.18, 1] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut",
                    }}
                    style={{ backgroundColor: c }}
                    className="h-5 w-5 rounded-full ring-2 ring-cyan/40"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="flex flex-1 flex-col p-3">
            <div className="mb-2 flex items-center gap-1.5 border-b border-border/50 pb-2 font-mono text-faint">
              <span className="text-cyan/60">#</span> general
            </div>
            <div className="flex flex-col gap-3">
              {[0, 1, 2].map((r) => (
                <div key={r} className="flex gap-2">
                  <div
                    style={{ backgroundColor: servers[r % servers.length] }}
                    className="h-7 w-7 shrink-0 rounded-full opacity-80"
                  />
                  <div className="flex-1 space-y-1.5 pt-1">
                    <div className="h-2 w-16 rounded-full bg-white/15" />
                    <div className="h-2 rounded-full bg-white/10" style={{ width: `${70 - r * 12}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Typing bar */}
            <div className="mt-auto flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2">
              <span className="font-mono text-faint">Message #general</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-3 w-0.5 bg-cyan"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
    </svg>
  );
}
