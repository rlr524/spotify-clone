import { Box, Flex, Text } from "@chakra-ui/layout";
import { useArtist } from "../lib/hooks";
import AppArtistCard from "./AppArtistCard";

const AppArtistsLayout = () => {
  const { artists } = useArtist();
  return (
    <Box color={"white"} paddingX={"40px"}>
      <Box marginBottom={"40px"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Top artist this month
        </Text>
        <Text fontSize={"md"}>only visible to you</Text>
      </Box>
      <Flex>
        {artists.map((artist, index) => (
          <AppArtistCard
            key={index}
            name={artist.name}
            avatar={artist.avatar}
            songs={artist.songs}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default AppArtistsLayout;
