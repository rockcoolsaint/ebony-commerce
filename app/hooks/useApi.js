import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {

    try {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);

      setError(!response.ok);
      setData(response.data);
      // console.log(response.data[0])

      return response;
    } catch (error) {
      console.log(error)
    }
  };

  return { data, error, loading, request }
}