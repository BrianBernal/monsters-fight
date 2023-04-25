import { Router } from "express";
import { USERS_BBDD } from "../data.js";
import { createSuccessfulResponse } from "../utils/responseHelpers.js";

const accountRouter = Router();

//Middleware to log the ip
accountRouter.use((req, _res, next) => {
  console.log(req.ip);

  next();
});

// Get details from an account from guid
accountRouter.get("/:guid", (req, res) => {
  const { guid } = req.params;
  const user = USERS_BBDD.find((user) => user.guid === guid);

  if (!user) return res.status(404).send();

  return res.send(createSuccessfulResponse(user));
});

// Create new account from guid and name
accountRouter.post("/", (req, res) => {
  const { guid, name } = req.body;

  if (!guid || !name) return res.state(400).send();

  const user = USERS_BBDD.find((user) => user.guid === guid);
  if (user) return res.status(409).send();
  const newUser = {
    guid,
    name,
  };

  USERS_BBDD.push(newUser);

  return res.send(createSuccessfulResponse({ newUser }));
});

// Update account name
accountRouter.patch("/:guid", (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;

  if (!name) return res.state(400).send();

  const user = USERS_BBDD.find((user) => user.guid === guid);

  if (!user) res.status(404).send();

  user.name = name;

  return res.send(createSuccessfulResponse({ user }));
});

// Delete Account
accountRouter.delete("/:guid", (req, res) => {
  const { guid } = req.params;
  const userIndex = USERS_BBDD.findIndex((user) => user.guid === guid);

  if (userIndex === -1) return res.status(404).send();

  USERS_BBDD.splice(userIndex, 1);

  return res.send("User deleted successfully.");
});

export default accountRouter;
