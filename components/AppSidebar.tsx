import {
  Box,
  Center,
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
        <Box marginBottom={"20px"}>
          <List spacing={2}>
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
            <Divider
              orientation={"horizontal"}
              width={"80px"}
              alignSelf={"center"}
            />
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
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default AppSidebar;
