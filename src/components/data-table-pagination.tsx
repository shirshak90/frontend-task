import { Button } from "./button";
import { useTableContext } from "../context/table-context/table-context";

export function DataTablePagination() {
  const { table } = useTableContext();

  return (
    <div className="data-table-pagination">
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div className="button-group">
        <Button
          variant={"outline"}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          prev
        </Button>

        <Button
          variant={"outline"}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          next
        </Button>
      </div>
    </div>
  );
}
