import { Box } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import AppSidebar from "./AppSidebar";

const AppPlayerLayout = ({ children }) => {
  return (
    <Box width={"100vw"} height={"100vh"}>
      {/*Sidebar*/}
      <Box position={"absolute"} top={"0"} width={"250px"} left={"0"}>
        <AppSidebar />
      </Box>
      {/*Main Area*/}
      <Box marginLeft={"250px"} marginBottom={"100px"}>
        {children}
      </Box>
      {/*Player*/}
      <Box position={"absolute"} left={"0"} bottom={"0"}>
        Player
      </Box>
    </Box>
  );
};

AppPlayerLayout.propTypes = {
  children: PropTypes.array,
};

export default AppPlayerLayout;
