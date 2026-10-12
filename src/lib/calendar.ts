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
    "Târg de tradiții, meșteșuguri și gastronomie românească, organizat de Asociația Kogaion 115. Intrarea este liberă. Program zilnic 10:00 – 18:00.",
  url: "https://targul100detraditiiromanesti.ro/",
  /** 31 octombrie 2026, 10:00–18:00 ora României (UTC+2, ora de iarnă) → UTC */
  startUtc: "20261031T080000Z",
  endUtc: "20261031T160000Z",
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
    "UID:targul-100-traditii-2026-10-31@kogaion115",
    `DTSTAMP:${stamp}`,
    `DTSTART:${EVENIMENT.startUtc}`,
    `DTEND:${EVENIMENT.endUtc}`,
    `SUMMARY:${escapeText(EVENIMENT.titlu)}`,
    `LOCATION:${escapeText(EVENIMENT.locatie)}`,
    `DESCRIPTION:${escapeText(EVENIMENT.descriere)}`,
    "SEQUENCE:2",
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
