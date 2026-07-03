import { skills, skillCategories, type Skill } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const categoryAccent: Record<Skill["category"], string> = {
  Core: "#2dd4ff",
  Frameworks: "#a855f7",
  "Styling & Motion": "#f472d0",
  Backend: "#5b8cff",
};

function Chip({ skill }: { skill: Skill }) {
  return (
    <span
      style={{ "--c": skill.color } as React.CSSProperties}
      className="group/chip inline-flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-3 py-2 text-sm font-medium text-foreground/90 transition-all duration-300 hover:-translate-y-0.5 hover:[border-color:var(--c)] hover:[box-shadow:0_0_22px_-6px_var(--c)]"
    >
      <span
        style={{ backgroundColor: skill.color }}
        className="h-2 w-2 rounded-full shadow-[0_0_8px_var(--c)] transition-transform duration-300 group-hover/chip:scale-125"
      />
      {skill.name}
    </span>
  );
}

function Marquee() {
  const row = [...skills, ...skills];
  return (
    <div className="edge-fade group relative flex overflow-hidden py-2">
      <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]">
        {row.map((s, i) => (
          <span
            key={i}
            className="flex items-center gap-6 font-heading text-2xl font-semibold text-muted/70 sm:text-3xl"
          >
            <span
              style={{ color: s.color === "#FFFFFF" ? undefined : s.color }}
              className="transition-colors"
            >
              {s.name}
            </span>
            <span className="text-cyan/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="My toolkit"
          description="The technologies I reach for to build fast, polished, and maintainable products."
        />
      </div>

      {/* Marquee band */}
      <div className="my-12 border-y border-border/60 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl">
          <Marquee />
        </div>
      </div>

      {/* Category grid */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Stagger className="grid gap-5 sm:grid-cols-2" gap={0.1}>
          {skillCategories.map((cat) => {
            const items = skills.filter((s) => s.category === cat);
            const accent = categoryAccent[cat];
            return (
              <StaggerItem key={cat}>
                <div
                  style={{ "--c": accent } as React.CSSProperties}
                  className="glass group h-full rounded-2xl p-6 transition-colors duration-300 hover:[border-color:color-mix(in_srgb,var(--c)_50%,transparent)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="flex items-center gap-3 font-heading text-lg font-semibold">
                      <span
                        style={{ backgroundColor: accent }}
                        className="h-3 w-3 rounded-full shadow-[0_0_12px_var(--c)]"
                      />
                      {cat}
                    </h3>
                    <span className="font-mono text-xs text-faint">
                      {String(items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {items.map((s) => (
                      <Chip key={s.name} skill={s} />
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-mono text-sm text-faint">
            + always learning something new
          </p>
        </Reveal>
      </div>
    </section>
  );
}
