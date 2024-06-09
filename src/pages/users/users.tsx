import { DashboardHeader } from "../../components/dashboard-header";
import { DataTable } from "../../components/data-table";
import { DataTablePagination } from "../../components/data-table-pagination";
import { TableContextProvider } from "../../context/table-context/table-context";
import { users } from "../../data";
import { columns } from "./components/users-column";
import { UsersToolbar } from "./components/users-toolbar";

export function UsersPage() {
  return (
    <>
      <DashboardHeader title="Users List" />
      <TableContextProvider data={users} columns={columns}>
        <UsersToolbar />
        <DataTable />
        <DataTablePagination />
      </TableContextProvider>
    </>
  );
}
