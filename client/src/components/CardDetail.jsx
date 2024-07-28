/* eslint-disable react/prop-types */
import axios from "axios";
import { toast } from "react-toastify";

function CardDetail({ property }) {
  const handleClick = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:9000/api/properties/${property._id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_auth")}`,
        },
      });
      if (response.status === 200) {
        toast.success("Property details fetched successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={property.imgUrl}
          alt={property.propertyName}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {property.propertyName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {property.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
