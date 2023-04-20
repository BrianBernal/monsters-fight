import express from "express";
import monsters from "./data.js";
import calculateWinner from "./utils/calculateWinner.js";

const app = express();
const port = 4000;

function allowCrossDomain(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
}

app.use(allowCrossDomain);
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Yes, I am the server and I am alive!");
});

app.get("/getMonsters", (_req, res) => {
  res.json({ data: monsters, ok: true });
});

app.post("/getWinner", (req, res) => {
  const { playerMonsterId = "", computerMonsterId = "" } = req.body;
  const areSameIds = playerMonsterId === computerMonsterId;

  if (!playerMonsterId || !computerMonsterId || areSameIds) {
    return res.status(400).json({ error: "Error in params" });
  }

  const monster1 = monsters.find((monster) => monster.id === playerMonsterId);
  const monster2 = monsters.find((monster) => monster.id === computerMonsterId);

  if (!monster1 || !monster2) {
    return res.status(400).jsonp({ message: "Invalid ID" });
  }

  let battleResult = calculateWinner(monster1, monster2);

  return res.json({
    ok: true,
    data: battleResult,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use((error, req, res, _next) => {
//   console.log("Error 404 at: ", req.path);
//   res.status(404).json({ error: "Not found!" });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
