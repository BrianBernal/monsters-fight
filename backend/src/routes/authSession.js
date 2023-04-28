// libraries
import { Router } from "express";
import { nanoid } from "nanoid";

// utils
import { authByEmailPwd } from "../utils/authHelpers.js";
import { USERS_BBDD } from "../data.js";
import { createSuccessfulResponse } from "../utils/responseHelpers.js";

const authSessionRouter = Router();
const sessions = [];

// login with user and password
authSessionRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);

  try {
    const { guid } = authByEmailPwd(email, password);
    const sessionId = nanoid();
    sessions.push({ sessionId, guid });
    res.cookie("sessionId", sessionId, {
      httpOnly: true,
    });
    return res.send();
  } catch (error) {
    return res.sendStatus(401);
  }
});

// Authenticated request with token to get the user profile
authSessionRouter.get("/profile", (req, res) => {
  const { sessionId } = req.cookies;
  if (!sessionId) return res.sendStatus(401);

  const userSession = sessions.find(
    (session) => session.sessionId === sessionId
  );
  if (!userSession) return res.sendStatus(401);

  const user = USERS_BBDD.find((user) => user.guid === userSession.guid);
  if (!user) return res.sendStatus(401);

  const safeUser = { ...user };
  delete safeUser.password;

  return res.send(createSuccessfulResponse(safeUser));
});

authSessionRouter.delete("/logout", (req, res) => {
  const { sessionId } = req.cookies;
  if (!sessionId) return res.sendStatus(422);

  const userSession = sessions.find(
    (session) => session.sessionId === sessionId
  );
  if (!userSession) return res.sendStatus(404);

  const userIndex = USERS_BBDD.findIndex(
    (user) => user.guid === userSession.guid
  );
  if (userIndex === -1) return res.status(404).send();

  USERS_BBDD.splice(userIndex, 1);

  return res.send(createSuccessfulResponse("Session has been deleted."));
});

export default authSessionRouter;
