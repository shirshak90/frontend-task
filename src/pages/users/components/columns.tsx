import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <p>{row.original.email}</p>;
    },
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      return <p>{row.original.address}</p>;
    },
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => {
      return <p>{row.original.country}</p>;
    },
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => {
      return <p>{row.original.active === "1" ? "Active" : "Inactive"}</p>;
    },
  },
];
