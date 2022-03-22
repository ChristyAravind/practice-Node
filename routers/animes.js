import express from "express";
import {
  updateAnimebyid,
  getAllanime,
  deleteAnimebyid,
  createAnime,
  getAnimebyid,
} from "../helper.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// router.get("/animelist", function (req, res) {
//   res.send(Animelist);
// });

router.get("/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;

  //   const Anime = Animelist.find((ani) => ani.id === id);

  const Anime = await getAnimebyid(id);

  Anime
    ? res.send(Anime)
    : res.status(404).send({ message: "No such anime found in DB" });
});

router.post("/", async function (req, res) {
  const data = req.body;
  const Animelist = await createAnime(data);
  res.send(Animelist);
});

router.put("/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;

  const Update = req.body;
  const Anime = await updateAnimebyid(id, Update);
  res.send(Anime);
});

router.get("/", auth, async function (req, res) {
  const Animelist = await getAllanime();
  res.send(Animelist);
});

router.delete("/:id", async function (req, res) {
  console.log(req.params);
  const { id } = req.params;
  const Anime = await deleteAnimebyid(id);
  res.send(Anime);
});

export const animeRouter = router;
