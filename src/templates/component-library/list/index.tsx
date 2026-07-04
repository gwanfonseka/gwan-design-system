"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import List, { LIST_VARIANT, LIST_SIZE } from "@/components/list";
import { UserSVG, MailSVG, SettingsSVG, BellSVG, ShieldSVG, KeySVG } from "@/components/icons";
import Tag, { TAG_TYPE } from "@/components/tag";

const variantOptions = Object.values(LIST_VARIANT).map((v) => ({ value: v, label: v }));
const sizeOptions    = Object.values(LIST_SIZE).map((v) => ({ value: v, label: v }));

const sampleItems = [
  { key: "profile",   title: "Profile",       description: "Manage your personal information", icon: <UserSVG />,     rightSlot: <Tag type={TAG_TYPE.SUCCESS} label="Active" /> },
  { key: "mail",      title: "Email",          description: "user@example.com",                 icon: <MailSVG /> },
  { key: "settings",  title: "Settings",       description: "App preferences and configuration", icon: <SettingsSVG /> },
  { key: "notif",     title: "Notifications",  description: "Push and email alerts",             icon: <BellSVG /> },
  { key: "security",  title: "Security",       description: "Password and 2FA",                  icon: <ShieldSVG /> },
  { key: "api",       title: "API Keys",       description: "Manage developer access tokens",   icon: <KeySVG />,      rightSlot: <span className="text-xs text-muted-fg">3 keys</span> },
];

const codeExample = `import { List, LIST_VARIANT, LIST_SIZE } from "gwan-design-system";
import { UserSVG } from "gwan-design-system";

const items = [
  {
    key: "profile",
    title: "Profile",
    description: "Manage your personal information",  // optional
    icon: <UserSVG />,                                 // optional, left icon slot
    rightSlot: <span>Action</span>,                    // optional, right slot
    onClick: () => console.log("clicked"),             // optional, makes row clickable
    disabled: false,                                   // optional
  },
];

const Example = () => (
  <List
    items={items}
    variant={LIST_VARIANT.BORDERED}  // default | bordered | flush | card
    size={LIST_SIZE.MD}              // SM | MD | LG
  />
);`;

const ListTemplate = () => {
  const [variant, setVariant] = useState<string>(LIST_VARIANT.BORDERED);
  const [size, setSize] = useState<string>(LIST_SIZE.MD);

  const clickableItems = sampleItems.map((item) => ({
    ...item,
    onClick: () => console.log(`Clicked: ${item.title}`),
  }));

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <List
            items={clickableItems}
            variant={variant as LIST_VARIANT}
            size={size as LIST_SIZE}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown
          label="Variant"
          options={variantOptions}
          value={variant}
          onChange={setVariant}
          className="w-full sm:w-48"
        />
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={setSize}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <div className="w-full max-w-md">
          <List items={sampleItems} variant={LIST_VARIANT.BORDERED} size={LIST_SIZE.MD} />
        </div>
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default ListTemplate;
