import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { barChartData, LineChartData } from "../FAKE_DATA"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarChart = () => {
  const options = {}

  return (
    <>
      <Bar options={options} data={barChartData} />
    </>
  )
}
