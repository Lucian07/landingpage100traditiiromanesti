import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Despre } from "@/components/sections/Despre";
import { Atractii } from "@/components/sections/Atractii";
import { Galerie } from "@/components/sections/Galerie";
import { Locatie } from "@/components/sections/Locatie";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { Ornament } from "@/components/Ornament";

const titlu = "Târgul 100 de Tradiții Românești · 18–20 septembrie 2026, București";
const descriere =
  "Trei zile de meșteșuguri vii, muzică populară, gastronomie tradițională și ateliere, la Muzeul Național al Țăranului Român. Eveniment organizat de Fundația Cogaion.";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Târgul 100 de Tradiții Românești",
  description: descriere,
  startDate: "2026-09-18",
  endDate: "2026-09-20",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Muzeul Național al Țăranului Român",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Monetăriei 3",
      addressLocality: "București",
      addressRegion: "Sector 1",
      addressCountry: "RO",
    },
  },
  organizer: { "@type": "Organization", name: "Fundația Cogaion" },
  image: "/hero.jpg",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: titlu },
      { name: "description", content: descriere },
      { property: "og:title", content: titlu },
      { property: "og:description", content: descriere },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/hero.jpg" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: titlu },
      { name: "twitter:description", content: descriere },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(eventJsonLd) }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Despre />
        <Ornament />
        <Atractii />
        <Galerie />
        <Ornament />
        <Locatie />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
