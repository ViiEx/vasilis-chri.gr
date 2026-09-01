import { AnimatedBackground } from "@/components/background/AnimatedBackground";
import { CursorGlow } from "@/components/background/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { site, skills, socials, projects, experiences } from "@/lib/content";

// Structured data helps search engines understand the person + site.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      jobTitle: site.role,
      email: `mailto:${site.email}`,
      description: site.tagline,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressCountry: "GR",
      },
      worksFor: {
        "@type": "Organization",
        name: experiences[0]?.company,
      },
      knowsAbout: skills.map((s) => s.name),
      sameAs: socials
        .filter((s) => s.icon !== "mail")
        .map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — ${site.role}`,
      description: site.tagline,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    ...projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      url: project.href,
      description: project.description,
      author: { "@id": `${site.url}/#person` },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
