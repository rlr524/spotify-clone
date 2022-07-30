import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res
      .status(405)
      .json({ error: "Only the POST method is allowed on this route" });
    return;
  }
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (e) {
    res.status(401).json({ error: "This user already exists" });
    return;
  }
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    "yukiisbestgirl",
    { expiresIn: "8h" }
  );
  res.setHeader(
    "SET-COOKIE",
    cookie.serialize("TRAX_ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 28800,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );
  res.json({
    message: "User successfully created",
    userCreatedAt: user.createdAt,
    userEmail: user.email,
    userId: user.id,
    userUpdatedAt: user.updatedAt,
  });
};
