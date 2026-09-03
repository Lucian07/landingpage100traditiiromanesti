import { Baby, Hammer, Music, Palette, ShoppingBasket, Utensils, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site-content";

const icons: Record<string, LucideIcon> = {
  hammer: Hammer,
  palette: Palette,
  music: Music,
  utensils: Utensils,
  baby: Baby,
  basket: ShoppingBasket,
};

export function Atractii() {
  const { atractii } = siteContent;

  return (
    <section id="atractii" className="bg-crem-dark/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">{atractii.titlu}</h2>
          <p className="mt-4 text-base text-muted-foreground">{atractii.subtitlu}</p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {atractii.carduri.map((card, i) => {
            const Icon = icons[card.icon] ?? Hammer;
            return (
              <Reveal as="li" key={card.titlu} delay={i * 70}>
                <article className="h-full rounded-lg border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ocru hover:shadow-lift">
                  <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-xl font-semibold">{card.titlu}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.descriere}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground italic">{atractii.nota}</p>
      </div>
    </section>
  );
}
