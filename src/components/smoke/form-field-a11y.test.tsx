import type { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Checkbox from "../checkbox";
import ColorPicker from "../colorPicker";
import DatePicker from "../datePicker";
import DateRangePicker from "../dateRangePicker";
import Input from "../input";
import MultiSelect from "../multiSelect";
import OtpInput from "../otpInput";
import RadioButton from "../radioButton";
import SearchInput from "../searchInput";
import SelectDropdown from "../selectDropdown";
import Slider from "../slider";
import Switch from "../switch";
import TextArea from "../textarea";
import TimePicker from "../timePicker";

const noop = () => {};
const LABEL = "Field label";
const ERROR = "Something is wrong";

/** Each form component, how to find its field, and (if it has one) its error state. */
const FIELDS: { name: string; role: string; ui: (error: boolean) => ReactElement; hasError: boolean }[] = [
  { name: "Input", role: "textbox", hasError: true, ui: (e) => <Input label={LABEL} value="" onChange={noop} isError={e} errorMessage={ERROR} /> },
  { name: "TextArea", role: "textbox", hasError: true, ui: (e) => <TextArea label={LABEL} value="" onChange={noop} isError={e} errorMessage={ERROR} /> },
  { name: "SelectDropdown", role: "combobox", hasError: true, ui: (e) => <SelectDropdown label={LABEL} options={[{ label: "A" }]} value="" onChange={noop} isError={e} errorMessage={ERROR} /> },
  { name: "MultiSelect", role: "combobox", hasError: true, ui: (e) => <MultiSelect label={LABEL} options={[{ value: "a", label: "A" }]} value={[]} onChange={noop} isError={e} errorMessage={ERROR} /> },
  { name: "DatePicker", role: "combobox", hasError: true, ui: (e) => <DatePicker label={LABEL} onChange={noop} isError={e} errorMessage={ERROR} /> },
  { name: "TimePicker", role: "combobox", hasError: true, ui: (e) => <TimePicker label={LABEL} onChange={noop} isError={e} errorMessage={ERROR} /> },
  { name: "DateRangePicker", role: "combobox", hasError: true, ui: (e) => <DateRangePicker label={LABEL} onChange={noop} isError={e} errorMessage={ERROR} /> },
  { name: "OtpInput", role: "group", hasError: true, ui: (e) => <OtpInput label={LABEL} value="" onChange={noop} length={4} isError={e} errorMessage={ERROR} /> },
  { name: "SearchInput", role: "textbox", hasError: false, ui: () => <SearchInput label={LABEL} value="" onChange={noop} /> },
  { name: "ColorPicker", role: "button", hasError: false, ui: () => <ColorPicker label={LABEL} onChange={noop} /> },
  { name: "Slider", role: "slider", hasError: false, ui: () => <Slider label={LABEL} value={10} onChange={noop} /> },
  { name: "Checkbox", role: "checkbox", hasError: false, ui: () => <Checkbox label={LABEL} checked={false} onChange={noop} /> },
  { name: "RadioButton", role: "radio", hasError: false, ui: () => <RadioButton label={LABEL} value="a" onChange={noop} /> },
  { name: "Switch", role: "switch", hasError: false, ui: () => <Switch label={LABEL} checked={false} onChange={noop} /> },
];

describe.each(FIELDS)("$name", ({ role, ui, hasError }) => {
  it("is named by its label", () => {
    render(ui(false));
    expect(screen.getByRole(role, { name: new RegExp(LABEL) })).toBeInTheDocument();
  });

  it.runIf(hasError)("marks the field invalid and links the announced error", () => {
    render(ui(true));
    const field = screen.getByRole(role, { name: new RegExp(LABEL) });
    // Grouped fields (OtpInput) put the state on each input inside the group.
    const targets = role === "group" ? Array.from(field.querySelectorAll("input")) : [field];
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent(ERROR);
    for (const target of targets) {
      expect(target).toHaveAttribute("aria-invalid", "true");
      expect(target.getAttribute("aria-describedby")?.split(" ")).toContain(alert.id);
    }
  });

  it.runIf(hasError)("leaves the field valid without an error", () => {
    render(ui(false));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});

it("gives two fields with the same label different ids", () => {
  render(
    <>
      <DatePicker label={LABEL} onChange={noop} />
      <DatePicker label={LABEL} onChange={noop} />
    </>,
  );
  const [a, b] = screen.getAllByRole("combobox", { name: new RegExp(LABEL) });
  expect(a.id).not.toBe(b.id);
});

it("still names a picker by its value when there is no label", () => {
  render(
    <>
      <DatePicker onChange={noop} />
      <TimePicker onChange={noop} />
      <DateRangePicker onChange={noop} />
    </>,
  );
  expect(screen.getByRole("combobox", { name: "Select date" })).toBeInTheDocument();
  expect(screen.getByRole("combobox", { name: "Select time" })).toBeInTheDocument();
  expect(screen.getByRole("combobox", { name: "Start date → End date" })).toBeInTheDocument();
});
