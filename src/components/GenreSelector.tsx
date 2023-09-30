import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import getCroppedImageUrl from "../services/image-url";

const GenreSelector = () => {
  const { data, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreID);
  const selecteduseGenre = useGenre(selectedGenreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selecteduseGenre?.name || "Genres"}
      </MenuButton>
      <MenuList>
        {data?.results.map((genre) => (
          <MenuItem onClick={() => setSelectedGenreId(genre.id)} key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
