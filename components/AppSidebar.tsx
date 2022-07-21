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
import { navMenu, musicMenu } from "../data/navMenu";
import { usePlaylist } from "../lib/hooks";

// const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const AppSidebar = () => {
  const { playlists } = usePlaylist();
  return (
    <Box
      width={"100%"}
      height={"calc(100vh - 100px)"}
      background={"black"}
      paddingX={"5px"}
      color={"gray"}
    >
      <Box paddingTop={"20px"} height={"100%"}>
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
            <Box marginTop={"20px"}>
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
          marginBottom={"20px"}
          marginLeft={"20px"}
          width={"210px"}
          color={"gray.800"}
        />
        <Box
          id={"scroll-area"}
          height={"66%"}
          overflowY={"auto"}
          paddingY={"20px"}
        >
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX={"20px"} key={playlist.id}>
                <LinkBox>
                  <NextLink href={"/"} passHref>
                    <LinkOverlay>{playlist.name}</LinkOverlay>
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
