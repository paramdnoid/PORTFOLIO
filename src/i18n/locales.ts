import type { LocaleConfig } from "@/types";

/**
 * Complete list of all ~184 ISO 639-1 locales supported by this application.
 * Each locale has metadata for native name, direction (LTR/RTL), and region.
 */
export const locales: LocaleConfig[] = [
  // ─── Europe ────────────────────────────────────────────────────────────────
  { code: "af", nativeName: "Afrikaans", englishName: "Afrikaans", dir: "ltr", region: "europe", translationComplete: false },
  { code: "sq", nativeName: "Shqip", englishName: "Albanian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "eu", nativeName: "Euskara", englishName: "Basque", dir: "ltr", region: "europe", translationComplete: false },
  { code: "be", nativeName: "Беларуская", englishName: "Belarusian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "bs", nativeName: "Bosanski", englishName: "Bosnian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "br", nativeName: "Brezhoneg", englishName: "Breton", dir: "ltr", region: "europe", translationComplete: false },
  { code: "bg", nativeName: "Български", englishName: "Bulgarian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "ca", nativeName: "Català", englishName: "Catalan", dir: "ltr", region: "europe", translationComplete: false },
  { code: "co", nativeName: "Corsu", englishName: "Corsican", dir: "ltr", region: "europe", translationComplete: false },
  { code: "hr", nativeName: "Hrvatski", englishName: "Croatian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "cs", nativeName: "Čeština", englishName: "Czech", dir: "ltr", region: "europe", translationComplete: false },
  { code: "da", nativeName: "Dansk", englishName: "Danish", dir: "ltr", region: "europe", translationComplete: false },
  { code: "nl", nativeName: "Nederlands", englishName: "Dutch", dir: "ltr", region: "europe", translationComplete: false },
  { code: "en", nativeName: "English", englishName: "English", dir: "ltr", region: "europe", translationComplete: true },
  { code: "eo", nativeName: "Esperanto", englishName: "Esperanto", dir: "ltr", region: "europe", translationComplete: false },
  { code: "et", nativeName: "Eesti", englishName: "Estonian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "fo", nativeName: "Føroyskt", englishName: "Faroese", dir: "ltr", region: "europe", translationComplete: false },
  { code: "fi", nativeName: "Suomi", englishName: "Finnish", dir: "ltr", region: "europe", translationComplete: false },
  { code: "fr", nativeName: "Français", englishName: "French", dir: "ltr", region: "europe", translationComplete: false },
  { code: "fy", nativeName: "Frysk", englishName: "Western Frisian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "gl", nativeName: "Galego", englishName: "Galician", dir: "ltr", region: "europe", translationComplete: false },
  { code: "ka", nativeName: "ქართული", englishName: "Georgian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "de", nativeName: "Deutsch", englishName: "German", dir: "ltr", region: "europe", translationComplete: true },
  { code: "el", nativeName: "Ελληνικά", englishName: "Greek", dir: "ltr", region: "europe", translationComplete: false },
  { code: "hu", nativeName: "Magyar", englishName: "Hungarian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "is", nativeName: "Íslenska", englishName: "Icelandic", dir: "ltr", region: "europe", translationComplete: false },
  { code: "ga", nativeName: "Gaeilge", englishName: "Irish", dir: "ltr", region: "europe", translationComplete: false },
  { code: "it", nativeName: "Italiano", englishName: "Italian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "la", nativeName: "Latina", englishName: "Latin", dir: "ltr", region: "europe", translationComplete: false },
  { code: "lv", nativeName: "Latviešu", englishName: "Latvian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "lt", nativeName: "Lietuvių", englishName: "Lithuanian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "lb", nativeName: "Lëtzebuergesch", englishName: "Luxembourgish", dir: "ltr", region: "europe", translationComplete: false },
  { code: "mk", nativeName: "Македонски", englishName: "Macedonian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "mt", nativeName: "Malti", englishName: "Maltese", dir: "ltr", region: "europe", translationComplete: false },
  { code: "no", nativeName: "Norsk", englishName: "Norwegian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "nn", nativeName: "Nynorsk", englishName: "Norwegian Nynorsk", dir: "ltr", region: "europe", translationComplete: false },
  { code: "oc", nativeName: "Occitan", englishName: "Occitan", dir: "ltr", region: "europe", translationComplete: false },
  { code: "pl", nativeName: "Polski", englishName: "Polish", dir: "ltr", region: "europe", translationComplete: false },
  { code: "pt", nativeName: "Português", englishName: "Portuguese", dir: "ltr", region: "europe", translationComplete: false },
  { code: "ro", nativeName: "Română", englishName: "Romanian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "rm", nativeName: "Rumantsch", englishName: "Romansh", dir: "ltr", region: "europe", translationComplete: false },
  { code: "ru", nativeName: "Русский", englishName: "Russian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "gd", nativeName: "Gàidhlig", englishName: "Scottish Gaelic", dir: "ltr", region: "europe", translationComplete: false },
  { code: "sr", nativeName: "Српски", englishName: "Serbian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "sk", nativeName: "Slovenčina", englishName: "Slovak", dir: "ltr", region: "europe", translationComplete: false },
  { code: "sl", nativeName: "Slovenščina", englishName: "Slovenian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "es", nativeName: "Español", englishName: "Spanish", dir: "ltr", region: "europe", translationComplete: false },
  { code: "sv", nativeName: "Svenska", englishName: "Swedish", dir: "ltr", region: "europe", translationComplete: false },
  { code: "uk", nativeName: "Українська", englishName: "Ukrainian", dir: "ltr", region: "europe", translationComplete: false },
  { code: "cy", nativeName: "Cymraeg", englishName: "Welsh", dir: "ltr", region: "europe", translationComplete: false },

  // ─── Asia ──────────────────────────────────────────────────────────────────
  { code: "az", nativeName: "Azərbaycan", englishName: "Azerbaijani", dir: "ltr", region: "asia", translationComplete: false },
  { code: "bn", nativeName: "বাংলা", englishName: "Bengali", dir: "ltr", region: "asia", translationComplete: false },
  { code: "my", nativeName: "မြန်မာ", englishName: "Burmese", dir: "ltr", region: "asia", translationComplete: false },
  { code: "zh", nativeName: "中文", englishName: "Chinese", dir: "ltr", region: "asia", translationComplete: false },
  { code: "gu", nativeName: "ગુજરાતી", englishName: "Gujarati", dir: "ltr", region: "asia", translationComplete: false },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi", dir: "ltr", region: "asia", translationComplete: false },
  { code: "hy", nativeName: "Հայերեն", englishName: "Armenian", dir: "ltr", region: "asia", translationComplete: false },
  { code: "id", nativeName: "Bahasa Indonesia", englishName: "Indonesian", dir: "ltr", region: "asia", translationComplete: false },
  { code: "ja", nativeName: "日本語", englishName: "Japanese", dir: "ltr", region: "asia", translationComplete: false },
  { code: "jv", nativeName: "Jawa", englishName: "Javanese", dir: "ltr", region: "asia", translationComplete: false },
  { code: "kn", nativeName: "ಕನ್ನಡ", englishName: "Kannada", dir: "ltr", region: "asia", translationComplete: false },
  { code: "kk", nativeName: "Қазақ", englishName: "Kazakh", dir: "ltr", region: "asia", translationComplete: false },
  { code: "km", nativeName: "ខ្មែរ", englishName: "Khmer", dir: "ltr", region: "asia", translationComplete: false },
  { code: "ko", nativeName: "한국어", englishName: "Korean", dir: "ltr", region: "asia", translationComplete: false },
  { code: "ky", nativeName: "Кыргызча", englishName: "Kyrgyz", dir: "ltr", region: "asia", translationComplete: false },
  { code: "lo", nativeName: "ລາວ", englishName: "Lao", dir: "ltr", region: "asia", translationComplete: false },
  { code: "ml", nativeName: "മലയാളം", englishName: "Malayalam", dir: "ltr", region: "asia", translationComplete: false },
  { code: "ms", nativeName: "Bahasa Melayu", englishName: "Malay", dir: "ltr", region: "asia", translationComplete: false },
  { code: "mn", nativeName: "Монгол", englishName: "Mongolian", dir: "ltr", region: "asia", translationComplete: false },
  { code: "mr", nativeName: "मराठी", englishName: "Marathi", dir: "ltr", region: "asia", translationComplete: false },
  { code: "ne", nativeName: "नेपाली", englishName: "Nepali", dir: "ltr", region: "asia", translationComplete: false },
  { code: "or", nativeName: "ଓଡ଼ିଆ", englishName: "Odia", dir: "ltr", region: "asia", translationComplete: false },
  { code: "pa", nativeName: "ਪੰਜਾਬੀ", englishName: "Punjabi", dir: "ltr", region: "asia", translationComplete: false },
  { code: "si", nativeName: "සිංහල", englishName: "Sinhala", dir: "ltr", region: "asia", translationComplete: false },
  { code: "su", nativeName: "Sunda", englishName: "Sundanese", dir: "ltr", region: "asia", translationComplete: false },
  { code: "tg", nativeName: "Тоҷикӣ", englishName: "Tajik", dir: "ltr", region: "asia", translationComplete: false },
  { code: "ta", nativeName: "தமிழ்", englishName: "Tamil", dir: "ltr", region: "asia", translationComplete: false },
  { code: "te", nativeName: "తెలుగు", englishName: "Telugu", dir: "ltr", region: "asia", translationComplete: false },
  { code: "th", nativeName: "ไทย", englishName: "Thai", dir: "ltr", region: "asia", translationComplete: false },
  { code: "tl", nativeName: "Filipino", englishName: "Filipino", dir: "ltr", region: "asia", translationComplete: false },
  { code: "tr", nativeName: "Türkçe", englishName: "Turkish", dir: "ltr", region: "asia", translationComplete: false },
  { code: "tk", nativeName: "Türkmen", englishName: "Turkmen", dir: "ltr", region: "asia", translationComplete: false },
  { code: "uz", nativeName: "Oʻzbek", englishName: "Uzbek", dir: "ltr", region: "asia", translationComplete: false },
  { code: "vi", nativeName: "Tiếng Việt", englishName: "Vietnamese", dir: "ltr", region: "asia", translationComplete: false },

  // ─── Middle East (RTL) ─────────────────────────────────────────────────────
  { code: "ar", nativeName: "العربية", englishName: "Arabic", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "fa", nativeName: "فارسی", englishName: "Persian", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "he", nativeName: "עברית", englishName: "Hebrew", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "ku", nativeName: "Kurdî", englishName: "Kurdish", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "ps", nativeName: "پښتو", englishName: "Pashto", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "sd", nativeName: "سنڌي", englishName: "Sindhi", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "ur", nativeName: "اردو", englishName: "Urdu", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "ug", nativeName: "ئۇيغۇرچە", englishName: "Uyghur", dir: "rtl", region: "middle-east", translationComplete: false },
  { code: "yi", nativeName: "ייִדיש", englishName: "Yiddish", dir: "rtl", region: "middle-east", translationComplete: false },

  // ─── Africa ────────────────────────────────────────────────────────────────
  { code: "am", nativeName: "አማርኛ", englishName: "Amharic", dir: "ltr", region: "africa", translationComplete: false },
  { code: "bm", nativeName: "Bamanankan", englishName: "Bambara", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ee", nativeName: "Eʋegbe", englishName: "Ewe", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ff", nativeName: "Fulfulde", englishName: "Fula", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ha", nativeName: "Hausa", englishName: "Hausa", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ig", nativeName: "Igbo", englishName: "Igbo", dir: "ltr", region: "africa", translationComplete: false },
  { code: "rw", nativeName: "Kinyarwanda", englishName: "Kinyarwanda", dir: "ltr", region: "africa", translationComplete: false },
  { code: "kg", nativeName: "Kikongo", englishName: "Kongo", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ln", nativeName: "Lingála", englishName: "Lingala", dir: "ltr", region: "africa", translationComplete: false },
  { code: "lg", nativeName: "Luganda", englishName: "Ganda", dir: "ltr", region: "africa", translationComplete: false },
  { code: "mg", nativeName: "Malagasy", englishName: "Malagasy", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ny", nativeName: "Chichewa", englishName: "Chichewa", dir: "ltr", region: "africa", translationComplete: false },
  { code: "om", nativeName: "Oromoo", englishName: "Oromo", dir: "ltr", region: "africa", translationComplete: false },
  { code: "rn", nativeName: "Kirundi", englishName: "Kirundi", dir: "ltr", region: "africa", translationComplete: false },
  { code: "sg", nativeName: "Sängö", englishName: "Sango", dir: "ltr", region: "africa", translationComplete: false },
  { code: "sn", nativeName: "chiShona", englishName: "Shona", dir: "ltr", region: "africa", translationComplete: false },
  { code: "so", nativeName: "Soomaali", englishName: "Somali", dir: "ltr", region: "africa", translationComplete: false },
  { code: "st", nativeName: "Sesotho", englishName: "Southern Sotho", dir: "ltr", region: "africa", translationComplete: false },
  { code: "sw", nativeName: "Kiswahili", englishName: "Swahili", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ti", nativeName: "ትግርኛ", englishName: "Tigrinya", dir: "ltr", region: "africa", translationComplete: false },
  { code: "tn", nativeName: "Setswana", englishName: "Tswana", dir: "ltr", region: "africa", translationComplete: false },
  { code: "ts", nativeName: "Xitsonga", englishName: "Tsonga", dir: "ltr", region: "africa", translationComplete: false },
  { code: "tw", nativeName: "Twi", englishName: "Twi", dir: "ltr", region: "africa", translationComplete: false },
  { code: "wo", nativeName: "Wolof", englishName: "Wolof", dir: "ltr", region: "africa", translationComplete: false },
  { code: "xh", nativeName: "isiXhosa", englishName: "Xhosa", dir: "ltr", region: "africa", translationComplete: false },
  { code: "yo", nativeName: "Yorùbá", englishName: "Yoruba", dir: "ltr", region: "africa", translationComplete: false },
  { code: "zu", nativeName: "isiZulu", englishName: "Zulu", dir: "ltr", region: "africa", translationComplete: false },

  // ─── Americas ──────────────────────────────────────────────────────────────
  { code: "ay", nativeName: "Aymar", englishName: "Aymara", dir: "ltr", region: "americas", translationComplete: false },
  { code: "gn", nativeName: "Avañe'ẽ", englishName: "Guarani", dir: "ltr", region: "americas", translationComplete: false },
  { code: "ht", nativeName: "Kreyòl ayisyen", englishName: "Haitian Creole", dir: "ltr", region: "americas", translationComplete: false },
  { code: "qu", nativeName: "Runa Simi", englishName: "Quechua", dir: "ltr", region: "americas", translationComplete: false },

  // ─── Oceania ───────────────────────────────────────────────────────────────
  { code: "mi", nativeName: "Te Reo Māori", englishName: "Māori", dir: "ltr", region: "oceania", translationComplete: false },
  { code: "sm", nativeName: "Gagana Samoa", englishName: "Samoan", dir: "ltr", region: "oceania", translationComplete: false },
  { code: "to", nativeName: "Lea Faka-Tonga", englishName: "Tongan", dir: "ltr", region: "oceania", translationComplete: false },
  { code: "fj", nativeName: "Vosa Vakaviti", englishName: "Fijian", dir: "ltr", region: "oceania", translationComplete: false },
];

/** All locale codes as a simple string array */
export const localeCodes = locales.map((l) => l.code);

/** Union type of all supported locale codes */
export type Locale = (typeof localeCodes)[number];

/** The default locale used as fallback */
export const defaultLocale: Locale = "en";

/** All RTL locale codes */
export const rtlLocales = locales
  .filter((l) => l.dir === "rtl")
  .map((l) => l.code);

/** Region labels for UI display */
export const regionLabels: Record<LocaleConfig["region"], string> = {
  europe: "Europe",
  asia: "Asia",
  "middle-east": "Middle East",
  africa: "Africa",
  americas: "Americas",
  oceania: "Oceania",
};

/** Look up locale config by code */
export function getLocaleConfig(code: string): LocaleConfig | undefined {
  return locales.find((l) => l.code === code);
}

/** Get text direction for a locale */
export function getLocaleDirection(code: string): "ltr" | "rtl" {
  return getLocaleConfig(code)?.dir ?? "ltr";
}

/** Group locales by region (for Locale Switcher UI) */
export function getLocalesByRegion(): Record<string, LocaleConfig[]> {
  const grouped: Record<string, LocaleConfig[]> = {};
  for (const locale of locales) {
    const label = regionLabels[locale.region];
    if (!grouped[label]) {
      grouped[label] = [];
    }
    grouped[label].push(locale);
  }
  return grouped;
}
