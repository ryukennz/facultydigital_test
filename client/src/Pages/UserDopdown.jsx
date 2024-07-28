import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from '../assets/user.png'

function UserDropdown() {
  const redirect = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_auth");
    redirect("/login");
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center">
        <img
          src={userIcon}
          alt="User"
          className="w-8 h-8"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
