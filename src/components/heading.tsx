import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // getting platform and genre names to show in heading
  const genre = useGenre(gameQuery.genreID);
  const platform = usePlatform(gameQuery.platformID);

  // heading
  const headline = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headline}
    </Heading>
  );
};

export default GameHeading;
