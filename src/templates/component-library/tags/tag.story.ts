import Tag, { TAG_EDGE_STYLE, TAG_TYPE, TAG_VARIANT, type ITag } from "@/components/tag";
import { defineStory, enumOf, text } from "@/playground";

export default defineStory<ITag>({
  name: "Tag",
  component: Tag,
  args: { type: TAG_TYPE.DEFAULT, label: "Label" },
  argTypes: {
    label: {
      description: "Text inside the tag.",
      control: text("Label"),
      required: true,
      group: "Content",
    },
    type: {
      description: "Semantic colour.",
      control: enumOf(TAG_TYPE, "TAG_TYPE"),
      required: true,
      group: "Appearance",
    },
    variant: {
      description: "Filled background or outline only. On raised surfaces such as a FLAT Card, use OUTLINE for the DEFAULT type: its fill matches the surface.",
      control: enumOf(TAG_VARIANT, "TAG_VARIANT"),
      defaultValue: TAG_VARIANT.SOLID,
      group: "Appearance",
    },
    edges: {
      description: "Corner style.",
      control: enumOf(TAG_EDGE_STYLE, "TAG_EDGE_STYLE"),
      defaultValue: TAG_EDGE_STYLE.ROUNDED,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the tag element.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
