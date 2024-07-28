/* eslint-disable no-unused-vars */
import axios from "axios";
import Chart from "../components/Charts";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [lineChartData, setLineChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchData = async (e) => {
    try {
      const userResponse = await axios({
        method: "GET",
        url: "http://localhost:9000/api/users",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_auth")}`,
        },
      });
      const propertyResponse = await axios({
        method: "GET",
        url: "http://localhost:9000/api/properties",
      });
      if (userResponse && propertyResponse.status === 200) {
        setUsers(userResponse.data.data);
        setProperties(propertyResponse.data.data);
      }
      const lineLabels = propertyResponse.data.data.map(
        (property) => property.propertyName
      );
      const lineData = propertyResponse.data.data.map(
        (property) => property.visitCount
      );

      setLineChartData({
        labels: lineLabels,
        datasets: [
          {
            label: "Visit Count",
            data: lineData,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      });

    //   console.log(userResponse, ">>>");

      const pieData = userResponse.data.data.reduce((acc, user) => {
        // console.log(acc, 'acc', user, 'user', ">>>");
        if (user.viewedProperties) {
          user.viewedProperties.forEach((property) => {
            if (!acc[property.propertyName]) {
              acc[property.propertyName] = 0;
            }
            acc[property.propertyName] += 1;
          });
        }
      
        return acc;
      }, {});

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold">{}</h1>
    </>
  );
}
