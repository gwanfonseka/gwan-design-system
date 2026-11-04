import Pagination, { type IPaging, type IPagination } from "@/components/pagination";
import { action, data, defineStory, number, text } from "@/playground";

const SIZES = (sizes: number[]) => sizes.map((s) => ({ value: String(s), label: `${s} / page` }));

export default defineStory<IPagination>({
  name: "Pagination",
  component: Pagination,
  args: { total: 248, page: 1, size: 10, options: "10, 25, 50" },
  bindings: [
    {
      prop: "page",
      event: "onChange",
      alsoControls: ["size", "total"],
      toArgs: (paging: IPaging) => ({ page: paging.page, size: paging.size, total: paging.total }),
      code: "setPaging",
    },
  ],
  argTypes: {
    total: {
      description: "Total number of records across all pages.",
      control: number({ min: 0 }),
      required: true,
      group: "Content",
    },
    page: {
      description: "Current page, starting at 1.",
      control: number({ min: 1 }),
      required: true,
      group: "Content",
    },
    size: {
      description: "Records per page. Should match one of the options.",
      control: number({ min: 1 }),
      required: true,
      group: "Content",
    },
    options: {
      description: "Page-size choices in the dropdown. Values are the size as a string.",
      control: data({ "10, 25, 50": SIZES([10, 25, 50]), "5, 10": SIZES([5, 10]) }),
      type: "ISelectDropdownOption[]",
      required: true,
      group: "Content",
    },
    onChange: {
      description: "Called with { total, page, size } when the page or page size changes. Size changes go back to page 1.",
      control: action(),
      type: "(paging: IPaging) => void",
      required: true,
      group: "Events",
    },
    className: {
      description: "Extra classes on the wrapper.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
  // One paging object reads better than three pieces of state.
  usage: (generated) => {
    const initial: Record<string, string> = {};
    const withoutState = generated.replace(
      /\n {2}const \[(total|page|size), set\w+\] = useState\((\d+)\);/g,
      (_, key: string, value: string) => {
        initial[key] = value;
        return "";
      },
    );
    return withoutState
      .replace(
        "const Example = () => {",
        `const Example = () => {\n  const [paging, setPaging] = useState({ total: ${initial.total}, page: ${initial.page}, size: ${initial.size} });`,
      )
      .replace(/(total|page|size)=\{\1\}/g, "$1={paging.$1}");
  },
});
