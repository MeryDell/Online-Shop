import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex gap-6 bg-gray-100 px-6 py-4">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }
      >
        About
      </NavLink>

      {/* <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }
      >
        Products
      </NavLink> */}
    </nav>
  );
}

export default Navbar;