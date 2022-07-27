import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

// const fakePlaylists = [
//   {
//     id: 1,
//     name: "FakePlaylist # 3",
//     userId: 1,
//   },
//   {
//     id: 2,
//     name: "Playlist # 2",
//     userId: 1,
//   },
//   {
//     id: 3,
//     name: "Playlist # 1",
//     userId: 1,
//   },
//   {
//     id: 4,
//     name: "Playlist # 4",
//     userId: 1,
//   },
//   {
//     id: 5,
//     name: "Playlist # 8",
//     userId: 1,
//   },
//   {
//     id: 6,
//     name: "Playlist # 5",
//     userId: 1,
//   },
//   {
//     id: 7,
//     name: "Playlist # 6",
//     userId: 1,
//   },
//   {
//     id: 8,
//     name: "Playlist # 9",
//     userId: 1,
//   },
//   {
//     id: 9,
//     name: "Playlist # 10",
//     userId: 1,
//   },
//   {
//     id: 10,
//     name: "Playlist # 7",
//     userId: 1,
//   },
// ];

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);
  return {
    // playlists: (data as any) || [],
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
