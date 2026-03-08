import Button from "@/components/button";
import Chip, { CHIP_EDGE_STYLE, CHIP_VARIANT } from "@/components/chip";
import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import { ChangeEvent, useState } from "react";

const chipsArray = [
  { label: "Chip 1" },
  { label: "Chip 2" },
  { label: "Chip 3" },
  { label: "Chip 4" },
  { label: "Chip 5" },
  { label: "Chip 6" },
  { label: "Chip 7" },
  { label: "Chip 8" },
  { label: "Chip 9" },
  { label: "Chip 10" },
];

const Chips = () => {
  const [label, setLabel] = useState<string>("Label");
  const [chipVariant, setChipVariant] = useState<string>(CHIP_VARIANT.SOLID);
  const [chipEdges, setChipEdges] = useState<string>(CHIP_EDGE_STYLE.ROUNDED);
  const [chipList, setChipList] = useState<{ label: string }[]>([
    chipsArray[0],
  ]);

  const tagVariantOptions = [
    { value: CHIP_VARIANT.SOLID, label: "solid" },
    { value: CHIP_VARIANT.OUTLINE, label: "outline" },
  ];

  const tagEdgesOptions = [
    { value: CHIP_EDGE_STYLE.ROUNDED, label: "rounded" },
    { value: CHIP_EDGE_STYLE.SQUARE, label: "square" },
    { value: CHIP_EDGE_STYLE.PILL, label: "pill" },
  ];

  const codeExample = `import { Chip, CHIP_VARIANT, CHIP_EDGE_STYLE } from "gwan-design-system";

const Example = () => {
  return (
    <Chip 
      label="Label"
      onClear={() => {}}
      className="custom-class" // optional, you can add your own styles
      variant={CHIP_VARIANT.SOLID} // optional, default is solid
      edges={CHIP_EDGE_STYLE.ROUNDED} // optional, default is rounded
    />
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center gap-4 items-center">
          <Chip
            label={label}
            variant={chipVariant as CHIP_VARIANT}
            edges={chipEdges as CHIP_EDGE_STYLE}
            onClear={() => {}}
          />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <Input
            label="Chip label"
            value={label}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLabel(e.target.value)
            }
            className="w-64"
          />
          <SelectDropdown
            label="Variant"
            options={tagVariantOptions}
            value={chipVariant}
            onChange={(option) => setChipVariant(option)}
            className="w-64"
          />
          <SelectDropdown
            label="Edges style"
            options={tagEdgesOptions}
            value={chipEdges}
            onChange={(option) => setChipEdges(option)}
            className="w-64"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-8 items-center justify-center">
        <Chip
          label="This is a chip"
          edges={CHIP_EDGE_STYLE.PILL}
          onClear={() => {}}
        />
        <Chip label="This is a chip" onClear={() => {}} />
        <Chip
          label="This is a chip"
          edges={CHIP_EDGE_STYLE.SQUARE}
          onClear={() => {}}
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Chips;
