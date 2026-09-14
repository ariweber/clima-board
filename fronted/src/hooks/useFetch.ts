import { useEffect, useState } from "react";

export type FetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export default function useFetch<T>(url: string | null): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((result: T) => setData(result))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
