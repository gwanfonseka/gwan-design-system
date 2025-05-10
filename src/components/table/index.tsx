import { JSX } from "react";

export interface ITableColumn {
  header: string;
  render: (row: any) => JSX.Element;
  headerClassName?: string;
}

export interface ITable {
  columns: ITableColumn[];
  data: any[];
}

const Table = ({ columns, data }: ITable) => {
  return (
    <div className="overflow-hidden rounded-lg border border-neutrola-300">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-neutrola-300 border border-neutrola-300">
            {columns.map(({ header, headerClassName }, index) => (
              <th
                key={`column_${index}`}
                className={`text-left px-4 py-4 ${headerClassName}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={`row_${rowIndex}`}
              className="bg-white hover:bg-neutrola-100"
            >
              {columns.map(({ render }, cellIndex) => (
                <td key={`cell_${cellIndex}`} className="text-left px-4 py-4">
                  {render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
