import {
  ColumnDef,
  Table,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { createContext } from "react";

type TableContextType<TData> = { table: Table<TData> };

interface TableContextProviderProps<TData, TValue> {
  children: React.ReactNode;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const TableContext = createContext<TableContextType<any> | undefined>(
  undefined
);

export function TableContextProvider<TData, TValue>({
  children,
  data,
  columns,
}: TableContextProviderProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <TableContext.Provider value={{ table }}>{children}</TableContext.Provider>
  );
}
