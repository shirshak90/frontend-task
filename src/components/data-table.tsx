import { flexRender } from "@tanstack/react-table";
import { useContext } from "react";
import { TableContext } from "../context/table-context/table-context";
import { DataTablePagination } from "./data-table-pagination";

export function DataTable() {
  const context = useContext(TableContext);

  if (!context?.table) {
    return <div>Data table must be inside Table context</div>;
  }

  return (
    <div>
      <div>
        <table>
          <thead>
            {context.table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {context.table.getRowModel().rows.length ? (
              context.table.getRowModel().rows.map((row) => (
                <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td>No results.</td>
              </tr>
            )}
          </tbody>
        </table>
        <DataTablePagination table={context.table} />
      </div>
    </div>
  );
}
