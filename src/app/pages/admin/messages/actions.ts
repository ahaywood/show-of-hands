"use server";

import { db } from "@/db";
import { Prisma } from "@prisma/client";
export const getChatList = async ({ userId }: { userId: string }) => {
  return await db.chat.findMany({
    where: {
      users: {
        some: {
          userId: userId,
        },
      },
    },
    include: {
      users: true,
      messages: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
};

export const getChatMessages = async ({ chatId }: { chatId: string }) => {
  return await db.chatMessage.findMany({
    where: {
      chatId: chatId,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

export type ChatMessageWithUser = Prisma.ChatMessageGetPayload<{
  include: {
    user: true;
  };
}>;

export const getUserProfile = async ({ userId }: { userId: string }) => {
  return await db.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const addMessage = async (message: string, chatId: string) => {
  try {
    await db.chatMessage.create({
      data: {
        message,
        userId: "1",
        chatId,
      },
    });
    return { success: true, error: null };
  } catch (e) {
    console.error(e);
    return { success: false, error: "Error submitting your message." };
  }
};
