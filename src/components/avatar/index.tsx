import { FC, useEffect, useState } from "react";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

export enum AVATAR_VARIANT {
  IMAGE_WITH_FULL = "image_with_full",
  INITIALS_WITH_FULL = "initials_with_full",
  IMAGE_ONLY = "image-only",
  INITIALS_ONLY = "initials-only",
}

export enum AVATAR_SIZE {
  XS = "XS",
  SM = "SM",
  MD = "MD",
  LG = "LG",
  XL = "XL",
}

export enum AVATAR_LABEL_POSITION {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export interface IAvatar {
  name: string;
  email: string;
  image?: string;
  variant: string;
  size?: AVATAR_SIZE;
  labelPosition?: AVATAR_LABEL_POSITION;
  className?: string;
  isLoading?: boolean;
}

const sizeMap = {
  [AVATAR_SIZE.XS]: { avatar: "size-6",    text: "text-xs",   sub: "text-[10px]", initials: "text-xs"  },
  [AVATAR_SIZE.SM]: { avatar: "size-8",    text: "text-xs",   sub: "text-[10px]", initials: "text-xs"  },
  [AVATAR_SIZE.MD]: { avatar: "size-10",   text: "text-sm",   sub: "text-xs",     initials: "text-xs"  },
  [AVATAR_SIZE.LG]: { avatar: "size-14",   text: "text-base", sub: "text-sm",     initials: "text-sm"  },
  [AVATAR_SIZE.XL]: { avatar: "size-18",   text: "text-lg",   sub: "text-sm",     initials: "text-base"},
};

const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, ${60 + Math.random() * 20}%, ${75 + Math.random() * 10}%)`;
};

const Avatar: FC<IAvatar> = ({
  name,
  email,
  image,
  variant,
  size = AVATAR_SIZE.LG,
  labelPosition = AVATAR_LABEL_POSITION.RIGHT,
  className = "",
  isLoading = false,
}) => {
  const [bgColor, setBgColor] = useState<string>("transparent");
  const [isTooltipInitialVisible, setIsTooltipInitialVisible] = useState(false);
  const [isTooltipImageVisible, setIsTooltipImageVisible] = useState(false);

  useEffect(() => {
    setBgColor(generatePastelColor());
  }, []);

  const sizes = sizeMap[size];
  const tooltipPos = labelPosition === AVATAR_LABEL_POSITION.LEFT
    ? TOOLTIP_POSITION.LEFT
    : TOOLTIP_POSITION.RIGHT;

  const generateInitials = (name: string) => {
    const parts = name.split(" ");
    return parts.length > 1
      ? `${parts[0].charAt(0)}${parts[1].charAt(0)}`
      : parts[0].charAt(0);
  };

  const renderTooltip = (isVisible: boolean) => (
    <Tooltip
      position={tooltipPos}
      label={
        <div className="flex flex-col">
          {name}
          <p className="opacity-70 text-xs">{email}</p>
        </div>
      }
      isVisible={isVisible}
      toolTipWidth="w-36"
    />
  );

  const renderAvatarImage = () => {
    if (image && (variant === AVATAR_VARIANT.IMAGE_ONLY || variant === AVATAR_VARIANT.IMAGE_WITH_FULL)) {
      return (
        <div
          className="relative"
          onMouseEnter={() => setIsTooltipImageVisible(true)}
          onMouseLeave={() => setIsTooltipImageVisible(false)}
        >
          <img
            className={`rounded-full border border-border ${sizes.avatar} object-cover`}
            src={image}
            alt="profile"
          />
          {variant === AVATAR_VARIANT.IMAGE_ONLY && renderTooltip(isTooltipImageVisible)}
        </div>
      );
    }

    return (
      <div
        className={`${sizes.avatar} ${sizes.initials} flex items-center justify-center rounded-full font-semibold cursor-default relative`}
        style={{ backgroundColor: bgColor }}
        onMouseEnter={() => setIsTooltipInitialVisible(true)}
        onMouseLeave={() => setIsTooltipInitialVisible(false)}
      >
        {generateInitials(name)}
        {variant === AVATAR_VARIANT.INITIALS_ONLY && renderTooltip(isTooltipInitialVisible)}
      </div>
    );
  };

  const showLabel = variant === AVATAR_VARIANT.IMAGE_WITH_FULL || variant === AVATAR_VARIANT.INITIALS_WITH_FULL;

  const label = showLabel && (
    <div className={`flex flex-col ${labelPosition === AVATAR_LABEL_POSITION.LEFT ? "items-end" : "items-start"}`}>
      <p className={`font-semibold text-foreground leading-tight ${sizes.text}`}>{name}</p>
      <p className={`text-muted-fg ${sizes.sub}`}>{email}</p>
    </div>
  );

  if (isLoading) {
    const shimmerLabel = showLabel && (
      <div className={`flex flex-col gap-2 ${labelPosition === AVATAR_LABEL_POSITION.LEFT ? "items-end" : "items-start"}`}>
        <div className="w-32 h-4 bg-surface-raised rounded-lg" />
        <div className="w-24 h-3 bg-surface-raised rounded-lg" />
      </div>
    );
    return (
      <div className="flex flex-row items-center gap-2 pl-1.25 animate-pulse">
        {labelPosition === AVATAR_LABEL_POSITION.LEFT && shimmerLabel}
        <div className={`${sizes.avatar} rounded-full bg-surface-raised`} />
        {labelPosition === AVATAR_LABEL_POSITION.RIGHT && shimmerLabel}
      </div>
    );
  }

  return (
    <div className={`flex flex-row items-center gap-2 pl-1.25 ${className}`}>
      {labelPosition === AVATAR_LABEL_POSITION.LEFT && label}
      {renderAvatarImage()}
      {labelPosition === AVATAR_LABEL_POSITION.RIGHT && label}
    </div>
  );
};

export default Avatar;
