"use client";

import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

import * as Sentry from "@sentry/nextjs";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string | undefined };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps): React.ReactElement {
  const t = useTranslations("common");

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle className="mx-auto size-12 text-destructive" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight">{t("error")}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {t("errorDescription")}
          {error.digest && (
            <span className="mt-1 block text-sm text-muted-foreground/70">
              {t("errorId")}: {error.digest}
            </span>
          )}
        </p>
        <Button onClick={reset} className="mt-8" size="lg">
          {t("tryAgain")}
        </Button>
      </div>
    </div>
  );
}
