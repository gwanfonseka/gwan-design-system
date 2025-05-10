import { IBanner } from "@/components/banner";
import Carousel from "@/components/carousel";

const Carousels = () => {
  const slides = [
    {
      title: "This is a title",
      titleClassName: "text-6xl font-semibold text-white",
      subTitle: "Below of the title is the sub title",
      subTitleClassName: "text-4xl font-normal text-white",
      contentPlacement: "left",
      backgroundImage: "/images/hero.png",
    },
    {
      backgroundImage: "/images/hero2.png",
    },
    {
      title: "This is a title",
      titleClassName: "text-6xl font-semibold text-white",
      subTitle: "Below of the title is the sub title",
      subTitleClassName: "text-4xl font-normal text-white",
      contentPlacement: "right",
      backgroundColor:
        "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
    },
    {
      title: "This is a title",
      titleClassName: "text-6xl font-semibold text-white",
      subTitle: "Below of the title is the sub title",
      subTitleClassName: "text-4xl font-normal text-white",
      contentPlacement: "left",
      backgroundColor: "bg-redola-500",
    },
  ];
  return <Carousel slides={slides as IBanner[]} />;
};

export default Carousels;
