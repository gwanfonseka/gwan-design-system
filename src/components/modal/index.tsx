import { FC, useEffect, useRef } from "react";
import { CrossSVG } from "../icons";

export enum MODAL_SIZE {
  SMALL = "w-[600px] h-60",
  MEDIUM = "w-[800px] h-96",
  LARGE = "w-[950px] h-[600px]",
  FULL = "w-full h-full",
}

export interface IModal {
  title: string;
  children: React.ReactNode;
  onClear: () => void;
  size?: MODAL_SIZE;
}

const Modal: FC<IModal> = ({
  title,
  children,
  onClear,
  size = MODAL_SIZE.MEDIUM,
}: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`bg-white p-4 ${
          size !== MODAL_SIZE.FULL && "rounded-lg"
        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 ${size}`}
        onBlur={() => onClear()}
      >
        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1 text-3xl">{title}</div>
          <div className="size-4 cursor-pointer" onClick={() => onClear()}>
            <CrossSVG />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
