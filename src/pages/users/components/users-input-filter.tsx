import { useTableContext } from "../../../context/table-context/table-context";

export function UsersInputFilter() {
  const { globalFilter, setGlobalFilter } = useTableContext();

  return (
    <div>
      <input
        placeholder="Filter All..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter && setGlobalFilter(e.target.value)}
      />
    </div>
  );
}
