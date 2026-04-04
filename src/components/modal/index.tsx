import { FC, useEffect, useRef } from "react";
import { CrossSVG } from "../icons";

export enum MODAL_SIZE {
  SMALL = "w-[calc(100vw-2rem)] sm:w-[600px]",
  MEDIUM = "w-[calc(100vw-2rem)] sm:w-[800px]",
  LARGE = "w-[calc(100vw-2rem)] sm:w-[950px]",
  FULL = "w-full h-full",
}

export interface IModal {
  title: string;
  children: React.ReactNode;
  onClear: () => void;
  size?: MODAL_SIZE;
  className?: string;
}

const Modal: FC<IModal> = ({
  title,
  children,
  onClear,
  size = MODAL_SIZE.SMALL,
  className = "",
}: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClear();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClear]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/40 ${className}`}
      onMouseDown={onClear}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`bg-surface border border-border p-4 ${
          size !== MODAL_SIZE.FULL && "rounded-lg"
        } absolute flex flex-col gap-4 max-h-[90vh] ${size}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1 text-3xl text-foreground">{title}</div>
          <div className="size-4 cursor-pointer text-muted-fg hover:text-foreground" onClick={() => onClear()}>
            <CrossSVG />
          </div>
        </div>
        <div className="w-full h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
