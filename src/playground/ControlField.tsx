"use client";

import ColorPicker from "@/components/colorPicker";
import DatePicker from "@/components/datePicker";
import Input, { FORM_ELEMENT_SIZE } from "@/components/input";
import RadioButton from "@/components/radioButton";
import SelectDropdown from "@/components/selectDropdown";
import Slider, { SLIDER_SIZE } from "@/components/slider";
import Switch, { SWITCH_SIZE } from "@/components/switch";
import TextArea from "@/components/textarea";
import TimePicker from "@/components/timePicker";
import { iconLabel, ICON_NAMES } from "./icons";
import type { ArgValue, Control } from "./types";

interface IControlField {
  id: string;
  name: string;
  control: Control;
  value: ArgValue;
  onChange: (value: ArgValue) => void;
}

interface IChoice {
  label: string;
  value: string | number;
}

const ICON_OPTIONS = [
  { value: "", label: "None" },
  ...ICON_NAMES.map((n) => ({ value: n, label: iconLabel(n) })),
];

const asText = (value: ArgValue) => (value === undefined || value === null ? "" : String(value));

/** Two choices read best as radios; anything longer goes in a dropdown. */
const Choice = ({
  id,
  choices,
  display,
  value,
  onChange,
}: {
  id: string;
  choices: IChoice[];
  display?: "radio" | "select";
  value: ArgValue;
  onChange: (value: ArgValue) => void;
}) => {
  const byKey = (key: string) => choices.find((c) => String(c.value) === key)?.value;

  if ((display ?? (choices.length <= 2 ? "radio" : "select")) === "radio") {
    return (
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
        {choices.map((c) => (
          <RadioButton
            key={String(c.value)}
            name={id}
            label={c.label}
            value={String(c.value)}
            selectedValue={asText(value)}
            onChange={(v) => onChange(byKey(v))}
          />
        ))}
      </div>
    );
  }

  return (
    <SelectDropdown
      size={FORM_ELEMENT_SIZE.SM}
      options={choices.map((c) => ({ value: String(c.value), label: c.label }))}
      value={asText(value)}
      onChange={(v) => onChange(byKey(v))}
      searchable={choices.length > 8}
    />
  );
};

const Field = ({ id, name, control, value, onChange }: IControlField) => {
  switch (control.kind) {
    case "text":
      return (
        <Input
          id={id}
          aria-label={name}
          size={FORM_ELEMENT_SIZE.SM}
          value={asText(value)}
          placeholder={control.placeholder}
          onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        />
      );

    case "textarea":
      return (
        <TextArea
          id={id}
          aria-label={name}
          rows={control.rows}
          value={asText(value)}
          onChange={(e) => onChange(e.target.value)}
        />
      );

    case "number":
      return (
        <Input
          id={id}
          aria-label={name}
          type="number"
          size={FORM_ELEMENT_SIZE.SM}
          min={control.min}
          max={control.max}
          step={control.step}
          value={asText(value)}
          onChange={(e) => {
            const raw = (e.target as HTMLInputElement).value;
            onChange(raw === "" ? undefined : Number(raw));
          }}
        />
      );

    case "range":
      return (
        <div className="flex items-center gap-3">
          <Slider
            size={SLIDER_SIZE.SM}
            min={control.min}
            max={control.max}
            step={control.step}
            value={typeof value === "number" ? value : control.min}
            onChange={(v) => onChange(Array.isArray(v) ? v[0] : v)}
            className="flex-1"
          />
          <span className="w-8 text-right font-mono text-[11px] text-foreground tabular-nums">
            {asText(value) || "—"}
          </span>
        </div>
      );

    case "boolean":
      return (
        <Switch size={SWITCH_SIZE.SMALL} checked={value === true} onChange={(v) => onChange(v)} />
      );

    case "enum":
      return (
        <Choice
          id={id}
          display={control.display}
          value={value}
          onChange={onChange}
          choices={Object.entries(control.enumObj)
            .filter(([k]) => Number.isNaN(Number(k)))
            .map(([k, v]) => ({ label: k, value: v }))}
        />
      );

    case "options":
      return (
        <Choice
          id={id}
          display={control.display}
          value={value}
          onChange={onChange}
          choices={control.options.map((o) => ({ label: control.labels?.[String(o)] ?? String(o), value: o }))}
        />
      );

    case "icon":
      return (
        <SelectDropdown
          size={FORM_ELEMENT_SIZE.SM}
          options={ICON_OPTIONS}
          value={asText(value)}
          onChange={(v) => onChange(v === "" ? undefined : v)}
          searchable
          placeholder="None"
        />
      );

    case "list":
      return (
        <Input
          id={id}
          aria-label={name}
          size={FORM_ELEMENT_SIZE.SM}
          value={asText(value)}
          placeholder={control.placeholder}
          onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        />
      );

    case "color":
      return (
        <ColorPicker
          size={FORM_ELEMENT_SIZE.SM}
          value={asText(value)}
          onChange={(v) => onChange(v)}
        />
      );

    case "date":
      return (
        <DatePicker
          size={FORM_ELEMENT_SIZE.SM}
          value={typeof value === "string" ? new Date(value) : null}
          onChange={(d) => onChange(d ? d.toISOString() : undefined)}
        />
      );

    case "time":
      return (
        <TimePicker
          size={FORM_ELEMENT_SIZE.SM}
          value={typeof value === "string" ? value : null}
          onChange={(t) => onChange(t)}
        />
      );

    case "data":
      return (
        <Choice
          id={id}
          value={value}
          onChange={onChange}
          choices={Object.keys(control.presets).map((k) => ({ label: k, value: k }))}
        />
      );

    case "action":
      if (control.optional) {
        return (
          <div className="flex items-center gap-2">
            <Switch size={SWITCH_SIZE.SMALL} checked={value === true} onChange={(v) => onChange(v)} />
            <span className="text-[11px] text-muted-fg">
              {value === true ? "Passed, logged in Actions" : "Not passed"}
            </span>
          </div>
        );
      }
      return (
        <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-fg">
          <span className="size-1.5 rounded-full bg-accent" />
          Logged in Actions
        </span>
      );
  }
};

/**
 * Not every in-house control can take an accessible name yet, so each one sits in a
 * group named after its prop.
 */
const ControlField = (props: IControlField) => (
  <div role="group" aria-label={props.name}>
    <Field {...props} />
  </div>
);

export default ControlField;
