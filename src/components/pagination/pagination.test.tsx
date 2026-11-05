import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Pagination from "./index";

const options = [
  { value: "10", label: "10" },
  { value: "25", label: "25" },
];
const arrows = () => screen.getAllByRole("button");

describe("Pagination", () => {
  it("moves between pages", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination total={30} page={2} size={10} options={options} onChange={onChange} />);
    expect(screen.getByText("2 of 3 pages")).toBeInTheDocument();
    const [left, right] = arrows();
    await user.click(left);
    expect(onChange).toHaveBeenLastCalledWith({ total: 30, page: 1, size: 10 });
    await user.click(right);
    expect(onChange).toHaveBeenLastCalledWith({ total: 30, page: 3, size: 10 });
  });

  it("disables the arrows at the ends", () => {
    const { rerender } = render(<Pagination total={30} page={1} size={10} options={options} onChange={() => {}} />);
    expect(arrows()[0]).toBeDisabled();
    rerender(<Pagination total={30} page={3} size={10} options={options} onChange={() => {}} />);
    expect(arrows()[1]).toBeDisabled();
  });

  it("does nothing on previous when the page is below 1", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination total={30} page={0} size={10} options={options} onChange={onChange} />);
    await user.click(arrows()[0]);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("does nothing on next when the page is already past the end", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination total={30} page={5} size={10} options={options} onChange={onChange} />);
    await user.click(arrows()[1]);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("goes back to page 1 when the page size changes", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination total={30} page={3} size={10} options={options} onChange={onChange} />);
    await user.click(screen.getByRole("combobox"));
    await user.click(within(screen.getByRole("listbox")).getByRole("option", { name: "25" }));
    expect(onChange).toHaveBeenCalledWith({ total: 30, page: 1, size: 25 });
  });
});

it("Pagination changes the page and the page size", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  render(
    <Pagination
      total={50}
      page={2}
      size={10}
      options={[{ label: "10", value: "10" }, { label: "20", value: "20" }]}
      onChange={onChange}
    />,
  );
  expect(screen.getByText("2 of 5 pages")).toBeInTheDocument();
  const buttons = screen.getAllByRole("button");
  await user.click(buttons[0]);
  expect(onChange).toHaveBeenCalledWith({ total: 50, page: 1, size: 10 });
  await user.click(buttons[1]);
  expect(onChange).toHaveBeenCalledWith({ total: 50, page: 3, size: 10 });
});
