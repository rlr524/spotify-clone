import { Box } from "@chakra-ui/layout";
import NextImage from "next/image";

const AppSidebar = () => {
  return (
    <Box
      width={"100%"}
      height={"calc(100vh - 100px)"}
      bg={"black"}
      paddingX={"5px"}
      color={"gray"}
    >
      <Box paddingY={"20px"}>
        <Box width={"120px"} marginBottom={"20px"} paddingX={"20px"}>
          <NextImage src={"/app_logo.svg"} height={60} width={120} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppSidebar;
