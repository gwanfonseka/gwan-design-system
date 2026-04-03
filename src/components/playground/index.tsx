import { ReactNode } from "react";

const Playground = ({ template }: { template: ReactNode }) => {
  return (
    <div className="relative border border-border rounded-xl">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border rounded-t-xl bg-surface">
        <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted-fg">
          Playground
        </span>
      </div>
      <div className="px-6 py-8 bg-background rounded-b-xl">{template}</div>
    </div>
  );
};

export default Playground;
