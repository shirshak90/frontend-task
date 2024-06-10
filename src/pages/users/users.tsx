import { useEffect, useState } from "react";

import { DashboardHeader } from "../../components/dashboard-header";
import { DataTable } from "../../components/data-table";
import { DataTablePagination } from "../../components/data-table-pagination";
import { TableContextProvider } from "../../context/table-context/table-context";
import { columns } from "./components/users-column";
import { UsersToolbar } from "./components/users-toolbar";
import { getUsers } from "../../utils/getUsers";

export function UsersPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<IUser[] | []>([]);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading....</div>;

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
