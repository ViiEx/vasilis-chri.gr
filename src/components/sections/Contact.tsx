"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site, socials } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  socialIconMap,
  CopyIcon,
  CheckIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="gradient-border glass relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/20 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <SectionHeading
            index="05"
            eyebrow="Contact"
            title="Let's build something together"
            description="Got a project, an idea, or just want to say hi? My inbox is always open."
            align="center"
          />

          {/* Email copy pill */}
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-md items-center justify-between gap-3 rounded-full border border-border bg-white/[0.03] py-2 pl-5 pr-2">
              <a
                href={`mailto:${site.email}`}
                className="truncate font-mono text-sm text-foreground/90 transition-colors hover:text-cyan"
              >
                {site.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/5 px-3 py-2 text-xs font-medium text-muted transition-colors hover:bg-white/10 hover:text-foreground"
              >
                {copied ? (
                  <>
                    <CheckIcon className="text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    <CopyIcon /> Copy
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* Primary CTA */}
          <Reveal delay={0.15}>
            <motion.a
              href={`mailto:${site.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-8 py-4 text-base font-semibold text-[#04050c] shadow-[0_0_40px_-8px_rgba(45,212,255,0.7)] transition-shadow duration-300 hover:shadow-[0_0_50px_-6px_rgba(168,85,247,0.8)]"
            >
              Say hello
              <ArrowUpRightIcon />
            </motion.a>
          </Reveal>

          {/* Social cards */}
          <Reveal delay={0.2}>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-white/[0.02] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.04]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-lg text-muted transition-colors group-hover:text-cyan">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">
                        {s.label}
                      </span>
                      <span className="block truncate font-mono text-xs text-faint">
                        {s.handle}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
