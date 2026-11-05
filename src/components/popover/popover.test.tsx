import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Popover, { POPOVER_TRIGGER } from "./index";

describe("Popover", () => {
  it("closes on an outside press but not on a press inside", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Popover trigger={<span>Open</span>} content={<p>Body</p>} />
        <p>Outside</p>
      </>,
    );
    await user.click(screen.getByText("Open"));
    await user.click(screen.getByText("Body"));
    expect(screen.getByText("Body")).toBeInTheDocument();
    await user.click(screen.getByText("Outside"));
    expect(screen.queryByText("Body")).not.toBeInTheDocument();
  });

  it("opens on hover and closes when the pointer leaves", () => {
    const { container } = render(
      <Popover trigger={<span>Open</span>} content={<p>Body</p>} triggerOn={POPOVER_TRIGGER.HOVER} />,
    );
    const root = container.firstElementChild!;
    fireEvent.mouseEnter(root);
    expect(screen.getByText("Body")).toBeInTheDocument();
    fireEvent.mouseLeave(root);
    expect(screen.queryByText("Body")).not.toBeInTheDocument();
  });
});
