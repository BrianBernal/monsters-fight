import express from "express";
import monsters from "./initialState.js";

const app = express();
const port = 4000;

function allowCrossDomain(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);
app.use(express.json())

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
    res.status(400).json({ error: "Error in params" });
    console.log('El return es necesario');
    return
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

app.use((req, res) => {
  console.log('Error 404 at: ', req.path)
  res.status(404).json({error: 'Not found!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
