/**
 * Generează un fișier .ics (iCalendar) pentru eveniment, ca să poată fi
 * deschis direct în aplicația de calendar instalată (Apple Calendar,
 * Google Calendar, Outlook, Samsung Calendar etc.).
 */

export const EVENIMENT = {
  titlu: "Târg de Sfântul Andrei · Târgul 100 de Tradiții Românești",
  locatie:
    "Curtea Muzeului Național al Țăranului Român, Str. Monetăriei nr. 3, București",
  descriere:
    "Târg de Sfântul Andrei, 27–29 noiembrie 2026, organizat de Asociația Kogaion 115. Meșteșuguri, tradiții și gastronomie românească. Intrarea este liberă. Program zilnic 10:00 – 18:00.",
  url: "https://targul100detraditiiromanesti.ro/",
  /** 27 noiembrie 2026, 10:00–18:00 în București (UTC+2), repetat trei zile. */
  startUtc: "20261127T080000Z",
  endUtc: "20261127T160000Z",
};

export const CALENDAR_HREF = "/eveniment.ics?v=20261127";

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
    "UID:targ-sfantul-andrei-2026-11-27@kogaion115",
    `DTSTAMP:${stamp}`,
    `DTSTART:${EVENIMENT.startUtc}`,
    `DTEND:${EVENIMENT.endUtc}`,
    "RRULE:FREQ=DAILY;COUNT=3",
    `SUMMARY:${escapeText(EVENIMENT.titlu)}`,
    `LOCATION:${escapeText(EVENIMENT.locatie)}`,
    `DESCRIPTION:${escapeText(EVENIMENT.descriere)}`,
    "SEQUENCE:0",
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
