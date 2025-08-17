import { OrderInfoSVG } from "@/components/icons";
import Table, { ITableColumn } from "@/components/table";
import Tag, { TAG_TYPE } from "@/components/tag";
import { ORDER_STATUS } from "@/components/timeLine";

export interface IData {
  date: string;
  orderId: string;
  price: string;
  ownerName: string;
  status: ORDER_STATUS;
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
    ownerName: "Sonali Rodrigo",
    status: ORDER_STATUS.PENDING,
  },
  {
    date: "12/12/2021",
    orderId: "12345623423423",
    price: "$100",
    ownerName: "Nimesh Fonseka",
    status: ORDER_STATUS.DISPATCHED_TO_COURIER,
  },
  {
    date: "12/12/2021",
    orderId: "1234562344234",
    price: "$100",
    ownerName: "Shemeera Fonseka",
    status: ORDER_STATUS.ORDER_PLACED,
  },
  {
    date: "12/12/2021",
    orderId: "1234561231231",
    price: "$100",
    ownerName: "Renola Mishel",
    status: ORDER_STATUS.ORDER_CANCELLED,
  },
  {
    date: "12/12/2021",
    orderId: "1234562345345",
    price: "$100",
    ownerName: "Shehan Sonura",
    status: ORDER_STATUS.DELIVERED,
  },
  {
    date: "12/12/2021",
    orderId: "123456345234",
    price: "$100",
    ownerName: "Abhirami Fernando",
    status: ORDER_STATUS.PENDING,
  },
  {
    date: "12/12/2021",
    orderId: "123456123133",
    price: "$100",
    ownerName: "Antonette Mari",
    status: ORDER_STATUS.DISPATCHED_TO_COURIER,
  },
  {
    date: "12/12/2021",
    orderId: "1234562123123",
    price: "$100",
    ownerName: "Dilhani Pereira",
    status: ORDER_STATUS.ORDER_PLACED,
  },
  {
    date: "12/12/2021",
    orderId: "123456354543",
    price: "$100",
    ownerName: "Johannes Nico",
    status: ORDER_STATUS.ORDER_CANCELLED,
  },
  {
    date: "12/12/2021",
    orderId: "12345634534234",
    price: "$100",
    ownerName: "Dammika Bandara",
    status: ORDER_STATUS.DELIVERED,
  },
];

const Tables = () => {
  return <Table columns={columns} data={data} />;
};

export default Tables;
