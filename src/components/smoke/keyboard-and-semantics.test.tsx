import { StrictMode, useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Chip from "../chip";
import Drawer from "../drawer";
import FileUploader from "../fileUploader";
import FilterDropdown from "../filterDropdown";
import Tabs from "../tabs";

describe("Drawer", () => {
  const Harness = ({ showOverlay = true }: { showOverlay?: boolean }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open</button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Edit profile" showOverlay={showOverlay}>
          <input aria-label="Name" />
        </Drawer>
      </>
    );
  };

  it("is a labelled dialog that is out of reach while closed", () => {
    render(<Harness />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    const panel = document.querySelector('[role="dialog"]')!;
    expect(panel).toHaveAttribute("inert");
  });

  it("moves focus in, closes on Escape, and gives focus back", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const trigger = screen.getByRole("button", { name: "Open" });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "Edit profile" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByRole("button", { name: "Close drawer" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("keeps Tab inside while the overlay is shown", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(screen.getByRole("button", { name: "Open" }));
    await user.tab();
    expect(screen.getByRole("textbox", { name: "Name" })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Close drawer" })).toHaveFocus();
  });
});

describe("Chip", () => {
  it("removes from a labelled, keyboard-reachable button", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(<Chip label="Design" onClear={onClear} />);
    await user.tab();
    expect(screen.getByRole("button", { name: "Remove Design" })).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});

describe("FilterDropdown", () => {
  it("opens from a button, closes on Escape, and returns focus", async () => {
    const user = userEvent.setup();
    render(<FilterDropdown>{(close) => <button onClick={close}>Apply</button>}</FilterDropdown>);
    const trigger = screen.getByRole("button", { name: "Filter" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await user.tab();
    await user.keyboard("{Enter}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    await user.tab();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("button", { name: "Apply" })).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("returns focus to the trigger when the panel closes itself", async () => {
    const user = userEvent.setup();
    render(<FilterDropdown>{(close) => <button onClick={close}>Apply</button>}</FilterDropdown>);
    await user.click(screen.getByRole("button", { name: "Filter" }));
    await user.click(screen.getByRole("button", { name: "Apply" }));
    expect(screen.getByRole("button", { name: "Filter" })).toHaveFocus();
  });
});

describe("Tabs", () => {
  const Harness = () => {
    const [key, setKey] = useState("a");
    return (
      <Tabs
        activeKey={key}
        onChange={setKey}
        items={[
          { key: "a", label: "Profile", content: "Profile panel" },
          { key: "b", label: "Billing", content: "Billing panel", disabled: true },
          { key: "c", label: "Security", content: "Security panel" },
        ]}
      />
    );
  };

  it("exposes tab semantics", () => {
    render(<Harness />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    const profile = screen.getByRole("tab", { name: "Profile" });
    expect(profile).toHaveAttribute("aria-selected", "true");
    expect(profile).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("tab", { name: "Security" })).toHaveAttribute("tabindex", "-1");
    expect(screen.getByRole("tabpanel", { name: "Profile" })).toHaveTextContent("Profile panel");
  });

  it("moves with the arrow keys, skipping disabled tabs", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(screen.getByRole("tab", { name: "Profile" }));
    await user.keyboard("{ArrowRight}");
    const security = screen.getByRole("tab", { name: "Security" });
    expect(security).toHaveFocus();
    expect(security).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: "Profile" })).toHaveFocus();
    await user.keyboard("{End}");
    expect(security).toHaveFocus();
  });
});

describe("FileUploader", () => {
  it("calls its callbacks once per change, even under Strict Mode", () => {
    const handleAttachment = vi.fn();
    const onFilesChange = vi.fn();
    const { container } = render(
      <StrictMode>
        <FileUploader handleAttachment={handleAttachment} onFilesChange={onFilesChange} multiple />
      </StrictMode>,
    );
    const input = container.querySelector('input[type="file"]')!;
    const file = new File(["x"], "report.pdf", { type: "application/pdf" });
    fireEvent.change(input, { target: { files: [file] } });
    expect(handleAttachment).toHaveBeenCalledTimes(1);
    expect(onFilesChange).toHaveBeenCalledTimes(1);
    expect(onFilesChange).toHaveBeenCalledWith([file]);
  });
});
