import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToString } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "./theme-toggle";
import SharedNavbar from "../templates/shared/navbar";

const themeState = vi.hoisted(() => ({
  theme: "light" as string | undefined,
  setTheme: vi.fn(),
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: themeState.theme,
    setTheme: themeState.setTheme,
  }),
}));

beforeEach(() => {
  themeState.theme = "light";
  themeState.setTheme.mockReset();
});

describe("ThemeToggle", () => {
  it("server-renders the pulse placeholder and no button", () => {
    themeState.theme = "dark";
    const html = renderToString(<ThemeToggle />);
    expect(html).toContain("animate-pulse");
    expect(html).toContain("bg-surface-raised");
    expect(html).not.toContain("<button");
    expect(html).not.toContain("Light mode");
    expect(html).not.toContain("Dark mode");
  });

  it("after mount shows Dark mode from a light theme and switches to dark", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: "Dark mode" });
    expect(button.querySelector(".text-primary-200")).toBeTruthy();
    expect(themeState.setTheme).not.toHaveBeenCalled();

    await user.click(button);
    expect(themeState.setTheme).toHaveBeenCalledTimes(1);
    expect(themeState.setTheme).toHaveBeenCalledWith("dark");
  });

  it("after mount shows Light mode from a dark theme and switches to light", async () => {
    themeState.theme = "dark";
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: "Light mode" });
    expect(button.querySelector(".text-amber-300")).toBeTruthy();
    await user.click(button);
    expect(themeState.setTheme).toHaveBeenCalledWith("light");
  });

  it.each(["light", undefined, "system"])(
    "treats theme %s as not-dark, so the button asks for dark",
    async (theme) => {
      themeState.theme = theme;
      const user = userEvent.setup();
      render(<ThemeToggle />);
      await user.click(screen.getByRole("button", { name: "Dark mode" }));
      expect(themeState.setTheme).toHaveBeenCalledWith("dark");
    },
  );

  it("follows a theme prop change after mount", () => {
    const { rerender } = render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: "Dark mode" })).toBeInTheDocument();
    themeState.theme = "dark";
    rerender(<ThemeToggle />);
    expect(screen.getByRole("button", { name: "Light mode" })).toBeInTheDocument();
  });
});

describe("SharedNavbar theme toggle", () => {
  it("server-renders pulse placeholders instead of toggle buttons", () => {
    const html = renderToString(<SharedNavbar />);
    expect(html).toContain("animate-pulse");
    expect(html).not.toContain("Toggle theme");
    expect(html).toContain("GWAN.DEV");
  });

  it("after mount exposes two Toggle theme buttons and both switch the theme", async () => {
    themeState.theme = "dark";
    const user = userEvent.setup();
    render(<SharedNavbar activePage="docs" />);
    const toggles = screen.getAllByRole("button", { name: "Toggle theme" });
    expect(toggles).toHaveLength(2);
    await user.click(toggles[0]);
    await user.click(toggles[1]);
    expect(themeState.setTheme).toHaveBeenNthCalledWith(1, "light");
    expect(themeState.setTheme).toHaveBeenNthCalledWith(2, "light");
  });

  it("asks for dark when the theme is not exactly dark", async () => {
    const user = userEvent.setup();
    render(<SharedNavbar />);
    await user.click(screen.getAllByRole("button", { name: "Toggle theme" })[0]);
    expect(themeState.setTheme).toHaveBeenCalledWith("dark");
  });
});
