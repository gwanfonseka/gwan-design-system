import Button, { BUTTON_VARIANTS } from "@/components/button";
import CodeSnippet from "@/components/codeSnippet";
import Input from "@/components/input";
import Modal, { MODAL_SIZE } from "@/components/modal";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";

const Modals = () => {
  const [isSmallModalOpen, setIsSmallModalOpen] = useState<boolean>(false);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("Modal title");
  const [modalSize, setModalSize] = useState<string>(MODAL_SIZE.SMALL);
  const modalImage = "/images/empty_state.png";

  const modalSizeOptions = [
    { value: MODAL_SIZE.SMALL, label: "small" },
    { value: MODAL_SIZE.MEDIUM, label: "medium" },
    { value: MODAL_SIZE.LARGE, label: "large" },
    { value: MODAL_SIZE.FULL, label: "full screen" },
  ];

  const codeExample = `import { Modal, MODAL_SIZE } from "gwan-design-system"

const Example = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Modal
      title="Modal"
      onClear={() => setIsModalOpen(false)}
      size={MODAL_SIZE.SMALL} // optional, defaulted to small size
      className="" // optional, you can add your own styles
    >
      // The body (children) of the modal is fully dynamic, you can simply include any layout/template/components etc.
      <div className="h-full p-4 flex flex-col gap-4 items-center justify-center">
        <Image
          src={modalImage}
          alt="modal_image"
          width={200}
          height={200}
        />
        <p className="text-base font-semibold">This is a modal</p>
      </div>
    </Modal>
  );
}`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
          <Button
            label="Click the button"
            onClick={() => setIsPlayModalOpen(true)}
            variant={BUTTON_VARIANTS.PRIMARY}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
          <Input
            label="Modal title"
            value={modalTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setModalTitle(e.target.value)
            }
            className="w-full sm:w-64"
          />
          <SelectDropdown
            label="Edges style"
            options={modalSizeOptions}
            value={modalSize}
            onChange={(option) => setModalSize(option)}
            className="w-full sm:w-64"
          />
        </div>
      </div>
    );
  };

  const sizeMap = {
    [MODAL_SIZE.SMALL]: { width: 200, height: 125 },
    [MODAL_SIZE.MEDIUM]: { width: 400, height: 250 },
    [MODAL_SIZE.LARGE]: { width: 600, height: 375 },
    [MODAL_SIZE.FULL]: { width: 800, height: 500 },
  };

  const imageSize = sizeMap[modalSize as MODAL_SIZE] ?? {
    width: 400,
    height: 125,
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-center gap-8 items-center">
        <Button
          label="Modal"
          onClick={() => setIsSmallModalOpen(true)}
          variant={BUTTON_VARIANTS.PRIMARY}
        />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />

      {isSmallModalOpen && (
        <Modal
          title="Modal"
          onClear={() => setIsSmallModalOpen(false)}
          size={MODAL_SIZE.SMALL}
        >
          <div className="h-full p-4 flex flex-col gap-4 items-center justify-center">
            <Image
              src={modalImage}
              alt="modal_image"
              width={200}
              height={125}
            />
            <p className="text-base font-semibold">This is a modal</p>
          </div>
        </Modal>
      )}

      {isPlayModalOpen && (
        <Modal
          title={modalTitle}
          onClear={() => setIsPlayModalOpen(false)}
          size={modalSize as MODAL_SIZE}
        >
          <div className="p-4 h-full flex flex-col gap-4 items-center justify-center">
            <div>
              <Image
                src={modalImage}
                alt="modal_image"
                width={imageSize.width}
                height={imageSize.height}
              />
            </div>
            <p className="text-base font-semibold">This is a modal</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Modals;
