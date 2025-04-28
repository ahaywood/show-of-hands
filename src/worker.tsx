import { defineApp, ErrorResponse } from "@redwoodjs/sdk/worker";
import { route, render, prefix, index, Route } from "@redwoodjs/sdk/router";
import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { db, setupDb } from "./db";
import { env } from "cloudflare:workers";
import { RequestInfo } from "@redwoodjs/sdk/worker";
import type { User } from "@prisma/client";
export { RealtimeDurableObject } from "@redwoodjs/sdk/realtime/durableObject";
import { realtimeRoute } from "@redwoodjs/sdk/realtime/worker";


// pages
import { Home } from "@/app/pages/Home";
import { PricingPage } from "@/app/pages/marketing/PricingPage";
import { DashboardPage } from "@/app/pages/admin/DashboardPage";
import { SettingsPage } from "@/app/pages/admin/SettingsPage";
import { AccountPage } from "@/app/pages/admin/AccountPage";
import { ErrorPage } from "@/app/pages/404";
import { userRoutes } from "@/app/pages/auth/routes";
import { FormPage } from "./app/pages/form/FormPage";
import { ListPage as ContactsListPage } from "./app/pages/admin/contacts/ListPage";
import { DetailsPage as ContactsDetailsPage } from "./app/pages/admin/contacts/DetailsPage";
import { ListPage as MessagesListPage } from "./app/pages/admin/messages/ListPage";
import { ListPage as FormsListPage } from "@/app/pages/admin/forms/ListPage";
import { DetailsPage as FormsDetailsPage } from "@/app/pages/admin/forms/DetailsPage";
import { NewPage as FormsNewPage } from "@/app/pages/admin/forms/NewPage";
import { SettingsPage as FormsSettingsPage } from "@/app/pages/admin/forms/SettingsPage";
import { StatsPage as FormsStatsPage } from "@/app/pages/admin/forms/StatsPage";
import { EditPage as FormsEditPage } from "@/app/pages/admin/forms/EditPage";
import { MarkdownPage } from "@/app/pages/legal/MarkdownPage";
import termsContent from "@/app/pages/legal/terms.md?raw";


export { SessionDurableObject } from "./session/durableObject";

export type AppContext = {
  session: Session | null;
  user: User | null;
  content?: string;
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

const showMarkdown = [({ ctx }: RequestInfo) => {
  ctx.content = termsContent;
  return
}, MarkdownPage]

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
    realtimeRoute(() => env.REALTIME_DURABLE_OBJECT),

    // marketing
    index(Home),
    route("/pricing", PricingPage),

    // admin - password protected
    prefix("/admin", [
      index(() => new Response(null, { status: 302, headers: { Location: "/admin/dashboard" } })),
      route("/dashboard", [DashboardPage]),
      route("/settings", [SettingsPage]),
      route("/account", [AccountPage]),

      // contacts
      route("/contacts", [ContactsListPage]),
      route("/contacts/:id", [ContactsDetailsPage]),

      // messages
      route("/messages", [MessagesListPage]),
      route("/messages/:id", [MessagesListPage]),

      // forms
      route("/forms", [FormsListPage]),
      route("/forms/new", [FormsNewPage]),
      route("/forms/:id", [FormsDetailsPage]),
      route("/forms/:id/edit", [FormsEditPage]),
      route("/forms/:id/settings", [FormsSettingsPage]),
      route("/forms/:id/stats", [FormsStatsPage]),
    ]),

    // legal
    prefix("/legal", [
      route("/terms", [...showMarkdown]),
      route("/privacy", Home),
      route("/disclaimers", Home),
    ]),

    // auth
    [...userRoutes],

    // individual form page - not password protected
    route("/:id", [FormPage]),

    route("/404", ErrorPage),
  ]),
]);
