import { FC } from "react";

export interface IBanner {
  title?: string;
  titleClassName?: string;
  subTitle?: string;
  subTitleClassName?: string;
  contentPlacement?: "left" | "right";
  backgroundImage?: string;
  backgroundColor?: string;
  className?: string;
}

const Banner: FC<IBanner> = ({
  title = "",
  subTitle = "",
  contentPlacement = "left",
  backgroundImage = "",
  backgroundColor = "",
  titleClassName = "",
  subTitleClassName = "",
  className = "",
}: IBanner) => {
  const handleContentPlacement = () => {
    if (contentPlacement === "left") {
      return (
        <>
          <div className="flex flex-col gap-2">
            <p className={titleClassName}>{title}</p>
            <p className={subTitleClassName}>{subTitle}</p>
          </div>
          <div></div>
        </>
      );
    }

    return (
      <>
        <div className="hidden md:block"></div>
        <div className="flex flex-col gap-2">
          <p className={titleClassName}>{title}</p>
          <p className={subTitleClassName}>{subTitle}</p>
        </div>
      </>
    );
  };

  return (
    <div
      className={`w-full h-60 md:h-121 grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 ${backgroundColor} bg-no-repeat bg-cover bg-center ${className}`}
      style={
        backgroundImage !== ""
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >
      {handleContentPlacement()}
    </div>
  );
};

export default Banner;
