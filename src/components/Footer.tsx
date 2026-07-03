import { navLinks, site, socials } from "@/lib/content";
import { socialIconMap, ArrowDownIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan to-violet text-sm font-bold text-[#04050c]">
                VC
              </span>
              <span className="font-heading text-lg font-bold">
                {site.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.tagline} Based in {site.location} — building thoughtful web
              experiences.
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex gap-12">
            <nav className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Navigate
              </span>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Elsewhere
              </span>
              {socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-cyan"
                  >
                    <Icon /> {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-faint">
            © {year} {site.name}. Crafted with Next.js & Framer Motion.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            Back to top
            <ArrowDownIcon className="rotate-180 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
