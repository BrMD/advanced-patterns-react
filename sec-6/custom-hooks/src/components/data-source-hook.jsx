import axios from "axios";
import { useState, useEffect } from "react";

export const useDataSource = (getData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setData(response);
    })();
  }, [getData]);

  return data;
};
