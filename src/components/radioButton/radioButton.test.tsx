import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import RadioButton from "./index";

it("RadioButton selects its value", async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  render(
    <>
      <RadioButton label="Yes" value="yes" name="answer" selectedValue="no" onChange={onChange} />
      <RadioButton label="No" value="no" name="answer" selectedValue="no" onChange={onChange} disabled />
    </>,
  );
  await user.click(screen.getByLabelText("Yes"));
  expect(onChange).toHaveBeenCalledWith("yes");
  await user.click(screen.getByLabelText("No"));
  expect(onChange).toHaveBeenCalledTimes(1);
});
