import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";

import { DataTableHeader } from "../../../components/data-table-header";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    id: "full_name",
    header: ({ column }) => (
      <DataTableHeader column={column} title={"FULL NAME"} />
    ),
    cell: (info) => info.getValue(),
    size: 200,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableHeader column={column} title={"EMAIL"} />,
    cell: ({ row }) => {
      return <span>{row.original.email}</span>;
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableHeader column={column} title={"ADDRESS"} />
    ),
    cell: ({ row }) => {
      return <span>{row.original.address}</span>;
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableHeader column={column} title={"COUNTRY"} />
    ),
    cell: ({ row }) => {
      return <span>{row.original.country}</span>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "active",
    header: "STATUS",
    cell: ({ row }) => {
      return <span>{row.original.active === "1" ? "Active" : "Inactive"}</span>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "join_date",
    header: ({ column }) => (
      <DataTableHeader column={column} title={"JOINED"} />
    ),
    cell: ({ row }) => {
      return (
        <span>
          {format(
            (row.original.join_date as unknown as number) * 1000,
            "yyyy-MM-dd"
          )}
        </span>
      );
    },
  },
];
