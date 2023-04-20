import Chart from "./chart";
import useAPI from "../app_hooks/useAPI";
import Loader from "./loader";

function TimeseriesChart({ location }) {
  const timeseries = useAPI("catalog/TIMESERIES", {
    like: `${location.name}.*`,
    office: location["office-id"],
  });

  if (Array.isArray(timeseries)) return <Loader />;

  const data = [];
  return (
    <>
      <div className="col-3">
        <div className="form-group">
          {timeseries.entries
            .filter((ts) => {
              return !!ts.extents.length;
            })
            .sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
            .map((ts) => {
              return <div key={ts.name}>{ts.name}</div>;
            })}
        </div>
      </div>
      <div className="col-9">
        <Chart data={data} />
      </div>
    </>
  );
}

export default TimeseriesChart;
