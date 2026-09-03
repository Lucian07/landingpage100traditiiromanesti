import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site-content";

export function Locatie() {
  const { locatie } = siteContent;

  return (
    <section id="locatie" className="bg-crem-dark/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 md:grid-cols-2">
        <Reveal>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">{locatie.titlu}</h2>
          <p className="mt-4 text-base text-muted-foreground">{locatie.subtitlu}</p>

          <div className="mt-8 flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-lg font-medium">
              {locatie.numeLoc}
              <span className="block text-base font-normal text-muted-foreground">
                {locatie.adresa}
              </span>
            </p>
          </div>

          <ul className="mt-5 space-y-1.5 pl-8">
            {locatie.info.map((item) => (
              <li key={item.titlu} className="text-sm">
                <span className="font-semibold text-verde">{item.titlu}: </span>
                <span className="text-muted-foreground">{item.text}</span>
              </li>
            ))}
          </ul>


          <Button asChild className="mt-8">
            <a href={locatie.linkHarta} target="_blank" rel="noopener noreferrer">
              {locatie.butonHarta}
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <iframe
            src={locatie.embedHarta}
            title="Harta locației târgului"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full rounded-lg border border-border shadow-soft"
          />
        </Reveal>
      </div>
    </section>
  );
}
