import { useDebouncedCallback } from "use-debounce";

import { useTableContext } from "../../../context/table-context/table-context";

export function UsersInputFilter() {
  const { setGlobalFilter } = useTableContext();

  const debounced = useDebouncedCallback((value) => {
    setGlobalFilter && setGlobalFilter(value);
  }, 500);

  return (
    <div>
      <input
        placeholder="Filter All..."
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
}
