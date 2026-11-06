import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import Switch, { SWITCH_SIZE } from "./index";

it("Switch toggles and can be disabled", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  render(<Switch checked={false} onChange={onChange} label="Alerts" description="Email" size={SWITCH_SIZE.LARGE} />);
  const toggle = screen.getByRole("switch", { name: "Alerts" });
  expect(toggle).toHaveAccessibleDescription("Email");
  await user.click(toggle);
  expect(onChange).toHaveBeenCalledWith(true);
  render(<Switch checked disabled onChange={onChange} label="Locked" />);
  expect(screen.getByRole("switch", { name: "Locked" })).toBeDisabled();
});
