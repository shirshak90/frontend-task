import { DataTable } from "../../components/data-table";
import { TableContextProvider } from "../../context/table-context/table-context";
import { users } from "../../data";
import { columns } from "./components/columns";
import { UsersActiveFilter } from "./components/users-active-filter";
import { UsersCountryFilter } from "./components/users-country-filter";
import { UsersInputFilter } from "./components/users-input-filter";

export function UsersPage() {
  return (
    <div>
      <TableContextProvider data={users} columns={columns}>
        <UsersInputFilter />
        <UsersActiveFilter />
        <UsersCountryFilter />
        <DataTable />
      </TableContextProvider>
    </div>
  );
}
