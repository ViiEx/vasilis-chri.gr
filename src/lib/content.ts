// Central content source for the portfolio.
// Edit anything here and it flows through every section.

export const site = {
  name: "Vasilis Christopoulos",
  firstName: "Vasilis",
  role: "Senior Frontend Developer",
  location: "Athens, Greece",
  email: "vaschristopoulos@gmail.com",
  tagline: "I love building nice and clean UIs.",
  url: "https://vasilis-chri.gr",
  // Rotating descriptors shown under the name in the hero.
  roles: [
    "Senior Frontend Developer",
    "React & Next.js Specialist",
    "UI Craftsman",
    "Interface Perfectionist",
  ],
  about: [
    "I'm a Senior Frontend Developer based in Athens, Greece. I love building nice and clean UIs — turning fuzzy ideas and complex problems into interfaces that feel effortless to use.",
    "Since 2021 I've been crafting production web experiences at Division By Zero, focused on the frontend with the occasional deep dive into the backend. I care about the small details: the timing of an animation, the weight of a font, the moment a component just feels right.",
  ],
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Skill = {
  name: string;
  color: string;
  category: "Core" | "Frameworks" | "Styling & Motion" | "Backend";
};

export const skills: Skill[] = [
  { name: "React", color: "#61DAFB", category: "Core" },
  { name: "Next.js", color: "#FFFFFF", category: "Core" },
  { name: "TypeScript", color: "#3178C6", category: "Core" },
  { name: "Angular", color: "#DD0031", category: "Frameworks" },
  { name: "React Native", color: "#61DAFB", category: "Frameworks" },
  { name: "RxJS", color: "#E4008C", category: "Frameworks" },
  { name: "Tailwind CSS", color: "#38BDF8", category: "Styling & Motion" },
  { name: "Framer Motion", color: "#E64AFF", category: "Styling & Motion" },
  { name: "Bootstrap", color: "#7952B3", category: "Styling & Motion" },
  { name: "Node.js", color: "#83CD29", category: "Backend" },
];

export const skillCategories: Skill["category"][] = [
  "Core",
  "Frameworks",
  "Styling & Motion",
  "Backend",
];

export type Project = {
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  href: string;
  highlights: string[];
  status: string;
};

export const projects: Project[] = [
  {
    name: "Campfire",
    description:
      "A real-time community platform — servers, channels, voice rooms, and shared activities.",
    longDescription:
      "Campfire brings people together in real time. Spin up a server, organize conversations into channels, hop into voice rooms, and share activities with your community — all in one fast, modern interface.",
    tags: ["Next.js", "TypeScript", "Node.js", "WebRTC", "Real-time"],
    href: "https://campfire.gr",
    highlights: [
      "Real-time servers & channels",
      "Low-latency voice rooms",
      "Shared community activities",
    ],
    status: "Live",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  start: string;
  description: string;
  points: string[];
  current: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Division By Zero",
    role: "Frontend Developer",
    period: "2021 — Present",
    start: "2021",
    description:
      "Building and shipping production web applications with a frontend focus and occasional backend work.",
    points: [
      "Develop responsive, accessible user interfaces with React, Next.js and Angular.",
      "Own frontend architecture, component systems and interaction/animation quality.",
      "Step into the backend when needed to ship features end to end.",
    ],
    current: true,
  },
];

export type Social = {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "mail";
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/ViiEx",
    handle: "@ViiEx",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vasilis-c-12358b173/",
    handle: "Vasilis Christopoulos",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:vaschristopoulos@gmail.com",
    handle: "vaschristopoulos@gmail.com",
    icon: "mail",
  },
];
