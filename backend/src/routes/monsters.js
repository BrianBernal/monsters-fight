import express from "express";
import { createSuccessfulResponse } from "../utils/responseHelpers.js";
import { monsters } from "../data.js";

const monsterRouter = express.Router();

// Get monsters list
monsterRouter.get("", (_req, res) => {
  return res.json(createSuccessfulResponse(monsters));
});

// Create monster
monsterRouter.post("", (req, res) => {
  // TODO: Add the rest of monster properties
  const { name, guid } = req.body;
  if (!name || !guid) {
    return res.status(400).send();
  }
  const newMonster = {
    id: guid,
    name: name,
  };
  monsters.push(newMonster);
  console.log(monsters);
  return res.send(createSuccessfulResponse(newMonster));
});

// Update monster
monsterRouter.patch("/:monsterId", (req, res) => {
  const { monsterId } = req.params;
  const { name } = req.body;
  if (!monsterId) {
    return res.status(400).json();
  }

  const monster = monsters.find((monster) => monster.id === monsterId);

  if (!monster) {
    return res.status(404).send();
  }
  monster.name = name;
  return res.send(createSuccessfulResponse(monster));
});

// Delete monster
monsterRouter.delete("/:monsterId", (req, res) => {
  const { monsterId } = req.params;
  if (!monsterId) {
    return res.status(400).json();
  }

  const monsterIndex = monsters.findIndex(
    (monster) => monster.id === monsterId
  );

  if (monsterIndex === -1) return res.status(404).send();

  monsters.splice(monsterIndex, 1);
  return res.send(createSuccessfulResponse("Monster has been deleted."));
});

export default monsterRouter;
