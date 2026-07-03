"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/content";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Elevated background after a little scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "my-2 rounded-2xl border-0 border-border/80 bg-background/70 py-3 backdrop-blur-xl"
            : "my-3 border-0 border-transparent py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan to-violet text-sm font-bold text-[#04050c] shadow-[0_0_20px_-4px_rgba(45,212,255,0.6)] transition-transform duration-300 group-hover:scale-105">
            VC
          </span>
          <span className="hidden sm:inline">
            {site.firstName}
            <span className="text-cyan">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/5 ring-1 ring-cyan/30"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className={isActive ? "text-foreground" : ""}>
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan/40 bg-cyan/10 px-5 py-2 text-sm font-semibold text-cyan transition-all duration-300 hover:bg-cyan/20 hover:shadow-[0_0_24px_-6px_rgba(45,212,255,0.7)] md:inline-flex"
          >
            Let&apos;s talk
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/5 text-xl text-foreground md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 -z-10 h-dvh bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-3 px-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="w-full"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 border-b border-border/60 py-4 font-heading text-3xl font-semibold text-foreground"
                  >
                    <span className="font-mono text-sm text-cyan">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length + 0.1 }}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan to-violet py-4 text-center text-base font-semibold text-[#04050c]"
              >
                Let&apos;s talk
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
