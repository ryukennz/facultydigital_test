import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CardDetail from "../components/CardDetail";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:9000/api/properties",
      });
      if (response.status === 200) {
        setProperties(response.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="flex flex-wrap p-6">
      {properties.map((property) => (
        <div key={property._id} className="w-full md:w-1/3 lg:w-1/4 p-4">
          <CardDetail property={property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
