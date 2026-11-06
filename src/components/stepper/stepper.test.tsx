import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Stepper, { STEP_STATUS, STEPPER_ORIENTATION } from "./index";

const steps = [
  { key: "a", title: "Account" },
  { key: "b", title: "Review", content: <p>Review form</p> },
  { key: "c", title: "Done", content: <p>Done form</p> },
];

describe("Stepper", () => {
  it("derives status from the active key and shows only the active step's content", () => {
    render(<Stepper orientation={STEPPER_ORIENTATION.VERTICAL} steps={steps} activeKey="b" />);
    expect(screen.getByText("Review form")).toBeInTheDocument();
    expect(screen.queryByText("Done form")).not.toBeInTheDocument();
    expect(screen.getByText("Done").className).toContain("text-muted-fg");
    expect(screen.getByText("Account").className).toContain("text-foreground");
  });

  it("lets a step's own status win over the active key", () => {
    render(
      <Stepper
        orientation={STEPPER_ORIENTATION.VERTICAL}
        activeKey="a"
        steps={[{ key: "a", title: "Account" }, { key: "b", title: "Review", status: STEP_STATUS.ACTIVE, content: <p>Shown</p> }]}
      />,
    );
    expect(screen.getByText("Shown")).toBeInTheDocument();
  });

  it("renders horizontally by default", () => {
    const { container } = render(<Stepper steps={steps} activeKey="c" />);
    expect(container.firstElementChild!.className).toContain("flex-row");
  });
});

it("Stepper marks the active step", () => {
  render(
    <Stepper
      orientation={STEPPER_ORIENTATION.VERTICAL}
      activeKey="b"
      steps={[
        { key: "a", title: "Account" },
        { key: "b", title: "Review", description: "Check" },
        { key: "c", title: "Done", status: STEP_STATUS.ERROR },
      ]}
    />,
  );
  expect(screen.getByText("Review")).toBeInTheDocument();
  expect(screen.getByText("Check")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
});

it("Stepper can keep every step's content visible", () => {
  const steps = [
    { key: "a", title: "One", content: <p>First</p> },
    { key: "b", title: "Two", content: <p>Second</p> },
  ];
  const { rerender } = render(<Stepper orientation={STEPPER_ORIENTATION.VERTICAL} activeKey="a" steps={steps} />);
  expect(screen.queryByText("Second")).not.toBeInTheDocument();
  rerender(<Stepper orientation={STEPPER_ORIENTATION.VERTICAL} activeKey="a" steps={steps} showAllContent />);
  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Second")).toBeInTheDocument();
});
