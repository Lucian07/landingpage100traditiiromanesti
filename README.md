# Romanian Traditions Showcase

Construiește un landing page one-page (o singură pagină, fără rute suplimentare, navigație prin ancore cu scroll lin) pentru Târgul „100 de Tradiții Românești", un eveniment de tradiții, meșteșuguri și gastronomie românească organizat de Fundația Cogaion.

Site-ul este în limba română. Tehnologii: React + Tailwind + shadcn/ui (stack-ul implicit Lovable). Supabase pentru formularul de contact.

1. Direcție vizuală

Stil tradițional cald, autentic românesc — elegant, nu kitsch. Fără clipart, fără motive populare aplicate haotic.

Design tokens (definește-le în tailwind.config și folosește-le peste tot, nu culori hardcodate):

brand (cărămiziu profund): #9A3532— accent principal, butoane, linii

ocru (auriu cald): #C68B3C — accente secundare, hover

verde (verde pădure): #3E5C3A — accent terțiar

crem (fundal principal): #FAECD7

carbune (text): #2A241E

Tipografie: titluri cu serife — Playfair Display (Google Fonts); text curent — Inter. Titlurile mari, cu contrast, tracking-tight.

Elemente decorative: o bordură subțire cu motiv geometric românesc (romburi / linii în zigzag) desenată în SVG inline, folosită ca separator între secțiuni. Discretă, în ocru, opacitate redusă. Fără imagini raster pentru decor.

Colțuri ușor rotunjite (rounded-lg), umbre foarte discrete, mult spațiu de respirație (secțiuni cu py-20 md:py-28).

Animații subtile de tip fade-in + slide-up la intrarea în viewport (Intersection Observer), fără exagerări.

2. Structura paginii (exact aceste secțiuni, în această ordine)

A. Header fix (sticky)

Transparent peste hero, devine crem cu umbră subtilă după scroll.

Stânga: logo — folosește un placeholder /logo.png cu alt="Fundația Cogaion" și comentariu în cod că imaginea va fi înlocuită.

Centru (desktop): linkuri-ancoră — Despre · Atracții · Galerie · Locație · Contact.

Dreapta: buton principal „Vezi locația" care face scroll la secțiunea Locație.

Mobil: meniu hamburger cu drawer full-screen.

B. Hero

Imagine de fundal full-bleed (înălțime min-h-[85vh]), cu overlay gradient întunecat de jos în sus pentru lizibilitate. Placeholder: /hero.jpg — pune un comentariu clar în cod: {/* Înlocuiește cu fotografia de la ediția anterioară */}.

Titlu H1: Târgul 100 de Tradiții Românești

Subtitlu: 18–20 septembrie 2026 · Muzeul Național al Țăranului Român, București

Paragraf scurt: [ÎNLOCUIEȘTE] Trei zile de meșteșuguri vii, muzică, gust și povești din toate zonele țării.

Două butoane: „Vezi atracțiile" (primar, brand) și „Cum ajungi" (secundar, outline).

Un rând discret cu 3 micro-informații sub butoane, cu iconițe lucide: calendar → „18–20 septembrie", pin → „Str. Monetăriei 3, București", ceas → [ÎNLOCUIEȘTE] 10:00 – 20:00.

C. Despre târg (scurt, 2 coloane)

Stânga: titlu „Un târg cu rădăcini" + 2 paragrafe placeholder marcate [ÎNLOCUIEȘTE] despre eveniment și Fundația Cogaion.

Dreapta: o singură fotografie verticală, placeholder /despre.jpg, cu o ramă subțire în ocru.

D. Atracții principale

Titlu de secțiune + subtitlu scurt.

Grilă de 6 carduri (1 coloană mobil / 2 tablet / 3 desktop). Fiecare card: iconiță lucide sus, titlu, 2 rânduri de descriere. Hover: ridicare ușoară + bordură ocru.

Conținut șablon (de înlocuit ulterior de client — marchează fiecare descriere cu [ÎNLOCUIEȘTE]):

Meșteșugari la lucru — olari, țesătoare, cojocari și fierari care lucrează în fața publicului.

Ateliere pentru toți — sesiuni practice de olărit, încondeiat și țesut, pentru copii și adulți.

Muzică și dans popular — spectacole live cu ansambluri folclorice din mai multe zone etnografice.

Gastronomie tradițională — bucate gătite pe loc, după rețete de familie, din produse locale.

Zona copiilor — jocuri de altădată, povești și activități creative supravegheate.

Produse de la producători — miere, brânzeturi, țuică, textile și obiecte lucrate manual, direct de la producători.

Sub grilă, o notă discretă: [ÎNLOCUIEȘTE] Programul detaliat pe zile va fi anunțat curând.

E. Galerie foto

