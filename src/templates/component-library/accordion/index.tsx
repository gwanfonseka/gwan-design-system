import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Accordion, { ACCORDION_VARIANT } from "@/components/accordion";
import { useState } from "react";

const faqItems = [
  {
    key: "q1",
    title: "What is GWAN Design System?",
    content:
      "GWAN is a high-performance component library and design system built for Next.js projects, providing production-ready components with first-class dark mode support.",
  },
  {
    key: "q2",
    title: "How do I install it?",
    content:
      'Run `npm install gwan-design-system` then import the CSS and components into your project. Full setup instructions are available in the documentation.',
  },
  {
    key: "q3",
    title: "Does it support dark mode?",
    content:
      "Yes. Dark mode is baked in via CSS custom properties. Every component adapts automatically when you toggle the theme using next-themes or any theme provider.",
  },
  {
    key: "q4",
    title: "Is it TypeScript-first?",
    content:
      "Absolutely. All components ship with fully typed props, enums for variant/type options, and exported interfaces for full IntelliSense support.",
  },
  {
    key: "q5",
    title: "Disabled item",
    content: "This item is disabled.",
    disabled: true,
  },
];

const AccordionTemplate = () => {
  const [variant, setVariant] = useState<string>(ACCORDION_VARIANT.DEFAULT);
  const [allowMultiple, setAllowMultiple] = useState<string>("false");

  const variantOptions = Object.values(ACCORDION_VARIANT).map((v) => ({ value: v, label: v }));
  const multipleOptions = [
    { value: "false", label: "single open" },
    { value: "true", label: "allow multiple" },
  ];

  const codeExample = `import { Accordion, ACCORDION_VARIANT } from "gwan-design-system";

const items = [
  {
    key: "q1",
    title: "What is GWAN?",
    content: "A production-ready component library for Next.js.",
  },
  {
    key: "q2",
    title: "How do I install it?",
    content: "Run: npm install gwan-design-system",
  },
  {
    key: "q3",
    title: "Disabled item",
    content: "Not accessible.",
    disabled: true,
  },
];

const Example = () => (
  <Accordion
    items={items}
    defaultOpenKey="q1"
    variant={ACCORDION_VARIANT.DEFAULT} // default | bordered | flush
    allowMultiple={false}
  />
);`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <Accordion
        items={faqItems}
        defaultOpenKey="q1"
        variant={variant as ACCORDION_VARIANT}
        allowMultiple={allowMultiple === "true"}
      />
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown
          label="Variant"
          options={variantOptions}
          value={variant}
          onChange={setVariant}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Open behaviour"
          options={multipleOptions}
          value={allowMultiple}
          onChange={setAllowMultiple}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Accordion items={faqItems.slice(0, 3)} defaultOpenKey="q1" variant={ACCORDION_VARIANT.DEFAULT} />
        <Accordion items={faqItems.slice(0, 3)} defaultOpenKey="q1" variant={ACCORDION_VARIANT.BORDERED} />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default AccordionTemplate;
