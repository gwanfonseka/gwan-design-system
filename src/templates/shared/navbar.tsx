"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggleIcon = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-8 h-8 rounded-sm bg-border animate-pulse" />;
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-sm border border-border text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200"
    >
      {isDark ? (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 9.5A5.5 5.5 0 016.5 2.5a5.5 5.5 0 107 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
};

type ActivePage = "components" | "docs" | "themes" | "blog" | undefined;

const navLinks = [
  { label: "Components", href: "/components-library", page: "components" as ActivePage },
  { label: "Documentation", href: "/docs", page: "docs" as ActivePage },
  { label: "Themes", href: "/themes", page: "themes" as ActivePage },
  { label: "Blog", href: "/blog", page: "blog" as ActivePage },
];

/**
 * Shared top navbar used across all pages.
 *
 * - `activePage` highlights the matching nav item with an underline.
 * - `onMenuToggle` — if provided, the mobile hamburger calls this (e.g. docs sidebar).
 *   If omitted, the navbar manages its own inline mobile dropdown.
 */
const SharedNavbar = ({
  activePage,
  onMenuToggle,
}: {
  activePage?: ActivePage;
  onMenuToggle?: () => void;
}) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const showInternalMenu = !onMenuToggle;

  const handleHamburger = () => {
    if (onMenuToggle) {
      onMenuToggle();
    } else {
      setInternalMenuOpen((v) => !v);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-5 md:px-10 py-4 w-full">

        {/* Logo */}
        <a
          href="/home"
          className="font-black text-sm tracking-[0.25em] uppercase text-foreground hover:opacity-70 transition-opacity duration-200"
        >
          GWAN.DEV
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-foreground border-b border-foreground pb-0.5"
                    : "text-muted-fg hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <ThemeToggleIcon />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggleIcon />
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={handleHamburger}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 origin-center ${internalMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${internalMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 origin-center ${internalMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Inline mobile dropdown (only when no external handler) */}
      {showInternalMenu && internalMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setInternalMenuOpen(false)}
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-200 py-1 ${
                  isActive ? "text-foreground font-bold" : "text-muted-fg hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default SharedNavbar;
