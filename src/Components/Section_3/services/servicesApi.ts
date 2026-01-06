export const fetchData = async ({
  setData,
  setError,
  setLoading,
  url,
}: {
  setData: (data: any) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  url: string;
}) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) throw new Error("Error al consumir la API");
    setData(data);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    }
  } finally {
    setLoading(false);
  }
};
