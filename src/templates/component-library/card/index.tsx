"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import Card, { CARD_VARIANT, CARD_PADDING } from "@/components/card";

const CardTemplate = () => {
  const [variant, setVariant] = useState<string>(CARD_VARIANT.DEFAULT);
  const [padding, setPadding] = useState<string>(CARD_PADDING.MD);
  const [slot, setSlot] = useState<string>("none");
  const [title, setTitle] = useState<string>("Card Title");
  const [body, setBody] = useState<string>("Card body content goes here.");

  const variantOptions = Object.values(CARD_VARIANT).map((v) => ({ value: v, label: v }));
  const paddingOptions = Object.values(CARD_PADDING).map((v) => ({ value: v, label: v }));
  const slotOptions = [
    { value: "none", label: "None" },
    { value: "header", label: "Header" },
    { value: "footer", label: "Footer" },
    { value: "both", label: "Header + Footer" },
  ];

  const codeExample = `import { Card, CARD_VARIANT, CARD_PADDING } from "gwan-design-system";

const Example = () => {
  return (
    <Card
      variant={CARD_VARIANT.DEFAULT} // DEFAULT | BORDERED | ELEVATED | FLAT
      padding={CARD_PADDING.MD}      // NONE | SM | MD | LG
      header={<p>Card Title</p>}     // optional, renders above body with a divider
      footer={<p>Footer note</p>}    // optional, renders below body with a divider
      className=""                   // optional, extra wrapper class
    >
      <p>Card content goes here.</p>
    </Card>
  );
};`;

  const hasHeader = slot === "header" || slot === "both";
  const hasFooter = slot === "footer" || slot === "both";

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center min-h-24">
        <Card
          variant={variant as CARD_VARIANT}
          padding={padding as CARD_PADDING}
          header={hasHeader ? <p className="font-semibold text-foreground text-sm">{title}</p> : undefined}
          footer={hasFooter ? <p className="text-xs text-muted-fg">Card Footer</p> : undefined}
          className="w-72"
        >
          {!hasHeader && title && <p className="text-sm font-semibold text-foreground mb-1">{title}</p>}
          <p className="text-sm text-muted-fg">{body}</p>
        </Card>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
          className="w-full sm:w-48"
        />
        <Input
          label="Body"
          value={body}
          onChange={(e) => setBody((e.target as HTMLInputElement).value)}
          className="w-full sm:w-48"
        />
        <SelectDropdown label="Variant" options={variantOptions} value={variant} onChange={setVariant} className="w-full sm:w-48" />
        <SelectDropdown label="Padding" options={paddingOptions} value={padding} onChange={setPadding} className="w-full sm:w-48" />
        <SelectDropdown label="Slots" options={slotOptions} value={slot} onChange={setSlot} className="w-full sm:w-48" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Static examples */}
      <div className="flex flex-row flex-wrap justify-center gap-4 items-start">
        <Card className="w-52">
          <p className="text-sm font-medium text-foreground">Default</p>
          <p className="text-xs text-muted-fg mt-1">Standard bordered surface.</p>
        </Card>
        <Card variant={CARD_VARIANT.BORDERED} className="w-52">
          <p className="text-sm font-medium text-foreground">Bordered</p>
          <p className="text-xs text-muted-fg mt-1">Thicker border emphasis.</p>
        </Card>
        <Card variant={CARD_VARIANT.ELEVATED} className="w-52">
          <p className="text-sm font-medium text-foreground">Elevated</p>
          <p className="text-xs text-muted-fg mt-1">Shadow for depth.</p>
        </Card>
        <Card variant={CARD_VARIANT.FLAT} className="w-52">
          <p className="text-sm font-medium text-foreground">Flat</p>
          <p className="text-xs text-muted-fg mt-1">Subtle background, no border.</p>
        </Card>
        <Card
          variant={CARD_VARIANT.DEFAULT}
          padding={CARD_PADDING.MD}
          header={<p className="text-sm font-semibold text-foreground">Header Slot</p>}
          footer={<p className="text-xs text-muted-fg">Footer Slot</p>}
          className="w-52"
        >
          <p className="text-xs text-muted-fg">With header and footer.</p>
        </Card>
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default CardTemplate;
