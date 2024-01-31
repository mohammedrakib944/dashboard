"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Expenses by Month",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["rgb(0, 105, 128)"],
        borderColor: ["rgb(0, 58, 70)"],
        borderWidth: 1,
      },
    ],
  });

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgb(0, 105, 128)",
        borderColor: "rgb(0, 58, 70)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        backgroundColor: "rgb(0, 105, 128)",
        borderColor: "rgb(0, 105, 128)",
      },
    ],
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className=" bg-white p-5 rounded-lg shadow-md">
        <Bar data={data} />
      </div>
      <div className=" bg-white p-5 rounded-lg shadow-md">
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Chart;
