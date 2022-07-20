import { NextResponse } from "next/server";
import config from "./config/default.json";

const signedInPages = ["/", "/playlist", "/library"];

/** Edge middleware function see https://nextjs.org/docs/api-reference/edge-runtime */
export default function middleware(req) {
  const accesstoken = config.UserConfig.cookieName;
  const url = req.nextUrl.clone();
  url.pathname = "/signin";

  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.accesstoken;

    if (!token) {
      return NextResponse.rewrite(url);
    }
  }
}
