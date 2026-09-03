import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site-content";
import tesatoareAsset from "@/assets/galerie-tesatoare.jpg.asset.json";
import bucateAsset from "@/assets/galerie-bucate.jpg.asset.json";
import iiAsset from "@/assets/galerie-ii.jpg.asset.json";
import bucate2Asset from "@/assets/galerie-bucate2.jpg.asset.json";

/**
 * TOATE imaginile galeriei sunt definite aici, într-un singur array.
 * Ca să schimbi galeria, înlocuiește doar `src` și `alt` mai jos
 * (fișierele stau în folderul public/: galerie-1.jpg … galerie-8.jpg).
 */
const galleryImages = [
  { src: iiAsset.url, alt: "Ii tradiționale românești" },
  { src: tesatoareAsset.url, alt: "Țesătoare lucrând la război de țesut" },
  { src: bucate2Asset.url, alt: "Bucate tradiționale" },
  { src: bucateAsset.url, alt: "Bucate tradiționale" },
  { src: "/galerie-5.jpg", alt: "Copii participând la un atelier de încondeiat ouă" },
  { src: "/galerie-6.jpg", alt: "Stand cu textile și cusături tradiționale" },
  { src: "/galerie-7.jpg", alt: "Fierar lucrând la nicovală în fața publicului" },
  { src: "/galerie-8.jpg", alt: "Vizitatori plimbându-se printre standurile târgului" },
];

export function Galerie() {
  const [index, setIndex] = useState<number | null>(null);

  const go = useCallback((dir: number) => {
    setIndex((current) =>
      current === null ? current : (current + dir + galleryImages.length) % galleryImages.length,
    );
  }, []);

  const activ = index === null ? null : galleryImages[index];

  return (
    <section id="galerie" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            {siteContent.galerie.titlu}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">{siteContent.galerie.subtitlu}</p>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className="block w-full break-inside-avoid overflow-hidden rounded-lg border border-border shadow-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 hover:scale-[1.03] ${
                  i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="max-w-4xl border-none bg-carbune p-2 sm:p-4">
          <DialogTitle className="sr-only">{activ?.alt ?? "Imagine din galerie"}</DialogTitle>
          {activ && (
            <div className="relative">
              <img src={activ.src} alt={activ.alt} className="max-h-[75vh] w-full object-contain" />
              <button
                type="button"
                aria-label="Imaginea anterioară"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-lg bg-crem/85 p-2 text-carbune hover:bg-crem"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Imaginea următoare"
                onClick={() => go(1)}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-lg bg-crem/85 p-2 text-carbune hover:bg-crem"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <p className="mt-3 text-center text-sm text-crem/80">{activ.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
