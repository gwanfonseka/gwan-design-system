import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import FileUploader from "./index";
import { StrictMode } from "react";

const MB = 1024 * 1024;

const file = (name: string, size = 10) => {
  const f = new File(["x"], name);
  Object.defineProperty(f, "size", { value: size });
  return f;
};

const setup = (props: Partial<React.ComponentProps<typeof FileUploader>> = {}) => {
  const handleAttachment = vi.fn();
  const onFilesChange = vi.fn();
  const view = render(
    <FileUploader handleAttachment={handleAttachment} onFilesChange={onFilesChange} {...props} />,
  );
  const input = view.container.querySelector('input[type="file"]') as HTMLInputElement;
  const zone = screen.getByRole("button", { name: "File upload area" });
  const add = (...files: File[]) => fireEvent.change(input, { target: { files } });
  return { ...view, handleAttachment, onFilesChange, input, zone, add };
};

describe("FileUploader", () => {
  it.each([
    ["photo.PNG", "IMG"],
    ["report.pdf", "PDF"],
    ["notes.docx", "DOC"],
    ["data.csv", "XLS"],
    ["bundle.zip", "ZIP"],
    ["clip.mp4", "VID"],
    ["song.mp3", "AUD"],
    ["vector.sketch", "SKE"],
    ["noextension.", "FILE"],
  ])("labels %s as %s", (name, label) => {
    setup().add(file(name));
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it.each([
    [500, "500 B"],
    [2048, "2.0 KB"],
    [3 * MB, "3.0 MB"],
  ])("shows %i bytes as %s", (size, text) => {
    setup().add(file("a.pdf", size));
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("replaces the file unless multiple is on", () => {
    const single = setup();
    single.add(file("a.pdf"));
    single.add(file("b.pdf"));
    expect(single.onFilesChange).toHaveBeenLastCalledWith([expect.objectContaining({ name: "b.pdf" })]);
    single.unmount();

    const many = setup({ multiple: true });
    many.add(file("a.pdf"));
    many.add(file("b.pdf"));
    expect(many.onFilesChange.mock.lastCall![0]).toHaveLength(2);
  });

  it("caps the list at maxFiles and stops offering the zone at the limit", () => {
    const { add, onFilesChange, zone } = setup({ multiple: true, maxFiles: 2 });
    add(file("a.pdf"), file("b.pdf"), file("c.pdf"));
    expect(onFilesChange.mock.lastCall![0]).toHaveLength(2);
    expect(zone).toHaveAttribute("tabindex", "-1");
  });

  it("rejects files over maxSize with a message, and keeps the rest", () => {
    const { add, onFilesChange } = setup({ multiple: true, maxSize: 1024 });
    add(file("big.pdf", 2048), file("ok.pdf", 10));
    expect(screen.getByRole("alert")).toHaveTextContent('"big.pdf" exceeds the 1.0 KB limit');
    expect(onFilesChange.mock.lastCall![0]).toHaveLength(1);
  });

  it("calls nothing when every file is rejected", () => {
    const { add, onFilesChange, handleAttachment } = setup({ maxSize: 1024 });
    add(file("big.pdf", 2048));
    expect(onFilesChange).not.toHaveBeenCalled();
    expect(handleAttachment).not.toHaveBeenCalled();
  });

  it("removes a file", async () => {
    const user = userEvent.setup();
    const { add, onFilesChange } = setup();
    add(file("a.pdf"));
    await user.click(screen.getByRole("button", { name: "Remove a.pdf" }));
    expect(onFilesChange).toHaveBeenLastCalledWith([]);
    expect(screen.queryByText("a.pdf")).not.toBeInTheDocument();
  });

  it("works without onFilesChange, and tolerates an empty change", () => {
    const handleAttachment = vi.fn();
    const { container } = render(<FileUploader handleAttachment={handleAttachment} />);
    const input = container.querySelector('input[type="file"]')!;
    fireEvent.change(input, { target: { files: null } });
    expect(handleAttachment).not.toHaveBeenCalled();
    fireEvent.change(input, { target: { files: [file("a.pdf")] } });
    expect(handleAttachment).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole("button", { name: "Remove a.pdf" }));
    expect(screen.queryByText("a.pdf")).not.toBeInTheDocument();
  });

  describe("drag and drop", () => {
    it("highlights while dragging and accepts a drop", () => {
      const { zone, onFilesChange } = setup();
      fireEvent.dragOver(zone);
      expect(zone.className).toContain("cursor-copy");
      fireEvent.dragLeave(zone);
      expect(zone.className).not.toContain("cursor-copy");
      fireEvent.dragOver(zone);
      fireEvent.drop(zone, { dataTransfer: { files: [file("a.pdf")] } });
      expect(zone.className).not.toContain("cursor-copy");
      expect(onFilesChange).toHaveBeenCalledTimes(1);
    });

    it("tolerates a drop with no files", () => {
      const { zone, onFilesChange } = setup();
      fireEvent.drop(zone, { dataTransfer: {} });
      expect(onFilesChange).not.toHaveBeenCalled();
    });

    it("ignores dragging and dropping while disabled", () => {
      const { zone, onFilesChange } = setup({ disabled: true });
      fireEvent.dragOver(zone);
      expect(zone.className).toContain("cursor-not-allowed");
      fireEvent.drop(zone, { dataTransfer: { files: [file("a.pdf")] } });
      expect(onFilesChange).not.toHaveBeenCalled();
    });
  });

  it("opens the file dialog from a click or Enter, but not at the limit or with other keys", () => {
    const click = vi.spyOn(HTMLInputElement.prototype, "click").mockImplementation(() => {});
    const { zone, add } = setup({ maxFiles: 1 });
    fireEvent.click(zone);
    expect(click).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(zone, { key: "Enter" });
    expect(click).toHaveBeenCalledTimes(2);
    fireEvent.keyDown(zone, { key: "a" });
    expect(click).toHaveBeenCalledTimes(2);
    add(file("a.pdf"));
    fireEvent.click(zone);
    fireEvent.keyDown(zone, { key: "Enter" });
    expect(click).toHaveBeenCalledTimes(2);
  });

  it("shows the third line and limits in the hint", () => {
    setup({ subTitle2: "PNG only", accept: ".png,.jpg", maxSize: MB, maxFiles: 3, multiple: true });
    expect(screen.getByText("PNG only")).toBeInTheDocument();
    expect(screen.getByText(".png · .jpg · Max 1.0 MB · Up to 3 files")).toBeInTheDocument();
  });

  it("leaves limits out of the hint when they don't apply", () => {
    setup({ accept: ".png", maxFiles: 3 });
    expect(screen.getByText(".png")).toBeInTheDocument();
  });

  it("offers no remove button while disabled", () => {
    const { add, rerender, handleAttachment } = setup();
    add(file("a.pdf"));
    rerender(<FileUploader handleAttachment={handleAttachment} disabled />);
    expect(screen.queryByRole("button", { name: "Remove a.pdf" })).not.toBeInTheDocument();
  });
});

it("FileUploader reports the selected file", async () => {
  const user = userEvent.setup();
  const handleAttachment = vi.fn();
  const onFilesChange = vi.fn();
  render(
    <FileUploader
      title="Drop"
      handleAttachment={handleAttachment}
      onFilesChange={onFilesChange}
      accept=".txt"
    />,
  );
  const file = new File(["hello"], "note.txt", { type: "text/plain" });
  const input = document.querySelector("input[type=file]") as HTMLInputElement;
  await user.upload(input, file);
  expect(handleAttachment).toHaveBeenCalledWith(file);
  expect(screen.getByText("note.txt")).toBeInTheDocument();
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
