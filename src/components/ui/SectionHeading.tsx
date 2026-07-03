import { Reveal } from "@/components/ui/Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 font-mono text-sm ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="text-cyan">{index}</span>
          <span className="h-px w-8 bg-gradient-to-r from-cyan to-transparent" />
          <span className="uppercase tracking-[0.2em] text-muted">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-base leading-relaxed text-muted sm:text-lg ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
