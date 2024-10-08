const connection = require("../config/connections");
const { Thoughts, User } = require("../models");
const { getRandomName, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  let userCheck = await connection.db
    .listCollections({ name: "user" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 20; i++) {
    const randomThoughts = getRandomThoughts(20);

    const fullName = getRandomName();
    const first = fullName.split(" ")[0];
    const last = fullName.split(" ")[1];

    let username;
    let isDuplicate;

    do {
      username = `${first.toLowerCase()}_${last.toLowerCase()}`;

      isDuplicate = users.some((user) => user.username === username);
    } while (isDuplicate);

    if (username !== null) {
      users.push({
        first,
        last,
        username,
      });

      randomThoughts.forEach((thoughtText) => {
        thoughts.push({
          thoughtText,
          username,
        });
      });
    }
  }

  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});