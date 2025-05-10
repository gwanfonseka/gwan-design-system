import { useEffect, useState } from "react";
import Banner, { IBanner } from "../banner";

export interface ICarousel {
  slides: IBanner[];
  interval?: number;
}

const Carousel = ({ slides, interval = 3000 }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full h-[484px] overflow-hidden">
      {slides.map(
        (
          {
            title,
            titleClassName,
            subTitle,
            subTitleClassName,
            backgroundImage,
            backgroundColor,
            contentPlacement,
          },
          index
        ) => {
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Banner
                title={title}
                titleClassName={titleClassName}
                subTitle={subTitle}
                subTitleClassName={subTitleClassName}
                contentPlacement={contentPlacement}
                backgroundImage={backgroundImage}
                backgroundColor={backgroundColor}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Carousel;
