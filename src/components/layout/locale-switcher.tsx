"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { getLocalesByRegion, getLocaleConfig } from "@/i18n/locales";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, Languages } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";

export function LocaleSwitcher(): React.ReactElement {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);

  const grouped = getLocalesByRegion();
  const currentConfig = getLocaleConfig(currentLocale);

  function switchLocale(newLocale: string): void {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 px-2 text-xs font-medium"
          aria-label={t("switchLanguage")}
        >
          <Languages className="size-4" />
          <span className="hidden sm:inline">
            {currentConfig?.nativeName ?? currentLocale.toUpperCase()}
          </span>
          <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="end">
        <Command>
          <CommandInput placeholder={t("searchLanguage")} />
          <CommandList className="max-h-72">
            <CommandEmpty>No language found.</CommandEmpty>
            {Object.entries(grouped).map(([region, items]) => (
              <CommandGroup key={region} heading={region}>
                {items.map((locale) => (
                  <CommandItem
                    key={locale.code}
                    value={`${locale.nativeName} ${locale.englishName} ${locale.code}`}
                    onSelect={() => switchLocale(locale.code)}
                    className="flex items-center justify-between"
                  >
                    <span className="truncate">
                      {locale.nativeName}
                      <span className="ml-1.5 text-muted-foreground">
                        — {locale.englishName}
                      </span>
                    </span>
                    {locale.code === currentLocale && (
                      <Check className={cn("size-4 shrink-0")} />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
