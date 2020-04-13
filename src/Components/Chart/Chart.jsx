import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../Api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    //console.log(dailyData);
    fetchAPI();
  }, []);

  const lineChart = (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "blue",
            backgroundColor: " rgba(56, 56, 230, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(240, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  );

  const barChart = (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              " rgba(56, 56, 230, 0.5)",
              " rgba(37, 226, 37, 0.5)",
              " rgba(230, 52, 52, 0.5)",
            ],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state of ${country}` },
      }}
    />
  );

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};
export default Chart;
