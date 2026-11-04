"use client";

import { useState, type ReactNode } from "react";
import Button from "@/components/button";

/** Preview for overlays that are shown by rendering them: a button that opens one. */
export const Triggered = ({
  label,
  children,
}: {
  label: string;
  children: (close: () => void) => ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label={label} onClick={() => setOpen(true)} />
      {open && children(() => setOpen(false))}
    </>
  );
};

const indent = (code: string, by: string) =>
  code
    .split("\n")
    .map((l) => (l ? `${by}${l}` : l))
    .join("\n");

/**
 * Rewrites a generated snippet into the open-state pattern the overlay needs:
 * a trigger button, `{open && <Overlay … />}`, and the close callback wired to `setOpen`.
 */
export const overlayUsage =
  ({ trigger, closeProp }: { trigger: string; closeProp: string }) =>
  (generated: string): string => {
    const blocks = generated.split("\n\n");
    const [imports, ...rest] = blocks;
    const element = rest.pop() ?? "";
    const hoisted = rest;

    const libraryImports = /\bButton\b/.test(imports)
      ? imports
      : imports.includes("import {\n")
        ? imports.replace("import {\n", "import {\n  Button,\n")
        : imports.replace(/import \{ /, "import { Button, ");

    const wired = element.replace(`${closeProp}={() => {}}`, `${closeProp}={() => setOpen(false)}`);

    return [
      `import { useState } from "react";\n${libraryImports}`,
      ...hoisted,
      [
        "const Example = () => {",
        "  const [open, setOpen] = useState(false);",
        "",
        "  return (",
        "    <>",
        `      <Button label="${trigger}" onClick={() => setOpen(true)} />`,
        "      {open && (",
        indent(wired, "        "),
        "      )}",
        "    </>",
        "  );",
        "};",
      ].join("\n"),
    ].join("\n\n");
  };

/** For overlays controlled by `open`/`onClose`: closing writes `open: false` back. */
export const openBinding = {
  prop: "open",
  event: "onClose",
  toValue: () => false,
  code: "() => setOpen(false)",
} as const;

/** Adds the button that opens a controlled overlay to its generated snippet. */
export const triggerUsage =
  (trigger: string) =>
  (generated: string): string => {
    const withImport = /\bButton\b/.test(generated.split("\n\n")[0])
      ? generated
      : generated.replace(/import \{ /, "import { Button, ").replace("import {\n", "import {\n  Button,\n");
    const button = `<Button label="${trigger}" onClick={() => setOpen(true)} />`;
    const multi = withImport.match(/ {2}return \(\n([\s\S]*?)\n {2}\);/);
    if (multi) {
      return withImport.replace(
        multi[0],
        `  return (\n    <>\n      ${button}\n${indent(multi[1], "  ")}\n    </>\n  );`,
      );
    }
    return withImport.replace(
      / {2}return (<[\s\S]*?\/>);/,
      (_, el: string) => `  return (\n    <>\n      ${button}\n      ${el}\n    </>\n  );`,
    );
  };
