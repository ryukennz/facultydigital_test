import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
