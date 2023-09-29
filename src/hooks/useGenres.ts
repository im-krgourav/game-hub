import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import geners from "../data/geners";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: geners,
  });

// since below code is definde in a generic way in the useData hook, we do not need it anymore.

// {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };
export default useGenres;
