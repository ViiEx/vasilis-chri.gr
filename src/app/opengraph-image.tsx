import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated social share card in the portfolio's neon style.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#060711",
          color: "#e9eaf6",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(135deg, rgba(45,212,255,0.16), rgba(6,7,17,0) 42%, rgba(168,85,247,0.20))",
        }}
      >
        {/* Top row: monogram + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "96px",
              height: "96px",
              borderRadius: "24px",
              backgroundImage: "linear-gradient(135deg, #2dd4ff, #a855f7)",
              color: "#04050c",
              fontSize: "46px",
              fontWeight: 700,
            }}
          >
            VC
          </div>
          <div style={{ display: "flex", fontSize: "28px", color: "#6b7096" }}>
            vasilis-chri.gr
          </div>
        </div>

        {/* Bottom block: identity */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#2dd4ff",
              marginBottom: "16px",
              letterSpacing: "1px",
            }}
          >
            {site.role}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "88px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              color: "#9298bd",
              marginTop: "22px",
            }}
          >
            {site.tagline}
          </div>

          <div
            style={{
              width: "220px",
              height: "8px",
              borderRadius: "999px",
              marginTop: "34px",
              backgroundImage: "linear-gradient(90deg, #2dd4ff, #a855f7)",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "26px",
              fontSize: "26px",
              color: "#6b7096",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                backgroundColor: "#2dd4ff",
                marginRight: "12px",
              }}
            />
            {site.location} · React · Next.js · TypeScript
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
