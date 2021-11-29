import { useEffect, useState } from 'react';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(endPoint);
        setData(await response.json());
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [endPoint]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
