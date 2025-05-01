import { defineScript } from "@redwoodjs/sdk/worker";
import { db, setupDb } from "@/db";

export default defineScript(async ({ env }) => {
  setupDb(env);

  await db.$executeRawUnsafe(`\
    -- Delete child tables first
    DELETE FROM ChatMessage;
    DELETE FROM ChatUser;
    DELETE FROM SignupOptionDetail;
    DELETE FROM Registrant;
    DELETE FROM Credential;
    
    -- Then delete parent tables
    DELETE FROM Chat;
    DELETE FROM Form;
    DELETE FROM SignupOption;
    DELETE FROM User;
    DELETE FROM Role;
    
    DELETE FROM sqlite_sequence;
  `);

  await db.role.createMany({
    data: [
      { id: 1, name: "super" },
      { id: 2, name: "admin" },
      { id: 3, name: "user" },
    ],
  });

  await db.user.create({
    data: {
      id: "1",
      firstName: "Joe",
      lastName: "Tester",
      username: "test",
      avatar: "https://picsum.photos/seed/1745615674761/300/300",
      email: "joe@test.com",
      roleId: 1,
    },
  });

  // Create a couple more users for chat interactions
  const user2 = await db.user.create({
    data: {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      avatar: "https://picsum.photos/seed/8743615641/300/300",
      email: "jane@example.com",
      roleId: 3,
    },
  });

  const user3 = await db.user.create({
    data: {
      id: "3",
      firstName: "Alex",
      lastName: "Johnson",
      username: "alexj",
      avatar: "https://picsum.photos/seed/5647382910/300/300",
      email: "alex@example.com",
      roleId: 3,
    },
  });

  // Create chat rooms
  const chat1 = await db.chat.create({
    data: {
      id: "1",
    },
  });

  const chat2 = await db.chat.create({
    data: {
      id: "2",
    },
  });

  // Add users to chats
  await db.chatUser.createMany({
    data: [
      { id: "1", chatId: chat1.id, userId: "1" },
      { id: "2", chatId: chat1.id, userId: "2" },
      { id: "3", chatId: chat2.id, userId: "1" },
      { id: "4", chatId: chat2.id, userId: "2" },
      { id: "5", chatId: chat2.id, userId: "3" },
    ],
  });

  // Add messages to chats
  await db.chatMessage.createMany({
    data: [
      {
        id: "1",
        message: "Hello! How's everyone doing today?",
        chatId: chat1.id,
        userId: "1",
        createdAt: new Date(Date.now() - 3600000 * 24), // 24 hours ago
      },
      {
        id: "2",
        message: "I'm doing well, thanks for asking!",
        chatId: chat1.id,
        userId: "2",
        createdAt: new Date(Date.now() - 3500000 * 24), // 23.5 hours ago
      },
      {
        id: "3",
        message: "What's on the agenda for today?",
        chatId: chat1.id,
        userId: "1",
        createdAt: new Date(Date.now() - 3400000 * 24), // 23 hours ago
      },
      {
        id: "4",
        message: "Hey team, welcome to our group chat!",
        chatId: chat2.id,
        userId: "1",
        createdAt: new Date(Date.now() - 7200000), // 2 hours ago
      },
      {
        id: "5",
        message: "Thanks for setting this up!",
        chatId: chat2.id,
        userId: "3",
        createdAt: new Date(Date.now() - 7000000), // 1.9 hours ago
      },
      {
        id: "6",
        message: "Looking forward to collaborating with everyone.",
        chatId: chat2.id,
        userId: "2",
        createdAt: new Date(Date.now() - 6800000), // 1.8 hours ago
      },
    ],
  });

  console.log("Finished seeding");
});
