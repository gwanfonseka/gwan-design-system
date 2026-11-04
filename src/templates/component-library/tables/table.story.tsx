import { OrderInfoSVG } from "@/components/icons";
import Table, { type ITable, type ITableColumn } from "@/components/table";
import Tag, { TAG_TYPE } from "@/components/tag";
import { boolean, data, defineStory, text } from "@/playground";

interface IOrder {
  date: string;
  orderId: string;
  price: string;
  owner: string;
  status: "Pending" | "Dispatched" | "Delivered" | "Cancelled";
}

const STATUS_TAG: Record<IOrder["status"], TAG_TYPE> = {
  Pending: TAG_TYPE.WARNING,
  Dispatched: TAG_TYPE.INFO,
  Delivered: TAG_TYPE.SUCCESS,
  Cancelled: TAG_TYPE.DANGER,
};

const ORDERS: IOrder[] = [
  { date: "12 Mar 2026", orderId: "#10241", price: "$120.00", owner: "John Doe", status: "Pending" },
  { date: "12 Mar 2026", orderId: "#10242", price: "$64.50", owner: "Jane Smith", status: "Dispatched" },
  { date: "11 Mar 2026", orderId: "#10238", price: "$310.00", owner: "Kasun Perera", status: "Delivered" },
  { date: "10 Mar 2026", orderId: "#10231", price: "$18.99", owner: "Amara Silva", status: "Cancelled" },
  { date: "09 Mar 2026", orderId: "#10225", price: "$92.00", owner: "Liam Chen", status: "Delivered" },
];

const ORDER_COLUMNS: ITableColumn[] = [
  { header: "Date", render: (row: IOrder) => <p>{row.date}</p> },
  { header: "Order", render: (row: IOrder) => <p className="font-mono">{row.orderId}</p> },
  { header: "Owner", headerClassName: "w-[24%]", render: (row: IOrder) => <p>{row.owner}</p> },
  { header: "Price", render: (row: IOrder) => <p>{row.price}</p> },
  {
    header: "Status",
    render: (row: IOrder) => <Tag type={STATUS_TAG[row.status]} label={row.status} />,
  },
  {
    header: "",
    headerClassName: "w-[8%]",
    render: () => (
      <span className="size-5 block cursor-pointer">
        <OrderInfoSVG />
      </span>
    ),
  },
];

const STATUS_TAG_CODE = `const statusTag = {
  Pending: TAG_TYPE.WARNING,
  Dispatched: TAG_TYPE.INFO,
  Delivered: TAG_TYPE.SUCCESS,
  Cancelled: TAG_TYPE.DANGER,
};`;

const ORDER_COLUMNS_CODE = `[
  { header: "Date", render: (row) => <p>{row.date}</p> },
  { header: "Order", render: (row) => <p className="font-mono">{row.orderId}</p> },
  { header: "Owner", headerClassName: "w-[24%]", render: (row) => <p>{row.owner}</p> },
  { header: "Price", render: (row) => <p>{row.price}</p> },
  { header: "Status", render: (row) => <Tag type={statusTag[row.status]} label={row.status} /> },
  { header: "", headerClassName: "w-[8%]", render: () => <OrderInfoSVG /> },
]`;

const SIMPLE_COLUMNS: ITableColumn[] = [
  { header: "Owner", render: (row: IOrder) => <p>{row.owner}</p> },
  { header: "Price", cellClassName: "text-right", headerClassName: "text-right", render: (row: IOrder) => <p>{row.price}</p> },
];

const SIMPLE_COLUMNS_CODE = `[
  { header: "Owner", render: (row) => <p>{row.owner}</p> },
  { header: "Price", headerClassName: "text-right", cellClassName: "text-right", render: (row) => <p>{row.price}</p> },
]`;

export default defineStory<ITable>({
  name: "Table",
  component: Table,
  layout: "fullwidth",
  args: { columns: "Orders", data: "Five rows" },
  argTypes: {
    columns: {
      description:
        "Column definitions. `render` receives the row and returns the cell. `headerClassName` and `cellClassName` style a single column.",
      control: data(
        { Orders: ORDER_COLUMNS, "Two columns": SIMPLE_COLUMNS },
        {
          Orders: {
            code: ORDER_COLUMNS_CODE,
            imports: ["Tag", "TAG_TYPE", "OrderInfoSVG"],
            setup: STATUS_TAG_CODE,
          },
          "Two columns": SIMPLE_COLUMNS_CODE,
        },
      ),
      type: "ITableColumn[]",
      required: true,
      group: "Content",
    },
    data: {
      description: "Rows. Each one is passed to every column's `render`.",
      control: data({ "Five rows": ORDERS, "One row": ORDERS.slice(0, 1), Empty: [] }),
      type: "any[]",
      required: true,
      group: "Content",
    },
    striped: {
      description: "Shades every other row.",
      control: boolean(),
      defaultValue: false,
      group: "Appearance",
    },
    bordered: {
      description: "Draws a line between rows.",
      control: boolean(),
      defaultValue: false,
      group: "Appearance",
    },
    className: {
      description: "Extra classes on the scroll container around the table.",
      control: text(),
      defaultValue: "",
      group: "Advanced",
    },
  },
});
