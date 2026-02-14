import { describe, it, expect } from "vitest";
import {
  locales,
  localeCodes,
  defaultLocale,
  rtlLocales,
  getLocaleConfig,
  getLocaleDirection,
  getLocalesByRegion,
} from "./locales";

describe("locales", () => {
  it("exports a non-empty array of locale configs", () => {
    expect(locales.length).toBeGreaterThan(0);
  });

  it("has unique locale codes", () => {
    const unique = new Set(localeCodes);
    expect(unique.size).toBe(localeCodes.length);
  });

  it("uses 'en' as the default locale", () => {
    expect(defaultLocale).toBe("en");
  });

  it("includes 'en' in the locale codes", () => {
    expect(localeCodes).toContain("en");
  });

  it("every locale has all required fields", () => {
    for (const locale of locales) {
      expect(locale.code).toBeTruthy();
      expect(locale.nativeName).toBeTruthy();
      expect(locale.englishName).toBeTruthy();
      expect(["ltr", "rtl"]).toContain(locale.dir);
      expect([
        "europe",
        "asia",
        "middle-east",
        "africa",
        "americas",
        "oceania",
      ]).toContain(locale.region);
      expect(typeof locale.translationComplete).toBe("boolean");
    }
  });
});

describe("rtlLocales", () => {
  it("contains Arabic (ar)", () => {
    expect(rtlLocales).toContain("ar");
  });

  it("contains Hebrew (he)", () => {
    expect(rtlLocales).toContain("he");
  });

  it("only contains locales marked as RTL", () => {
    for (const code of rtlLocales) {
      const config = getLocaleConfig(code);
      expect(config?.dir).toBe("rtl");
    }
  });
});

describe("getLocaleConfig", () => {
  it("returns config for a valid locale", () => {
    const config = getLocaleConfig("en");
    expect(config).toBeDefined();
    expect(config?.englishName).toBe("English");
    expect(config?.dir).toBe("ltr");
  });

  it("returns config for German locale", () => {
    const config = getLocaleConfig("de");
    expect(config).toBeDefined();
    expect(config?.nativeName).toBe("Deutsch");
  });

  it("returns undefined for an unknown locale", () => {
    expect(getLocaleConfig("xyz")).toBeUndefined();
  });
});

describe("getLocaleDirection", () => {
  it("returns 'ltr' for English", () => {
    expect(getLocaleDirection("en")).toBe("ltr");
  });

  it("returns 'rtl' for Arabic", () => {
    expect(getLocaleDirection("ar")).toBe("rtl");
  });

  it("defaults to 'ltr' for unknown locale", () => {
    expect(getLocaleDirection("xyz")).toBe("ltr");
  });
});

describe("getLocalesByRegion", () => {
  it("returns a non-empty grouped object", () => {
    const grouped = getLocalesByRegion();
    const keys = Object.keys(grouped);
    expect(keys.length).toBeGreaterThan(0);
  });

  it("groups locales under known region labels", () => {
    const grouped = getLocalesByRegion();
    const validLabels = [
      "Europe",
      "Asia",
      "Middle East",
      "Africa",
      "Americas",
      "Oceania",
    ];
    for (const key of Object.keys(grouped)) {
      expect(validLabels).toContain(key);
    }
  });

  it("every locale appears in exactly one region group", () => {
    const grouped = getLocalesByRegion();
    const allGroupedCodes = Object.values(grouped).flatMap((items) =>
      items.map((l) => l.code),
    );
    expect(allGroupedCodes.length).toBe(locales.length);
    expect(new Set(allGroupedCodes).size).toBe(locales.length);
  });
});
