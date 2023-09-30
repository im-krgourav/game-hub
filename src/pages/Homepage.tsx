import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import GenreSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/heading";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />

          {/* Platform, Genre and Sort */}

          {/* Platform and sort on large */}
          <Show above="lg">
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Show>

          {/* Platform, genre and sort on small */}
          <Show below="lg">
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <GenreSelector />
            </Flex>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <SortSelector />
              </Box>
            </Flex>
          </Show>
          {/* Platform, Genre and Sort */}
        </Box>

        {/* Game Boxes */}
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
