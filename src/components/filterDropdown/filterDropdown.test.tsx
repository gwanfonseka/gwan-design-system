import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import FilterDropdown from "./index";

it("FilterDropdown renders its child and can close it", async () => {
  const user = userEvent.setup();
  render(
    <FilterDropdown>
      {(close) => <button type="button" onClick={close}>Done</button>}
    </FilterDropdown>,
  );
  expect(screen.queryByRole("button", { name: "Done" })).not.toBeInTheDocument();
  await user.click(screen.getByText("Filter"));
  await user.click(screen.getByRole("button", { name: "Done" }));
  expect(screen.queryByRole("button", { name: "Done" })).not.toBeInTheDocument();
});

describe("FilterDropdown", () => {
  it("opens from a button, closes on Escape, and returns focus", async () => {
    const user = userEvent.setup();
    render(<FilterDropdown>{(close) => <button onClick={close}>Apply</button>}</FilterDropdown>);
    const trigger = screen.getByRole("button", { name: "Filter" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await user.tab();
    await user.keyboard("{Enter}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    await user.tab();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("button", { name: "Apply" })).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("returns focus to the trigger when the panel closes itself", async () => {
    const user = userEvent.setup();
    render(<FilterDropdown>{(close) => <button onClick={close}>Apply</button>}</FilterDropdown>);
    await user.click(screen.getByRole("button", { name: "Filter" }));
    await user.click(screen.getByRole("button", { name: "Apply" }));
    expect(screen.getByRole("button", { name: "Filter" })).toHaveFocus();
  });
});
