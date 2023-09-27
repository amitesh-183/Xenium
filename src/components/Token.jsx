import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Token = () => {
  const [chartData, setChartData] = useState({
    series: [20, 10, 7, 10, 10, 10, 10, 23],
    options: {
      chart: {
        width: "100%", // Set the chart width to 100% for responsiveness
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
      colors: [
        "#F70253",
        "#4969f3",
        "#A68DFB",
        "#22E54C",
        "#CCF62F",
        "#F837F0",
        "#f3f7a0",
        "#5DF9DA",
      ], // Define custom colors for each part of the pie chart

      responsive: [
        {
          breakpoint: 768, // Adjust the breakpoint as needed
          options: {
            chart: {
              width: "400", // Reduce the chart width at this breakpoint
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 425, // Adjust the breakpoint as needed
          options: {
            chart: {
              width: "400", // Reduce the chart width at this breakpoint
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 375, // Adjust the breakpoint as needed
          options: {
            chart: {
              width: "300", // Reduce the chart width at this breakpoint
              height: "800",
              padding: "0 40px",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
        labels: {
          colors: [
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
            "black",
          ],
        },
      },
    },
  });

  return (
    <div className="py-10 md:py-20">
      <h1 className="sec-title">Tokens Distributions</h1>
      <div id="chart" className="flex justify-center" data-aos="fade-up">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width="700" // Set the chart width to 100% for responsiveness
        />
      </div>
    </div>
  );
};

export default Token;
