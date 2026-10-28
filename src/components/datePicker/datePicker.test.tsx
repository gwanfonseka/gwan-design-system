import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { expectAnchored, freezeClock, mockRect, setViewport } from "../../test/helpers";
import { FORM_ELEMENT_SIZE } from "../input";
import DatePicker, { DATE_PICKER_FORMAT } from "./index";

function renderPicker(props: Partial<React.ComponentProps<typeof DatePicker>> = {}) {
  const onChange = vi.fn();
  const result = render(<DatePicker onChange={onChange} label="When" {...props} />);
  return { ...result, onChange };
}

function panel(container: HTMLElement) {
  const node = container.querySelector(".absolute.z-50");
  if (!node) throw new Error("panel is closed");
  return node as HTMLElement;
}

function heading(container: HTMLElement) {
  return panel(container).querySelector(".font-semibold")?.textContent;
}

function day(container: HTMLElement, date: number) {
  return within(panel(container)).getByRole("button", { name: String(date) });
}

describe("DatePicker", () => {
  beforeEach(() => {
    freezeClock();
  });

  it("defaults to an empty medium field in DD MMM YYYY", () => {
    renderPicker();
    const trigger = screen.getByRole("button", { name: "Select date" });
    expect(trigger.className).toContain("text-sm");
    expect(trigger.className).toContain("min-w-[200px]");
    expect(screen.getByText("When").className).toContain("text-muted-fg");
  });

  it("formats a controlled value and follows later value changes", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <DatePicker onChange={onChange} value={new Date(2026, 2, 15, 9, 5)} />,
    );
    expect(screen.getByRole("button", { name: "15 Mar 2026" })).toBeInTheDocument();

    rerender(
      <DatePicker
        onChange={onChange}
        value={new Date(2026, 5, 2, 9, 5)}
        format={DATE_PICKER_FORMAT.YYYY_MM_DD}
      />,
    );
    expect(screen.getByRole("button", { name: "2026-06-02" })).toBeInTheDocument();

    rerender(<DatePicker onChange={onChange} value={null} />);
    expect(screen.getByRole("button", { name: "Select date" })).toBeInTheDocument();
  });

  it.each([
    [DATE_PICKER_FORMAT.DD_MM_YYYY, "15-03-2026"],
    [DATE_PICKER_FORMAT.MM_DD_YYYY, "03-15-2026"],
    [DATE_PICKER_FORMAT.DD_MM_YYYY_SLASH, "15/03/2026"],
    [DATE_PICKER_FORMAT.MM_DD_YYYY_SLASH, "03/15/2026"],
    [DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME, "15 Mar 2026 09:05"],
    [DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME_12, "15 Mar 2026 09:05 AM"],
    [DATE_PICKER_FORMAT.YYYY_MM_DD_TIME_12, "2026-03-15 12:00 AM"],
  ])("formats %s as %s", (format, display) => {
    const value =
      format === DATE_PICKER_FORMAT.YYYY_MM_DD_TIME_12
        ? new Date(2026, 2, 15, 0, 0)
        : new Date(2026, 2, 15, 9, 5);
    renderPicker({ value, format });
    expect(screen.getByRole("button", { name: display })).toBeInTheDocument();
  });

  it("appends 24-hour time when timePicker is on and the format has no time tokens", () => {
    renderPicker({
      value: new Date(2026, 2, 15, 9, 5),
      timePicker: true,
      format: DATE_PICKER_FORMAT.DD_MMM_YYYY,
    });
    expect(screen.getByRole("button", { name: "15 Mar 2026 09:05" })).toBeInTheDocument();
  });

  it("syncs the open month and time fields when value changes, including across a clear", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container, rerender } = render(
      <DatePicker
        onChange={onChange}
        value={new Date(2026, 0, 10, 8, 15)}
        timePicker
        format={DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME}
      />,
    );
    await user.click(screen.getByRole("button", { name: "10 Jan 2026 08:15" }));
    expect(heading(container)).toBe("January 2026");
    const [hours, minutes] = within(panel(container)).getAllByRole("spinbutton");
    expect(hours).toHaveValue(8);
    expect(minutes).toHaveValue(15);

    rerender(
      <DatePicker
        onChange={onChange}
        value={new Date(2026, 5, 2, 21, 45)}
        timePicker
        format={DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME}
      />,
    );
    expect(screen.getByRole("button", { name: "02 Jun 2026 21:45" })).toBeInTheDocument();
    expect(heading(container)).toBe("June 2026");
    expect(within(panel(container)).getAllByRole("spinbutton")[0]).toHaveValue(21);
    expect(within(panel(container)).getAllByRole("spinbutton")[1]).toHaveValue(45);

    // SUSPECTED BUG: clearing `value` updates the trigger but leaves the viewed month and time inputs alone.
    rerender(
      <DatePicker
        onChange={onChange}
        value={null}
        timePicker
        format={DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME}
      />,
    );
    expect(screen.getByRole("button", { name: "Select date" })).toBeInTheDocument();
    expect(heading(container)).toBe("June 2026");
    expect(within(panel(container)).getAllByRole("spinbutton")[0]).toHaveValue(21);
  });

  it("moves the viewed month and marks today", async () => {
    const user = userEvent.setup();
    const { container } = renderPicker();
    await user.click(screen.getByRole("button", { name: "Select date" }));
    expect(heading(container)).toBe("March 2026");
    expect(day(container, 15).className).toContain("border-primary-default");

    const nav = within(panel(container)).getAllByRole("button").slice(0, 2);
    await user.click(nav[0]);
    expect(heading(container)).toBe("February 2026");
    await user.click(nav[1]);
    await user.click(nav[1]);
    expect(heading(container)).toBe("April 2026");

    // January -> previous year.
    for (let i = 0; i < 3; i += 1) await user.click(nav[0]);
    expect(heading(container)).toBe("January 2026");
    await user.click(nav[0]);
    expect(heading(container)).toBe("December 2025");
  });

  it("selects a date, stamps the frozen clock when the format has time, and closes", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({
      format: DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME,
    });
    await user.click(screen.getByRole("button", { name: "Select date" }));
    await user.click(day(container, 20));
    const picked = onChange.mock.calls[0][0] as Date;
    expect(picked.getFullYear()).toBe(2026);
    expect(picked.getMonth()).toBe(2);
    expect(picked.getDate()).toBe(20);
    expect(picked.getHours()).toBe(14);
    expect(picked.getMinutes()).toBe(30);
    expect(picked.getSeconds()).toBe(0);
    expect(container.querySelector(".absolute.z-50")).toBeNull();
  });

  it("keeps the panel open in timePicker mode and applies the typed time", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({ timePicker: true });
    await user.click(screen.getByRole("button", { name: "Select date" }));
    const [hours, minutes] = within(panel(container)).getAllByRole("spinbutton");
    fireEvent.change(hours, { target: { value: "99" } });
    fireEvent.change(minutes, { target: { value: "99" } });
    await user.click(day(container, 4));
    expect(container.querySelector(".absolute.z-50")).toBeTruthy();
    const picked = onChange.mock.calls.at(-1)?.[0] as Date;
    expect(picked.getDate()).toBe(4);
    expect(picked.getHours()).toBe(23);
    expect(picked.getMinutes()).toBe(59);

    await user.click(within(panel(container)).getByRole("button", { name: "Done" }));
    expect(container.querySelector(".absolute.z-50")).toBeNull();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("converts 12-hour input and toggles AM/PM against the controlled value", async () => {
    const user = userEvent.setup();
    const value = new Date(2026, 2, 15, 15, 10);
    const { container, onChange } = renderPicker({
      value,
      timePicker: true,
      format: DATE_PICKER_FORMAT.DD_MMM_YYYY_TIME_12,
    });
    await user.click(screen.getByRole("button", { name: "15 Mar 2026 03:10 PM" }));
    expect(within(panel(container)).getByRole("button", { name: "PM" })).toBeInTheDocument();
    const [hours, minutes] = within(panel(container)).getAllByRole("spinbutton");
    expect(hours).toHaveValue(3);
    fireEvent.change(hours, { target: { value: "11" } });
    let next = onChange.mock.calls.at(-1)?.[0] as Date;
    expect(next.getHours()).toBe(23);
    expect(next.getMinutes()).toBe(10);

    await user.click(within(panel(container)).getByRole("button", { name: "PM" }));
    next = onChange.mock.calls.at(-1)?.[0] as Date;
    // Toggling uses the internal hour state, which moved to 23, so PM -> AM subtracts 12.
    expect(next.getHours()).toBe(11);

    fireEvent.change(minutes, { target: { value: "" } });
    next = onChange.mock.calls.at(-1)?.[0] as Date;
    expect(next.getMinutes()).toBe(0);
  });

  it("disables days outside min and max, and still allows the boundary days", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({
      value: new Date(2026, 2, 15),
      minDate: new Date(2026, 2, 10),
      maxDate: new Date(2026, 2, 20),
    });
    await user.click(screen.getByRole("button", { name: "15 Mar 2026" }));
    expect(day(container, 9)).toBeDisabled();
    expect(day(container, 21)).toBeDisabled();
    expect(day(container, 10)).toBeEnabled();
    expect(day(container, 20)).toBeEnabled();
    await user.click(day(container, 9));
    expect(onChange).not.toHaveBeenCalled();
    await user.click(day(container, 10));
    expect((onChange.mock.calls[0][0] as Date).getDate()).toBe(10);
  });

  it("clears and closes when there is no time picker, and clears without closing when there is", async () => {
    const user = userEvent.setup();
    const plain = renderPicker({ value: new Date(2026, 2, 15) });
    await user.click(screen.getByRole("button", { name: "15 Mar 2026" }));
    await user.click(within(panel(plain.container)).getByRole("button", { name: "Clear selection" }));
    expect(plain.onChange).toHaveBeenCalledWith(null);
    expect(plain.container.querySelector(".absolute.z-50")).toBeNull();

    const timed = renderPicker({ value: new Date(2026, 2, 15, 9, 0), timePicker: true });
    await user.click(screen.getByRole("button", { name: "15 Mar 2026 09:00" }));
    await user.click(within(panel(timed.container)).getByRole("button", { name: "Clear selection" }));
    expect(timed.onChange).toHaveBeenCalledWith(null);
    // SUSPECTED BUG: Clear in time-picker mode does not close the panel.
    expect(timed.container.querySelector(".absolute.z-50")).toBeTruthy();
  });

  it("does not open when disabled, closes on an outside press, and shows errors", async () => {
    const user = userEvent.setup();
    const { container, rerender, onChange } = renderPicker({ disabled: true, value: new Date(2026, 2, 15) });
    await user.click(screen.getByRole("button", { name: "15 Mar 2026" }));
    expect(container.querySelector(".absolute.z-50")).toBeNull();

    rerender(
      <DatePicker
        onChange={onChange}
        label="When"
        value={new Date(2026, 2, 15)}
        isError
        errorMessage="Required"
        placeholder="Choose"
      />,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
    expect(screen.getByText("When").className).toContain("text-danger");
    await user.click(screen.getByRole("button", { name: "15 Mar 2026" }));
    fireEvent.mouseDown(document.body);
    expect(container.querySelector(".absolute.z-50")).toBeNull();

    rerender(<DatePicker onChange={onChange} isError />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("uses the small size and a custom class", () => {
    const { container } = renderPicker({ size: FORM_ELEMENT_SIZE.SM, className: "when-field" });
    expect(container.firstElementChild!.className).toContain("when-field");
    expect(screen.getByRole("button", { name: "Select date" }).className).toContain("text-xs");
    expect(screen.getByRole("button", { name: "Select date" }).className).toContain("min-w-[160px]");
  });

  it("activates a focused day with Enter and does not move focus with arrows", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker();
    await user.click(screen.getByRole("button", { name: "Select date" }));
    const fifteenth = day(container, 15);
    fifteenth.focus();
    await user.keyboard("{ArrowRight}");
    expect(fifteenth).toHaveFocus();
    expect(onChange).not.toHaveBeenCalled();
    await user.keyboard("{Enter}");
    expect((onChange.mock.calls[0][0] as Date).getDate()).toBe(15);
  });

  it.each([
    ["room below and to the right", 1000, 800, { top: 0, bottom: 40, left: 0, right: 200 }, "down", "left"],
    ["near the right edge", 1000, 800, { top: 0, bottom: 40, left: 800, right: 980 }, "down", "right"],
    ["near the bottom", 1000, 800, { top: 500, bottom: 540, left: 0, right: 200 }, "up", "left"],
    ["cramped below without room above", 1000, 800, { top: 100, bottom: 700, left: 0, right: 200 }, "down", "left"],
    ["right side but the anchor is narrower than the panel", 400, 800, { top: 0, bottom: 40, left: 200, right: 240 }, "down", "left"],
  ] as const)("places the panel %s", async (_name, width, height, box, position, align) => {
    const user = userEvent.setup();
    setViewport(width, height);
    const { container } = renderPicker();
    mockRect(container.firstElementChild as HTMLElement, box);
    await user.click(screen.getByRole("button", { name: "Select date" }));
    expectAnchored(panel(container), position, align);
  });
});
