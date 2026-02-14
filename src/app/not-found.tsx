// Root-level 404 page — rendered outside the [locale] segment when no locale
// can be determined (e.g. completely unknown paths). Because this component
// lives outside of the NextIntlClientProvider, it cannot use useTranslations()
// and therefore uses hardcoded English strings as a fallback.

import type React from "react";
import Link from "next/link";

import { fontSans } from "@/lib/fonts";

import "@/app/globals.css";

export default function NotFound(): React.ReactElement {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontSans.variable} flex min-h-screen items-center justify-center bg-background font-sans text-foreground antialiased`}
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
