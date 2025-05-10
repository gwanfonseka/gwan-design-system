import Pagination, { IPaging } from "@/components/pagination";
import { useState } from "react";

const numbers = [
  { label: "10" },
  { label: "25" },
  { label: "50" },
  { label: "100" },
  { label: "200" },
];

const Paginations = () => {
  const [paging, setPaging] = useState<IPaging>({
    total: 112,
    page: 1,
    size: 10,
  });

  return (
    <Pagination
      {...paging}
      options={numbers}
      onChange={(paging: IPaging) => setPaging(paging)}
    />
  );
};

export default Paginations;
