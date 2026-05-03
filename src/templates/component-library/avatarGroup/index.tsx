"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import AvatarGroup from "@/components/avatarGroup";
import { AVATAR_SIZE } from "@/components/avatar";
import { TOOLTIP_POSITION } from "@/components/tooltip";

const sampleItems = [
  { name: "Alice Martin",  email: "alice@example.com",  image: "/images/profile_picture.png" },
  { name: "Bob Chen",      email: "bob@example.com"                                           },
  { name: "Clara Singh",   email: "clara@example.com",  image: "/images/profile_picture.png" },
  { name: "David Park",    email: "david@example.com"                                         },
  { name: "Eva Torres",    email: "eva@example.com",    image: "/images/profile_picture.png" },
  { name: "Frank Liu",     email: "frank@example.com"                                         },
];

const codeExample = `import { AvatarGroup, AVATAR_SIZE, TOOLTIP_POSITION } from "gwan-design-system";

const items = [
  { name: "Alice Martin", email: "alice@example.com", image: "/alice.png" },
  { name: "Bob Chen",     email: "bob@example.com"                        },
  { name: "Clara Singh",  email: "clara@example.com", image: "/clara.png" },
];

const Example = () => {
  return (
    <AvatarGroup
      items={items}                                          // required — { name, email, image? }[]
      max={4}                                               // optional, default 4 — max visible before +N badge
      size={AVATAR_SIZE.SM}                                 // optional — XS | SM | MD | LG | XL
      overflowTooltipPosition={TOOLTIP_POSITION.TOP}        // optional — TOP | BOTTOM | LEFT | RIGHT
      className=""                                          // optional, extra wrapper class
    />
  );
};`;

const AvatarGroupTemplate = () => {
  const [max, setMax] = useState("4");
  const [size, setSize] = useState<string>(AVATAR_SIZE.SM);
  const [tooltipPosition, setTooltipPosition] = useState<string>(TOOLTIP_POSITION.TOP);

  const sizeOptions = Object.values(AVATAR_SIZE).map((v) => ({ value: v, label: v }));
  const maxOptions = ["2", "3", "4", "5", "6"].map((v) => ({ value: v, label: v }));
  const tooltipPositionOptions = Object.values(TOOLTIP_POSITION).map((v) => ({ value: v, label: v }));

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-center min-h-12">
        <AvatarGroup items={sampleItems} max={Number(max)} size={size as AVATAR_SIZE} overflowTooltipPosition={tooltipPosition as TOOLTIP_POSITION} />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <SelectDropdown label="Max visible" options={maxOptions} value={max} onChange={setMax} className="w-full sm:w-44" />
        <SelectDropdown label="Size" options={sizeOptions} value={size} onChange={setSize} className="w-full sm:w-44" />
        <SelectDropdown label="Tooltip position" options={tooltipPositionOptions} value={tooltipPosition} onChange={setTooltipPosition} className="w-full sm:w-44" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-6">
        {Object.values(AVATAR_SIZE).map((s) => (
          <div key={s} className="flex items-center gap-4">
            <span className="text-xs text-muted-fg w-6">{s}</span>
            <AvatarGroup items={sampleItems} max={4} size={s} />
          </div>
        ))}
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default AvatarGroupTemplate;
