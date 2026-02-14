import type React from "react";
import Link from "next/link";

export default function NotFound(): React.ReactElement {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="mt-4 text-lg text-zinc-400">Page not found</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
