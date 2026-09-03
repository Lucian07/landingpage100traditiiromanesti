/**
 * TOATE textele editabile ale site-ului sunt aici.
 * Modifică doar acest fișier ca să schimbi conținutul paginii —
 * componentele din src/components/sections/ citesc de aici.
 */

import logoAsset from "@/assets/logo.png.asset.json";
import despreAsset from "@/assets/despre.png.asset.json";

export const siteContent = {
  brand: {
    numeEveniment: "Târgul 100 de Tradiții Românești",
    fundatie: "Asociația Kogaion 115",
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
      "Trei zile de meșteșuguri vii, muzică, gust și povești din toate zonele țării.",
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
      "Aici am nevoie de instrucțiuni de la doamna Ligia Marica despre istoria Târgului.",
    ],
    imagine: despreAsset.url,
    imagineAlt:
      "Stand tradițional „Mustărie” cu butoaie pictate, ștergare brodate, teasc de struguri și coșuri de nuiele",
  },


  atractii: {
    titlu: "Atracții principale",
    subtitlu: "Ce te așteaptă în cele trei zile de târg.",
    nota: "Programul detaliat pe zile va fi anunțat curând.",
    // `icon` corespunde unei iconițe lucide mapate în componenta Atractii
    carduri: [
      {
        icon: "hammer",
        titlu: "Meșteșugari la lucru",
        descriere: "Olari, țesătoare, cojocari și fierari care lucrează în fața publicului.",
      },
      {
        icon: "utensils",
        titlu: "Gastronomie tradițională",
        descriere: "Bucate gătite pe loc, după rețete de familie, din produse locale.",
      },
      {
        icon: "basket",
        titlu: "Produse de la producători",
        descriere:
          "Miere, brânzeturi, țuică, textile și obiecte lucrate manual, direct de la producători.",
      },
    ],

  },

  galerie: {
    titlu: "Din edițiile trecute",
    subtitlu: "Imagini de la edițiile anterioare ale târgului.",
  },

  locatie: {
    titlu: "Locație",
    subtitlu: "Te așteptăm în inima Bucureștiului.",
    numeLoc: "Curtea Muzeului Național al Țăranului Român",
    adresa: "Sector 1, București",
    info: [
      { titlu: "Intrarea 1", text: "Str. Monetăriei nr. 3" },
      { titlu: "Intrarea 2", text: "Bd. Ion Mihalache" },
      { titlu: "Intrarea 3", text: "Șos. Kiseleff nr. 3" },
      { titlu: "Program", text: "18 – 20 septembrie · 10:00 – 19:00" },
      { titlu: "Acces", text: "Intrarea este LIBERĂ!" },
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
      telefon: "+40 700 000 000",
    },
    // URL-urile rețelelor sociale
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
    copyright: "© 2026 Asociația Kogaion 115",
  },
};

export type SiteContent = typeof siteContent;
