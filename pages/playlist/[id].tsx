import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import PropTypes from "prop-types";
import GradientLayout from "../../components/gradientLayout";
import SongTable from "../../components/AppSongTable";

const getBGColor = (id) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];
  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  const color = getBGColor(playlist.id);

  return (
    <GradientLayout
      color={color}
      name={playlist.name}
      roundImage={false}
      profileLabel={"playlist"}
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

// Getting the individual playlist data here server-side and loading it
// on page load from the server because our usePlaylist hook returns
// a lists of playlists, not an individual playlist. Here we want the
// individual playlist with it's songs as long as it's attached to
// the logged in user.
export const getServerSideProps = async ({ query, req }) => {
  let user;

  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        path: "/signin",
      },
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  return {
    props: { playlist },
  };
};

Playlist.propTypes = {
  playlist: PropTypes.object,
};

export default Playlist;
