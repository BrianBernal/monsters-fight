// libraries
import { Router } from "express";

// utils
import { createSuccessfulResponse } from "../utils/responseHelpers.js";
import { authByEmailPwd } from "../utils/authHelpers.js";

const authRouter = Router();

// Public endpoint (Authenticated and no authenticated)
authRouter.get("/public", (_req, res) => res.send("Endpoint público"));

// Authorize endpoint to registered user
authRouter.post("/user", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(400);

  try {
    const user = authByEmailPwd(email, password);

    return res.send(
      createSuccessfulResponse(`${user.name} user authenticated`)
    );
  } catch (err) {
    return res.sendStatus(401);
  }
});

// Authorize endpoint to admins
authRouter.post("admin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.send(400);

  try {
    const user = authByEmailPwd(email, password);

    if (user.role !== "admin") return res.send(403);

    return res.send(
      createSuccessfulResponse(`${user.name} user admin authenticated`)
    );
  } catch (err) {
    return res.sendStatus(401);
  }
});

export default authRouter;
