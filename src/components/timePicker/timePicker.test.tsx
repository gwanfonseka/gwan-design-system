import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { expectAnchored, mockRect, setViewport } from "../../test/helpers";
import { FORM_ELEMENT_SIZE } from "../input";
import TimePicker, { TIME_FORMAT } from "./index";

function renderPicker(props: Partial<React.ComponentProps<typeof TimePicker>> = {}) {
  const onChange = vi.fn();
  const result = render(
    <TimePicker onChange={onChange} label="Start" {...props} />,
  );
  return { ...result, onChange };
}

function panel(container: HTMLElement) {
  const node = container.querySelector(".absolute.z-50");
  if (!node) throw new Error("panel is closed");
  return node as HTMLElement;
}

function columns(container: HTMLElement) {
  return [...panel(container).querySelectorAll(".overflow-y-auto")] as HTMLElement[];
}

function activeText(col: HTMLElement) {
  const active = [...col.querySelectorAll("button")].filter((b) =>
    b.className.includes("bg-primary-default"),
  );
  return active.map((b) => b.textContent);
}

describe("TimePicker", () => {
  beforeEach(() => {
    vi.spyOn(Element.prototype, "scrollIntoView").mockImplementation(() => {});
  });

  it("shows the placeholder until a value is set, and defaults to 12-hour", () => {
    renderPicker();
    expect(screen.getByRole("button", { name: "Select time" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "AM" })).not.toBeInTheDocument();
  });

  it.each([
    ["14:30", TIME_FORMAT.H12, false, "02:30 PM"],
    ["00:05", TIME_FORMAT.H12, false, "12:05 AM"],
    ["12:00", TIME_FORMAT.H12, false, "12:00 PM"],
    ["09:05", TIME_FORMAT.H12, false, "09:05 AM"],
    ["9:5", TIME_FORMAT.H12, false, "09:05 AM"],
    ["13:05:09", TIME_FORMAT.H12, true, "01:05:09 PM"],
    ["00:00:00", TIME_FORMAT.H12, true, "12:00:00 AM"],
    ["14:30", TIME_FORMAT.H24, false, "14:30"],
    ["00:05", TIME_FORMAT.H24, false, "00:05"],
    ["23:59:58", TIME_FORMAT.H24, true, "23:59:58"],
    ["7:8", TIME_FORMAT.H24, false, "07:08"],
    [" 14 : 30 ", TIME_FORMAT.H12, false, "02:30 PM"],
    ["1.9:2.8", TIME_FORMAT.H24, false, "01:02"],
  ])("parses %j as %s (seconds=%s) into %s", (value, format, withSeconds, display) => {
    renderPicker({ value, format, withSeconds });
    expect(screen.getByRole("button", { name: display })).toBeInTheDocument();
  });

  // SUSPECTED BUG: invalid segments are parsed with parseInt and rendered as NaN / out-of-range numbers.
  it.each([
    ["abc", TIME_FORMAT.H12, false, "NaN:00 AM"],
    ["14:xx", TIME_FORMAT.H12, false, "02:NaN PM"],
    ["::", TIME_FORMAT.H24, false, "NaN:NaN"],
    ["99:99", TIME_FORMAT.H24, false, "99:99"],
    ["99:99", TIME_FORMAT.H12, false, "87:99 PM"],
    ["-3:15", TIME_FORMAT.H12, false, "-3:15 AM"],
    ["24:00", TIME_FORMAT.H24, false, "24:00"],
    ["", TIME_FORMAT.H12, false, "Select time"],
  ])("keeps today's rendering of invalid value %j", (value, format, withSeconds, display) => {
    renderPicker({ value, format, withSeconds });
    expect(screen.getByRole("button", { name: display })).toBeInTheDocument();
  });

  it("updates the displayed time when the controlled value changes", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <TimePicker value="09:15" onChange={onChange} format={TIME_FORMAT.H24} />,
    );
    expect(screen.getByRole("button", { name: "09:15" })).toBeInTheDocument();
    rerender(<TimePicker value="18:45" onChange={onChange} format={TIME_FORMAT.H24} />);
    expect(screen.getByRole("button", { name: "18:45" })).toBeInTheDocument();
    rerender(<TimePicker value={null} onChange={onChange} format={TIME_FORMAT.H24} />);
    expect(screen.getByRole("button", { name: "Select time" })).toBeInTheDocument();
  });

  // SUSPECTED BUG: changing `format` does not re-parse `value`, so the label and columns go stale.
  it("does not re-parse when only the format changes", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <TimePicker value="14:30" onChange={onChange} format={TIME_FORMAT.H24} />,
    );
    rerender(<TimePicker value="14:30" onChange={onChange} format={TIME_FORMAT.H12} />);
    expect(screen.getByRole("button", { name: "14:30 AM" })).toBeInTheDocument();
  });

  it("highlights the parsed column values and scrolls them into view on open", async () => {
    const user = userEvent.setup();
    const scroll = vi.spyOn(Element.prototype, "scrollIntoView");
    const { container } = renderPicker({ value: "14:30:08", withSeconds: true });
    await user.click(screen.getByRole("button", { name: "02:30:08 PM" }));

    const [hours, minutes, seconds] = columns(container);
    expect(activeText(hours)).toEqual(["02"]);
    expect(activeText(minutes)).toEqual(["30"]);
    expect(activeText(seconds)).toEqual(["08"]);
    expect(screen.getByRole("button", { name: "PM" }).className).toContain("bg-primary-default");
    expect(screen.getByRole("button", { name: "AM" }).className).not.toContain("bg-primary-default ");

    const scrolled = scroll.mock.instances.filter((node): node is HTMLElement => node instanceof HTMLElement);
    expect(scrolled.map((node) => node.textContent)).toEqual(
      expect.arrayContaining(["02", "30", "08"]),
    );
    expect(scroll).toHaveBeenCalledWith({ block: "center" });
  });

  it("offers 1-12 plus AM/PM in 12-hour mode and 0-23 without a period in 24-hour mode", async () => {
    const user = userEvent.setup();
    const view = renderPicker({ value: "00:00" });
    await user.click(screen.getByRole("button", { name: "12:00 AM" }));
    const hourButtons = columns(view.container)[0].querySelectorAll("button");
    expect(hourButtons).toHaveLength(12);
    expect(hourButtons[0]).toHaveTextContent("01");
    expect(hourButtons[11]).toHaveTextContent("12");
    expect(screen.getByRole("button", { name: "AM" })).toBeInTheDocument();
    view.unmount();

    const h24 = renderPicker({ value: "00:00", format: TIME_FORMAT.H24 });
    await user.click(screen.getByRole("button", { name: "00:00" }));
    const hours24 = columns(h24.container)[0].querySelectorAll("button");
    expect(hours24).toHaveLength(24);
    expect(hours24[0]).toHaveTextContent("00");
    expect(hours24[23]).toHaveTextContent("23");
    expect(screen.queryByRole("button", { name: "AM" })).not.toBeInTheDocument();
    expect(columns(h24.container)).toHaveLength(2);
  });

  it("emits 24-hour strings when a column or period is chosen", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({ value: "09:10" });
    await user.click(screen.getByRole("button", { name: "09:10 AM" }));
    await user.click(withinButtons(columns(container)[0], "11"));
    expect(onChange).toHaveBeenLastCalledWith("11:10");
    await user.click(withinButtons(columns(container)[1], "45"));
    expect(onChange).toHaveBeenLastCalledWith("11:45");
    await user.click(screen.getByRole("button", { name: "PM" }));
    expect(onChange).toHaveBeenLastCalledWith("23:45");
    await user.click(screen.getByRole("button", { name: "AM" }));
    expect(onChange).toHaveBeenLastCalledWith("11:45");
  });

  it("emits midnight and noon from the 12-hour period control", async () => {
    const user = userEvent.setup();
    const noon = renderPicker({ value: "12:15" });
    await user.click(screen.getByRole("button", { name: "12:15 PM" }));
    await user.click(screen.getByRole("button", { name: "AM" }));
    expect(noon.onChange).toHaveBeenCalledWith("00:15");
    noon.unmount();

    const midnight = renderPicker({ value: "00:15" });
    await user.click(screen.getByRole("button", { name: "12:15 AM" }));
    await user.click(screen.getByRole("button", { name: "PM" }));
    expect(midnight.onChange).toHaveBeenCalledWith("12:15");
  });

  it("includes seconds only when asked, and emits them", async () => {
    const user = userEvent.setup();
    const { container, onChange } = renderPicker({
      value: "01:02:03",
      format: TIME_FORMAT.H24,
      withSeconds: true,
    });
    await user.click(screen.getByRole("button", { name: "01:02:03" }));
    const seconds = columns(container)[2];
    await user.click(withinButtons(seconds, "59"));
    expect(onChange).toHaveBeenCalledWith("01:02:59");
  });

  it("follows a controlled value while the panel is open", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container, rerender } = render(
      <TimePicker value="08:00" onChange={onChange} format={TIME_FORMAT.H24} />,
    );
    await user.click(screen.getByRole("button", { name: "08:00" }));
    expect(activeText(columns(container)[0])).toEqual(["08"]);
    rerender(<TimePicker value="19:42" onChange={onChange} format={TIME_FORMAT.H24} />);
    expect(screen.getByRole("button", { name: "19:42" })).toBeInTheDocument();
    expect(activeText(columns(container)[0])).toEqual(["19"]);
    expect(activeText(columns(container)[1])).toEqual(["42"]);
  });

  it("toggles the panel, ignores clicks while disabled, and closes on an outside press", async () => {
    const user = userEvent.setup();
    const { container, rerender, onChange } = renderPicker({ value: "10:00" });
    const trigger = screen.getByRole("button", { name: "10:00 AM" });
    await user.click(trigger);
    expect(panel(container)).toBeTruthy();
    await user.click(trigger);
    expect(container.querySelector(".absolute.z-50")).toBeNull();

    rerender(<TimePicker value="10:00" onChange={onChange} disabled />);
    await user.click(screen.getByRole("button", { name: "10:00 AM" }));
    expect(container.querySelector(".absolute.z-50")).toBeNull();

    rerender(<TimePicker value="10:00" onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "10:00 AM" }));
    fireEvent.mouseDown(document.body);
    expect(container.querySelector(".absolute.z-50")).toBeNull();
  });

  it("shows the error message only when both isError and errorMessage are set", () => {
    const { rerender, onChange } = renderPicker({ isError: true, errorMessage: "Bad time" });
    expect(screen.getByRole("alert")).toHaveTextContent("Bad time");
    expect(screen.getByText("Start").className).toContain("text-danger");
    rerender(<TimePicker onChange={onChange} label="Start" isError />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("applies the small size and a custom placeholder", () => {
    renderPicker({ size: FORM_ELEMENT_SIZE.SM, placeholder: "When?" });
    const trigger = screen.getByRole("button", { name: "When?" });
    expect(trigger.className).toContain("text-xs");
    expect(trigger.className).toContain("py-1.5");
  });

  it.each([
    ["room below and to the right", 1000, 800, { top: 0, bottom: 40, left: 0, right: 160 }, "down", "left"],
    ["near the right edge", 1000, 800, { top: 0, bottom: 40, left: 800, right: 960 }, "down", "right"],
    ["near the bottom", 1000, 800, { top: 560, bottom: 600, left: 0, right: 160 }, "up", "left"],
    ["cramped below but not enough room above", 1000, 800, { top: 80, bottom: 600, left: 0, right: 160 }, "down", "left"],
    // spaceRight < 240, but rect.right is not greater than the panel width, so it stays left.
    ["right edge whose anchor is narrower than the panel", 300, 800, { top: 0, bottom: 40, left: 100, right: 150 }, "down", "left"],
  ] as const)("places the panel %s", async (_name, width, height, box, position, align) => {
    const user = userEvent.setup();
    setViewport(width, height);
    const { container } = renderPicker({ value: "10:00" });
    mockRect(container.firstElementChild as HTMLElement, box);
    await user.click(screen.getByRole("button", { name: "10:00 AM" }));
    expectAnchored(panel(container), position, align);
  });
});

function withinButtons(col: HTMLElement, name: string) {
  const match = [...col.querySelectorAll("button")].find((b) => b.textContent === name);
  if (!match) throw new Error(`missing ${name}`);
  return match;
}
