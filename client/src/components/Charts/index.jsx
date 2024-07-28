import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

function index({lineData, pieData}) {
  return (
    <div>
        <h2 className="text-xl font-bold mb-4">Line Chart</h2>
        <Line data={lineData}/>
        <h2 className="text-xl font-bold mt-8 mb-4">Pie Chart</h2>
        <Pie data={pieData} />
    </div>
  )
}

export default index;
