import { IBanner } from "@/components/banner";
import Carousel from "@/components/carousel";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";

const slides = [
  {
    title: "This is a title",
    titleClassName: "text-2xl md:text-4xl lg:text-6xl font-semibold text-white",
    subTitle: "Below of the title is the sub title",
    subTitleClassName: "text-base md:text-2xl lg:text-4xl font-normal text-white",
    contentPlacement: "left",
    backgroundImage: "/images/hero.png",
  },
  {
    backgroundImage: "/images/hero2.png",
  },
  {
    title: "This is a title",
    titleClassName: "text-2xl md:text-4xl lg:text-6xl font-semibold text-white",
    subTitle: "Below of the title is the sub title",
    subTitleClassName: "text-base md:text-2xl lg:text-4xl font-normal text-white",
    contentPlacement: "right",
    backgroundColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
  },
  {
    title: "This is a title",
    titleClassName: "text-2xl md:text-4xl lg:text-6xl font-semibold text-white",
    subTitle: "Below of the title is the sub title",
    subTitleClassName: "text-base md:text-2xl lg:text-4xl font-normal text-white",
    contentPlacement: "left",
    backgroundColor: "bg-red-500",
  },
];

const codeExample = `import { Carousel } from "gwan-design-system";

const slides = [
  {
    title: "Welcome",
    titleClassName: "text-4xl font-semibold text-white",
    subTitle: "Discover our products",
    subTitleClassName: "text-xl text-white",
    contentPlacement: "left",
    backgroundImage: "/images/hero.png",
  },
  {
    title: "New Collection",
    titleClassName: "text-4xl font-semibold text-white",
    subTitle: "Shop the latest arrivals",
    subTitleClassName: "text-xl text-white",
    contentPlacement: "right",
    backgroundColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
  },
];

const Example = () => {
  return <Carousel slides={slides} />;
};`;

const Carousels = () => {
  const renderPlayground = () => (
    <Carousel slides={slides as IBanner[]} />
  );

  return (
    <div className="flex flex-col gap-8">
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Carousels;
