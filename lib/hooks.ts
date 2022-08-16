import useSWR from "swr";
import fetcher from "./fetcher";

export const useCurrentUser = () => {
  const { data, error } = useSWR("/me", fetcher);
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);
  return {
    playlists: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useArtist = () => {
  const { data, error } = useSWR("/artist", fetcher);
  return {
    artists: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
