# Vasilis Christopoulos — Portfolio

A fully animated, dark neon-glow developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.

## ✨ Features

- **Dark OLED aesthetic** with animated aurora background, masked grid, and a cursor-following glow spotlight
- **Motion everywhere** — scroll-reveal + staggered entrances, magnetic buttons, rotating role text, animated counters, a scroll-linked experience timeline, and a live-feeling app preview. All motion respects `prefers-reduced-motion`.
- **Sections**: Hero · About · Skills · Selected Work · Experience · Contact
- Scroll-aware glass navbar with active-section tracking + animated mobile menu
- Fully responsive (375 → 1440px) and keyboard accessible

## 🚀 Getting started

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## ✏️ Editing your content

**Everything you'd want to change lives in one file:** [`src/lib/content.ts`](src/lib/content.ts)

| What | Where |
| --- | --- |
| Name, role, tagline, bio, rotating titles | `site` |
| Nav links | `navLinks` |
| Skills + brand colors | `skills` |
| Projects | `projects` |
| Work history | `experiences` |
| Social links | `socials` |

### Theme / colors

Neon palette, fonts, and keyframes are defined in [`src/app/globals.css`](src/app/globals.css) under the `@theme` blocks (`--color-cyan`, `--color-violet`, etc.).

### Structure

```
src/
├─ app/                 layout (fonts + metadata), globals.css, page.tsx
├─ lib/content.ts       ← all site content
└─ components/
   ├─ background/       AnimatedBackground, CursorGlow
   ├─ ui/               Reveal, SectionHeading, MagneticButton, SpotlightCard, icons…
   ├─ sections/         Hero, About, Skills, Projects, Experience, Contact
   ├─ Navbar.tsx
   └─ Footer.tsx
```

## 🌐 Deploy

Zero-config on [Vercel](https://vercel.com) — import the repo and deploy. Point `vasilis-chri.gr` at it and update `site.url` in `content.ts`.

---

Crafted with Next.js & Framer Motion.
