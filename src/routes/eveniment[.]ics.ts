import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildIcs } from "@/lib/calendar";

export const Route = createFileRoute("/eveniment.ics")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(buildIcs(), {
          headers: {
            "Content-Type": "text/calendar; charset=utf-8; method=PUBLISH",
            "Content-Disposition":
              'attachment; filename="targul-100-traditii-romanesti.ics"',
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
