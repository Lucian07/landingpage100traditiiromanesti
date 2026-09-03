# Adăugare în calendarul propriu (fișier .ics)

Da, se poate. În loc să deschidă site-ul Google Calendar, butonul va descărca un fișier standard de eveniment (.ics). Telefonul sau calculatorul îl deschide automat în aplicația de calendar instalată: Apple Calendar pe iPhone/Mac, Google Calendar sau Samsung Calendar pe Android, Outlook pe Windows.

## Ce se schimbă

- Butonul „Adaugă în calendar” (hero + header) descarcă direct evenimentul.
- Evenimentul conține: titlul „Târgul 100 de Tradiții Românești”, 18–20 septembrie, 10:00–19:00 (fus orar București), locația „Curtea Muzeului Național al Țăranului Român, Str. Monetăriei nr. 3, București”, o scurtă descriere și link către site.
- Opțional, sub buton apare un link mic „Google Calendar” pentru cine folosește varianta web.

## Detalii tehnice

- Fișier nou `src/lib/calendar.ts` care generează conținutul iCalendar (VCALENDAR/VEVENT cu UID, DTSTAMP, DTSTART/DTEND în `Europe/Bucharest`, SUMMARY, LOCATION, DESCRIPTION, URL) și creează un `Blob` cu `text/calendar` plus un obiect URL pentru descărcare.
- În `src/components/sections/Hero.tsx` (și în header, dacă butonul apare și acolo) se înlocuiește `googleCalendarUrl` cu un `<a download="targul-100-traditii.ics">` care folosește URL-ul generat; generarea se face după hidratare, ca să nu apară diferențe între server și browser.
- Eventualul link secundar către Google Calendar păstrează URL-ul actual.
