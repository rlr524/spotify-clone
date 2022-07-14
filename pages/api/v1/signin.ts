import cookie from "cookie";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res
      .status(405)
      .json({ error: "Only the POST method is allowed on this route" });
    return;
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );
    res.setHeader(
      "SET-COOKIE",
      cookie.serialize(process.env.COOKIE_NAME, token, {
        httpOnly: true,
        maxAge: 28800,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV == "production",
      })
    );
    res.json({
      message: "User successfully signed in",
      userEmail: user.email,
      userId: user.id,
    });
  } else {
    res.status(401).json({
      error: "Signin unsuccessful, please check your email and password",
    });
  }
};
