import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <span>{row.original.email}</span>;
    },
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      return <span>{row.original.address}</span>;
    },
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => {
      return <span>{row.original.country}</span>;
    },
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => {
      return <span>{row.original.active === "1" ? "Active" : "Inactive"}</span>;
    },
  },
];
