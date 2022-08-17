import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import JwtPayload from "../../lib/jwtPayload";
import PropTypes from "prop-types";

const Playlist = ({ playlist }) => {
  return <div>{playlist.name}</div>;
};

// Getting the individual playlist data here server-side and loading it
// on page load from the server because our usePlaylist hook returns
// a lists of playlists, not an individual playlist. Here we want the
// individual playlist with it's songs as long as it's attached to
// the logged in user.
export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN) as JwtPayload;
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
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
  playlist: PropTypes.arrayOf(PropTypes.object),
};

export default Playlist;
