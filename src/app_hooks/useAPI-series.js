import { useState, useEffect } from "react";

const apiRoot = "https://cwms-data.usace.army.mil/cwms-data/timeseries";

function useAPISeries(office, tsNames) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const requests = [];

    tsNames.forEach((tsName) => {
      const paramList = `office=${office}&name=${tsName}`;
      const url = `${apiRoot}?${paramList}`;

      requests.push(
        fetch(url, {
          method: "GET",
          headers: { Accept: "application/json;version=2;" },
        })
      );
    });

    Promise.all(requests)
      .then((responseArray) => {
        return responseArray.map((response) => response.json());
      })
      .then((jsonArray) => {
        Promise.all(jsonArray).then((fulfilledArray) => {
          setResults(fulfilledArray);
        });
      });
  }, [tsNames]);

  return results;
}

export default useAPISeries;
