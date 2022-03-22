import { client } from "./index.js";

export async function updateAnimebyid(id, Update) {
  return await client
    .db("b30wdtamil")
    .collection("Animes")
    .updateOne({ id: id }, { $set: Update });
}

export async function getAllanime() {
  return await client.db("b30wdtamil").collection("Animes").find({}).toArray();
}

export async function deleteAnimebyid(id) {
  return await client
    .db("b30wdtamil")
    .collection("Animes")
    .deleteOne({ id: id });
}

export async function createAnime(data) {
  return await client.db("b30wdtamil").collection("Animes").insertMany(data);
}

export async function getAnimebyid(id) {
  return await client.db("b30wdtamil").collection("Animes").findOne({ id: id });
}

// export async function getAnimebyid(id) {
//   return await client
//     .db("b30wdtamil")
//     .collection("Animes")
//     .findOne({ _id: ObjectId(id) });
// }

export async function createUser(data) {
  return await client.db("b30wdtamil").collection("users").insertOne(data);
}

export async function getUserByName(username) {
  return await client
    .db("b30wdtamil")
    .collection("users")
    .findOne({ username: username });
}
