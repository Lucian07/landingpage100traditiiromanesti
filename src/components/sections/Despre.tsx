import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site-content";

export function Despre() {
  const { despre } = siteContent;

  return (
    <section id="despre" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">{despre.titlu}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {despre.paragrafe.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto max-w-sm rounded-lg border-2 border-ocru/60 p-3">
            {/* Înlocuiește cu fotografia verticală (public/despre.jpg) */}
            <img
              src={despre.imagine}
              alt={despre.imagineAlt}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-lg object-cover shadow-soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
