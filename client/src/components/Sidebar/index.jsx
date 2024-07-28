/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-2xl font-bold ${!isOpen && "hidden"}`}>
          Admin Dashboard
        </h1>
        <button onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="p-4">
            <NavLink to="/" end activeClassName="font-bold">
              <span className={`${!isOpen && "hidden"}`}>Dashboard</span>
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/users" activeClassName="font-bold">
              <span className={`${!isOpen && "hidden"}`}>Users Table</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
