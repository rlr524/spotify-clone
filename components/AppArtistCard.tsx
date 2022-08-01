import { Box } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { Image } from "@chakra-ui/react";

const AppArtistCard = ({ songs, name, avatar }) => {
  return (
    <Box bg={"gray.800"} borderRadius={"4px"} padding={"15px"}>
      <Image
        boxSize={"160px"}
        boxShadow={"2xl"}
        borderRadius={"100%"}
        src={avatar}
      ></Image>
      {name}
      {songs}
    </Box>
  );
};

AppArtistCard.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default AppArtistCard;
