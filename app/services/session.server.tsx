// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";

// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_vtom_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["vtomhub"],
    secure: process.env.NODE_ENV === "production"
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;