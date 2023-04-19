import useAPI from "../app_hooks/useAPI";

function LocationList() {
  const locations = useAPI("catalog/LOCATIONS", { office: "MVK" });

  return (
    <ul className="list-group">
      {locations.map((loc, i) => {
        return (
          <li key={i} className="list-group-item">
            {loc.name}
          </li>
        );
      })}
    </ul>
  );
}

export default LocationList;
