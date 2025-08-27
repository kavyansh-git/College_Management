import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const FeesPieChart = ({ deposited, total }) => {
  const pending = total - deposited;

  const data = {
    labels: ["Deposited", "Pending"],
    datasets: [
      {
        data: [deposited, pending],
        backgroundColor: ["#22c55e", "#dc2626"], // green & gray
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw.toLocaleString();
            return `${label}: ₹${value}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-8/10 h-8/10">
        <Pie data={data} options={options} />
    </div>
  );
};

export default FeesPieChart;
