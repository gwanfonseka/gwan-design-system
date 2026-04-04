import { FC } from "react";

export enum SKELETON_VARIANT {
  TEXT = "text",
  CIRCLE = "circle",
  RECT = "rect",
}

export interface ISkeleton {
  variant?: SKELETON_VARIANT;
  width?: string | number;
  height?: string | number;
  lines?: number;
  className?: string;
}

const Skeleton: FC<ISkeleton> = ({
  variant = SKELETON_VARIANT.RECT,
  width,
  height,
  lines = 1,
  className = "",
}) => {
  const base = "animate-pulse bg-surface-raised rounded";

  const style = {
    width: width !== undefined ? (typeof width === "number" ? `${width}px` : width) : undefined,
    height: height !== undefined ? (typeof height === "number" ? `${height}px` : height) : undefined,
  };

  if (variant === SKELETON_VARIANT.CIRCLE) {
    const size = width ?? height ?? 40;
    const px = typeof size === "number" ? `${size}px` : size;
    return (
      <div
        className={`${base} rounded-full ${className}`}
        style={{ width: px, height: px }}
      />
    );
  }

  if (variant === SKELETON_VARIANT.TEXT) {
    if (lines === 1) {
      return (
        <div
          className={`${base} h-4 ${className}`}
          style={{ width: style.width ?? "100%" }}
        />
      );
    }
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${base} h-4`}
            style={{ width: i === lines - 1 ? "70%" : "100%" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${base} ${className}`}
      style={{
        width: style.width ?? "100%",
        height: style.height ?? "1rem",
      }}
    />
  );
};

export default Skeleton;
