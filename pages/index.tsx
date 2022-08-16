import Head from "next/head";
import GradientLayout from "../components/gradientLayout";
import { Fragment } from "react";
import { Box } from "@chakra-ui/layout";
import AppArtistsLayout from "../components/AppArtistsLayout";
import { useCurrentUser } from "../lib/hooks";

const Home = () => {
  // TODO: Add a loading skeleton for user load
  const { user } = useCurrentUser();

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
        name={`${user?.firstname} ${user?.lastname}`}
        description={`${user?.playlistCount} public playlists`}
        image={user?.avatar}
      >
        <Box>
          <AppArtistsLayout />
        </Box>
      </GradientLayout>
    </Fragment>
  );
};

export default Home;
