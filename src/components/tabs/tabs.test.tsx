import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Tabs, { TABS_VARIANT } from "./index";
import { useState } from "react";

it("Tabs shows the active panel and ignores a disabled tab", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  render(
    <Tabs
      variant={TABS_VARIANT.PILL}
      activeKey="one"
      onChange={onChange}
      items={[
        { key: "one", label: "One", content: "First" },
        { key: "two", label: "Two", content: "Second", disabled: true },
      ]}
    />,
  );
  expect(screen.getByText("First")).toBeInTheDocument();
  await user.click(screen.getByRole("tab", { name: "Two" }));
  expect(onChange).not.toHaveBeenCalled();
  await user.click(screen.getByRole("tab", { name: "One" }));
  expect(onChange).toHaveBeenCalledWith("one");
});

describe("Tabs", () => {
  const Harness = () => {
    const [key, setKey] = useState("a");
    return (
      <Tabs
        activeKey={key}
        onChange={setKey}
        items={[
          { key: "a", label: "Profile", content: "Profile panel" },
          { key: "b", label: "Billing", content: "Billing panel", disabled: true },
          { key: "c", label: "Security", content: "Security panel" },
        ]}
      />
    );
  };

  it("exposes tab semantics", () => {
    render(<Harness />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    const profile = screen.getByRole("tab", { name: "Profile" });
    expect(profile).toHaveAttribute("aria-selected", "true");
    expect(profile).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("tab", { name: "Security" })).toHaveAttribute("tabindex", "-1");
    expect(screen.getByRole("tabpanel", { name: "Profile" })).toHaveTextContent("Profile panel");
  });

  it("moves with the arrow keys, skipping disabled tabs", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(screen.getByRole("tab", { name: "Profile" }));
    await user.keyboard("{ArrowRight}");
    const security = screen.getByRole("tab", { name: "Security" });
    expect(security).toHaveFocus();
    expect(security).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: "Profile" })).toHaveFocus();
    await user.keyboard("{End}");
    expect(security).toHaveFocus();
  });
});

describe("Tabs variants and edges", () => {
  const items = [
    { key: "a", label: "One", content: "Panel one" },
    { key: "b", label: "Two", content: "Panel two" },
  ];

  it("selects the first tab without an activeKey", () => {
    render(<Tabs items={items} />);
    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("aria-selected", "true");
  });

  it.each([
    [TABS_VARIANT.PILL, "bg-primary-default", "rounded-full", "rounded-full"],
    [TABS_VARIANT.BOXED, "shadow-sm", "rounded-md", "rounded-lg"],
  ])("styles the %s variant", (variant, active, inactive, track) => {
    render(<Tabs items={items} activeKey="a" variant={variant} />);
    expect(screen.getByRole("tab", { name: "One" }).className).toContain(active);
    expect(screen.getByRole("tab", { name: "Two" }).className).toContain(inactive);
    expect(screen.getByRole("tablist").className).toContain(track);
  });

  it("adds no style for an unknown variant from plain JavaScript", () => {
    render(<Tabs items={items} activeKey="a" variant={"other" as TABS_VARIANT} />);
    expect(screen.getByRole("tab", { name: "One" }).className).not.toContain("undefined");
    expect(screen.getByRole("tablist").className).not.toContain("undefined");
  });

  it("wraps with ArrowLeft and ignores other keys", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs items={items} activeKey="a" onChange={onChange} />);
    await user.tab();
    await user.keyboard("x");
    expect(onChange).not.toHaveBeenCalled();
    await user.keyboard("{ArrowLeft}");
    expect(onChange).toHaveBeenCalledWith("b");
  });

  it("copes with no items", () => {
    render(<Tabs items={[]} />);
    expect(screen.getByRole("tabpanel")).not.toHaveAttribute("aria-labelledby");
  });
});
