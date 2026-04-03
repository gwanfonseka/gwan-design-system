import * as svgList from "@/components/icons";

const Icons = () => {
  const list = Object.keys(svgList);

  return (
    <div className="grid grid-cols-3 items-center sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-12">
      {list.map((svg: string, index) => (
        <div
          className="flex flex-col items-center gap-4 border border-border bg-surface-raised size-24 md:size-28 lg:size-32 xl:size-36 p-2 rounded-lg justify-center w-full"
          key={`svg_${index}`}
        >
          <div className="size-8 md:size-8 lg:size-10">
            {svgList[svg as keyof typeof svgList]()}
          </div>
          <span className="text-[10px] md:text-xs lg:text-sm font-medium">
            {svg}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
