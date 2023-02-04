import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setisLoading(false);
        setError(null);
      })
      .catch((err) => {
        setisLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
