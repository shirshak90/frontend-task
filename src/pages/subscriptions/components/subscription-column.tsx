import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";

import { DataTableHeader } from "../../../components/data-table-header";
import { ISubscription } from "../types/subscription-types";

export const columns: ColumnDef<ISubscription>[] = [
  {
    accessorKey: "id",
    header: "SUBSCRIPTION ID",
    cell: ({ row }) => {
      return <span>{row.original.id}</span>;
    },
  },
  {
    accessorKey: "package",
    header: ({ column }) => (
      <DataTableHeader column={column} title={"PACKAGE"} />
    ),
    cell: ({ row }) => {
      return (
        <span
          className={
            row.original.package === "Unlimited"
              ? "primary-badge"
              : "secondary-badge"
          }
        >
          {row.original.package}
        </span>
      );
    },
  },
  {
    accessorKey: "expires_on",
    header: ({ column }) => (
      <DataTableHeader column={column} title={"EXPIRES ON"} />
    ),
    cell: ({ row }) => {
      return <span>{format(row.original.expires_on, "yyyy-MM-dd - p")}</span>;
    },
  },
];
