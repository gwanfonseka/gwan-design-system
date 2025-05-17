import Image from "next/image";
import { FC } from "react";

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
}

export type IState =
  | ({ type: STATE_TYPE; stateImage?: string } & IStateBase)
  | ({ type?: undefined; stateImage: string } & IStateBase);

const State: FC<IState> = ({
  type,
  stateImage,
  title,
  subTitle,
  imageWidth = 526,
  imageHeight = 526,
}: IState) => {
  const typeImage = () => {
    switch (type) {
      case STATE_TYPE.EMPTY:
        return "/images/empty.png";
      case STATE_TYPE.SUCCESS:
        return "/images/success.png";
      case STATE_TYPE.ERROR:
        return "/images/empty.png";
      case STATE_TYPE.LOADING:
        return "/images/empty.png";
      default:
        return "/images/empty.png";
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
      {stateImage ? (
        <Image
          src={stateImage}
          alt="state image"
          width={imageWidth}
          height={imageHeight}
        />
      ) : (
        <Image
          src={typeImage()}
          alt="state image"
          width={imageWidth}
          height={imageHeight}
        />
      )}
      <div className="flex flex-col gap-2">
        <p className="text-3xl text-center font-semibold">{title}</p>
        <p className="w-[300px] text-center">{subTitle}</p>
      </div>
    </div>
  );
};

export default State;
