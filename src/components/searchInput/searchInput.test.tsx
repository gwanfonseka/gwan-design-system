import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FORM_ELEMENT_SIZE } from "../input";
import SearchInput from "./index";
import userEvent from "@testing-library/user-event";

describe("SearchInput", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("calls onChange at once and onSearch only after the debounce, for the last value", () => {
    const onChange = vi.fn();
    const onSearch = vi.fn();
    render(<SearchInput value="" onChange={onChange} onSearch={onSearch} debounce={200} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a" } });
    act(() => vi.advanceTimersByTime(100));
    fireEvent.change(input, { target: { value: "ab" } });
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onSearch).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(200));
    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("ab");
  });

  it("works without onSearch", () => {
    const onChange = vi.fn();
    render(<SearchInput value="" onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "a" } });
    expect(onChange).toHaveBeenCalledWith("a");
    expect(vi.getTimerCount()).toBe(0);
  });

  it.each([
    [FORM_ELEMENT_SIZE.SM, "", "pr-2.5"],
    [FORM_ELEMENT_SIZE.SM, "text", "pr-7"],
    [FORM_ELEMENT_SIZE.MD, "", "pr-3"],
    [FORM_ELEMENT_SIZE.MD, "text", "pr-9"],
  ])("leaves room for the right slot at size %s with value '%s'", (size, value, className) => {
    render(<SearchInput value={value} onChange={() => {}} size={size} />);
    expect(screen.getByRole("textbox").className).toContain(className);
  });
});

it("SearchInput reports typed text and clears it", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  const { container, rerender } = render(
    <SearchInput value="" onChange={onChange} label="Find" size={FORM_ELEMENT_SIZE.SM} />,
  );
  await user.type(screen.getByLabelText("Find"), "a");
  expect(onChange).toHaveBeenCalledWith("a");
  rerender(<SearchInput value="a" onChange={onChange} label="Find" />);
  await user.click(container.querySelector(".cursor-pointer")!);
  expect(onChange).toHaveBeenCalledWith("");
});
