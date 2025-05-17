import Ellipsis from "@/components/ellipsis";

const EllipsisTemplate = () => {
  return (
    <div className="flex flex-row gap-10 items-center justify-center">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-neutral-500">
          Without Ellipsis
        </p>
        <p>Anton Nimesh Fonseka</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-neutral-500">With Ellipsis</p>
        <Ellipsis label="Anton Nimesh Fonseka" />
      </div>
    </div>
  );
};

export default EllipsisTemplate;
