import Head from "next/head";
import GradientLayout from "../components/gradientLayout";
import { Fragment } from "react";
import { useArtist } from "../lib/hooks";
import { Box } from "@chakra-ui/layout";

const Home = () => {
  const { artists } = useArtist();
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
        color="red"
        profileLable="profile"
        name="Madison Ranf"
        description="15 public playlists"
        image="/madison_square.jpeg"
      >
        <Box></Box>
      </GradientLayout>
    </Fragment>
  );
};

export default Home;
