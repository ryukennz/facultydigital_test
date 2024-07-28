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
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <ul className="mt-10">
          <li className="p-2">
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      )}
    </motion.div>
  );
}

export default index;
