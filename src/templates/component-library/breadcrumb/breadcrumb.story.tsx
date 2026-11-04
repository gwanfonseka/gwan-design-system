import Breadcrumb, { BREADCRUMB_SEPARATOR, type IBreadcrumb } from "@/components/breadcrumb";
import { DashboardSVG } from "@/components/icons";
import { data, defineStory, enumOf, text } from "@/playground";

export default defineStory<IBreadcrumb>({
  name: "Breadcrumb",
  component: Breadcrumb,
  args: { items: "Three levels" },
  argTypes: {
    items: {
      description: "Trail from the root. Items with href are links, except the last, which is the current page and is never linked.",
      control: data({
        "Three levels": [
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Notebooks" },
        ],
        "With icon": [
          { label: "Dashboard", href: "/", icon: <DashboardSVG /> },
          { label: "Reports", href: "/reports" },
          { label: "Q1 2026" },
        ],
        "Long trail": [
          { label: "Home", href: "/" },
          { label: "Workspace", href: "/w" },
          { label: "Projects", href: "/w/projects" },
          { label: "Gwan", href: "/w/projects/gwan" },
          { label: "Settings" },
        ],
      }),
      type: "IBreadcrumbItem[]",
      required: true,
      group: "Content",
    },
    separator: {
      description: "Mark between items.",
      control: enumOf(BREADCRUMB_SEPARATOR, "BREADCRUMB_SEPARATOR"),
      defaultValue: BREADCRUMB_SEPARATOR.CHEVRON,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the nav element.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
