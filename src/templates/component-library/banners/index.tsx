import Banner from "@/components/banner";

const Banners = () => {
  return (
    <div className="flex flex-col gap-8">
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
  );
};

export default Banners;
