import Chart from "./chart";
import useAPI from "../app_hooks/useAPI";

function TimeseriesChart({ location }) {
  const timeseries = useAPI("catalog/TIMESERIES", {
    like: `${location.name}.*`,
    office: location["office-id"],
  });

  console.log(timeseries);

  const data = [];
  return <Chart data={data} />;
}

export default TimeseriesChart;
