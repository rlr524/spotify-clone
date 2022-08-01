import Head from "next/head";
import GradientLayout from "../components/gradientLayout";
import { Fragment } from "react";
import { Box } from "@chakra-ui/layout";
import AppArtistsLayout from "../components/AppArtistsLayout";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Trax Music</title>
        <meta
          name="description"
          content="Trax music: The better music player."
        />
        <link rel="icon" href="/public/favicon.png" />
      </Head>
      <GradientLayout
        roundImage
        color="purple"
        profileLable="profile"
        name="Madison Ranf"
        description="15 public playlists"
        image="/madison_square.jpeg"
      >
        <Box>
          <AppArtistsLayout />
        </Box>
      </GradientLayout>
    </Fragment>
  );
};

export default Home;
