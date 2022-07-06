import { useState, useEffect } from "react";

export const FetchHook = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  // please define type of data, it depends on your fething data
  const [data, setData] = useState([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    window
      .fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
};
