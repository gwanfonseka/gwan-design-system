import * as svgList from "@/components/icons";

const Icons = () => {
  const list = Object.keys(svgList);

  return (
    <div className="grid grid-cols-8 gap-x-8 gap-y-12">
      {list.map((svg: string, index) => (
        <div
          className="flex flex-col items-center gap-4 border border-white bg-neutrola-50 size-32 p-2 rounded-lg justify-center"
          key={`svg_${index}`}
        >
          <div className="size-[40px]">
            {svgList[svg as keyof typeof svgList]()}
          </div>
          <span className="text-sm font-medium">{svg}</span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
