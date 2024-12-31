/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from 'axios';

export default function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url, {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        });
       
        // console.log(response.data.data[0]);
        setData(response.data.data);
        setLoading(false)
      } catch (error) {
        setError(error)
        console.log(error);
      } finally {
        setLoading(false)
      }

    }
    fetchData();

  }, [url]);
  return {data, loading,error}
}
