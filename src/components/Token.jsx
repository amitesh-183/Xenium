import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Token = () => {
  const [chartData, setChartData] = useState({
    series: [20, 10, 7, 10, 10, 10, 10, 23],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [
        "Treasury",
        "ico",
        "Team",
        "Advisor",
        "Developer",
        "Promotion",
        "Airdrop",
        "Backup",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 600,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "bottom", // Change the legend position to 'bottom'
        horizontalAlign: "center", // Center align the legend
        fontSize: "14px", // Adjust the font size
        labels: {
          colors: [
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
          ], // Change the legend text color to white
        },
      },
    },
  });

  return (
    <div className="h-[100vh]">
      <h1 className="text-center py-16 bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-pink-500 bg-clip-text text-transparent font-black">
        Tokens Distributions
      </h1>
      <div id="chart" className="flex justify-center">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={700}
        />
      </div>
    </div>
  );
};

export default Token;

// const data = [
//   { title: "Treasury", value: 20, color: "#E38627" },
//   { title: "ico", value: 10, color: "#C13C37" },
//   { title: "Team", value: 7, color: "#6A2135" },
//   { title: "Advisor", value: 10, color: "#6A2135" },
//   { title: "Developer", value: 10, color: "#6A2135" },
//   { title: "Promotion", value: 10, color: "#6A2135" },
//   { title: "Airdrop", value: 10, color: "#6A2135" },
//   { title: "Backup", value: 23, color: "#6A2135" },
// ];
