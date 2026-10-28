import type { FC } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import * as Icons from "../icons";
import Accordion, { ACCORDION_VARIANT } from "../accordion";
import Alert, { ALERT_TYPE, ALERT_VARIANT } from "../alert";
import AvatarGroup from "../avatarGroup";
import { AVATAR_SIZE } from "../avatar";
import Badge, { BADGE_SIZE, BADGE_TYPE, BADGE_VARIANT } from "../badge";
import Banner from "../banner";
import Breadcrumb, { BREADCRUMB_SEPARATOR } from "../breadcrumb";
import Button, { BUTTON_EDGE_STYLE, BUTTON_SIZE, BUTTON_VARIANTS } from "../button";
import Callout, { CALLOUT_TYPE } from "../callout";
import Card, { CARD_PADDING, CARD_VARIANT } from "../card";
import Carousel from "../carousel";
import Checkbox, { CHECKBOX_EDGE_STYLE, CHECKBOX_SIZE } from "../checkbox";
import Chip, { CHIP_EDGE_STYLE, CHIP_VARIANT } from "../chip";
import CircularProgress, { CIRCULAR_PROGRESS_SIZE, CIRCULAR_PROGRESS_TYPE } from "../circularProgress";
import ColorPicker from "../colorPicker";
import CommandPalette from "../commandPalette";
import ContextMenu from "../contextMenu";
import Divider, { DIVIDER_ORIENTATION, DIVIDER_VARIANT } from "../divider";
import Drawer, { DRAWER_PLACEMENT, DRAWER_SIZE } from "../drawer";
import DropdownMenu, { DROPDOWN_PLACEMENT } from "../dropdownMenu";
import Ellipsis from "../ellipsis";
import FileUploader from "../fileUploader";
import FilterDropdown from "../filterDropdown";
import Input, { FORM_ELEMENT_EDGE_STYLE, FORM_ELEMENT_SIZE } from "../input";
import List, { LIST_SIZE, LIST_VARIANT } from "../list";
import Modal, { MODAL_SIZE } from "../modal";
import MultiSelect, { MULTI_SELECT_SIZE } from "../multiSelect";
import NavBar from "../navBar";
import OtpInput, { OTP_SIZE } from "../otpInput";
import Pagination from "../pagination";
import Popover, { POPOVER_PLACEMENT, POPOVER_TRIGGER } from "../popover";
import ProgressBar, { PROGRESS_BAR_SIZE, PROGRESS_BAR_TYPE } from "../progressBar";
import RadioButton from "../radioButton";
import SearchInput from "../searchInput";
import Skeleton, { SKELETON_VARIANT } from "../skeleton";
import Slider, { SLIDER_SIZE } from "../slider";
import Snackbar, { SNACK_BAR_TYPE } from "../snackBar";
import Spinner, { SPINNER_COLOR, SPINNER_SIZE } from "../spinner";
import StatCard, { STAT_TREND } from "../statCard";
import States, { STATE_TYPE } from "../state";
import Stepper, { STEP_STATUS, STEPPER_ORIENTATION } from "../stepper";
import Switch, { SWITCH_SIZE } from "../switch";
import Table from "../table";
import Tabs, { TABS_VARIANT } from "../tabs";
import Tag, { TAG_EDGE_STYLE, TAG_TYPE, TAG_VARIANT } from "../tag";
import TextArea from "../textarea";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

const menuItem = {
  title: "Home",
  route: "/home",
  isActive: true,
  isDivider: false,
};

