import useAPI from "../app_hooks/useAPI";

function TimeseriesChart({ tsName, office }) {
  if (!tsName) return <p>Please select a timeseries...</p>;

  const measurements = useAPI("timeseries", {
    office: office,
    name: encodeURI(tsName),
  });

  return (
    <div>
      <pre>{JSON.parse(measurements, null, 2)}</pre>
    </div>
  );
}

export default TimeseriesChart;
