import Button, { BUTTON_VARIANTS } from "@/components/button";
import Modal, { MODAL_SIZE } from "@/components/modal";
import Image from "next/image";
import { useState } from "react";

const Modals = () => {
  const [isSmallModalOpen, setIsSmallModalOpen] = useState<boolean>(false);
  const [isMediumModalOpen, setIsMediumModalOpen] = useState<boolean>(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState<boolean>(false);
  const [isFullModalOpen, setIsFullModalOpen] = useState<boolean>(false);
  const modalImage = "/images/empty_state.png";

  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <Button
        label="Small modal"
        onClick={() => setIsSmallModalOpen(true)}
        variant={BUTTON_VARIANTS.PRIMARY}
      />
      <Button
        label="Medium modal"
        onClick={() => setIsMediumModalOpen(true)}
        variant={BUTTON_VARIANTS.PRIMARY}
      />
      <Button
        label="Large modal"
        onClick={() => setIsLargeModalOpen(true)}
        variant={BUTTON_VARIANTS.PRIMARY}
      />
      <Button
        label="Full screen modal"
        onClick={() => setIsFullModalOpen(true)}
        variant={BUTTON_VARIANTS.PRIMARY}
      />

      {isSmallModalOpen && (
        <Modal
          title="Small Modal"
          onClear={() => setIsSmallModalOpen(false)}
          size={MODAL_SIZE.SMALL}
        >
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={modalImage}
              alt="modal_image"
              width={150}
              height={100}
            />
            <p className="text-base font-semibold">This is a small modal</p>
          </div>
        </Modal>
      )}

      {isMediumModalOpen && (
        <Modal
          title="Medium Modal"
          onClear={() => setIsMediumModalOpen(false)}
          size={MODAL_SIZE.MEDIUM}
        >
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image
              src={modalImage}
              alt="modal_image"
              width={300}
              height={200}
            />
            <p className="text-base font-semibold">This is a medium modal</p>
          </div>
        </Modal>
      )}

      {isLargeModalOpen && (
        <Modal
          title="Large Modal"
          onClear={() => setIsLargeModalOpen(false)}
          size={MODAL_SIZE.LARGE}
        >
          <div className="flex flex-col gap-4 items-center">
            <Image
              src={modalImage}
              alt="modal_image"
              width={450}
              height={300}
            />
            <p className="text-base font-semibold">This is a large modal</p>
          </div>
        </Modal>
      )}

      {isFullModalOpen && (
        <Modal
          title="Full Screen Modal"
          onClear={() => setIsFullModalOpen(false)}
          size={MODAL_SIZE.FULL}
        >
          <div className="flex flex-col gap-4 items-center">
            <Image
              src={modalImage}
              alt="modal_image"
              width={600}
              height={400}
            />
            <p className="text-base font-semibold">
              This is a full screen modal
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Modals;
