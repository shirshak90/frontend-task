import { Table } from "@tanstack/react-table";

import { Button } from "./button";

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
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          prev
        </Button>

        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          next
        </Button>
      </div>
    </div>
  );
}
