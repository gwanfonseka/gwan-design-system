import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Callout, { CALLOUT_TYPE } from "./index";

describe("Callout", () => {
  it.each([
    [CALLOUT_TYPE.INFO, "Note"],
    [CALLOUT_TYPE.WARNING, "Warning"],
    [CALLOUT_TYPE.TIP, "Tip"],
  ])("draws the %s icon and default title", (type, label) => {
    const { container } = render(<Callout type={type}>Body</Callout>);
    expect(container.querySelector("svg")).not.toBeNull();
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("draws the danger icon and lets a title replace the default", () => {
    const { container } = render(
      <Callout type={CALLOUT_TYPE.DANGER} title="Careful">
        Body
      </Callout>,
    );
    expect(container.querySelector("svg")).not.toBeNull();
    expect(screen.getByText("Careful")).toBeInTheDocument();
  });
});
