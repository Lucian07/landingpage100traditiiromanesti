import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Despre } from "@/components/sections/Despre";
import { Atractii } from "@/components/sections/Atractii";
import { Expozanti } from "@/components/sections/Expozanti";
import { Galerie } from "@/components/sections/Galerie";
import { Locatie } from "@/components/sections/Locatie";
import { Contact } from "@/components/sections/Contact";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { Ornament } from "@/components/Ornament";

const titlu = "Festivalul Plăcintelor · 13–15 noiembrie 2026, București";
const descriere =
  "Festivalul Plăcintelor, 13–15 noiembrie 2026, zilnic 10:00–18:00, la Muzeul Național al Țăranului Român. Plăcinte, meșteșuguri și gastronomie tradițională. Intrarea liberă.";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Festivalul Plăcintelor · Târgul 100 de Tradiții Românești",
  description: descriere,
  startDate: "2026-11-13T10:00:00+02:00",
  endDate: "2026-11-15T18:00:00+02:00",
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
  organizer: { "@type": "Organization", name: "Asociația Kogaion 115" },
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
        <Expozanti />
        <Galerie />
        <Ornament />
        <Locatie />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
