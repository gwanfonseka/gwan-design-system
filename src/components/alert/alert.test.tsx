import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Alert, { ALERT_TYPE, ALERT_VARIANT } from "./index";

describe("Alert", () => {
  it("uses a white icon on the solid variant and the type colour otherwise", () => {
    const { rerender } = render(<Alert message="Saved" type={ALERT_TYPE.SUCCESS} variant={ALERT_VARIANT.SOLID} />);
    expect(screen.getByRole("alert").firstElementChild!.className).toContain("text-white");
    rerender(<Alert message="Saved" type={ALERT_TYPE.SUCCESS} variant={ALERT_VARIANT.SUBTLE} />);
    expect(screen.getByRole("alert").firstElementChild!.className).toContain("text-success");
  });
});
