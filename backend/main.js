import express from "express";
import monsters from "./initialState.js";

const app = express();
const port = 4000;

let allowCrossDomain = function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);

app.get("/", (_req, res) => {
  res.send("Yes, I am the server and I am alive!");
});

app.get("/getMonsters", (_req, res) => {
  res.json({ data: monsters, ok: true });
});

app.post("/getWinner", (req, res) => {
  const { playerMonsterId = "", computerMonsterId = "" } = req.query;
  if (!playerMonsterId || !computerMonsterId) {
    res.status(400);
    res.json("error", { error: "Error in params" });
  }
  const fighters = [playerMonsterId, computerMonsterId];
  const randomWinner = Math.floor(Math.random() * 2);
  const winner = fighters[randomWinner];
  const looser = fighters.find((_el, i) => i !== randomWinner);

  res.json({
    ok: true,
    data: {
      winnerId: winner,
      looserId: looser,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
