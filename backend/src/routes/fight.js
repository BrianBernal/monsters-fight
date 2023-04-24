// libraries
import express from "express";

// utils
import { calculateWinner } from "../utils/calculateWinner.js";
import { monsters } from "../data.js";

const fightRouter = express.Router();

fightRouter.post("", (req, res) => {
  const { playerMonsterId = "", computerMonsterId = "" } = req.body;
  const areSameIds = playerMonsterId === computerMonsterId;

  if (!playerMonsterId || !computerMonsterId || areSameIds) {
    return res.status(400).json({ error: "Error in params" });
  }

  const monster1 = monsters.find((monster) => monster.id === playerMonsterId);
  const monster2 = monsters.find((monster) => monster.id === computerMonsterId);

  if (!monster1 || !monster2) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const battleResult = calculateWinner(monster1, monster2);

  return res.json({
    ok: true,
    data: battleResult,
  });
});

export default fightRouter;
