import { defineScript } from "@redwoodjs/sdk/worker";
import { db, setupDb } from "@/db";

export default defineScript(async ({ env }) => {
  setupDb(env);

  await db.$executeRawUnsafe(`\
    DELETE FROM Chat;
    DELETE FROM ChatMessage;
    DELETE FROM ChatUser;
    DELETE FROM Chat;
    DELETE FROM Credential;
    DELETE FROM Form;
    DELETE FROM SignupOption;
    DELETE FROM SignupOptionDetail;
    DELETE FROM Registrant;
    DELETE FROM Role;
    DELETE FROM User;
    DELETE FROM sqlite_sequence;
  `);

  await db.role.createMany({
    data: [
      { id: 1, name: "super" },
      { id: 2, name: "admin" },
      { id: 3, name: "user" }
    ]
  })

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

  console.log("🌱 Finished seeding");
});
