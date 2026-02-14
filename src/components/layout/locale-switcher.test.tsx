import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";

import { LocaleSwitcher } from "./locale-switcher";

const mockReplace = vi.fn();

const { localeState } = vi.hoisted(() => ({
  localeState: { current: "en" },
}));

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => localeState.current,
}));

vi.mock("@/i18n/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({ replace: mockReplace }),
}));

// cmdk needs ResizeObserver + scrollIntoView
beforeAll(() => {
  globalThis.ResizeObserver = class {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  };
  Element.prototype.scrollIntoView = vi.fn();
});

describe("LocaleSwitcher", () => {
  it("renders the language switcher button", () => {
    render(<LocaleSwitcher />);
    const button = screen.getByRole("button", { name: "switchLanguage" });
    expect(button).toBeInTheDocument();
  });

  it("shows current locale code", () => {
    render(<LocaleSwitcher />);
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("shows the native name on wider screens", () => {
    render(<LocaleSwitcher />);
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("opens the popover and shows language options", () => {
    render(<LocaleSwitcher />);
    const trigger = screen.getByRole("button", { name: "switchLanguage" });
    fireEvent.click(trigger);

    expect(screen.getByPlaceholderText("searchLanguage")).toBeInTheDocument();
    expect(screen.getByText("Deutsch")).toBeInTheDocument();
  });

  it("calls router.replace when selecting a language", () => {
    render(<LocaleSwitcher />);
    const trigger = screen.getByRole("button", { name: "switchLanguage" });
    fireEvent.click(trigger);

    const deutschOption = screen
      .getByText("Deutsch")
      .closest('[data-slot="command-item"]');
    expect(deutschOption).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- asserted above
    fireEvent.click(deutschOption!);

    expect(mockReplace).toHaveBeenCalledWith("/", { locale: "de" });
  });

  it("falls back to uppercase locale code when config is not found", () => {
    localeState.current = "xx";
    render(<LocaleSwitcher />);
    // When locale config is not found, nativeName is undefined
    // so it falls back to currentLocale.toUpperCase()
    const xxElements = screen.getAllByText("XX");
    expect(xxElements.length).toBeGreaterThan(0);
    localeState.current = "en";
  });
});
