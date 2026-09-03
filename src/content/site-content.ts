/**
 * TOATE textele editabile ale site-ului sunt aici.
 * Modifică doar acest fișier ca să schimbi conținutul paginii —
 * componentele din src/components/sections/ citesc de aici.
 */

import logoAsset from "@/assets/logo.png.asset.json";

export const siteContent = {
  brand: {
    numeEveniment: "Târgul 100 de Tradiții Românești",
    fundatie: "Fundația Cogaion",
    logo: logoAsset.url,
    logoAlt: "Târgul 100 de Tradiții Românești",
  },

  nav: [
    { label: "Despre", href: "#despre" },
    { label: "Atracții", href: "#atractii" },
    { label: "Galerie", href: "#galerie" },
    { label: "Locație", href: "#locatie" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    // Înlocuiește cu fotografia de la ediția anterioară (public/hero.jpg)
    imagine: "/hero.jpg",
    imagineAlt: "Meșteșugari și vizitatori la Târgul 100 de Tradiții Românești",
    titlu: "Târgul 100 de Tradiții Românești",
    subtitlu: "18–20 septembrie 2026 · Muzeul Național al Țăranului Român, București",
    paragraf:
      "[ÎNLOCUIEȘTE] Trei zile de meșteșuguri vii, muzică, gust și povești din toate zonele țării.",
    butonPrimar: "Vezi atracțiile",
    butonSecundar: "Cum ajungi",
    micro: {
      data: "18–20 septembrie",
      adresa: "În curtea Muzeului Național al Țăranului Român, Str. Monetăriei 3, București",
      program: "10:00 – 19:00",
    },
  },

  despre: {
    titlu: "Un târg cu rădăcini",
    paragrafe: [
      "[ÎNLOCUIEȘTE] Descrie aici povestea târgului: cum a apărut, ce își propune și de ce contează pentru meșteșugarii și comunitățile din care vin.",
      "[ÎNLOCUIEȘTE] Descrie aici Fundația Cogaion: misiunea, proiectele culturale și felul în care sprijină păstrarea tradițiilor românești.",
    ],
    // Înlocuiește cu o fotografie verticală (public/despre.jpg)
    imagine: "/despre.jpg",
    imagineAlt: "Meșteșugar lucrând la roata olarului în timpul târgului",
  },

  atractii: {
    titlu: "Atracții principale",
    subtitlu: "Ce te așteaptă în cele trei zile de târg.",
    nota: "[ÎNLOCUIEȘTE] Programul detaliat pe zile va fi anunțat curând.",
    // `icon` corespunde unei iconițe lucide mapate în componenta Atractii
    carduri: [
      {
        icon: "hammer",
        titlu: "Meșteșugari la lucru",
        descriere:
          "[ÎNLOCUIEȘTE] Olari, țesătoare, cojocari și fierari care lucrează în fața publicului.",
      },
      {
        icon: "palette",
        titlu: "Ateliere pentru toți",
        descriere:
          "[ÎNLOCUIEȘTE] Sesiuni practice de olărit, încondeiat și țesut, pentru copii și adulți.",
      },
      {
        icon: "music",
        titlu: "Muzică și dans popular",
        descriere:
          "[ÎNLOCUIEȘTE] Spectacole live cu ansambluri folclorice din mai multe zone etnografice.",
      },
      {
        icon: "utensils",
        titlu: "Gastronomie tradițională",
        descriere:
          "[ÎNLOCUIEȘTE] Bucate gătite pe loc, după rețete de familie, din produse locale.",
      },
      {
        icon: "baby",
        titlu: "Zona copiilor",
        descriere:
          "[ÎNLOCUIEȘTE] Jocuri de altădată, povești și activități creative supravegheate.",
      },
      {
        icon: "basket",
        titlu: "Produse de la producători",
        descriere:
          "[ÎNLOCUIEȘTE] Miere, brânzeturi, țuică, textile și obiecte lucrate manual, direct de la producători.",
      },
    ],
  },

  galerie: {
    titlu: "Din edițiile trecute",
    subtitlu: "[ÎNLOCUIEȘTE] Imagini de la edițiile anterioare ale târgului.",
  },

  locatie: {
    titlu: "Locație",
    subtitlu: "Te așteptăm în inima Bucureștiului.",
    numeLoc: "În curtea Muzeului Național al Țăranului Român",
    adresa: "Str. Monetăriei 3, Sector 1, București · 10:00 – 19:00",
    info: [
      { titlu: "Cu metroul", text: "Stația Piața Victoriei" },
      { titlu: "Cu autobuzul", text: "[ÎNLOCUIEȘTE]" },
      { titlu: "Parcare", text: "[ÎNLOCUIEȘTE]" },
    ],
    butonHarta: "Deschide în Google Maps",
    linkHarta:
      "https://www.google.com/maps/search/?api=1&query=Muzeul+National+al+Taranului+Roman+Strada+Monetariei+3+Bucuresti",
    embedHarta:
      "https://www.google.com/maps?q=Muzeul%20National%20al%20Taranului%20Roman%2C%20Strada%20Monetariei%203%2C%20Bucuresti&output=embed",
  },

  contact: {
    titlu: "Ai o întrebare?",
    subtitlu: "Scrie-ne și revenim cu un răspuns cât mai repede.",
    succes: "Mulțumim! Revenim cu un răspuns în cel mai scurt timp.",
    dateContact: {
      titlu: "Date de contact",
      email: "[ÎNLOCUIEȘTE]@cogaion.ro",
      telefon: "[ÎNLOCUIEȘTE] +40 700 000 000",
    },
    // [ÎNLOCUIEȘTE] URL-urile rețelelor sociale
    social: [
      { retea: "facebook" as const, label: "Facebook", url: "[ÎNLOCUIEȘTE]" },
      { retea: "instagram" as const, label: "Instagram", url: "[ÎNLOCUIEȘTE]" },
      { retea: "tiktok" as const, label: "TikTok", url: "[ÎNLOCUIEȘTE]" },
    ],
    subiecte: [
      "Informații generale",
      "Participare ca expozant",
      "Colaborare / presă",
      "Altele",
    ],
  },

  footer: {
    copyright: "© 2026 Fundația Cogaion",
  },
};

export type SiteContent = typeof siteContent;
