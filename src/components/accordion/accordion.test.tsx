import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Accordion, { ACCORDION_VARIANT } from "./index";

const items = [
  { key: "a", title: "First", content: "First body" },
  { key: "b", title: "Second", content: "Second body" },
];

describe("Accordion", () => {
  it("starts closed without a default key", () => {
    render(<Accordion items={items} />);
    expect(screen.queryByText("First body")).not.toBeInTheDocument();
  });

  it("keeps one section open at a time by default, and closes on a second click", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} defaultOpenKey="a" />);
    expect(screen.getByText("First body")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Second" }));
    expect(screen.getByText("Second body")).toBeInTheDocument();
    expect(screen.queryByText("First body")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Second" }));
    expect(screen.queryByText("Second body")).not.toBeInTheDocument();
  });

  it("keeps several sections open with allowMultiple", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} defaultOpenKey="a" allowMultiple />);
    await user.click(screen.getByRole("button", { name: "Second" }));
    expect(screen.getByText("First body")).toBeInTheDocument();
    expect(screen.getByText("Second body")).toBeInTheDocument();
  });

  it("uses dividers for the flush variant", () => {
    const { container } = render(<Accordion items={items} variant={ACCORDION_VARIANT.FLUSH} />);
    expect(container.firstElementChild!.className).toContain("divide-y");
    expect(container.firstElementChild!.className).not.toContain("rounded-lg");
  });
});

it("Accordion opens a default item and ignores a disabled one", async () => {
  const user = userEvent.setup();
  render(
    <Accordion
      variant={ACCORDION_VARIANT.BORDERED}
      defaultOpenKey="a"
      items={[
        { key: "a", title: "Alpha", content: "First body" },
        { key: "b", title: "Beta", content: "Second body", disabled: true },
      ]}
    />,
  );
  expect(screen.getByText("First body")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Beta" }));
  expect(screen.queryByText("Second body")).not.toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Alpha" }));
  expect(screen.queryByText("First body")).not.toBeInTheDocument();
});
