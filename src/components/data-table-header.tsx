import Dropdown from "rc-dropdown";
import { Column } from "@tanstack/react-table";
import { MdSort, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import { Button } from "./button";
import Menu, { Item as MenuItem } from "rc-menu";

interface DataTableColumnProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableHeader<TData, TValue>({
  column,
  title,
}: DataTableColumnProps<TData, TValue>) {
  return (
    <Dropdown
      trigger={["click"]}
      overlay={
        <Menu className="overlay-dropdown" style={{ maxWidth: 150 }}>
          <MenuItem key={"asc"} onClick={() => column.toggleSorting(false)}>
            <Button variant={"link"}>
              <MdKeyboardArrowUp className="data-table-header-icon" /> Asc
            </Button>
          </MenuItem>
          <MenuItem key={"desc"} onClick={() => column.toggleSorting(true)}>
            <Button variant={"link"}>
              <MdKeyboardArrowDown className="data-table-header-icon" /> Desc
            </Button>
          </MenuItem>
        </Menu>
      }
      animation="slide-up"
    >
      <div className="data-table-header">
        <span className="data-table-header-title">{title}</span>
        <Button variant={"link"}>
          {column.getIsSorted() === "desc" ? (
            <MdKeyboardArrowDown className="data-table-header-icon" />
          ) : column.getIsSorted() === "asc" ? (
            <MdKeyboardArrowUp className="data-table-header-icon" />
          ) : (
            <MdSort className="data-table-header-icon" />
          )}
        </Button>
      </div>
    </Dropdown>
  );
}
