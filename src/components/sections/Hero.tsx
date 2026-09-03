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
        {/* Titlu în spiritul posterului: majuscule, serif, „100" accentuat */}
        <h1 className="section-title max-w-3xl text-crem">
          <span className="block text-3xl sm:text-4xl md:text-5xl">Târgul</span>
          <span className="block text-6xl leading-none text-ocru sm:text-7xl md:text-8xl">100</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl">de Tradiții</span>
          <span className="block text-3xl text-ocru sm:text-4xl md:text-5xl">Românești</span>
          <span className="sr-only">{hero.titlu}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base font-medium tracking-wide text-crem sm:text-lg">
          {hero.subtitlu}
        </p>
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
