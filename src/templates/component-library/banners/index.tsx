import Banner from "@/components/banner";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Input from "@/components/input";
import SelectDropdown from "@/components/selectDropdown";
import { useState, ChangeEvent } from "react";

const codeExample = `import { Banner } from "gwan-design-system";

const Example = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* With background image */}
      <Banner
        title="Welcome to GWAN"
        titleClassName="text-4xl font-semibold text-white"
        subTitle="Build faster with our design system"
        subTitleClassName="text-xl text-white"
        contentPlacement="left"
        backgroundImage="/images/hero.png"
      />

      {/* With solid color */}
      <Banner
        title="Special Offer"
        titleClassName="text-4xl font-semibold text-white"
        subTitle="Limited time promotion"
        subTitleClassName="text-xl text-white"
        contentPlacement="right"
        backgroundColor="bg-red-500"
      />

      {/* With gradient */}
      <Banner
        title="Explore More"
        titleClassName="text-4xl font-semibold text-white"
        subTitle="Discover our full component library"
        subTitleClassName="text-xl text-white"
        contentPlacement="left"
        backgroundColor="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      />
    </div>
  );
};`;

const placementOptions = [
  { value: "left", label: "left" },
  { value: "right", label: "right" },
];

const Banners = () => {
  const [title, setTitle] = useState("This is a title");
  const [subTitle, setSubTitle] = useState("Below of the title is the sub title");
  const [placement, setPlacement] = useState("left");

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <Banner
        title={title}
        titleClassName="text-2xl md:text-4xl font-semibold text-white"
        subTitle={subTitle}
        subTitleClassName="text-base md:text-xl font-normal text-white"
        contentPlacement={placement as "left" | "right"}
        backgroundImage="/images/hero.png"
      />

      <div className="flex flex-row justify-center gap-4 flex-wrap items-end">
        <Input
          label="Title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          className="w-full sm:w-64"
        />
        <Input
          label="Subtitle"
          value={subTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSubTitle(e.target.value)}
          className="w-full sm:w-64"
        />
        <SelectDropdown
          label="Content Placement"
          options={placementOptions}
          value={placement}
          onChange={(val) => setPlacement(val)}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* All variants display */}
      <div className="flex flex-col gap-6">
        <Banner
          title="This is a title"
          titleClassName="text-2xl md:text-4xl lg:text-6xl font-semibold text-white"
          subTitle="Below of the title is the sub title"
          subTitleClassName="text-base md:text-2xl lg:text-4xl font-normal text-white"
          contentPlacement="left"
          backgroundImage="/images/hero.png"
        />
        <Banner backgroundImage="/images/hero2.png" />
        <Banner
          title="This is a title"
          titleClassName="text-2xl md:text-4xl lg:text-6xl font-semibold text-white"
          subTitle="Below of the title is the sub title"
          subTitleClassName="text-base md:text-2xl lg:text-4xl font-normal text-white"
          contentPlacement="right"
          backgroundColor="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        />
        <Banner
          title="This is a title"
          titleClassName="text-2xl md:text-4xl lg:text-6xl font-semibold text-white"
          subTitle="Below of the title is the sub title"
          subTitleClassName="text-base md:text-2xl lg:text-4xl font-normal text-white"
          contentPlacement="left"
          backgroundColor="bg-red-500"
        />
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Banners;
