import prisma from "../../lib/prisma";
import {validateRoute, validateToken} from "../../lib/auth";

interface JwtPayload {
    id: number;
}

export default validateRoute(async (query, req, res) => {
    const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN) as JwtPayload;
    const [playlists] = await prisma.playlist.findMany({
        where: {
            id: query.id,
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
    res.json(playlists)
})
