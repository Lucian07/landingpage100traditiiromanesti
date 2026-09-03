import { CalendarDays, Clock, MapPin } from "lucide-react";
import bandaFoto from "@/assets/banda-foto.jpg";

/** Ornament folcloric de colț (triunghiuri, romburi, puncte). */
function ColtOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 46 L6 6 L46 6" stroke="var(--brand)" strokeWidth="7" />
      <path d="M20 40 L20 20 L40 20" stroke="var(--ocru)" strokeWidth="3" />
      <path d="M28 28 L38 28 L33 36 Z" fill="var(--carbune)" />
      <path d="M54 10 L62 18 L54 26 L46 18 Z" fill="var(--brand)" />
      <path d="M72 12 L78 18 L72 24 L66 18 Z" fill="var(--ocru)" />
      <path d="M62 4 L68 4 L65 9 Z" fill="var(--ocru)" />
      <path d="M80 4 L86 4 L83 9 Z" fill="var(--carbune)" />
      <path d="M10 54 L18 62 L10 70 L2 62 Z" fill="var(--brand)" />
      <path d="M12 78 L18 84 L12 90 L6 84 Z" fill="var(--ocru)" />
      <circle cx="46" cy="34" r="2.6" fill="var(--carbune)" />
      <circle cx="56" cy="40" r="2.6" fill="var(--ocru)" />
      <circle cx="34" cy="52" r="2.6" fill="var(--ocru)" />
      <circle cx="40" cy="62" r="2.6" fill="var(--carbune)" />
    </svg>
  );
}

const iconiteFolclorice = [
  {
    label: "Meșteri populari",
    path: (
      <>
        <path d="M14 2 L17 9 L24 6 L21 13 L26 14 L21 15 L24 22 L17 19 L14 26 L11 19 L4 22 L7 15 L2 14 L7 13 L4 6 L11 9 Z" />
      </>
    ),
  },
  {
    label: "Produse tradiționale",
    path: <path d="M14 2 L26 14 L14 26 L2 14 Z M14 8 L20 14 L14 20 L8 14 Z" />,
  },
  {
    label: "Ateliere pentru toți",
    path: <path d="M4 4 L14 12 L24 4 L16 14 L24 24 L14 16 L4 24 L12 14 Z" />,
  },
  {
    label: "Tradiții autentice",
    path: <path d="M14 2 C18 8 18 12 14 26 C10 12 10 8 14 2 Z M14 10 L21 7 M14 15 L7 12 M14 20 L21 17" />,
  },
];

/** Link Google Calendar cu data, ora și locația evenimentului. */
const googleCalendarUrl = (() => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Târgul 100 de Tradiții Românești",
    // 18–20 septembrie 2026, 10:00–19:00 (ora României, UTC+3) în UTC
    dates: "20260918T070000Z/20260920T160000Z",
    location: "Muzeul Național al Țăranului Român, Str. Monetăriei 3, București",
    details:
      "Târg de tradiții, meșteșuguri și gastronomie românească, organizat de Asociația Kogaion 115. Intrarea este liberă. Program zilnic 10:00 – 19:00.",
    ctz: "Europe/Bucharest",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
})();

