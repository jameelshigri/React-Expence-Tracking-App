import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.datapoint.map((dataPoint) => dataPoint.value); //converting to string
  const totalMaximum = Math.max(...dataPointValues);
//   console.log(props.datapoint)
  return (
    <div className="chart">
      {props.datapoint.map((dp) => {
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={totalMaximum}
          label={dp.label}
          />;
      })}
    </div>
  );
};

export default Chart;
