import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
export default function Chart(props) {
  const data = {
    labels: ["HTML", "css", "JavaScript", "React.js", "Figma"],
    datasets: [
      {
        data: [3, 3, 3, 4, 2],
        backgroundColor: ["#5fb2a8", "#e1ae9e", "#dfae36", "#bc8e5b", "ca4544"],
        borderWidth: 1,
      },
    ],
  };
  var yLabels = {
    0: "",
    2: "Newbie",
    4: "Geek",
    6: "Ninja",
    8: "Jedi",
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        color: props.color ? props.color : null,
        display: true,
        text: "My Skills ",
        font: { size: 24 },
        padding: {
          left: 0,
          top: 10,
          bottom: 30,
        },
      },
    },
    scales: {
      x: {
        grid: {
          lineWidth: 0,
          drawBorder: false,
        },
        ticks: {
          color: props.color ? props.color : null,
          font: {
            size: 20,
          },
        },
      },
      y: {
        display: true,
        max: 8,
        ticks: {
          color: props.color ? props.color : null,
          font: {
            size: 20,
          },
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return yLabels[value];
          },
        },
      },
    },
  };
  return (
    <>
      <Bar data={data} options={options}></Bar>
    </>
  );
}
