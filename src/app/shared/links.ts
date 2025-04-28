import { defineLinks } from "@redwoodjs/sdk/router";

export const link = defineLinks([
  "/login",
  "/logout",
  "/admin/dashboard",
  "/admin/contacts",
  "/admin/contacts/:id",
  "/admin/messages",
  "/admin/messages/:id",
  "/admin/profile/:id",
  "/404",
  "/"
]);
