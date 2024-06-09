import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useTableContext } from "../../../context/table-context/table-context";
import { Button } from "../../../components/button";

export function UsersActiveFilter() {
  const { table } = useTableContext<IUser>();

  const facets = table?.getColumn("active")?.getFacetedUniqueValues();

  const selectedValues = table.getColumn("active")?.getFilterValue();

  const options = Array.from(facets as Map<any, number>, ([key]) => ({
    label: key === "0" ? "Inactive" : "Active",
    value: key,
  }));

  return (
    <>
      <Dropdown
        trigger={["click"]}
        overlay={
          <Menu
            className="overlay-dropdown"
            onClick={(info) =>
              table.getColumn("active")?.setFilterValue(info.key)
            }
          >
            {options.map((option) => (
              <MenuItem key={option.value}>
                <Button variant={"link"}>{option.label}</Button>
              </MenuItem>
            ))}
          </Menu>
        }
        animation="slide-up"
      >
        <Button style={{ width: 100 }}>
          {options
            .filter((item) => selectedValues === item.value)
            .map((item) => item.label)}
          {!selectedValues && "Status"}
        </Button>
      </Dropdown>
    </>
  );
}
