import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Alert, { ALERT_TYPE, ALERT_VARIANT } from "./index";
import userEvent from "@testing-library/user-event";

describe("Alert", () => {
  it("uses a white icon on the solid variant and the type colour otherwise", () => {
    const { rerender } = render(<Alert message="Saved" type={ALERT_TYPE.SUCCESS} variant={ALERT_VARIANT.SOLID} />);
    expect(screen.getByRole("alert").firstElementChild!.className).toContain("text-white");
    rerender(<Alert message="Saved" type={ALERT_TYPE.SUCCESS} variant={ALERT_VARIANT.SUBTLE} />);
    expect(screen.getByRole("alert").firstElementChild!.className).toContain("text-success");
  });
});

it("Alert renders its message and dismisses", async () => {
  const user = userEvent.setup();
  const onDismiss = vi.fn();
  render(
    <Alert
      type={ALERT_TYPE.SUCCESS}
      variant={ALERT_VARIANT.OUTLINE}
      title="Saved"
      message="All good"
      dismissible
      onDismiss={onDismiss}
    />,
  );
  expect(screen.getByText("All good")).toBeInTheDocument();
  await user.click(screen.getByRole("button"));
  expect(onDismiss).toHaveBeenCalledTimes(1);
  expect(screen.queryByText("All good")).not.toBeInTheDocument();
});
