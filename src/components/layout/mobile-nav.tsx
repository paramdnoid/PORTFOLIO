"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { Menu } from "lucide-react";

import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Slide-out mobile navigation drawer (visible on small screens).
 *
 * Opens a Radix `Sheet` from the right side containing the same
 * navigation links as the desktop header. Links close the sheet
 * on click for a seamless navigation experience.
 */
export function MobileNav(): React.ReactElement {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-9"
          aria-label={tCommon("menu")}
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-1">
          {navigationItems.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                }}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {t(item.titleKey)}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                }}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {t(item.titleKey)}
              </Link>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