export function Hero() {

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-crem pt-20 md:h-svh"
    >
      {/* Grain subtil peste tot fundalul */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Ramă dublă: bordură roșie + linie aurie interioară */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-2 bottom-2 left-2 z-20 border-[3px] border-brand sm:right-3 sm:bottom-3 sm:left-3"
      >
        <div className="absolute inset-[6px] border border-ocru/70" />
      </div>

      {/* Ornamente în cele 4 colțuri */}
      <div aria-hidden="true" className="pointer-events-none absolute top-20 right-2 bottom-2 left-2 z-20 sm:right-3 sm:bottom-3 sm:left-3">
        <ColtOrnament className="absolute top-1 left-1 h-14 w-14 sm:h-20 sm:w-20" />
        <ColtOrnament className="absolute top-1 right-1 h-14 w-14 scale-x-[-1] sm:h-20 sm:w-20" />
        <ColtOrnament className="absolute bottom-1 left-1 h-14 w-14 scale-y-[-1] sm:h-20 sm:w-20" />
        <ColtOrnament className="absolute right-1 bottom-1 h-14 w-14 scale-[-1] sm:h-20 sm:w-20" />
      </div>

      {/* Conținut central */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-8 pt-12 pb-6 text-center sm:px-12 md:py-2">
        <h1 className="section-title text-carbune">
          <span className="block text-[clamp(2.25rem,7vw,4.5rem)] leading-[1] font-black">
            Târgul <span className="text-brand">100</span>
          </span>
          <span className="mt-1 block text-[clamp(1.15rem,3.4vw,2.25rem)] leading-tight">
            de Tradiții <span className="text-brand">Românești</span>
          </span>
          <span className="sr-only">Târgul 100 de Tradiții Românești</span>
        </h1>

        {/* Linie aurie cu romb */}
        <div aria-hidden="true" className="mt-6 flex w-full max-w-md items-center gap-3 md:mt-4">
          <span className="h-px flex-1 bg-ocru/70" />
          <span className="h-2 w-2 rotate-45 bg-ocru" />
          <span className="h-px flex-1 bg-ocru/70" />
        </div>

        {/* Data, ora și locația */}
        <div className="mt-6 flex flex-col items-center gap-5 md:mt-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-brand" aria-hidden="true" />
            <div className="text-left">
              <p className="font-serif text-2xl leading-none font-bold text-carbune sm:text-3xl">
                18–20
              </p>
              <p className="eyebrow mt-1">Septembrie</p>
            </div>
          </div>
          <span aria-hidden="true" className="hidden w-px self-stretch bg-ocru/60 md:block" />
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-brand" aria-hidden="true" />
            <div className="text-left">
              <p className="font-serif text-2xl leading-none font-bold text-carbune sm:text-3xl">
                10–19
              </p>
              <p className="eyebrow mt-1">Orele</p>
            </div>
          </div>
          <span aria-hidden="true" className="hidden w-px self-stretch bg-ocru/60 md:block" />
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-left">
              <span className="block text-sm font-semibold tracking-[0.1em] text-carbune uppercase">
                Muzeul Național al Țăranului Român
              </span>
              <span className="block text-sm text-carbune/70">Str. Monetăriei 3, București</span>
            </p>
          </div>
        </div>

        {/* „Intrarea este gratuită” — accent tipografic, nu buton */}
        <p className="mt-6 flex items-center justify-center gap-3 md:mt-4">
          <span aria-hidden="true" className="text-base text-ocru">
            ★
          </span>
          <span className="text-[0.65rem] font-semibold tracking-[0.28em] text-carbune/70 uppercase">
            Intrarea este
          </span>
          <span className="section-title text-xl text-brand sm:text-2xl">Gratuită!</span>
          <span aria-hidden="true" className="text-base text-ocru">
            ★
          </span>
        </p>


        {/* Butoane */}
        <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:flex-row md:mt-4">

          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md bg-brand px-6 text-sm font-semibold text-crem transition-colors hover:bg-brand/90"
          >
            Adaugă în calendar
          </a>
          <a
            href="#atractii"
            className="inline-flex h-11 items-center justify-center rounded-md border border-brand px-6 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-crem"
          >
            Vezi ce se întâmplă
          </a>
        </div>
      </div>

      {/* Bandă foto */}
      <div className="relative z-10 h-[132px] w-full shrink-0 md:h-[150px]">
        <img
          src={bandaFoto}
          alt="Ceramică pictată, ștergare țesute și coș de nuiele, obiecte tradiționale românești"
          width={1920}
          height={640}
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-crem via-crem/25 to-crem"
        />
      </div>

      {/* Iconițe folclorice */}
      <div className="relative z-10 shrink-0 px-10 pt-2 pb-1">
        <ul className="mx-auto grid max-w-4xl grid-cols-2 items-center gap-x-4 gap-y-3 md:flex md:justify-center md:gap-0">
          {iconiteFolclorice.map((item, i) => (
            <li key={item.label} className="flex items-center justify-center md:contents">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="mx-6 hidden h-1.5 w-1.5 rotate-45 bg-ocru md:block"
                />
              )}
              <div className="flex flex-col items-center gap-1.5 text-center">
                <svg
                  viewBox="0 0 28 28"
                  className="h-6 w-6 fill-brand stroke-brand"
                  strokeWidth="1"
                  aria-hidden="true"
                >
                  {item.path}
                </svg>
                <span className="text-[0.65rem] leading-tight font-semibold tracking-[0.18em] text-carbune uppercase">
                  {item.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bandă ondulată */}
      <div aria-hidden="true" className="relative z-10 shrink-0 px-6 pb-3">
        <svg className="h-5 w-full" viewBox="0 0 240 24" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-val" width="40" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M0 18 Q10 4 20 18 Q30 32 40 18"
                fill="none"
                stroke="var(--brand)"
                strokeWidth="2"
              />
              <path d="M20 4 L23 8 L20 12 L17 8 Z" fill="var(--ocru)" />
            </pattern>
          </defs>
          <rect width="240" height="24" fill="url(#hero-val)" />
        </svg>
      </div>
    </section>
  );
}
