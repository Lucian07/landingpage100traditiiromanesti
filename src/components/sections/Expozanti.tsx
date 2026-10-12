import { Store } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site-content";

export function Expozanti() {
  const { expozanti } = siteContent;
  const href = expozanti.link || "#";

  return (
    <section id="expo" className="bg-crem py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        {/* Linie aurie cu romb */}
        <div aria-hidden="true" className="mx-auto flex w-48 items-center gap-3">
          <span className="h-px flex-1 bg-ocru/70" />
          <span className="h-2 w-2 rotate-45 bg-ocru" />
          <span className="h-px flex-1 bg-ocru/70" />
        </div>

        <h2 className="section-title mt-6 text-3xl sm:text-4xl">{expozanti.titlu}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          {expozanti.text}
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-brand px-8 text-sm font-semibold text-crem shadow-soft transition-colors hover:bg-brand/90"
        >
          <Store className="h-4 w-4" aria-hidden="true" />
          {expozanti.buton}
        </a>

        <p className="eyebrow mt-4 text-[0.6rem] text-muted-foreground">
          Formularul de participare se deschide într-o fereastră nouă
        </p>
      </Reveal>
    </section>
  );
}
