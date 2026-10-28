import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import Avatar, {
  AVATAR_LABEL_POSITION,
  AVATAR_SIZE,
  AVATAR_VARIANT,
} from "./index";

/**
 * Today's pastel is NOT derived from name/email. It is:
 *   hsl(floor(random*360), 60+random*20 %, 75+random*10 %)
 * applied in an effect, so the first paint is transparent.
 * Exact values below lock that formula.
 */

/** jsdom serialises the inline hsl() as computed rgb(). This is that conversion. */
function pastelRgb(hueUnit: number, satUnit: number, lightUnit: number) {
  const h = Math.floor(hueUnit * 360);
  const s = (60 + satUnit * 20) / 100;
  const l = (75 + lightUnit * 10) / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const channel = (n: number) => Math.round((n + m) * 255);
  return `rgb(${channel(r)}, ${channel(g)}, ${channel(b)})`;
}

function swatch(container: HTMLElement) {
  return container.querySelector(".rounded-full.font-semibold") as HTMLElement;
}

afterEach(() => {
  vi.spyOn(Math, "random").mockRestore();
});

describe("Avatar", () => {
  it("paints an exact pastel from the random sequence, independent of identity", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.25)
      .mockReturnValueOnce(0.5);

    const { container } = render(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        variant={AVATAR_VARIANT.INITIALS_ONLY}
      />,
    );

    expect(swatch(container).style.backgroundColor).toBe(pastelRgb(0.5, 0.25, 0.5));
    expect(swatch(container).style.backgroundColor).toBe("rgb(171, 237, 237)");
  });

  it("uses the same colour for different names when the random sequence matches", () => {
    const sequence = [0, 0, 1];
    const spy = vi.spyOn(Math, "random");
    sequence.forEach((n) => spy.mockReturnValueOnce(n));
    const first = render(
      <Avatar name="Ada Lovelace" email="a@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    const firstColor = swatch(first.container).style.backgroundColor;

    sequence.forEach((n) => spy.mockReturnValueOnce(n));
    const second = render(
      <Avatar name="Grace Hopper" email="g@x.com" variant={AVATAR_VARIANT.INITIALS_WITH_FULL} />,
    );

    expect(firstColor).toBe(pastelRgb(0, 0, 1));
    expect(firstColor).toBe("rgb(240, 194, 194)");
    expect(swatch(second.container).style.backgroundColor).toBe(firstColor);
  });

  it("locks the upper end of the pastel formula", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.999)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(1);

    const { container } = render(
      <Avatar name="Ken" email="k@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );

    expect(swatch(container).style.backgroundColor).toBe(pastelRgb(0.999, 1, 1));
    expect(swatch(container).style.backgroundColor).toBe("rgb(247, 186, 187)");
  });

  it("server-renders a transparent swatch before the effect runs", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    const html = renderToString(
      <Avatar name="Ada Lovelace" email="ada@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(html).toContain("background-color:transparent");
    expect(html).not.toContain("hsl(");
    expect(html).toContain("AL");
  });

  it("builds initials from the first two words and keeps source casing", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { rerender } = render(
      <Avatar name="Ada Lovelace" email="a@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(screen.getByText("AL")).toBeInTheDocument();

    rerender(<Avatar name="ada" email="a@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />);
    expect(screen.getByText("a")).toBeInTheDocument();

    rerender(
      <Avatar name="Jean-Luc Picard" email="a@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(screen.getByText("JP")).toBeInTheDocument();

    // SUSPECTED BUG: a blank second word drops the real second initial ("a" + "").
    rerender(<Avatar name="a  b" email="a@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />);
    expect(screen.getByText("a")).toBeInTheDocument();
  });

  it.each([
    [AVATAR_SIZE.XS, "size-6"],
    [AVATAR_SIZE.SM, "size-8"],
    [AVATAR_SIZE.MD, "size-10"],
    [AVATAR_SIZE.LG, "size-14"],
    [AVATAR_SIZE.XL, "size-18"],
  ])("size %s applies %s to the swatch", (size, token) => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { container } = render(
      <Avatar name="Ada Lovelace" email="a@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} size={size} />,
    );
    expect(swatch(container).className).toContain(token);
  });

  it("defaults to LG and a right-hand label", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { container } = render(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        variant={AVATAR_VARIANT.INITIALS_WITH_FULL}
      />,
    );
    expect(swatch(container).className).toContain("size-14");
    const label = screen.getByText("Ada Lovelace").parentElement!;
    expect(label.className).toContain("items-start");
    expect(container.firstElementChild!.className).toContain("pl-1.25");
    const children = [...container.firstElementChild!.children];
    expect(children[0]).toBe(swatch(container));
    expect(children[1]).toHaveTextContent("ada@example.com");
  });

  it("places the label on the left and shows email under the name", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { container } = render(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        variant={AVATAR_VARIANT.IMAGE_WITH_FULL}
        labelPosition={AVATAR_LABEL_POSITION.LEFT}
        className="extra"
        image="https://example.com/ada.png"
      />,
    );
    const root = container.firstElementChild!;
    expect(root.className).toContain("extra");
    const label = screen.getByText("Ada Lovelace").parentElement!;
    expect(label.className).toContain("items-end");
    expect(root.children[0]).toBe(label);
    expect(screen.getByRole("img", { name: "profile" })).toHaveAttribute(
      "src",
      "https://example.com/ada.png",
    );
  });

  it("shows a tooltip only for the only-variants, on hover", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const user = userEvent.setup();
    const { container } = render(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        variant={AVATAR_VARIANT.INITIALS_ONLY}
        labelPosition={AVATAR_LABEL_POSITION.LEFT}
      />,
    );
    const tip = container.querySelector(".z-50") as HTMLElement;
    expect(tip.className).toContain("hidden");
    expect(tip.className).toContain("right-full");
    expect(tip).toHaveTextContent("Ada Lovelace");
    expect(tip).toHaveTextContent("ada@example.com");

    await user.hover(swatch(container));
    expect(tip.className).toContain("block");
    await user.unhover(swatch(container));
    expect(tip.className).toContain("hidden");
  });

  it("tooltips an image-only avatar on the right and skips the text label", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        image="https://example.com/ada.png"
        variant={AVATAR_VARIANT.IMAGE_ONLY}
      />,
    );
    expect(container.querySelector(".items-start, .items-end")).toBeNull();
    const tip = container.querySelector(".z-50") as HTMLElement;
    expect(tip.className).toContain("left-full");
    await user.hover(screen.getByRole("img", { name: "profile" }));
    expect(tip.className).toContain("block");
  });

  it("falls back to initials without a tooltip when an image variant has no image", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { container } = render(
      <Avatar name="Ada Lovelace" email="ada@example.com" variant={AVATAR_VARIANT.IMAGE_ONLY} />,
    );
    expect(screen.getByText("AL")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(container.querySelector(".z-50")).toBeNull();
  });

  it("full variants do not render a tooltip", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const { container } = render(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        variant={AVATAR_VARIANT.INITIALS_WITH_FULL}
      />,
    );
    expect(container.querySelector(".z-50")).toBeNull();
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument();
  });

  it("loading replaces content with a shimmer and keeps label order", () => {
    const { container, rerender } = render(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        variant={AVATAR_VARIANT.INITIALS_WITH_FULL}
        isLoading
        labelPosition={AVATAR_LABEL_POSITION.RIGHT}
        className="should-drop"
      />,
    );
    expect(screen.queryByText("Ada Lovelace")).not.toBeInTheDocument();
    expect(container.querySelector(".animate-pulse")).toBeTruthy();
    const bars = container.querySelectorAll(".bg-surface-raised");
    expect(bars.length).toBeGreaterThanOrEqual(3);
    // SUSPECTED BUG: className is omitted while isLoading is true.
    expect(container.firstElementChild!.className).not.toContain("should-drop");

    rerender(
      <Avatar
        name="Ada Lovelace"
        email="ada@example.com"
        variant={AVATAR_VARIANT.IMAGE_ONLY}
        isLoading
        labelPosition={AVATAR_LABEL_POSITION.LEFT}
      />,
    );
    expect(container.querySelector(".w-32")).toBeNull();
  });
});
