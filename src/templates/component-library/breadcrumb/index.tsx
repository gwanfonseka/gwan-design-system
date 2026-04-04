import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Breadcrumb, { BREADCRUMB_SEPARATOR } from "@/components/breadcrumb";
import { useState } from "react";

const demoItems = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components-library" },
  { label: "Breadcrumb" },
];

const Breadcrumbs = () => {
  const [separator, setSeparator] = useState<string>(BREADCRUMB_SEPARATOR.CHEVRON);

  const separatorOptions = Object.values(BREADCRUMB_SEPARATOR).map((v) => ({ value: v, label: v }));

  const codeExample = `import { Breadcrumb, BREADCRUMB_SEPARATOR } from "gwan-design-system";

const Example = () => (
  <Breadcrumb
    items={[
      { label: "Home", href: "/" },
      { label: "Components", href: "/components-library" },
      { label: "Breadcrumb" },
    ]}
    separator={BREADCRUMB_SEPARATOR.CHEVRON} // slash | chevron | dot
  />
);`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <Breadcrumb items={demoItems} separator={separator as BREADCRUMB_SEPARATOR} />
      </div>
      <div className="flex justify-center">
        <SelectDropdown
          label="Separator"
          options={separatorOptions}
          value={separator}
          onChange={setSeparator}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 p-4 border border-border rounded-lg w-full max-w-lg mx-auto">
        <Breadcrumb items={demoItems} separator={BREADCRUMB_SEPARATOR.CHEVRON} />
        <Breadcrumb items={demoItems} separator={BREADCRUMB_SEPARATOR.SLASH} />
        <Breadcrumb items={demoItems} separator={BREADCRUMB_SEPARATOR.DOT} />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Breadcrumbs;
