import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const routes = [
  {
    path: "/",
    icon: <MdOutlineSpaceDashboard className="data-table-header-icon" />,
    title: "Dashboard",
  },
  {
    path: "/users",
    icon: <FiUsers className="data-table-header-icon" />,
    title: "Users",
  },
];

export function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-routes">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              <div className="sidebar-route">
                {route.icon}
                <span className="sidebar-route-title">{route.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </aside>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
