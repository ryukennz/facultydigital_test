import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sidebarVariants = {
  open: {
    width: "250px",
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    width: "60px",
    transition: {
      duration: 0.5,
    },
  },
};

function index({ isOpen, toggleSidebar }) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="bg-gray-800 text-white h-full fixed"
    >
      <button onClick={toggleSidebar} className="m-4">
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
      {isOpen && (
        <div className="p-4">
        <ul className="">
          <li className="p-2">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-2">
            <Link to="/users">Users Table</Link>
          </li>
        </ul>
        </div>
      )}
    </motion.div>
  );
}

export default index;
