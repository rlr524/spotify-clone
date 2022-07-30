import Head from "next/head";
import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Trax Music</title>
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
        <div>home page</div>
      </GradientLayout>
    </div>
  );
};

export default Home;
