import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <Link to="/" className="text-xl font-bold">
        MockInterview
      </Link>

      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;