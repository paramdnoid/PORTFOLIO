import type { ReactElement, ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return children as ReactElement;
}
