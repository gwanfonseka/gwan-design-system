import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import Checkbox, { CHECKBOX_EDGE_STYLE, CHECKBOX_SIZE } from "./index";

it("Checkbox reports the toggled value and can be disabled", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  render(
    <Checkbox
      label="Agree"
      checked={false}
      onChange={onChange}
      size={CHECKBOX_SIZE.LARGE}
      edges={CHECKBOX_EDGE_STYLE.SQUARED}
    />,
  );
  await user.click(screen.getByLabelText("Agree"));
  expect(onChange).toHaveBeenCalledWith(true);
  render(<Checkbox label="Locked" checked onChange={onChange} disabled />);
  expect(screen.getByLabelText("Locked")).toBeDisabled();
});
