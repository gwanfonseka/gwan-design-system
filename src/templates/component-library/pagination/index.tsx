import CodeSnippet from "@/components/codeSnippet";
import Pagination, { IPaging } from "@/components/pagination";
import Playground from "@/components/playground";
import Table, { type ITableColumn } from "@/components/table";
import { useState } from "react";

interface IPlayData {
  name: string;
  id: string;
}

const itemsPerPageOptions = [
  { label: "10" },
  { label: "25" },
  { label: "50" },
  { label: "100" },
  { label: "200" },
];

const playItemsPerPageOptions = [
  { label: "5" },
  { label: "10" },
  { label: "15" },
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
  {
    name: "Rachel Green",
    id: "345678",
  },
  {
    name: "Mike Johnson",
    id: "987654",
  },
  {
    name: "Emily Davis",
    id: "567890",
  },
  {
    name: "David Brown",
    id: "432109",
  },
  {
    name: "Sarah Wilson",
    id: "876543",
  },
  {
    name: "Chris Lee",
    id: "678901",
  },
  {
    name: "Jessica Taylor",
    id: "543210",
  },
  {
    name: "Daniel Anderson",
    id: "789012",
  },
  {
    name: "Laura Martinez",
    id: "210987",
  },
  {
    name: "Kevin Thomas",
    id: "345678",
  },
];

const Paginations = () => {
  const [paging, setPaging] = useState<IPaging>({
    total: 112,
    page: 1,
    size: 10,
  });
  const [playPaging, setPlayPaging] = useState<IPaging>({
    total: playData.length,
    page: 1,
    size: 5,
  });

  const codeExample = `import { Pagination, IPaging } from "gwan-design-system";

const Example = () => {
  const [paging, setPaging] = useState<IPaging>({
    total: 112,
    page: 1,
    size: 10,
  });

   return (
     <Pagination
       page={paging.page}
       size={paging.size}
       total={paging.total}
       options={[
         { label: "10" },
         { label: "25" },
         { label: "50" },
         { label: "100" },
         { label: "200" },
       ]}
       onChange={(paging: IPaging) => setPaging(paging)}
       className="custom-class" // optional, you can add your own styles
     />
   );
};`;

  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <Table
          columns={playColumns}
          data={playData.slice(
            (playPaging.page - 1) * playPaging.size,
            playPaging.page * playPaging.size,
          )}
          striped={true}
          bordered={false}
        />
        <Pagination
          {...playPaging}
          options={playItemsPerPageOptions}
          onChange={(paging: IPaging) => setPlayPaging(paging)}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <Pagination
        {...paging}
        options={itemsPerPageOptions}
        onChange={(paging: IPaging) => setPaging(paging)}
      />
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default Paginations;
