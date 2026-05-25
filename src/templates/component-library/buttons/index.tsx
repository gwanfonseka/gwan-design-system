import Button, {
  BUTTON_EDGE_STYLE,
  BUTTON_SIZE,
  BUTTON_VARIANTS,
} from "@/components/button";
import Checkbox from "@/components/checkbox";
import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import { ChangeEvent, useState } from "react";
import * as svgList from "@/components/icons";

const Buttons = () => {
  const [buttonLabel, setButtonLabel] = useState<string>("Label");
  const [buttonVariant, setButtonVariant] = useState<string>(
    BUTTON_VARIANTS.PRIMARY,
  );
  const [buttonEdges, setButtonEdges] = useState<string>(
    BUTTON_EDGE_STYLE.ROUNDED,
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [buttonSize, setButtonSize] = useState<string>(BUTTON_SIZE.MD);

  const buttonSizeOptions = [
    { value: BUTTON_SIZE.SM, label: "SM" },
    { value: BUTTON_SIZE.MD, label: "MD" },
    { value: BUTTON_SIZE.LG, label: "LG" },
  ];
  const [leftIcon, setLeftIcon] = useState<string>("None");
  const [rightIcon, setRightIcon] = useState<string>("None");
  const list = Object.keys(svgList);

  const buttonVariantOptions = [
    { value: BUTTON_VARIANTS.PRIMARY, label: "primary" },
    { value: BUTTON_VARIANTS.SECONDARY, label: "secondary" },
    { value: BUTTON_VARIANTS.TERTIARY, label: "tertiary" },
  ];

  const buttonEdgesOptions = [
    { value: BUTTON_EDGE_STYLE.ROUNDED, label: "rounded" },
    { value: BUTTON_EDGE_STYLE.SQUARED, label: "squared" },
    { value: BUTTON_EDGE_STYLE.PILL, label: "pill" },
  ];

  const codeExample = `import { Button, BUTTON_VARIANTS, BUTTON_EDGE_STYLE, BUTTON_SIZE } from "gwan-design-system";
import { ProductsSVG } from "gwan-design-system";

const Example = () => {
  return (
    <Button
      label="Label"
      onClick={() => {}}
      variant={BUTTON_VARIANTS.PRIMARY}  // PRIMARY | SECONDARY | TERTIARY
      size={BUTTON_SIZE.MD}              // SM | MD | LG — MD matches form element height
      edges={BUTTON_EDGE_STYLE.ROUNDED}  // ROUNDED | SQUARED | PILL
      leftIcon={<ProductsSVG />}         // optional left icon
      rightIcon={<ProductsSVG />}        // optional right icon
      disabled={false}
      type="button"
    />
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
          <Button
            variant={buttonVariant as BUTTON_VARIANTS}
            label={buttonLabel}
            edges={buttonEdges as BUTTON_EDGE_STYLE}
            size={buttonSize as BUTTON_SIZE}
            disabled={isDisabled}
            leftIcon={
              leftIcon !== "None"
                ? svgList[leftIcon as keyof typeof svgList]()
                : null
            }
            rightIcon={
              rightIcon !== "None"
                ? svgList[rightIcon as keyof typeof svgList]()
                : null
            }
            onClick={() => {}}
          />
          <Checkbox
            label="Disabled"
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
          <Input
            label="Tag label"
            value={buttonLabel}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setButtonLabel(e.target.value)
            }
            className="w-full sm:w-64"
          />
          <SelectDropdown
            label="Tag type"
            options={buttonVariantOptions}
            value={buttonVariant}
            onChange={(option) => setButtonVariant(option)}
            className="w-full sm:w-64"
          />
          <SelectDropdown
            label="Tag edges"
            options={buttonEdgesOptions}
            value={buttonEdges}
            onChange={(option) => setButtonEdges(option)}
            className="w-full sm:w-64"
          />
          <SelectDropdown
            label="Size"
            options={buttonSizeOptions}
            value={buttonSize}
            onChange={(option) => setButtonSize(option)}
            className="w-full sm:w-64"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
          <SelectDropdown
            label="Left icon"
            options={[
              { value: "None", label: "None" },
              ...list.map((svg) => ({ value: svg, label: svg })),
            ]}
            value={leftIcon}
            onChange={(option) => setLeftIcon(option)}
            className="w-full sm:w-64"
          />
          <SelectDropdown
            label="Right icon"
            options={[
              { value: "None", label: "None" },
              ...list.map((svg) => ({ value: svg, label: svg })),
            ]}
            value={rightIcon}
            onChange={(option) => setRightIcon(option)}
            className="w-full sm:w-64"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <Button variant={BUTTON_VARIANTS.PRIMARY} label="Get Started" size={BUTTON_SIZE.MD} onClick={() => {}} />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Buttons;
