import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AppPlayerLayout from "../components/AppPlayerLayout";
import "reset-css";
import PropTypes from "prop-types";
import "../styles/globals.css";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        scrollbarColor: "black",
      },
    },
  },
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <AppPlayerLayout>
        <Component {...pageProps} />
        <div>Stuff</div>
      </AppPlayerLayout>
    </ChakraProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
