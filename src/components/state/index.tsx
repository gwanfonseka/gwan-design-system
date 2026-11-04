import { FC, ReactNode } from "react";
import { BoxSVG, CheckSVG, SpinnerIconSVG, WarningSVG } from "../icons";

export enum STATE_TYPE {
  EMPTY = "EMPTY",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

export interface IStateBase {
  title: string;
  subTitle: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

export type IState =
  | ({ type: STATE_TYPE; stateImage?: string } & IStateBase)
  | ({ type?: undefined; stateImage: string } & IStateBase);

/** Built-in illustrations, drawn inline so they ship with the component and follow the theme. */
const ILLUSTRATION: Record<STATE_TYPE, { icon: ReactNode; tone: string }> = {
  [STATE_TYPE.EMPTY]: { icon: <BoxSVG />, tone: "text-muted-fg" },
  [STATE_TYPE.SUCCESS]: { icon: <CheckSVG />, tone: "text-success" },
  [STATE_TYPE.ERROR]: { icon: <WarningSVG />, tone: "text-danger" },
  [STATE_TYPE.LOADING]: { icon: <SpinnerIconSVG />, tone: "text-primary-default animate-spin" },
};

const State: FC<IState> = ({
  type,
  stateImage,
  title,
  subTitle,
  imageWidth,
  imageHeight,
  className = "",
}: IState) => {
  const illustration = type ? ILLUSTRATION[type] : undefined;
  // A built-in illustration is an icon, so it defaults much smaller than a custom image.
  const size = Math.min(imageWidth ?? 160, imageHeight ?? 160);

  return (
    <div
      role={type === STATE_TYPE.LOADING ? "status" : undefined}
      className={`w-full h-full flex flex-col gap-8 items-center justify-center ${className}`}
    >
      {stateImage ? (
        // eslint-disable-next-line @next/next/no-img-element -- the library can't depend on next/image
        <img src={stateImage} alt="" width={imageWidth ?? 526} height={imageHeight ?? 526} />
      ) : (
        illustration && (
          <div
            aria-hidden="true"
            className="flex items-center justify-center rounded-full bg-surface-raised"
            style={{ width: size, height: size }}
          >
            <span className={`block ${illustration.tone}`} style={{ width: size * 0.4, height: size * 0.4 }}>
              {illustration.icon}
            </span>
          </div>
        )
      )}
      <div className="flex flex-col gap-2">
        <p className="text-3xl text-center font-semibold">{title}</p>
        <p className="w-[300px] text-center">{subTitle}</p>
      </div>
    </div>
  );
};

export default State;
