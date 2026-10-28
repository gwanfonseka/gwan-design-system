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
 * The swatch is a pastel derived from the name (or the email when the name
 * is blank). It is stable across mounts and present in the server render.
 */

function swatch(container: HTMLElement) {
  return container.querySelector(".rounded-full.font-semibold") as HTMLElement;
}

afterEach(() => {
  vi.spyOn(Math, "random").mockRestore();
});

describe("Avatar", () => {
  it("derives one stable pastel from the name and ignores Math.random", () => {
    const random = vi.spyOn(Math, "random");
    const first = render(
      <Avatar name="Ada Lovelace" email="ada@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    const ada = swatch(first.container).style.backgroundColor;
    first.unmount();

    const second = render(
      <Avatar name="Ada Lovelace" email="other@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(ada).not.toBe("");
    expect(ada).not.toBe("transparent");
    expect(swatch(second.container).style.backgroundColor).toBe(ada);

    const grace = render(
      <Avatar name="Grace Hopper" email="ada@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(swatch(grace.container).style.backgroundColor).not.toBe(ada);
    expect(random).not.toHaveBeenCalled();
  });

  it("uses the email when the name is blank and keeps that colour across mounts", () => {
    const first = render(
      <Avatar name="   " email="ada@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    const color = swatch(first.container).style.backgroundColor;
    first.unmount();
    const second = render(
      <Avatar name="" email="ada@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(color).not.toBe("");
    expect(color).not.toBe("transparent");
    expect(swatch(second.container).style.backgroundColor).toBe(color);

    const other = render(
      <Avatar name="" email="grace@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(swatch(other.container).style.backgroundColor).not.toBe(color);
  });

  it("server-renders the same name-derived swatch colour", () => {
    const html = renderToString(
      <Avatar name="Ada Lovelace" email="ada@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    const again = renderToString(
      <Avatar name="Ada Lovelace" email="ada@example.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />,
    );
    expect(html).toBe(again);
    expect(html).toMatch(/background-color:hsl\(/);
    expect(html).not.toContain("background-color:transparent");
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

    rerender(<Avatar name="a  b" email="a@x.com" variant={AVATAR_VARIANT.INITIALS_ONLY} />);
    expect(screen.getByText("ab")).toBeInTheDocument();
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
    expect(container.firstElementChild!.className).toContain("should-drop");

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
