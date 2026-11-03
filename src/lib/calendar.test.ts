import { describe, expect, test } from "bun:test";
import { buildIcs, EVENIMENT } from "./calendar";

describe("Festivalul Plăcintelor", () => {
  test("starts on 13 November 2026 at 10:00 Bucharest time", () => {
    expect(EVENIMENT.startUtc).toBe("20261113T080000Z");
    expect(buildIcs()).toContain("DTSTART:20261113T080000Z");
  });
  test("ends each day at 18:00 Bucharest time", () => {
    expect(EVENIMENT.endUtc).toBe("20261113T160000Z");
    expect(buildIcs()).toContain("DTEND:20261113T160000Z");
  });
  test("covers 13, 14 and 15 November, with no extra days", () => {
    expect(buildIcs()).toContain("RRULE:FREQ=DAILY;COUNT=3");
  });
});