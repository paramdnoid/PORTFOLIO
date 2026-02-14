import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env["NEXT_PUBLIC_SENTRY_DSN"],

  // Adjust this value in production, or use tracesSampler for finer control.
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful debug information to the
  // console while setting up Sentry.
  debug: false,

  // Disable Sentry in development to reduce noise.
  enabled: process.env.NODE_ENV === "production",
});
