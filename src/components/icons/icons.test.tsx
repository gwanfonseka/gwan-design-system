import type { FC } from "react";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import * as Icons from "./index";

it("renders every exported icon as an svg", () => {
  const icons = Object.entries(Icons).filter((entry): entry is [string, FC] => typeof entry[1] === "function");
  expect(icons.length).toBeGreaterThan(20);
  for (const [name, Icon] of icons) {
    const { unmount, container } = render(<Icon />);
    expect(container.querySelector("svg"), name).toBeTruthy();
    unmount();
  }
});
