import { useEffect, useState } from "react";
import { config } from "../config/config";
import { request } from "../utils/request";

interface State<T>{
  data?: T;
  loading: boolean;
  error?: Error;
}

function useFetch<T>(path: string, options?: RequestInit): State<T>{
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);

    (async () => {
      try{
        const response = await fetch(`${config.api}/${path}`, options);
        if(!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setData(data);
      } catch (error){
        setError(error as Error);
      } finally{
        setLoading(false);
      }
    })();

  }, []);

  return {data, loading, error}
}

export { useFetch }