import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `rounded-md px-4 py-2 ${
              isActive ? "bg-gray-200 font-semibold" : ""
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/interviews"
          className={({ isActive }) =>
            `rounded-md px-4 py-2 ${
              isActive ? "bg-gray-200 font-semibold" : ""
            }`
          }
        >
          Interviews
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `rounded-md px-4 py-2 ${
              isActive ? "bg-gray-200 font-semibold" : ""
            }`
          }
        >
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;