import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Tooltip, { TOOLTIP_POSITION } from "../tooltip";

export enum AVATAR_VARIANT {
  IMAGE_WITH_FULL = "image_with_full",
  INITIALS_WITH_FULL = "initials_with_full",
  IMAGE_ONLY = "image-only",
  INITIALS_ONLY = "initials-only",
}

export interface IAvatar {
  name: string;
  email: string;
  image?: string;
  variant: string;
  className?: string;
}

const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 60 + Math.random() * 20;
  const lightness = 75 + Math.random() * 10;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const Avatar: FC<IAvatar> = ({
  name,
  email,
  image,
  variant,
  className = "",
}: IAvatar) => {
  const [bgColor, setBgColor] = useState<string>("transparent");
  const [isTooltipInitialVisible, setIsTooltipInitialVisible] = useState(false);
  const [isTooltipImageVisible, setIsTooltipImageVisible] = useState(false);

  useEffect(() => {
    setBgColor(generatePastelColor());
  }, []);

  const generateInitials = (name: string) => {
    const nameArray = name.split(" ");
    return nameArray.length > 1
      ? `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`
      : nameArray[0].charAt(0);
  };

  const renderTooltip = (name: string, email: string, isVisible: boolean) => {
    return (
      <Tooltip
        position={TOOLTIP_POSITION.RIGHT}
        label={
          <div className="flex flex-col">
            {name}
            <p className="text-neutral-300 text-xs">{email}</p>
          </div>
        }
        isVisible={isVisible}
        toolTipWidth="w-36"
      />
    );
  };

  const renderAvatarImage = () => {
    if (image) {
      return (
        <div
          className="relative"
          onMouseEnter={() => setIsTooltipImageVisible(true)}
          onMouseLeave={() => setIsTooltipImageVisible(false)}
        >
          <Image
            className="rounded-full border border-neutral-400"
            src={image}
            alt="profile"
            width={60}
            height={60}
          />
          {variant === AVATAR_VARIANT.IMAGE_ONLY &&
            renderTooltip(name, email, isTooltipImageVisible)}
        </div>
      );
    }

    return (
      <div
        className="size-[60px] flex items-center justify-center rounded-full font-semibold cursor-default relative"
        style={{ backgroundColor: bgColor }}
        onMouseEnter={() => setIsTooltipInitialVisible(true)}
        onMouseLeave={() => setIsTooltipInitialVisible(false)}
      >
        {generateInitials(name)}
        {variant === AVATAR_VARIANT.INITIALS_ONLY &&
          renderTooltip(name, email, isTooltipInitialVisible)}
      </div>
    );
  };

  return (
    <div className={`flex flex-row items-center gap-2 ${className}`}>
      {renderAvatarImage()}

      {(variant === AVATAR_VARIANT.IMAGE_WITH_FULL ||
        variant === AVATAR_VARIANT.INITIALS_WITH_FULL) && (
        <div className="flex flex-col">
          <p className="text-base font-semibold">{name}</p>
          <p className="text-sm text-neutral-700">{email}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
