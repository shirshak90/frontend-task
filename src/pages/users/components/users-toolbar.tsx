import { IoMdClose } from "react-icons/io";

import { Button } from "../../../components/button";
import { useTableContext } from "../../../context/table-context/table-context";
import { UsersActiveFilter } from "./users-active-filter";
import { UsersCountryFilter } from "./users-country-filter";
import { UsersInputFilter } from "./users-input-filter";

export function UsersToolbar() {
  const { table } = useTableContext();

  return (
    <div className="users-toolbar">
      <UsersInputFilter />
      <UsersActiveFilter />
      <UsersCountryFilter />
      {(table.getState().globalFilter.length > 0 ||
        table.getState().columnFilters.length > 0) && (
        <Button
          variant={"secondary"}
          onClick={() => {
            table.resetColumnFilters();
            table.resetGlobalFilter();
            table.setGlobalFilter("");
          }}
        >
          <IoMdClose className="data-table-header-icon" /> Reset
        </Button>
      )}
    </div>
  );
}
