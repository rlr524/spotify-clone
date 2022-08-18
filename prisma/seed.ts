import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
  // Cannot use createMany on artist.upsert here because it's a nested create (a create within a create). Solving this by using a Promise.all to do all the creates
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          avatar: artist.avatar,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );

  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "user@test.com",
      password: bcrypt.hashSync("password", salt),
      firstname: "Madison",
      lastname: "Ranf",
      avatar:
        "https://res.cloudinary.com/emiya-consulting/image/upload/v1660854274/madi_pfp_wnkvax.jpg",
    },
  });
  const songs = await prisma.song.findMany({});
  // Using playlist.create here vs upsert as upsert requires something unique to look for, i.e. artist.name above. Here, we're creating the playlists, they don't already exist in a seed data file as artist.name does; the only unique element on playlist is id and we don't have that yet.
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist # ${i + 1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
