import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="relative flex min-h-[85vh] items-end overflow-hidden">
      {/* Înlocuiește cu fotografia de la ediția anterioară */}
      <img
        src={hero.imagine}
        alt={hero.imagineAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-carbune via-carbune/70 to-carbune/25"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-32 pb-16 sm:px-6 md:pb-24">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight font-bold text-crem sm:text-5xl md:text-6xl">
          {hero.titlu}
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium text-ocru sm:text-lg">{hero.subtitlu}</p>
        <p className="mt-4 max-w-xl text-sm text-crem/85 sm:text-base">{hero.paragraf}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#atractii">{hero.butonPrimar}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-crem/70 bg-transparent text-crem hover:bg-crem hover:text-carbune"
          >
            <a href="#locatie">{hero.butonSecundar}</a>
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-crem/85">
          <li className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-ocru" aria-hidden="true" />
            {hero.micro.data}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-ocru" aria-hidden="true" />
            {hero.micro.adresa}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-ocru" aria-hidden="true" />
            {hero.micro.program}
          </li>
        </ul>
      </div>
    </section>
  );
}