Titlu „Din edițiile trecute".

Grilă masonry-like din 8 imagini, placeholdere /galerie-1.jpg … /galerie-8.jpg, fiecare cu alt descriptiv și loading="lazy".

Click pe imagine → lightbox simplu (dialog shadcn) cu navigare stânga/dreapta și închidere pe Escape.

Foarte important: structurează codul astfel încât imaginile să vină dintr-un singur array const galleryImages = [{ src, alt }, ...] definit la începutul componentei, ca să pot înlocui ușor toate imaginile într-un singur loc. Adaugă un comentariu care explică asta.

F. Locație + Google Maps

Layout în 2 coloane pe desktop, stivuit pe mobil.

Stânga: adresa completă — Muzeul Național al Țăranului Român, Str. Monetăriei 3, Sector 1, București — plus 3 blocuri scurte de info practică: „Cu metroul: stația Piața Victoriei", „Cu autobuzul: [ÎNLOCUIEȘTE]", „Parcare: [ÎNLOCUIEȘTE]". Buton „Deschide în Google Maps" care duce la https://www.google.com/maps/search/?api=1&query=Muzeul+National+al+Taranului+Roman+Strada+Monetariei+3+Bucuresti (target="_blank", rel="noopener noreferrer").

Dreapta: hartă Google Maps încorporată printr-un <iframe> responsive (aspect-ratio 4/3, rounded-lg, loading="lazy", referrerPolicy="no-referrer-when-downgrade", title="Harta locației târgului"), folosind embed-ul public fără cheie API: https://www.google.com/maps?q=Muzeul%20National%20al%20Taranului%20Roman%2C%20Strada%20Monetariei%203%2C%20Bucuresti&output=embed

G. Formular de contact

Titlu „Ai o întrebare?" + subtitlu scurt.

Conectează proiectul la Supabase și creează tabelul:

sql

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nume text not null,
  email text not null,
  telefon text,
  subiect text,
  mesaj text not null
);

alter table public.contact_messages enable row level security;

-- oricine poate trimite un mesaj, nimeni nu poate citi din client
create policy "public can insert messages"
  on public.contact_messages for insert
  to anon
  with check (true);

Câmpuri formular: Nume (obligatoriu), Email (obligatoriu, validat), Telefon (opțional), Subiect (select: Informații generale · Participare ca expozant · Colaborare / presă · Altele), Mesaj (textarea, obligatoriu, min. 10 caractere).

Validare cu react-hook-form + zod, mesaje de eroare în română, sub fiecare câmp.

La submit: buton cu stare de loading, apoi mesaj de succes inline („Mulțumim! Revenim cu un răspuns în cel mai scurt timp.") și resetarea formularului. La eroare, un toast cu mesaj clar.

Protecție anti-spam simplă: câmp honeypot ascuns (website) — dacă e completat, nu se trimite nimic.

Lângă formular, o coloană cu date de contact directe: email [ÎNLOCUIEȘTE], telefon [ÎNLOCUIEȘTE] și linkuri către Facebook, Instagram și TikTok (iconițe lucide, [ÎNLOCUIEȘTE] la URL-uri).

H. Footer

Fundal carbune, text crem. Logo mic, numele fundației, un rând de linkuri-ancoră, iconițele de social media, copyright „© 2026 Fundația Cogaion".

3. Cerințe tehnice

O singură pagină. Fără React Router cu rute multiple, fără pagini separate. Navigația se face doar prin ancore cu scroll-behavior: smooth și offset pentru header-ul sticky.

Mobile-first, testat de la 360px în sus. Fără scroll orizontal pe nicio lățime.

Accesibilitate: contrast suficient pentru text, alt pe toate imaginile, focus vizibil pe elementele interactive, structură corectă de heading-uri (un singur H1), iframe cu title.

Performanță: imagini loading="lazy" (mai puțin hero), fără librării de animație grele.

SEO: <title> = „Târgul 100 de Tradiții Românești · 18–20 septembrie 2026, București", meta description relevantă, Open Graph (og:title, og:description, og:image → /hero.jpg), lang="ro" pe <html>, plus JSON-LD de tip Event cu numele, datele și locația evenimentului.

Structura codului: fiecare secțiune într-o componentă separată în src/components/sections/, iar toate textele editabile grupate într-un fișier src/content/site-content.ts, ca să pot schimba conținutul dintr-un singur loc fără să umblu prin componente.

Toate imaginile sunt placeholdere pe care le voi înlocui eu ulterior — folosește nume de fișiere clare (hero.jpg, despre.jpg, galerie-1.jpg …) și pune comentarii în cod acolo unde trebuie înlocuite.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://landingpage100traditiiromanesti.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/797168c8-669a-430c-b1da-333cd8d2c704).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
