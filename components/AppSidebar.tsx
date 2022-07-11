import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import NextImage from "next/image";
import NextLink from "next/link";
import { navMenu, musicMenu } from "../typescript/navMenu";

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const AppSidebar = () => {
  return (
    <Box
      width={"100%"}
      height={"calc(100vh - 100px)"}
      background={"black"}
      paddingX={"5px"}
      color={"gray"}
    >
      <Box paddingY={"20px"} height={"100%"}>
        <Box width={"120px"} marginBottom={"20px"} paddingX={"20px"}>
          <NextImage src={"/app_logo.svg"} height={60} width={120} />
        </Box>
        <Box marginBottom={"20px"}>
          <List spacing={2}>
            <Box>
              {navMenu.map((menu) => (
                <ListItem key={menu.name} paddingX={"20px"} fontSize={"16px"}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color={"white"}
                          marginRight={"20px"}
                        />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </Box>
            <Box paddingTop={"20px"}>
              {musicMenu.map((menu) => (
                <ListItem key={menu.name} paddingX={"20px"} fontSize={"16px"}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color={"white"}
                          marginRight={"20px"}
                        />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </Box>
          </List>
        </Box>
        <Divider
          orientation={"horizontal"}
          marginLeft={"20px"}
          width={"210px"}
          color={"gray.800"}
        />
        <Box height={"66%"} overflowY={"auto"} paddingY={"20px"}>
          <List spacing={2}>
            {playlists.map((list, index) => (
              <ListItem paddingX={"20px"} key={index} fontSize={"16px"}>
                <LinkBox>
                  <NextLink href={"/"} passHref>
                    <LinkOverlay>{list}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default AppSidebar;
