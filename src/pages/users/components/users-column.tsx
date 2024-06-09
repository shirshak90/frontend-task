import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

import { DataTableHeader } from "../../../components/data-table-header";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    id: "full_name",
    header: ({ column }) => (
      <DataTableHeader column={column} title={"FULL NAME"} />
    ),
    cell: ({ row }) => (
      <Link to={`/subscriptions/${row.original.id}`} className="link-button">
        {row.original.first_name} {row.original.middle_name}{" "}
        {row.original.last_name}
      </Link>
    ),
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
      const isActive = row.original.active === "1";
      return (
        <span className={isActive ? "active-dot" : "inactive-dot"}>
          {isActive ? "Active" : "Inactive"}
        </span>
      );
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
