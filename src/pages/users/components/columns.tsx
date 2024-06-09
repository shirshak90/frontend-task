import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "full_name",
    header: "FULL NAME",
    cell: ({ row }) => {
      return (
        <span>
          {row.original.first_name} {row.original.middle_name}{" "}
          {row.original.last_name}
        </span>
      );
    },
  },
  {
    accessorKey: "email",
    header: "EMAIL",
    cell: ({ row }) => {
      return <span>{row.original.email}</span>;
    },
  },
  {
    accessorKey: "address",
    header: "ADDRESS",
    cell: ({ row }) => {
      return <span>{row.original.address}</span>;
    },
  },
  {
    accessorKey: "country",
    header: "COUNTRY",
    cell: ({ row }) => {
      return <span>{row.original.country}</span>;
    },
  },
  {
    accessorKey: "active",
    header: "STATUS",
    cell: ({ row }) => {
      return <span>{row.original.active === "1" ? "Active" : "Inactive"}</span>;
    },
  },
  {
    accessorKey: "join_date",
    header: "JOINED",
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
