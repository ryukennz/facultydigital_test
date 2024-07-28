/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Line, Pie } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import UserDropdown from "./UserDopdown";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [lineChartData, setLineChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchData = async () => {
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

        const propertyMap = propertyResponse.data.data.reduce((acc, property) => {
          acc[property._id] = property.propertyName;
          return acc;
        }, {});

        const pieData = userResponse.data.data.reduce((acc, user) => {
          if (user.viewedProperties && user.viewedProperties.length > 0) {
            user.viewedProperties.forEach((propertyId) => {
              const propertyName = propertyMap[propertyId];
              if (propertyName) {
                acc[propertyName] = (acc[propertyName] || 0) + 1;
              }
            });
          }
          return acc;
        }, {});

        const pieLabels = Object.keys(pieData);
        const pieValues = Object.values(pieData);

        setPieChartData({
          labels: pieLabels,
          datasets: [
            {
              label: "Properties Viewed",
              data: pieValues,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
              ],
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <UserDropdown />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Properties Viewed (Pie Chart)
            </h2>
            {pieChartData && pieChartData.labels && pieChartData.labels.length > 0 ? (
              <Pie data={pieChartData} />
            ) : (
              <p>No data available for pie chart</p>
            )}
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Properties Viewed Over Time (Line Chart)
            </h2>
            {lineChartData && lineChartData.labels && lineChartData.labels.length > 0 ? (
              <Line data={lineChartData} />
            ) : (
              <p>No data available for line chart</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
