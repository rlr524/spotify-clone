import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "./prisma";
import config from "../config/default.json";
import { User } from "@prisma/client";

interface JwtPayload {
  id: number;
}

export const validateRoute = (
  handler: (arg0: NextApiRequest, arg1: NextApiResponse<any>, arg2: User) => any
) => {
  let token = config.UserConfig.cookieName;
  return async (req: NextApiRequest, res: NextApiResponse) => {
    ({ token } = req.cookies);

    if (token) {
      let user: User;
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
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
