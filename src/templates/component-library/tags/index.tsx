import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Tag, { TAG_EDGE_STYLE, TAG_TYPE, TAG_VARIANT } from "@/components/tag";
import { ChangeEvent, useState } from "react";

const Tags = () => {
  const [tagLabel, setTagLabel] = useState("Label");
  const [tagType, setTagType] = useState<string>(TAG_TYPE.DEFAULT);
  const [tagVariant, setTagVariant] = useState<string>(TAG_VARIANT.SOLID);
  const [tagEdges, setTagEdges] = useState<string>(TAG_EDGE_STYLE.ROUNDED);

  const tagTypeOptions = [
    { value: TAG_TYPE.DEFAULT, label: TAG_TYPE.DEFAULT },
    { value: TAG_TYPE.SUCCESS, label: TAG_TYPE.SUCCESS },
    { value: TAG_TYPE.INFO, label: TAG_TYPE.INFO },
    { value: TAG_TYPE.WARNING, label: TAG_TYPE.WARNING },
    { value: TAG_TYPE.DANGER, label: TAG_TYPE.DANGER },
  ];

  const tagVariantOptions = [
    { value: TAG_VARIANT.SOLID, label: "solid" },
    { value: TAG_VARIANT.OUTLINE, label: "outline" },
  ];

  const tagEdgesOptions = [
    { value: TAG_EDGE_STYLE.ROUNDED, label: "rounded" },
    { value: TAG_EDGE_STYLE.SQUARE, label: "square" },
    { value: TAG_EDGE_STYLE.PILL, label: "pill" },
  ];

  const codeExample = `import { Tag, TAG_TYPE, TAG_EDGE_STYLE, TAG_VARIANT } from "gwan-design-system";

const Example = () => {
  return (
    <Tag
      type={TAG_TYPE.DEFAULT}
      label="Label"
      variant={TAG_VARIANT.SOLID} // optional, default is solid
      edges={TAG_EDGE_STYLE.ROUNDED} // optional, default is rounded
      className="custom-class" // optional, you can add your own styles
    />
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center gap-4 items-center">
          <Tag
            type={tagType as TAG_TYPE}
            label={tagLabel}
            variant={tagVariant as TAG_VARIANT}
            edges={tagEdges as TAG_EDGE_STYLE}
          />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <Input
            label="Tag label"
            value={tagLabel}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTagLabel(e.target.value)
            }
            className="w-64"
          />
          <SelectDropdown
            label="Tag type"
            options={tagTypeOptions}
            value={tagType}
            onChange={(option) => setTagType(option)}
            className="w-64"
          />
          <SelectDropdown
            label="Variant"
            options={tagVariantOptions}
            value={tagVariant}
            onChange={(option) => setTagVariant(option)}
            className="w-64"
          />
          <SelectDropdown
            label="Edges style"
            options={tagEdgesOptions}
            value={tagEdges}
            onChange={(option) => setTagEdges(option)}
            className="w-64"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-center gap-8 items-center">
        <Tag type={TAG_TYPE.DEFAULT} label="Default" />
        <Tag type={TAG_TYPE.SUCCESS} label="Success" />
        <Tag type={TAG_TYPE.INFO} label="Info" />
        <Tag type={TAG_TYPE.WARNING} label="Warning" />
        <Tag type={TAG_TYPE.DANGER} label="Danger" />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Tags;