describe("remaining exported components", () => {
  it("Accordion opens a default item and ignores a disabled one", async () => {
    const user = userEvent.setup();
    render(
      <Accordion
        variant={ACCORDION_VARIANT.BORDERED}
        defaultOpenKey="a"
        items={[
          { key: "a", title: "Alpha", content: "First body" },
          { key: "b", title: "Beta", content: "Second body", disabled: true },
        ]}
      />,
    );
    expect(screen.getByText("First body")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Beta" }));
    expect(screen.queryByText("Second body")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Alpha" }));
    expect(screen.queryByText("First body")).not.toBeInTheDocument();
  });

  it("Alert renders its message and dismisses", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Alert
        type={ALERT_TYPE.SUCCESS}
        variant={ALERT_VARIANT.OUTLINE}
        title="Saved"
        message="All good"
        dismissible
        onDismiss={onDismiss}
      />,
    );
    expect(screen.getByText("All good")).toBeInTheDocument();
    await user.click(screen.getByRole("button"));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("All good")).not.toBeInTheDocument();
  });

  it("AvatarGroup shows the overflow count", () => {
    render(
      <AvatarGroup
        max={1}
        size={AVATAR_SIZE.SM}
        items={[
          { name: "Ada Lovelace", email: "a@x.com" },
          { name: "Grace Hopper", email: "g@x.com" },
        ]}
      />,
    );
    expect(screen.getByText("AL")).toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("Badge shows its label, dot, and size", () => {
    const { container } = render(
      <Badge type={BADGE_TYPE.DANGER} variant={BADGE_VARIANT.OUTLINE} size={BADGE_SIZE.SMALL} label={3} dot />,
    );
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(container.querySelector(".rounded-full")).toBeTruthy();
  });

  it("Banner places the title and applies a background colour", () => {
    const { container, rerender } = render(
      <Banner title="Hello" subTitle="There" backgroundColor="bg-primary-500" contentPlacement="left" />,
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
    // backgroundColor is applied as a class name, not an inline CSS color.
    expect(container.firstElementChild!.className).toContain("bg-primary-500");
    rerender(<Banner title="Right" contentPlacement="right" />);
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  it("Breadcrumb links every item except the current page", () => {
    render(
      <Breadcrumb
        separator={BREADCRUMB_SEPARATOR.SLASH}
        items={[{ label: "Home", href: "/" }, { label: "Docs" }]}
      />,
    );
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Docs")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("/")).toBeInTheDocument();
  });

  it("Button fires onClick and respects variant, size, and disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button
        label="Save"
        onClick={onClick}
        variant={BUTTON_VARIANTS.TERTIARY}
        size={BUTTON_SIZE.LG}
        edges={BUTTON_EDGE_STYLE.PILL}
      />,
    );
    const button = screen.getByRole("button", { name: "Save" });
    expect(button.className).toContain("rounded-full");
    expect(button.className).toContain("text-base");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    render(<Button label="Nope" onClick={onClick} disabled />);
    expect(screen.getByRole("button", { name: "Nope" })).toBeDisabled();
  });

  it("Callout uses the type label unless a title is passed", () => {
    const { rerender } = render(<Callout type={CALLOUT_TYPE.DANGER}>Watch out</Callout>);
    expect(screen.getByText("Danger")).toBeInTheDocument();
    expect(screen.getByText("Watch out")).toBeInTheDocument();
    rerender(<Callout title="Custom">Body</Callout>);
    expect(screen.getByText("Custom")).toBeInTheDocument();
    expect(screen.queryByText("Note")).not.toBeInTheDocument();
  });

  it("Card renders header, body, and footer", () => {
    render(
      <Card variant={CARD_VARIANT.ELEVATED} padding={CARD_PADDING.SM} header="Head" footer="Foot">
        Body
      </Card>,
    );
    expect(screen.getByText("Head")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Foot")).toBeInTheDocument();
  });

  it("Carousel shows the first slide", () => {
    render(<Carousel slides={[{ title: "One" }, { title: "Two" }]} interval={60000} />);
    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("Checkbox reports the toggled value and can be disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Checkbox
        label="Agree"
        checked={false}
        onChange={onChange}
        size={CHECKBOX_SIZE.LARGE}
        edges={CHECKBOX_EDGE_STYLE.SQUARED}
      />,
    );
    await user.click(screen.getByLabelText("Agree"));
    expect(onChange).toHaveBeenCalledWith(true);
    render(<Checkbox label="Locked" checked onChange={onChange} disabled />);
    expect(screen.getByLabelText("Locked")).toBeDisabled();
  });

  it("Chip calls onClear from the icon", async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    const { container } = render(
      <Chip label="Filter" onClear={onClear} variant={CHIP_VARIANT.OUTLINE} edges={CHIP_EDGE_STYLE.PILL} />,
    );
    expect(container.firstElementChild!.className).toContain("rounded-full");
    await user.click(container.querySelector(".cursor-pointer")!);
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("CircularProgress clamps the label", () => {
    const { rerender } = render(
      <CircularProgress value={140} size={CIRCULAR_PROGRESS_SIZE.LG} type={CIRCULAR_PROGRESS_TYPE.SUCCESS} />,
    );
    expect(screen.getByText("100%")).toBeInTheDocument();
    rerender(<CircularProgress value={-5} showLabel={false} />);
    expect(screen.queryByText(/%/)).not.toBeInTheDocument();
  });

  it("ColorPicker reports a preset and the default swatch", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(<ColorPicker label="Ink" onChange={onChange} presets={["#ff0000"]} />);
    expect(screen.getByText("Ink")).toBeInTheDocument();
    await user.click(container.querySelector("button")!);
    await user.click(screen.getByTitle("#ff0000"));
    expect(onChange).toHaveBeenCalledWith("#ff0000");
  });

  it("CommandPalette hides while closed and selects a filtered item", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const onSelect = vi.fn();
    const { rerender } = render(
      <CommandPalette open={false} onClose={onClose} items={[]} />,
    );
    expect(screen.queryByPlaceholderText("Type a command or search...")).not.toBeInTheDocument();
    rerender(
      <CommandPalette
        open
        onClose={onClose}
        placeholder="Find"
        items={[
          { id: "1", label: "Copy", group: "Edit", onSelect },
          { id: "2", label: "Paste", onSelect: vi.fn() },
        ]}
      />,
    );
    await user.type(screen.getByPlaceholderText("Find"), "cop");
    await user.click(screen.getByRole("button", { name: /Copy/ }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("ContextMenu opens on a context event", () => {
    const onClick = vi.fn();
    render(
      <ContextMenu items={[{ label: "Rename", onClick }]}>
        <span>Target</span>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText("Target"));
    fireEvent.click(screen.getByRole("button", { name: "Rename" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Divider renders horizontal label and vertical orientation", () => {
    const { rerender } = render(
      <Divider variant={DIVIDER_VARIANT.DASHED} label="Or" />,
    );
    expect(screen.getByText("Or")).toBeInTheDocument();
    const { container } = render(
      <Divider orientation={DIVIDER_ORIENTATION.VERTICAL} variant={DIVIDER_VARIANT.DOTTED} />,
    );
    expect(container.firstElementChild!.className).toContain("border-dotted");
    rerender(<Divider />);
  });

  it("Drawer closes from the overlay and the close button", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const { rerender } = render(
      <Drawer open title="Details" onClose={onClose} placement={DRAWER_PLACEMENT.LEFT} size={DRAWER_SIZE.SMALL}>
        Inside
      </Drawer>,
    );
    expect(screen.getByText("Inside")).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");
    await user.click(screen.getByRole("button", { name: "Close drawer" }));
    expect(onClose).toHaveBeenCalledTimes(1);
    rerender(
      <Drawer open={false} onClose={onClose} showOverlay={false}>
        Hidden
      </Drawer>,
    );
    expect(document.body.style.overflow).toBe("");
  });

  it("DropdownMenu places the menu and skips a disabled item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { container } = render(
      <DropdownMenu
        placement={DROPDOWN_PLACEMENT.TOP_RIGHT}
        trigger={<button type="button">Open</button>}
        items={[{ label: "Edit", onClick }, { label: "Delete", disabled: true, destructive: true }]}
      />,
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(container.querySelector(".bottom-full")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(onClick).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Edit" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Ellipsis shows its tooltip on hover", async () => {
    const user = userEvent.setup();
    const { container } = render(<Ellipsis label="A very long label" labelMaxWidth="w-8" />);
    const tip = container.querySelector(".z-50")!;
    expect(tip.className).toContain("hidden");
    await user.hover(container.querySelector("p")!);
    expect(tip.className).toContain("block");
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

  it("FilterDropdown renders its child and can close it", async () => {
    const user = userEvent.setup();
    render(
      <FilterDropdown>
        {(close) => <button type="button" onClick={close}>Done</button>}
      </FilterDropdown>,
    );
    expect(screen.queryByRole("button", { name: "Done" })).not.toBeInTheDocument();
    await user.click(screen.getByText("Filter"));
    await user.click(screen.getByRole("button", { name: "Done" }));
    expect(screen.queryByRole("button", { name: "Done" })).not.toBeInTheDocument();
  });

  it("Input blocks scientific notation and shows an error", () => {
    const onChange = vi.fn();
    render(
      <Input
        label="Count"
        value="1"
        type="number"
        min={0}
        required
        isError
        errorMessage="Too small"
        onChange={onChange}
        edges={FORM_ELEMENT_EDGE_STYLE.SQUARED}
        size={FORM_ELEMENT_SIZE.SM}
      />,
    );
    const input = screen.getByLabelText("Count *");
    expect(fireEvent.keyDown(input, { key: "e" })).toBe(false);
    expect(screen.getByRole("alert")).toHaveTextContent("Too small");
  });

  it("List calls the item click handler and skips a disabled item", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <List
        variant={LIST_VARIANT.BORDERED}
        size={LIST_SIZE.LG}
        items={[
          { key: "1", title: "Inbox", description: "3 new", onClick },
          { key: "2", title: "Archive", disabled: true, onClick },
        ]}
      />,
    );
    await user.click(screen.getByText("Inbox"));
    expect(onClick).toHaveBeenCalledTimes(1);
    await user.click(screen.getByText("Archive"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Modal labels the dialog and closes from Escape", () => {
    const onClear = vi.fn();
    render(
      <Modal title="Confirm" onClear={onClear} size={MODAL_SIZE.MEDIUM}>
        <p>Are you sure?</p>
      </Modal>,
    );
    // SUSPECTED BUG: the overlay is aria-hidden, so the dialog is removed from the accessibility tree.
    expect(screen.getByRole("dialog", { name: "Confirm", hidden: true })).toBeInTheDocument();
    expect(screen.queryByRole("dialog", { name: "Confirm" })).not.toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("MultiSelect adds and removes a value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <MultiSelect
        label="Tags"
        size={MULTI_SELECT_SIZE.SM}
        required
        options={[{ value: "red", label: "Red" }, { value: "blue", label: "Blue" }]}
        value={["red"]}
        onChange={onChange}
      />,
    );
    expect(screen.getByText("Red")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Remove Red" }));
    expect(onChange).toHaveBeenCalledWith([]);
    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "Blue" }));
    expect(onChange).toHaveBeenCalledWith(["red", "blue"]);
  });

  it("NavBar shows the active item and navigates", async () => {
    const user = userEvent.setup();
    const onNavigate = vi.fn();
    render(
      <NavBar
        menuItems={[menuItem, { ...menuItem, title: "Docs", route: "/docs", isActive: false }]}
        logoShort="/s.svg"
        logoLong="/l.svg"
        isAvatarVisible={false}
        onNavigate={onNavigate}
      />,
    );
    expect(screen.getByAltText("logo_short")).toBeInTheDocument();
    await user.click(screen.getByText("Docs"));
    expect(onNavigate).toHaveBeenCalledWith("/docs");
    await new Promise((resolve) => setTimeout(resolve, 250));
  });

  it("OtpInput fills a digit and reports completion", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onComplete = vi.fn();
    const view = render(
      <OtpInput value="" onChange={onChange} onComplete={onComplete} length={4} size={OTP_SIZE.SM} label="Code" />,
    );
    await user.type(screen.getByLabelText("Digit 1 of 4"), "1");
    expect(onChange).toHaveBeenCalledWith("1");
    view.rerender(
      <OtpInput value="123" onChange={onChange} onComplete={onComplete} length={4} label="Code" />,
    );
    await user.type(screen.getByLabelText("Digit 4 of 4"), "4");
    expect(onComplete).toHaveBeenCalledWith("1234");
  });

  it("Pagination changes the page and the page size", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Pagination
        total={50}
        page={2}
        size={10}
        options={[{ label: "10", value: "10" }, { label: "20", value: "20" }]}
        onChange={onChange}
      />,
    );
    expect(screen.getByText("2 of 5 pages")).toBeInTheDocument();
    const buttons = screen.getAllByRole("button");
    await user.click(buttons[0]);
    expect(onChange).toHaveBeenCalledWith({ total: 50, page: 1, size: 10 });
    await user.click(buttons[1]);
    expect(onChange).toHaveBeenCalledWith({ total: 50, page: 3, size: 10 });
  });

  it("Popover opens on click and on hover", async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Popover trigger={<button type="button">Info</button>} content="Details" title="About" placement={POPOVER_PLACEMENT.TOP} />,
    );
    expect(screen.queryByText("Details")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Info" }));
    expect(screen.getByText("Details")).toBeInTheDocument();
    rerender(
      <Popover
        trigger={<span>Hover me</span>}
        content="Pop"
        triggerOn={POPOVER_TRIGGER.HOVER}
        placement={POPOVER_PLACEMENT.RIGHT}
      />,
    );
    await user.hover(screen.getByText("Hover me"));
    expect(screen.getByText("Pop")).toBeInTheDocument();
  });

  it("ProgressBar clamps and exposes the progressbar role", () => {
    render(
      <ProgressBar
        value={150}
        max={50}
        type={PROGRESS_BAR_TYPE.SUCCESS}
        size={PROGRESS_BAR_SIZE.LARGE}
        label="Upload"
        showValue
      />,
    );
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "150");
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("RadioButton selects its value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <>
        <RadioButton label="Yes" value="yes" name="answer" selectedValue="no" onChange={onChange} />
        <RadioButton label="No" value="no" name="answer" selectedValue="no" onChange={onChange} disabled />
      </>,
    );
    await user.click(screen.getByLabelText("Yes"));
    expect(onChange).toHaveBeenCalledWith("yes");
    await user.click(screen.getByLabelText("No"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("SearchInput reports typed text and clears it", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container, rerender } = render(
      <SearchInput value="" onChange={onChange} label="Find" size={FORM_ELEMENT_SIZE.SM} />,
    );
    await user.type(screen.getByLabelText("Find"), "a");
    expect(onChange).toHaveBeenCalledWith("a");
    rerender(<SearchInput value="a" onChange={onChange} label="Find" />);
    await user.click(container.querySelector(".cursor-pointer")!);
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("Skeleton renders a circle and several text lines", () => {
    const { container, rerender } = render(
      <Skeleton variant={SKELETON_VARIANT.CIRCLE} width={24} />,
    );
    expect(container.firstElementChild).toHaveStyle({ width: "24px", height: "24px" });
    rerender(<Skeleton variant={SKELETON_VARIANT.TEXT} lines={3} />);
    expect(container.querySelectorAll(".animate-pulse")).toHaveLength(3);
  });

  it("Slider reports a single value and a range", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <Slider label="Volume" value={20} onChange={onChange} size={SLIDER_SIZE.SM} showTooltip />,
    );
    expect(screen.getByText("20")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("slider"), { target: { value: "40" } });
    expect(onChange).toHaveBeenCalledWith(40);
    rerender(<Slider value={[10, 70]} onChange={onChange} showTooltip />);
    expect(screen.getByText("10 – 70")).toBeInTheDocument();
    fireEvent.change(screen.getByRole("slider", { name: "Maximum value" }), { target: { value: "80" } });
    expect(onChange).toHaveBeenCalledWith([10, 80]);
  });

  it("Snackbar and Spinner expose their status text", () => {
    render(
      <>
        <Snackbar type={SNACK_BAR_TYPE.DANGER} message="Failed" />
        <Spinner size={SPINNER_SIZE.LG} color={SPINNER_COLOR.DANGER} />
      </>,
    );
    expect(screen.getByText("Failed")).toBeInTheDocument();
    expect(screen.getByRole("status", { name: "Loading" })).toBeInTheDocument();
  });

  it("StatCard and State render their copy", () => {
    render(
      <>
        <StatCard label="Users" value={12} trend={STAT_TREND.UP} trendLabel="4%" />
        <States type={STATE_TYPE.EMPTY} title="None" subTitle="Nothing yet" />
      </>,
    );
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("↑ 4%")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "state image" })).toHaveAttribute("src", "/images/empty.png");
    expect(screen.getByText("Nothing yet")).toBeInTheDocument();
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

  it("Switch toggles and can be disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch checked={false} onChange={onChange} label="Alerts" description="Email" size={SWITCH_SIZE.LARGE} />);
    // Label and description are concatenated into one accessible name.
    await user.click(screen.getByRole("switch", { name: "AlertsEmail" }));
    expect(onChange).toHaveBeenCalledWith(true);
    render(<Switch checked disabled onChange={onChange} label="Locked" />);
    expect(screen.getByRole("switch", { name: "Locked" })).toBeDisabled();
  });

  it("Table renders a striped row from the column render prop", () => {
    render(
      <Table
        striped
        bordered
        columns={[{ header: "Name", render: (row) => <span>{row.name}</span> }]}
        data={[{ name: "Ada" }, { name: "Grace" }]}
      />,
    );
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByText("Grace")).toBeInTheDocument();
  });

  it("Tabs shows the active panel and ignores a disabled tab", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Tabs
        variant={TABS_VARIANT.PILL}
        activeKey="one"
        onChange={onChange}
        items={[
          { key: "one", label: "One", content: "First" },
          { key: "two", label: "Two", content: "Second", disabled: true },
        ]}
      />,
    );
    expect(screen.getByText("First")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Two" }));
    expect(onChange).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "One" }));
    expect(onChange).toHaveBeenCalledWith("one");
  });

  it("Tag and TextArea render their props", () => {
    render(
      <>
        <Tag type={TAG_TYPE.INFO} label="New" variant={TAG_VARIANT.OUTLINE} edges={TAG_EDGE_STYLE.PILL} />
        <TextArea label="Notes" value="Hello" required isError errorMessage="Needed" onChange={() => {}} />
      </>,
    );
    expect(screen.getByText("New")).toBeInTheDocument();
    expect(screen.getByLabelText("Notes *")).toHaveValue("Hello");
    expect(screen.getByRole("alert")).toHaveTextContent("Needed");
  });

  it("Tooltip stays hidden until isVisible", () => {
    const { container, rerender } = render(
      <Tooltip position={TOOLTIP_POSITION.TOP} label="Hint" isVisible={false} />,
    );
    expect(container.firstElementChild!.className).toContain("hidden");
    rerender(<Tooltip position={TOOLTIP_POSITION.BOTTOM} label="Hint" isVisible />);
    expect(container.firstElementChild!.className).toContain("block");
    expect(screen.getByText("Hint")).toBeInTheDocument();
  });

  it("renders every exported icon as an svg", () => {
    const icons = Object.entries(Icons).filter((entry): entry is [string, FC] => typeof entry[1] === "function");
    expect(icons.length).toBeGreaterThan(20);
    for (const [name, Icon] of icons) {
      const { unmount, container } = render(<Icon />);
      expect(container.querySelector("svg"), name).toBeTruthy();
      unmount();
    }
  });
});
