import { act } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { describe, expect, it, vi } from "vitest";
import tagStory from "@/templates/component-library/tags/tag.story";
import Playground from "./Playground";

describe("Playground hydration", () => {
  it("hydrates without a mismatch", async () => {
    const container = document.createElement("div");
    container.innerHTML = renderToString(<Playground story={tagStory} />);
    document.body.appendChild(container);

    const onRecoverableError = vi.fn();
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    await act(async () => {
      hydrateRoot(container, <Playground story={tagStory} />, { onRecoverableError });
    });

    expect(onRecoverableError).not.toHaveBeenCalled();
    const messages = consoleError.mock.calls.map((call) => call.map(String).join(" "));
    expect(messages.filter((m) => /hydrat/i.test(m))).toEqual([]);
    container.remove();
  });
});
