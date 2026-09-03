/**
 * Generează un fișier .ics (iCalendar) pentru eveniment, ca să poată fi
 * deschis direct în aplicația de calendar instalată (Apple Calendar,
 * Google Calendar, Outlook, Samsung Calendar etc.).
 */

export const EVENIMENT = {
  titlu: "Târgul 100 de Tradiții Românești",
  locatie:
    "Curtea Muzeului Național al Țăranului Român, Str. Monetăriei nr. 3, București",
  descriere:
    "Târg de tradiții, meșteșuguri și gastronomie românească, organizat de Asociația Kogaion 115. Intrarea este liberă. Program zilnic 10:00 – 19:00.",
  url: "https://traditii-romania-landing.lovable.app/",
  /** 18–20 septembrie 2026, 10:00–19:00 ora României (UTC+3) → UTC */
  startUtc: "20260918T070000Z",
  endUtc: "20260920T160000Z",
};

function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function buildIcs(): string {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kogaion 115//Targul 100 Traditii//RO",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:targul-100-traditii-romanesti@kogaion115",
    `DTSTAMP:${stamp}`,
    `DTSTART:${EVENIMENT.startUtc}`,
    `DTEND:${EVENIMENT.endUtc}`,
    `SUMMARY:${escapeText(EVENIMENT.titlu)}`,
    `LOCATION:${escapeText(EVENIMENT.locatie)}`,
    `DESCRIPTION:${escapeText(EVENIMENT.descriere)}`,
    `URL:${EVENIMENT.url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** Data URL utilizabilă direct într-un <a download>. */
export function icsDataUrl(): string {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(buildIcs())}`;
}

/** Link către Google Calendar (variantă web, opțională). */
export function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENIMENT.titlu,
    dates: `${EVENIMENT.startUtc}/${EVENIMENT.endUtc}`,
    location: EVENIMENT.locatie,
    details: EVENIMENT.descriere,
    ctz: "Europe/Bucharest",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
