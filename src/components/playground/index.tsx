import { ReactNode } from "react";

const Playground = ({ template }: { template: ReactNode }) => {
  return (
    <div className="relative bg-gray-50 rounded-lg shadow-md border border-neutral-50">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-100">
        <span className="text-xs text-neutral-900 uppercase font-medium py-2">
          Playground
        </span>
      </div>
      <div className="px-4 py-8">{template}</div>
    </div>
  );
};

export default Playground;
