"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Button that toggles between light and dark colour themes.
 *
 * Uses `next-themes` to persist the preference. The sun/moon icons
 * cross-fade via CSS transforms for a smooth transition.
 */
export function ThemeToggle(): React.ReactElement {
  const { setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("common");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      aria-label={t("toggleTheme")}
      className="size-9"
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">{t("toggleTheme")}</span>
    </Button>
  );
}
