"use client";

import { FC, useState } from "react";
import Avatar, { AVATAR_VARIANT, AVATAR_SIZE } from "../avatar";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

export interface IAvatarGroupItem {
  name: string;
  email: string;
  image?: string;
}

export interface IAvatarGroup {
  items: IAvatarGroupItem[];
  max?: number;
  size?: AVATAR_SIZE;
  overflowTooltipPosition?: TOOLTIP_POSITION;
  className?: string;
}

const sizeClass: Record<AVATAR_SIZE, string> = {
  [AVATAR_SIZE.XS]: "size-6 text-[10px]",
  [AVATAR_SIZE.SM]: "size-8 text-xs",
  [AVATAR_SIZE.MD]: "size-10 text-xs",
  [AVATAR_SIZE.LG]: "size-14 text-sm",
  [AVATAR_SIZE.XL]: "size-18 text-base",
};

const offsetClass: Record<AVATAR_SIZE, string> = {
  [AVATAR_SIZE.XS]: "-ml-2",
  [AVATAR_SIZE.SM]: "-ml-3",
  [AVATAR_SIZE.MD]: "-ml-3",
  [AVATAR_SIZE.LG]: "-ml-4",
  [AVATAR_SIZE.XL]: "-ml-5",
};

const AvatarGroup: FC<IAvatarGroup> = ({
  items,
  max = 4,
  size = AVATAR_SIZE.SM,
  overflowTooltipPosition = TOOLTIP_POSITION.TOP,
  className = "",
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const visible = items.slice(0, max);
  const overflowItems = items.slice(max);
  const overflow = overflowItems.length;

  return (
    <div className={`flex items-center ${className}`}>
      {visible.map((item, i) => (
        <div
          key={i}
          className={`${i > 0 ? offsetClass[size] : ""} ring-2 ring-surface rounded-full shrink-0`}
        >
          <Avatar
            name={item.name}
            email={item.email}
            image={item.image}
            variant={item.image ? AVATAR_VARIANT.IMAGE_ONLY : AVATAR_VARIANT.INITIALS_ONLY}
            size={size}
          />
        </div>
      ))}

      {overflow > 0 && (
        <div
          className={`relative ${offsetClass[size]} ring-2 ring-surface rounded-full shrink-0`}
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          <div
            className={`${sizeClass[size]} flex items-center justify-center rounded-full bg-surface-raised border border-border font-semibold text-muted-fg cursor-default`}
          >
            +{overflow}
          </div>
          <Tooltip
            position={overflowTooltipPosition}
            isVisible={tooltipVisible}
            toolTipWidth="w-auto"
            label={
              <div className="flex flex-col gap-0.5">
                {overflowItems.map((item, i) => (
                  <span key={i} className="whitespace-nowrap">{item.name}</span>
                ))}
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
