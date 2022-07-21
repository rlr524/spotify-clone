import { NextResponse } from "next/server";
// import config from "./config/default.json";

const signedInPages = ["/", "/playlist", "/library"];

/** Edge middleware function see https://nextjs.org/docs/api-reference/edge-runtime */
export default function middleware(req) {
  //TODO: Use the config file for the cookie name
  // let token = config.UserConfig.cookieName;

  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    //TODO: Need to see how to make this redirect with a relative url to /signin
    if (!token) {
      return NextResponse.redirect("http://localhost:3000/signin");
    }
  }
}
