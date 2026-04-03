import { FC, JSX } from "react";

export interface ITableColumn {
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (row?: any) => JSX.Element;
  headerClassName?: string;
  cellClassName?: string;
}

export interface ITable {
  columns: ITableColumn[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  className?: string;
  striped?: boolean;
  bordered?: boolean;
}

const Table: FC<ITable> = ({
  columns,
  data,
  className = "",
  striped = false,
  bordered = false,
}: ITable) => {
  return (
    <div className={`overflow-hidden rounded-lg border border-border ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface-raised border-b border-border">
            {columns.map(({ header, headerClassName }, index) => (
              <th
                key={`column_${index}`}
                className={`text-left px-4 py-4 text-foreground ${headerClassName}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const stripedClass =
              striped && rowIndex % 2 === 1 ? "bg-surface" : "bg-background";
            const borderClass =
              bordered && rowIndex !== data.length - 1
                ? "border-b border-border-subtle"
                : "";
            return (
              <tr
                key={`row_${rowIndex}`}
                className={`hover:bg-surface-raised transition-colors duration-100 ${stripedClass} ${borderClass}`}
              >
                {columns.map(({ render, cellClassName }, cellIndex) => (
                  <td
                    key={`cell_${cellIndex}`}
                    className={`text-left px-4 py-4 text-foreground ${cellClassName}`}
                  >
                    {render(row)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
