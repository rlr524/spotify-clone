import GradientLayout from "../../components/gradientLayout";
import PropTypes from "prop-types";
import AppSongTable from "../../components/AppSongTable";

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
  ]
  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)]
}

const Playlist = ({ playlist }) => {
  const color = getBGColor(playlist.id)

  return (
      <GradientLayout
          color={color}
          roundImage={false}
          name={playlist.name}
          profileLabel={"playlist"}
          description={`https://picsum.photos/400?random=${playlist.id}`}
      >
        <AppSongTable songs={playlist.songs} />
      </GradientLayout>
  )
};

Playlist.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.string)
}

export default Playlist;
