import { DataTable } from "../../components/data-table";
import { TableContextProvider } from "../../context/table-context/table-context";
import { users } from "../../data";
import { columns } from "./components/columns";
import { UsersToolbar } from "./components/users-toolbar";

export function UsersPage() {
  return (
    <div>
      <TableContextProvider data={users} columns={columns}>
        <UsersToolbar />
        <DataTable />
      </TableContextProvider>
    </div>
  );
}
