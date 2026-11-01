import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TimeLine, { STEP_DIRECTION, STEP_STATUS, type ILog } from "./index";

function log(title: string, status: string, extra: Partial<ILog> = {}): ILog {
  return { title, status, ...extra };
}

function titles() {
  return screen.getAllByText(/./, { selector: "p.text-base" }).map((node) => node.textContent);
}

function iconClass(title: string) {
  const row = screen.getByText(title).closest(".gap-4")!;
  return row.querySelector(".rounded-full")!.className;
}

describe("TimeLine", () => {
  it("appends Pending and reverses a downward timeline", () => {
    render(
      <TimeLine
        logs={[
          log("Queued", STEP_STATUS.SUCCESS, {
            placeholderRight: "09:00",
            placeholderBottom: "Waiting",
            description: "Accepted",
          }),
          log("Running", "Running"),
        ]}
      />,
    );
    expect(titles()).toEqual(["Pending", "Running", "Queued"]);
    expect(screen.getByText("09:00").className).toContain("italic");
    expect(screen.getByText("Waiting")).toBeInTheDocument();
    expect(screen.getByText("Accepted").className).toContain("bg-surface-overlay");
    expect(screen.getByText("Pending").className).toContain("pb-8");
    expect(screen.getByText("Queued").className).not.toContain("pb-8");
  });

  it("keeps source order and appends Pending when direction is upward", () => {
    render(
      <TimeLine
        direction={STEP_DIRECTION.UPWARD}
        logs={[log("One", STEP_STATUS.SUCCESS), log("Two", "Running")]}
      />,
    );
    expect(titles()).toEqual(["One", "Two", "Pending"]);
  });

  it("does not add Pending when the last status is failed or finished, and reverses only downward", () => {
    const { rerender } = render(
      <TimeLine
        logs={[
          log("One", STEP_STATUS.SUCCESS),
          log("Two", STEP_STATUS.FAILED),
        ]}
      />,
    );
    expect(titles()).toEqual(["Two", "One"]);
    expect(screen.queryByText("Pending")).not.toBeInTheDocument();

    rerender(
      <TimeLine
        direction={STEP_DIRECTION.UPWARD}
        logs={[log("One", STEP_STATUS.SUCCESS), log("Two", STEP_STATUS.FINISHED)]}
      />,
    );
    expect(titles()).toEqual(["One", "Two"]);
  });

  it("maps a single log and many logs", () => {
    const { rerender } = render(
      <TimeLine logs={[log("Only", STEP_STATUS.SUCCESS)]} direction={STEP_DIRECTION.UPWARD} />,
    );
    expect(titles()).toEqual(["Only", "Pending"]);

    rerender(
      <TimeLine
        logs={[
          log("A", STEP_STATUS.SUCCESS),
          log("B", STEP_STATUS.SUCCESS),
          log("C", STEP_STATUS.SUCCESS),
          log("D", STEP_STATUS.FINISHED),
        ]}
      />,
    );
    expect(titles()).toEqual(["D", "C", "B", "A"]);
  });

  it("maps status to the success, danger, and neutral icons", () => {
    render(
      <TimeLine
        direction={STEP_DIRECTION.UPWARD}
        logs={[
          log("Ok", STEP_STATUS.SUCCESS),
          log("Done", STEP_STATUS.FINISHED),
          log("Bad", STEP_STATUS.FAILED),
          log("Later", "Pending"),
        ]}
      />,
    );
    // Last status is Pending, which is not failed/finished, so another Pending is appended.
    expect(titles()).toEqual(["Ok", "Done", "Bad", "Later", "Pending"]);
    expect(iconClass("Ok")).toContain("bg-success");
    expect(iconClass("Done")).toContain("bg-success");
    expect(iconClass("Bad")).toContain("bg-danger");
    expect(iconClass("Later")).toContain("bg-surface-raised");
    expect(screen.getAllByText("Pending").at(-1)!.closest(".gap-4")!.querySelector(".rounded-full")!.className).toContain(
      "bg-surface-raised",
    );
  });

  it("matches Success, Failed, and Finished without case sensitivity", () => {
    render(
      <TimeLine
        direction={STEP_DIRECTION.UPWARD}
        logs={[log("Odd", "success"), log("Bad", "FAILED"), log("Done", "finished")]}
      />,
    );
    expect(titles()).toEqual(["Odd", "Bad", "Done"]);
    expect(iconClass("Odd")).toContain("bg-success");
    expect(iconClass("Bad")).toContain("bg-danger");
    expect(iconClass("Done")).toContain("bg-success");
    expect(screen.queryByText("Pending")).not.toBeInTheDocument();
  });

  it("reorders when direction changes", () => {
    const logs = [log("One", STEP_STATUS.SUCCESS), log("Two", "Running")];
    const { rerender } = render(<TimeLine logs={logs} direction={STEP_DIRECTION.DOWNWARD} />);
    expect(titles()).toEqual(["Pending", "Two", "One"]);
    rerender(<TimeLine logs={logs} direction={STEP_DIRECTION.UPWARD} />);
    expect(titles()).toEqual(["One", "Two", "Pending"]);
  });

  it("applies className on the root", () => {
    const { container } = render(
      <TimeLine className="timeline" logs={[log("Only", STEP_STATUS.FINISHED)]} />,
    );
    expect(container.firstElementChild).toHaveClass("timeline");
    expect(titles()).toEqual(["Only"]);
  });

  it("renders an empty timeline when logs is empty", () => {
    const { container } = render(<TimeLine logs={[]} className="timeline" />);
    expect(container.firstElementChild).toHaveClass("timeline");
    expect(container.firstElementChild).toBeEmptyDOMElement();
    expect(screen.queryByText("Pending")).not.toBeInTheDocument();
  });
});
