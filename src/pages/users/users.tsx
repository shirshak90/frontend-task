import { DataTable } from "../../components/data-table";
import { TableContextProvider } from "../../context/table-context/table-context";
import { users } from "../../data";
import { columns } from "./components/columns";

export function UsersPage() {
  return (
    <div>
      <TableContextProvider data={users} columns={columns}>
        <DataTable />
      </TableContextProvider>
    </div>
  );
}
