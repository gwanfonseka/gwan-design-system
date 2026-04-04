import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Tabs, { TABS_VARIANT } from "@/components/tabs";
import { useState } from "react";

const TabsTemplate = () => {
  const [activeKey, setActiveKey] = useState("overview");
  const [variant, setVariant] = useState<string>(TABS_VARIANT.UNDERLINE);

  const variantOptions = Object.values(TABS_VARIANT).map((v) => ({ value: v, label: v }));

  const tabItems = [
    {
      key: "overview",
      label: "Overview",
      content: (
        <div className="p-4 bg-surface-raised rounded-lg text-sm text-foreground">
          <p className="font-semibold mb-2">Overview</p>
          <p className="text-muted-fg">This is the overview tab content. Use tabs to organise related content into separate panels.</p>
        </div>
      ),
    },
    {
      key: "details",
      label: "Details",
      content: (
        <div className="p-4 bg-surface-raised rounded-lg text-sm text-foreground">
          <p className="font-semibold mb-2">Details</p>
          <p className="text-muted-fg">Detailed information lives here. Each tab panel is rendered independently.</p>
        </div>
      ),
    },
    {
      key: "settings",
      label: "Settings",
      content: (
        <div className="p-4 bg-surface-raised rounded-lg text-sm text-foreground">
          <p className="font-semibold mb-2">Settings</p>
          <p className="text-muted-fg">Configuration options and preferences for this section.</p>
        </div>
      ),
    },
    {
      key: "disabled",
      label: "Disabled",
      disabled: true,
      content: null,
    },
  ];

  const codeExample = `import { Tabs, TABS_VARIANT } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [activeKey, setActiveKey] = useState("tab1");

  const items = [
    { key: "tab1", label: "Overview", content: <div>Overview content</div> },
    { key: "tab2", label: "Details",  content: <div>Details content</div> },
    { key: "tab3", label: "Settings", content: <div>Settings content</div> },
    { key: "tab4", label: "Disabled", disabled: true, content: null },
  ];

  return (
    <Tabs
      items={items}
      activeKey={activeKey}
      onChange={setActiveKey}
      variant={TABS_VARIANT.UNDERLINE} // underline | pill | boxed
    />
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <Tabs
        items={tabItems}
        activeKey={activeKey}
        onChange={setActiveKey}
        variant={variant as TABS_VARIANT}
      />
      <div className="flex justify-center">
        <SelectDropdown
          label="Variant"
          options={variantOptions}
          value={variant}
          onChange={(v) => { setVariant(v); setActiveKey("overview"); }}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  const [demoKey, setDemoKey] = useState("overview");
  const [demoKey2, setDemoKey2] = useState("overview");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <Tabs items={tabItems} activeKey={demoKey} onChange={setDemoKey} variant={TABS_VARIANT.UNDERLINE} />
        <Tabs items={tabItems} activeKey={demoKey2} onChange={setDemoKey2} variant={TABS_VARIANT.PILL} />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default TabsTemplate;
