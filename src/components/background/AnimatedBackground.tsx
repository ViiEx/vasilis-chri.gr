/**
 * Fixed, layered backdrop: deep gradient, drifting aurora blobs, and a masked grid.
 * Pure CSS animation so it renders instantly and degrades gracefully.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#0f1330_0%,#060711_55%,#04050c_100%)]" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan/20 blur-[130px] animate-aurora" />
      <div className="absolute top-1/4 -left-40 h-[34rem] w-[34rem] rounded-full bg-violet/20 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-blue/15 blur-[140px] animate-aurora [animation-delay:-12s]" />

      {/* Masked grid */}
      <div className="grid-lines absolute inset-0 opacity-60" />

      {/* Subtle noise / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(3,4,10,0.85)_100%)]" />
    </div>
  );
}
