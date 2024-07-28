import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import { toast } from "react-toastify";
import axios from "axios";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:9000/api/users",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_auth")}`,
        },
      });
      if (response.status === 200) {
        setUsers(response.data.data);
      }
      // console.log(response, ">>>>");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-4">Users Table</h1>
      <UserTable users={users} />
    </div>
  );
};

export default UserPage;
