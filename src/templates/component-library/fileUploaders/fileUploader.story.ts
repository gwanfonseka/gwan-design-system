import FileUploader, { type IFileUploader } from "@/components/fileUploader";
import { action, boolean, defineStory, number, options, text } from "@/playground";

const MB = 1024 * 1024;

export default defineStory<IFileUploader>({
  name: "FileUploader",
  component: FileUploader,
  args: {},
  argTypes: {
    title: {
      description: "Main line in the drop zone.",
      control: text(),
      defaultValue: "Drag & drop files here",
      group: "Content",
    },
    subTitle1: {
      description: "Second line, under the title.",
      control: text(),
      defaultValue: "or click to browse",
      group: "Content",
    },
    subTitle2: {
      description: "Third line, e.g. the allowed types and size.",
      control: text("PNG or JPG, up to 2 MB"),
      defaultValue: "",
      group: "Content",
    },
    accept: {
      description: "File types the picker offers, as for the native accept attribute.",
      control: options([".jpg,.jpeg,.png", "image/*", ".pdf", ".csv,.xlsx", "*"]),
      defaultValue: ".jpg,.jpeg,.png",
      group: "Behaviour",
    },
    multiple: {
      description: "Allows several files. Off, a new file replaces the current one.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    maxFiles: {
      description: "Keeps at most this many files when multiple is on.",
      control: number({ min: 1, max: 20 }),
      group: "Behaviour",
      visible: (args) => args.multiple === true,
    },
    maxSize: {
      description: "Largest file in bytes. Bigger files are rejected with a message.",
      control: options([MB, 2 * MB, 5 * MB, 10 * MB]),
      type: "number",
      group: "Behaviour",
    },
    disabled: {
      description: "Blocks picking and dropping files.",
      control: boolean(),
      defaultValue: false,
      group: "Behaviour",
    },
    handleAttachment: {
      description: "Called with the first accepted file each time files are added.",
      control: action(),
      type: "(file: File) => void",
      required: true,
      group: "Events",
    },
    onFilesChange: {
      description: "Called with the full list whenever files are added or removed.",
      control: action(),
      type: "(files: File[]) => void",
      group: "Events",
    },
    className: {
      description: "Extra classes on the drop zone wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
