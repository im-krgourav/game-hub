import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  // getting platform and genre names to show in heading
  const genre = useGenre(genreID);
  const platform = usePlatform(platformID);
  // headline
  const headline = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headline}
    </Heading>
  );
};

export default GameHeading;
