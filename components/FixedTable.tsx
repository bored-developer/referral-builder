import { ReactNode } from "react";

export default function FixedTable(props: {
  children: ReactNode;
  tableHeaders: Array<string>;
}) {
  const { children, tableHeaders } = props;

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          {tableHeaders.map((h) => (
            <th key={h} className="text-left">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
