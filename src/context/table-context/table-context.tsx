import {
  ColumnDef,
  Table,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type TableContextType<TData> = {
  table: Table<TData>;
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
};

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
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <TableContext.Provider value={{ table, globalFilter, setGlobalFilter }}>
      {children}
    </TableContext.Provider>
  );
}

export const useTableContext = <TData,>() => {
  const context = useContext(TableContext);

  if (!context) {
    console.log("useTableContext must be used inside TableContextProvider");
  }

  return {
    table: context?.table as Table<TData>,
    globalFilter: context?.globalFilter,
    setGlobalFilter: context?.setGlobalFilter,
  };
};
