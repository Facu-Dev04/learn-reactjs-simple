import { useEffect, useState } from "react";
import { fetchData } from "../services/servicesApi";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Consumimos una API externa
  useEffect(() => {
   fetchData({ setData, setError, setLoading, url });
  }, [url]);

  return { data, error, loading, url };
};
