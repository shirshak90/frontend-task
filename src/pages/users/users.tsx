import { DataTable } from "../../components/data-table";
import { users } from "../../data";
import { columns } from "./components/columns";

export function UsersPage() {
  return (
    <div>
      <DataTable columns={columns} data={users} />
    </div>
  );
}
