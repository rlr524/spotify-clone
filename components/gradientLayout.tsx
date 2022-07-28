import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    // The bgGradient is use a linear gradient, at 0% down use color.500, at 15% down
    // start color.600, etc.
    <Box
      id={"gradient-layout"}
      height={"100%"}
      overflowY={"auto"}
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding={"40px"} align={"end"}>
        <Box padding={"20px"}>
          <Image
            src={image}
            boxSize={"160px"}
            boxShadow={"2xl"}
            borderRadius={roundImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding={"20px"} lineHeight={"40px"} color={"white"}>
          <Text fontSize={"x-small"} fontWeight={"bold"} casing={"uppercase"}>
            {subtitle}
          </Text>
          <Text fontSize={"6xl"}>{title}</Text>
          <Text fontSize={"x-small"}>{description}</Text>
        </Box>
      </Flex>
      <Box paddingY={"50px"}>{children}</Box>
    </Box>
  );
};

GradientLayout.propTypes = {
  color: PropTypes.string,
  children: PropTypes.object,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  roundImage: PropTypes.bool,
};

export default GradientLayout;
