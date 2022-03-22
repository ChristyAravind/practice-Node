import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import { animeRouter } from "./routers/animes.js";
import { usersRouter } from "./routers/users.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use("/animelist", animeRouter);

app.use("/users", usersRouter);

const MONGO_URL = process.env.MONGO_URL;
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
export const client = await createConnection();

app.get("/", function (req, res) {
  res.send("Hello World🤩❤️");
});

app.listen(PORT, () => {
  console.log("Server is Started");
});

async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  console.log({ salt, hashPassword });
}

app.get("/mobiles", async function (req, res) {
  const mobiles = await client
    .db("b30wdtamil")
    .collection("mobiles")
    .find({})
    .toArray();
  res.send(mobiles);
});

app.post("/mobiles", async function (req, res) {
  const data = req.body;
  const result = await client
    .db("b30wdtamil")
    .collection("mobiles")
    .insertMany(data);
  res.send(result);
});
genPassword("password@123");
