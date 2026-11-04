import Button from "@/components/button";
import Input from "@/components/input";
import Modal, { MODAL_SIZE, type IModal } from "@/components/modal";
import { action, data, defineStory, enumOf, SAMPLE_IMAGES, text } from "@/playground";
import { overlayUsage, Triggered } from "@/playground/overlay";

export default defineStory<IModal>({
  name: "Modal",
  component: Modal,
  args: { title: "Modal title", children: "Illustration" },
  argTypes: {
    title: {
      description: "Heading in the modal's header bar.",
      control: text(),
      required: true,
      group: "Content",
    },
    children: {
      description: "Body of the modal. Any layout or components.",
      control: data({
        Illustration: (
          <div className="p-6 flex flex-col gap-4 items-center justify-center">
            {/* A plain img keeps the generated snippet free of framework imports. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SAMPLE_IMAGES.empty} alt="" width={160} height={160} />
            <p className="text-base font-semibold">This is a modal</p>
          </div>
        ),
        Form: (
          <div className="p-6 flex flex-col gap-4">
            <Input label="Name" value="" onChange={() => {}} />
            <Button label="Save" onClick={() => {}} />
          </div>
        ),
        Text: "Plain text works too.",
      }),
      type: "ReactNode",
      required: true,
      group: "Content",
    },
    size: {
      description: "Width of the modal. FULL covers the viewport.",
      control: enumOf(MODAL_SIZE, "MODAL_SIZE"),
      defaultValue: MODAL_SIZE.SMALL,
      group: "Appearance",
    },
    onClear: {
      description: "Called when the close button, backdrop or Escape dismisses the modal. Stop rendering it here.",
      control: action(),
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the full-screen backdrop that wraps the panel.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  render: (props) => (
    <Triggered label="Open modal">
      {(close) => (
        <Modal
          {...props}
          onClear={() => {
            props.onClear();
            close();
          }}
        />
      )}
    </Triggered>
  ),
  usage: overlayUsage({ trigger: "Open modal", closeProp: "onClear" }),
});
