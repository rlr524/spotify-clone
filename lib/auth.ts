import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "./prisma";
import { User } from "@prisma/client";

interface JwtPayload {
  id: number;
}

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user: User;
      try {
        const { id } = jwt.verify(token, "yukiisbestgirl") as JwtPayload;
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("User doesn't exist");
        }
      } catch (error) {
        res.status(401).json({ error: "User not authorized" });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401).json({ error: "User not authorized" });
  };
};
