import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useTableContext } from "../../../context/table-context/table-context";

export function UsersCountryFilter() {
  const { table } = useTableContext<IUser>();

  const facets = table?.getColumn("country")?.getFacetedUniqueValues();

  const selectedValues = table.getColumn("country")?.getFilterValue();

  const options = Array.from(facets as Map<any, number>, ([key]) => ({
    label: key,
    value: key,
  }));

  const onSelect = ({ key }: { key: string }) => {
    table.getColumn("country")?.setFilterValue(key);
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
