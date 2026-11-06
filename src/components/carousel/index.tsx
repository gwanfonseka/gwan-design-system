import { FC, ReactNode, useEffect, useState } from "react";
import Banner, { IBanner } from "../banner";

/** A Banner's props, or `content` to show anything else. */
export type ICarouselSlide = IBanner | { content: ReactNode };

export interface ICarousel {
  slides: ICarouselSlide[];
  interval?: number;
  className?: string;
}

const Carousel: FC<ICarousel> = ({
  slides,
  interval = 3000,
  className = "",
}: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className={`relative w-full h-60 md:h-121 overflow-hidden ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {"content" in slide ? (
            slide.content
          ) : (
            <Banner
              title={slide.title}
              titleClassName={slide.titleClassName}
              subTitle={slide.subTitle}
              subTitleClassName={slide.subTitleClassName}
              contentPlacement={slide.contentPlacement}
              backgroundImage={slide.backgroundImage}
              backgroundColor={slide.backgroundColor}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
