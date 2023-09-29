import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.next ? allpages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
    // initialData: { count: geners.length, results: geners },
  });
};

// this is generically defined in useData hook. so doesn't need to be defined here
// {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGameResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

export default useGames;
