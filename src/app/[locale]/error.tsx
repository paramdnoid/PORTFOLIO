"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps): React.ReactElement {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle className="mx-auto size-12 text-destructive" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          An unexpected error occurred.
          {error.digest && (
            <span className="mt-1 block text-sm text-muted-foreground/70">
              Error ID: {error.digest}
            </span>
          )}
        </p>
        <Button onClick={reset} className="mt-8" size="lg">
          Try again
        </Button>
      </div>
    </div>
  );
}
