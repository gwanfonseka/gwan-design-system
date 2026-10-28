import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { expectAnchored, freezeClock, mockRect, setViewport } from "../../test/helpers";
import { FORM_ELEMENT_SIZE } from "../input";
import { DATE_PICKER_FORMAT } from "../datePicker";
import DateRangePicker from "./index";

function renderPicker(props: Partial<React.ComponentProps<typeof DateRangePicker>> = {}) {
  const onChange = vi.fn();
  const result = render(<DateRangePicker onChange={onChange} label="Range" {...props} />);
  return { ...result, onChange };
}

function panel(container: HTMLElement) {
  const node = container.querySelector(".absolute.z-50");
  if (!node) throw new Error("panel is closed");
  return node as HTMLElement;
}

function months(container: HTMLElement) {
  return [...panel(container).querySelectorAll(":scope > .flex > .flex")] as HTMLElement[];
}

function monthTitle(month: HTMLElement) {
  return month.querySelector(".font-semibold")?.textContent;
}

function day(month: HTMLElement, date: number) {
  return within(month).getByRole("button", { name: String(date) });
}

describe("DateRangePicker", () => {
  beforeEach(() => {
    freezeClock();
  });

  it("shows the default placeholders and a medium trigger", () => {
    renderPicker();
    const trigger = screen.getByRole("button", { name: "Start date → End date" });
    expect(trigger.className).toContain("text-sm");
    expect(screen.getByText("Range").className).toContain("text-muted-fg");
  });

  it("formats a partial and a complete range, and strips time tokens", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <DateRangePicker onChange={onChange} startDate={new Date(2026, 0, 10)} />,
    );
    expect(screen.getByRole("button", { name: "10 Jan 2026 → End date" })).toBeInTheDocument();

    rerender(
      <DateRangePicker
        onChange={onChange}
        startDate={new Date(2026, 0, 10)}
        endDate={new Date(2026, 0, 12)}
        format={DATE_PICKER_FORMAT.DD_MM_YYYY_SLASH}
      />,
    );
    expect(screen.getByRole("button", { name: "10/01/2026 → 12/01/2026" })).toBeInTheDocument();

    rerender(
      <DateRangePicker
        onChange={onChange}
        startDate={new Date(2026, 0, 10, 9, 30)}
        endDate={new Date(2026, 1, 2, 18, 0)}
        format={DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME_12}
        startPlaceholder="From"
        endPlaceholder="To"
      />,
    );
    expect(screen.getByRole("button", { name: "10 Jan 2026 → 02 Feb 2026" })).toBeInTheDocument();
  });

  it("selects a start, previews the hover range, then commits an end and closes", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const view = render(<DateRangePicker onChange={onChange} />);
    const apply = () => {
      const next = onChange.mock.calls.at(-1)?.[0] as {
        startDate: Date | null;
        endDate: Date | null;
      };
      view.rerender(
        <DateRangePicker onChange={onChange} startDate={next.startDate} endDate={next.endDate} />,
      );
    };

    await user.click(screen.getByRole("button", { name: "Start date → End date" }));
    const [left, right] = months(view.container);
    expect(monthTitle(left)).toBe("March 2026");
    expect(monthTitle(right)).toBe("April 2026");

    await user.click(day(left, 10));
    expect(onChange).toHaveBeenLastCalledWith({
      startDate: new Date(2026, 2, 10),
      endDate: null,
    });
    apply();
    expect(view.container.querySelector(".absolute.z-50")).toBeTruthy();

    fireEvent.mouseEnter(day(months(view.container)[0], 14));
    expect(day(months(view.container)[0], 12).className).toContain("bg-primary-default/15");
    expect(day(months(view.container)[0], 10).className).toContain("bg-primary-default");
    expect(day(months(view.container)[0], 14).className).toContain("bg-primary-default");
    fireEvent.mouseLeave(day(months(view.container)[0], 14));
    expect(day(months(view.container)[0], 12).className).not.toContain("bg-primary-default/15");

    await user.click(day(months(view.container)[1], 2));
    expect(onChange).toHaveBeenLastCalledWith({
      startDate: new Date(2026, 2, 10),
      endDate: new Date(2026, 3, 2),
    });
    expect(view.container.querySelector(".absolute.z-50")).toBeNull();
  });

  it("swaps the range when the second click is before the start, and stays open", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({ startDate: new Date(2026, 2, 20) });
    await user.click(screen.getByRole("button", { name: "20 Mar 2026 → End date" }));
    await user.click(day(months(container)[0], 5));
    expect(onChange).toHaveBeenCalledWith({
      startDate: new Date(2026, 2, 5),
      endDate: new Date(2026, 2, 20),
    });
    expect(container.querySelector(".absolute.z-50")).toBeTruthy();
  });

  it("starts a new range when both ends are already set, including the same day", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container, rerender } = render(
      <DateRangePicker
        onChange={onChange}
        startDate={new Date(2026, 2, 10)}
        endDate={new Date(2026, 2, 12)}
      />,
    );
    await user.click(screen.getByRole("button", { name: "10 Mar 2026 → 12 Mar 2026" }));
    await user.click(day(months(container)[0], 18));
    expect(onChange).toHaveBeenCalledWith({
      startDate: new Date(2026, 2, 18),
      endDate: null,
    });

    rerender(
      <DateRangePicker onChange={onChange} startDate={new Date(2026, 2, 18)} endDate={null} />,
    );
    await user.click(day(months(container)[0], 18));
    expect(onChange).toHaveBeenLastCalledWith({
      startDate: new Date(2026, 2, 18),
      endDate: new Date(2026, 2, 18),
    });
  });

  it("moves both months together and hides the inner navigation buttons", async () => {
    const user = userEvent.setup();
    const { container } = renderPicker();
    await user.click(screen.getByRole("button", { name: "Start date → End date" }));
    const [left, right] = months(container);
    const leftNav = within(left).getAllByRole("button").slice(0, 2);
    const rightNav = within(right).getAllByRole("button").slice(0, 2);
    expect(leftNav[1].className).toContain("invisible");
    expect(rightNav[0].className).toContain("invisible");

    await user.click(leftNav[0]);
    expect(monthTitle(months(container)[0])).toBe("February 2026");
    expect(monthTitle(months(container)[1])).toBe("March 2026");
    await user.click(within(months(container)[1]).getAllByRole("button")[1]);
    expect(monthTitle(months(container)[0])).toBe("March 2026");
    expect(monthTitle(months(container)[1])).toBe("April 2026");
  });

  it("disables out-of-range days in both months", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({
      minDate: new Date(2026, 2, 10),
      maxDate: new Date(2026, 3, 5),
    });
    await user.click(screen.getByRole("button", { name: "Start date → End date" }));
    const [left, right] = months(container);
    expect(day(left, 9)).toBeDisabled();
    expect(day(left, 10)).toBeEnabled();
    expect(day(right, 5)).toBeEnabled();
    expect(day(right, 6)).toBeDisabled();
    await user.click(day(left, 9));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("clears without closing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const view = render(
      <DateRangePicker
        onChange={onChange}
        startDate={new Date(2026, 2, 10)}
        endDate={new Date(2026, 2, 12)}
      />,
    );
    await user.click(screen.getByRole("button", { name: "10 Mar 2026 → 12 Mar 2026" }));
    await user.click(within(panel(view.container)).getByRole("button", { name: "Clear" }));
    expect(onChange).toHaveBeenCalledWith({ startDate: null, endDate: null });
    expect(view.container.querySelector(".absolute.z-50")).toBeTruthy();

    view.rerender(<DateRangePicker onChange={onChange} startDate={null} endDate={null} />);
    expect(screen.getByRole("button", { name: "Start date → End date" })).toBeInTheDocument();
    expect(view.container.querySelector(".absolute.z-50")).toBeTruthy();
    expect(within(panel(view.container)).queryByRole("button", { name: "Clear" })).not.toBeInTheDocument();
  });

  it("Done closes a partial range", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({ startDate: new Date(2026, 2, 10) });
    await user.click(screen.getByRole("button", { name: "10 Mar 2026 → End date" }));
    await user.click(within(panel(container)).getByRole("button", { name: "Done" }));
    expect(container.querySelector(".absolute.z-50")).toBeNull();
    expect(onChange).not.toHaveBeenCalled();
  });

  // SUSPECTED BUG: the visible month is captured on mount and does not follow later startDate changes.
  it("keeps the mounted month when startDate changes", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container, rerender } = render(
      <DateRangePicker onChange={onChange} startDate={new Date(2026, 0, 10)} />,
    );
    rerender(
      <DateRangePicker
        onChange={onChange}
        startDate={new Date(2026, 7, 3)}
        endDate={new Date(2026, 7, 9)}
      />,
    );
    expect(screen.getByRole("button", { name: "03 Aug 2026 → 09 Aug 2026" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "03 Aug 2026 → 09 Aug 2026" }));
    expect(monthTitle(months(container)[0])).toBe("January 2026");
    expect(monthTitle(months(container)[1])).toBe("February 2026");
  });

  it("does not open when disabled, closes on an outside press, and shows errors", async () => {
    const user = userEvent.setup();
    const { container, rerender, onChange } = renderPicker({ disabled: true });
    await user.click(screen.getByRole("button", { name: "Start date → End date" }));
    expect(container.querySelector(".absolute.z-50")).toBeNull();

    rerender(
      <DateRangePicker
        onChange={onChange}
        label="Range"
        isError
        errorMessage="Pick a range"
        className="range-field"
      />,
    );
    expect(container.firstElementChild!.className).toContain("range-field");
    expect(screen.getByRole("alert")).toHaveTextContent("Pick a range");
    expect(screen.getByText("Range").className).toContain("text-danger");
    await user.click(screen.getByRole("button", { name: "Start date → End date" }));
    expect(screen.getByRole("button", { name: "Start date → End date" }).className).toContain(
      "border-danger",
    );
    fireEvent.mouseDown(document.body);
    expect(container.querySelector(".absolute.z-50")).toBeNull();
  });

  it("uses the small size", () => {
    renderPicker({ size: FORM_ELEMENT_SIZE.SM, startPlaceholder: "From", endPlaceholder: "To" });
    const trigger = screen.getByRole("button", { name: "From → To" });
    expect(trigger.className).toContain("text-xs");
    expect(trigger.className).toContain("py-1.5");
  });

  it("marks today and does not move day focus with arrow keys", async () => {
    const user = userEvent.setup();
    const { container } = renderPicker();
    await user.click(screen.getByRole("button", { name: "Start date → End date" }));
    const today = day(months(container)[0], 15);
    expect(today.className).toContain("border-primary-default");
    today.focus();
    await user.keyboard("{ArrowDown}{Home}{End}{Escape}");
    expect(today).toHaveFocus();
    expect(container.querySelector(".absolute.z-50")).toBeTruthy();
  });

  it.each([
    ["room below and to the right", 1200, 800, { top: 0, bottom: 40, left: 0, right: 280 }, "down", "left"],
    ["near the right edge", 1200, 800, { top: 0, bottom: 40, left: 800, right: 1100 }, "down", "right"],
    ["near the bottom", 1200, 800, { top: 500, bottom: 540, left: 0, right: 280 }, "up", "left"],
    ["cramped below without room above", 1200, 800, { top: 100, bottom: 700, left: 0, right: 280 }, "down", "left"],
    ["right side but the anchor is narrower than the panel", 600, 800, { top: 0, bottom: 40, left: 200, right: 400 }, "down", "left"],
  ] as const)("places the panel %s", async (_name, width, height, box, position, align) => {
    const user = userEvent.setup();
    setViewport(width, height);
    const { container } = renderPicker();
    mockRect(container.firstElementChild as HTMLElement, box);
    await user.click(screen.getByRole("button", { name: "Start date → End date" }));
    expectAnchored(panel(container), position, align);
  });
});
