import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());

const MONGO_URL = process.env.MONGO_URL;
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
const client = await createConnection();

app.get("/", function (req, res) {
  res.send("Hello World🤩❤️");
});

// app.get("/animelist", function (req, res) {
//   res.send(Animelist);
// });

app.get("/animelist/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;

  //   const Anime = Animelist.find((ani) => ani.id === id);

  const Anime = await client
    .db("b30wdtamil")
    .collection("Animes")
    .findOne({ id: id });

  Anime
    ? res.send(Anime)
    : res.status(404).send({ message: "No such anime found in DB" });
});

app.post("/animelist", async function (req, res) {
  const data = req.body;
  const Animelist = await client
    .db("b30wdtamil")
    .collection("Animes")
    .insertMany(data);
  res.send(Animelist);
});

app.put("/animelist/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;

  const Update = req.body;
  const Anime = await client
    .db("b30wdtamil")
    .collection("Animes")
    .updateOne({ id: id }, { $set: Update });
  res.send(Anime);
});

app.get("/animelist", async function (req, res) {
  const Animelist = await client
    .db("b30wdtamil")
    .collection("Animes")
    .find({})
    .toArray();
  res.send(Animelist);
});

app.delete("/animelist/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;
  const Anime = await client
    .db("b30wdtamil")
    .collection("Animes")
    .deleteOne({ id: id });
  res.send(Anime);
});

app.listen(PORT, () => {
  console.log("Server is Started");
});
