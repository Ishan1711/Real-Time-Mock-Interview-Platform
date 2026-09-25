import { Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen">
      <AppNavbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;