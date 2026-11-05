import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ColorPicker from "./index";

const open = async (user: ReturnType<typeof userEvent.setup>) =>
  user.click(screen.getByRole("button", { expanded: false }));

describe("ColorPicker", () => {
  it("only reports valid hex values typed into the field", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ColorPicker value="#112233" onChange={onChange} />);
    await open(user);
    const hex = screen.getByRole("textbox", { name: "Hex colour" });
    fireEvent.change(hex, { target: { value: "#12" } });
    expect(hex).toHaveValue("#12");
    expect(onChange).not.toHaveBeenCalled();
    fireEvent.change(hex, { target: { value: "#abc" } });
    expect(onChange).toHaveBeenLastCalledWith("#abc");
    fireEvent.change(hex, { target: { value: "#A1B2C3" } });
    expect(onChange).toHaveBeenLastCalledWith("#A1B2C3");
  });

  it("reports the native colour input", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ColorPicker value="#112233" onChange={onChange} />);
    await open(user);
    fireEvent.change(screen.getByLabelText("Pick a colour"), { target: { value: "#445566" } });
    expect(onChange).toHaveBeenCalledWith("#445566");
    expect(screen.getByRole("textbox", { name: "Hex colour" })).toHaveValue("#445566");
  });

  it("marks the selected preset", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ColorPicker value="#000000" presets={["#000000", "#ffffff"]} onChange={onChange} />);
    await open(user);
    expect(screen.getByTitle("#000000").style.borderColor).not.toBe("transparent");
    expect(screen.getByTitle("#ffffff").style.borderColor).toBe("transparent");
    await user.click(screen.getByTitle("#ffffff"));
    expect(onChange).toHaveBeenCalledWith("#ffffff");
  });

  it("stays open on a press inside and closes on one outside", async () => {
    const user = userEvent.setup();
    render(
      <>
        <ColorPicker value="#112233" onChange={() => {}} />
        <p>Outside</p>
      </>,
    );
    await open(user);
    await user.click(screen.getByText("HEX"));
    expect(screen.getByRole("textbox", { name: "Hex colour" })).toBeInTheDocument();
    await user.click(screen.getByText("Outside"));
    expect(screen.queryByRole("textbox", { name: "Hex colour" })).not.toBeInTheDocument();
  });
});

it("ColorPicker reports a preset and the default swatch", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  const { container } = render(<ColorPicker label="Ink" onChange={onChange} presets={["#ff0000"]} />);
  expect(screen.getByText("Ink")).toBeInTheDocument();
  await user.click(container.querySelector("button")!);
  await user.click(screen.getByTitle("#ff0000"));
  expect(onChange).toHaveBeenCalledWith("#ff0000");
});
