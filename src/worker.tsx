import { defineApp, ErrorResponse } from "@redwoodjs/sdk/worker";
import { route, render, prefix } from "@redwoodjs/sdk/router";
import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { db, setupDb } from "./db";
import { env } from "cloudflare:workers";
import { RequestInfo } from "@redwoodjs/sdk/worker";
import type { User } from "@prisma/client";

// pages
import { Home } from "@/app/pages/Home";
import { DashboardPage } from "@/app/pages/admin/DashboardPage";
import { ErrorPage } from "@/app/pages/404";
import { userRoutes } from "@/app/pages/auth/routes";
import { FormPage } from "./app/pages/form/FormPage";
import { ListPage as ContactsListPage } from "./app/pages/admin/contacts/ListPage";
import { DetailsPage as ContactsDetailsPage } from "./app/pages/admin/contacts/DetailsPage";
import { ListPage as MessagesListPage } from "./app/pages/admin/messages/ListPage";
export { SessionDurableObject } from "./session/durableObject";

export type AppContext = {
  session: Session | null;
  user: User | null;
};

/**
 * Check if the user is authenticated
 * @param ctx - The request context
 * @returns A response if the user is not authenticated
 */
const isAuthenticated = ({ ctx }: RequestInfo) => {
  if (!ctx.user) {
    return new Response(null, {
      status: 302,
      headers: { Location: "/login" },
    });
  }
}

/**
 * The Application
 */
export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    await setupDb(env);
    setupSessionStore(env);

    try {
      ctx.session = await sessions.load(request);
    } catch (error) {
      if (error instanceof ErrorResponse && error.code === 401) {
        await sessions.remove(request, headers);
        headers.set("Location", "/user/login");

        return new Response(null, {
          status: 302,
          headers,
        });
      }

      throw error;
    }

    if (ctx.session?.userId) {
      ctx.user = await db.user.findUnique({
        where: {
          id: ctx.session.userId,
        },
      });
    }
  },
  render(Document, [
    // marketing
    route("/", () => new Response("Hello, World!")),

    // admin - password protected
    route("/admin", () => new Response(null, { status: 302, headers: { Location: "/admin/dashboard" } })),
    route("/admin/dashboard", [DashboardPage]),
    route("/admin/contacts", [ContactsListPage]),
    route("/admin/contacts/:id", [ContactsDetailsPage]),
    route("/admin/messages", [MessagesListPage]),

    // individual form page - not password protected
    route("/:id", [FormPage]),

    // auth
    [...userRoutes],
    route("/404", ErrorPage),
  ]),
]);
