import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useTableContext } from "../../../context/table-context/table-context";

export function UsersActiveFilter() {
  const { table } = useTableContext<IUser>();

  const facets = table?.getColumn("active")?.getFacetedUniqueValues();

  const selectedValues = table.getColumn("active")?.getFilterValue();

  const options = Array.from(facets as Map<any, number>, ([key]) => ({
    label: key === "0" ? "Inactive" : "Active",
    value: key,
  }));

  const onSelect = ({ key }: { key: string }) => {
    table.getColumn("active")?.setFilterValue(key);
  };

  return (
    <>
      <Dropdown
        trigger={["click"]}
        overlay={
          <Menu onSelect={onSelect}>
            {options.map((option) => (
              <MenuItem key={option.value}>{option.label}</MenuItem>
            ))}
          </Menu>
        }
        animation="slide-up"
      >
        <button style={{ width: 100 }}>
          {options
            .filter((item) => selectedValues === item.value)
            .map((item) => item.label)}
          {!selectedValues && "Filter"}
        </button>
      </Dropdown>
    </>
  );
}
