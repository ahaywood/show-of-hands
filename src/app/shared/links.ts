import { defineLinks } from "@redwoodjs/sdk/router";

export const link = defineLinks([
  "/admin/dashboard",
  "/admin/contacts",
  "/admin/contacts/:id",
  "/admin/messages",
  "/admin/",
  "/contacts",
  "/contacts/:id",
  "/messages",
  "/:id",
  "/404",
  "/"
]);
