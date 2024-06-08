import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps {
  table: Table<any>;
}

export function DataTablePagination({ table }: DataTablePaginationProps) {
  return (
    <div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          prev
        </button>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          next
        </button>
      </div>
    </div>
  );
}
