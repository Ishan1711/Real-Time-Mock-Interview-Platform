import { Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";

function AppLayout() {
  return (
    <div className="min-h-screen">
      <AppNavbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;