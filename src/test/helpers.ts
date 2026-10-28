import { expect, vi } from "vitest";

/** Sunday 15 March 2026, 14:30 UTC. Tests run with TZ=UTC. */
export const FROZEN = new Date(Date.UTC(2026, 2, 15, 14, 30, 0));

export function freezeClock() {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(FROZEN);
}

export function setViewport(width: number, height: number) {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    writable: true,
    value: height,
  });
}

export function mockRect(el: Element, partial: Partial<DOMRect>) {
  const top = partial.top ?? 0;
  const left = partial.left ?? 0;
  const width = partial.width ?? (partial.right !== undefined && partial.left !== undefined
    ? partial.right - partial.left
    : 160);
  const height = partial.height ?? (partial.bottom !== undefined && partial.top !== undefined
    ? partial.bottom - partial.top
    : 40);
  const right = partial.right ?? left + width;
  const bottom = partial.bottom ?? top + height;
  vi.spyOn(el, "getBoundingClientRect").mockReturnValue({
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
    top,
    left,
    right,
    bottom,
    toJSON() {
      return {};
    },
  } as DOMRect);
}

export function expectAnchored(
  panel: Element,
  position: "down" | "up",
  align: "left" | "right",
) {
  const cls = panel.className;
  if (position === "down") {
    expect(cls).toContain("top-full");
    expect(cls).not.toContain("bottom-full");
  } else {
    expect(cls).toContain("bottom-full");
    expect(cls).not.toContain("top-full");
  }
  const tokens = cls.split(/\s+/);
  if (align === "left") {
    expect(tokens).toContain("left-0");
    expect(tokens).not.toContain("right-0");
  } else {
    expect(tokens).toContain("right-0");
    expect(tokens).not.toContain("left-0");
  }
}
