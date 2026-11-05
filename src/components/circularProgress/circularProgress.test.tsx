import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import CircularProgress, { CIRCULAR_PROGRESS_SIZE, CIRCULAR_PROGRESS_TYPE } from "./index";

it("CircularProgress clamps the label", () => {
  const { rerender } = render(
    <CircularProgress value={140} size={CIRCULAR_PROGRESS_SIZE.LG} type={CIRCULAR_PROGRESS_TYPE.SUCCESS} />,
  );
  expect(screen.getByText("100%")).toBeInTheDocument();
  rerender(<CircularProgress value={-5} showLabel={false} />);
  expect(screen.queryByText(/%/)).not.toBeInTheDocument();
});
