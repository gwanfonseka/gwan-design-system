import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CodeSnippet from "./index";

const CODE = `import { Button } from "gwan-design-system";\n\n<Button label="Hi" />`;

describe("CodeSnippet", () => {
  it("highlights the code without changing its text", async () => {
    const { container } = render(<CodeSnippet code={CODE} />);
    const code = container.querySelector("pre code")!;
    expect(code.textContent).toBe(CODE);
    await waitFor(() => expect(code.querySelector("span[style]")).not.toBeNull(), { timeout: 5000 });
    expect(code.textContent).toBe(CODE);
    expect(screen.getByRole("button", { name: "Copy code" })).toBeInTheDocument();
  });
});
