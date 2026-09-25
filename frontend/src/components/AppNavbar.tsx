import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <Link to="/dashboard" className="text-xl font-bold">
        MockInterview
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <button type="button">Logout</button>
      </div>
    </nav>
  );
}

export default AppNavbar;