import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { buildIcs, EVENIMENT } from "./calendar";

describe("Festivalul Plăcintelor", () => {
  test("starts on 13 November 2026 at 10:00 Bucharest time", () => {
    assert.equal(EVENIMENT.startUtc, "20261113T080000Z");
    assert.ok(buildIcs().includes("DTSTART:20261113T080000Z"));
  });
  test("ends each day at 18:00 Bucharest time", () => {
    assert.equal(EVENIMENT.endUtc, "20261113T160000Z");
    assert.ok(buildIcs().includes("DTEND:20261113T160000Z"));
  });
  test("covers 13, 14 and 15 November, with no extra days", () => {
    assert.ok(buildIcs().includes("RRULE:FREQ=DAILY;COUNT=3"));
  });
});