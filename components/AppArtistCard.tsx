import { Box, Text } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { Image } from "@chakra-ui/react";

const AppArtistCard = ({ name, avatar }) => {
  return (
    <Box
      bg={"transparent"}
      borderRadius={"4px"}
      padding={"15px"}
      width={"250px"}
      height={"300px"}
    >
      <Box boxShadow={"2xl"} padding={"20px"}>
        <Image borderRadius={"100%"} src={avatar} marginBottom={"10px"}></Image>
        <Text fontSize={"large"}>{name}</Text>
        <Text fontSize={"sm"} fontWeight={"thin"}>
          Artist
        </Text>
      </Box>
    </Box>
  );
};

AppArtistCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default AppArtistCard;
