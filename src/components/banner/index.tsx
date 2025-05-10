export interface IBanner {
  title?: string;
  titleClassName?: string;
  subTitle?: string;
  subTitleClassName?: string;
  contentPlacement?: "left" | "right";
  backgroundImage?: string;
  backgroundColor?: string;
}

const Banner = ({
  title = "",
  subTitle = "",
  contentPlacement = "left",
  backgroundImage = "",
  backgroundColor = "",
  titleClassName = "",
  subTitleClassName = "",
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
        <div></div>
        <div className="flex flex-col gap-2">
          <p className={titleClassName}>{title}</p>
          <p className={subTitleClassName}>{subTitle}</p>
        </div>
      </>
    );
  };

  return (
    <div
      className={`w-full h-[484px] grid grid-cols-2 items-center px-16 ${backgroundColor} bg-no-repeat bg-cover bg-center`}
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
