import Checkbox from "@/components/checkbox";
import CodeSnippet from "@/components/codeSnippet";
import { OrderInfoSVG } from "@/components/icons";
import Playground from "@/components/playground";
import Table, { type ITableColumn } from "@/components/table";
import Tag, { TAG_TYPE } from "@/components/tag";
import { useState } from "react";

interface IData {
  date: string;
  orderId: string;
  price: string;
  ownerName: string;
  status: ORDER_STATUS;
}

interface IPlayData {
  name: string;
  id: string;
}

enum ORDER_STATUS {
  ORDER_PLACED = "Order placed",
  PRINTING_IN_PROGRESS = "Printing in progress",
  PACKAGING = "Packaging",
  DISPATCHED_TO_COURIER = "Dispatched to courier",
  DELIVERED = "Delivered",
  ORDER_CANCELLED = "Order cancelled",
  PENDING = "Pending",
}

const getTagType = (status: ORDER_STATUS) => {
  switch (status) {
    case ORDER_STATUS.PENDING:
      return TAG_TYPE.WARNING;
    case ORDER_STATUS.DELIVERED:
      return TAG_TYPE.SUCCESS;
    case ORDER_STATUS.ORDER_CANCELLED:
      return TAG_TYPE.DANGER;
    default:
      return TAG_TYPE.DEFAULT;
  }
};

const columns: ITableColumn[] = [
  {
    header: "Date",
    headerClassName: "",
    cellClassName: "",
    render: (row: IData) => <p>{row.date}</p>,
  },
  {
    header: "Order ID",
    headerClassName: "",
    cellClassName: "",
    render: (row: IData) => <p>{row.orderId}</p>,
  },
  {
    header: "Price",
    headerClassName: "",
    cellClassName: "",
    render: (row: IData) => <p>{row.price}</p>,
  },
  {
    header: "Owner Name",
    headerClassName: "w-[20%]",
    cellClassName: "",
    render: (row: IData) => <p>{row.ownerName}</p>,
  },
  {
    header: "Status",
    headerClassName: "",
    cellClassName: "",
    render: (row: IData) => (
      <Tag type={getTagType(row.status)} label={row.status} />
    ),
  },
  {
    header: "View",
    headerClassName: "w-[8%]",
    cellClassName: "",
    render: () => (
      <div className="size-5 cursor-pointer">
        <OrderInfoSVG />
      </div>
    ),
  },
];

const data = [
  {
    date: "12/12/2021",
    orderId: "12345623948394",
    price: "$100",
    ownerName: "John Doe",
    status: ORDER_STATUS.PENDING,
  },
  {
    date: "12/12/2021",
    orderId: "12345623423423",
    price: "$100",
    ownerName: "Jane Smith",
    status: ORDER_STATUS.DISPATCHED_TO_COURIER,
  },
  {
    date: "12/12/2021",
    orderId: "1234562344234",
    price: "$100",
    ownerName: "Tim Lee",
    status: ORDER_STATUS.ORDER_PLACED,
  },
  {
    date: "12/12/2021",
    orderId: "1234561231231",
    price: "$100",
    ownerName: "Sam Wilson",
    status: ORDER_STATUS.ORDER_CANCELLED,
  },
  {
    date: "12/12/2021",
    orderId: "1234562345345",
    price: "$100",
    ownerName: "Rachel Green",
    status: ORDER_STATUS.DELIVERED,
  },
];

const playColumns: ITableColumn[] = [
  {
    header: "Name",
    headerClassName: "",
    cellClassName: "",
    render: (row: IPlayData) => <p>{row.name}</p>,
  },
  {
    header: "ID number",
    headerClassName: "",
    cellClassName: "",
    render: (row: IPlayData) => <p>{row.id}</p>,
  },
];

const playData: IPlayData[] = [
  {
    name: "John Doe",
    id: "123456",
  },
  {
    name: "Jane Smith",
    id: "654321",
  },
  {
    name: "Tim Lee",
    id: "789012",
  },
  {
    name: "Sam Wilson",
    id: "210987",
  },
];

const Tables = () => {
  const [isStriped, setIsStriped] = useState(true);
  const [isBordered, setIsBordered] = useState(true);
  const codeExample = `import { Table, ITableColumn } from "gwan-design-system"
  
const columns: ITableColumn[] = [
  {
    header: "Name",
    headerClassName: "",
    cellClassName: "",
    render: (row) => <p>{row.name}</p> // render function returns a jsx element, you can render anything here based on the row data
  },
  {
    header: "ID number",
    headerClassName: "",
    cellClassName: "",
    render: (row) => <p>{row.id}</p>
  },
];

const data = [
  // Your data here - can be any shape, just make sure to render it correctly in the columns definition
];

const Example = () => {
  return (
    <Table 
      columns={columns} 
      data={data} 
      striped={true} // optional, adds zebra striping to the table
      bordered={true} // optional, adds borders to the table rows
      className="custom-class" // optional, you can add your own styles
    />
  );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <Table
          columns={playColumns}
          data={playData}
          striped={isStriped}
          bordered={isBordered}
        />
        <div className="flex flex-row flex-wrap justify-center gap-8 items-center">
          <Checkbox
            label="Striped"
            checked={isStriped}
            onChange={() => setIsStriped(!isStriped)}
          />
          <Checkbox
            label="Bordered"
            checked={isBordered}
            onChange={() => setIsBordered(!isBordered)}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Table columns={columns} data={data} />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Tables;
