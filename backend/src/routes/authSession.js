import { Router } from "express";
import { authByEmailPwd } from "../utils/authHelpers.js";
import { createSuccessfulResponse } from "../utils/responseHelpers.js";

const authSessionRouter = Router();

// login with user and password
authSessionRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(400);

  try {
    const user = authByEmailPwd(email, password);
    return res.send(
      createSuccessfulResponse(`${user.name} user authenticated`)
    );
  } catch (error) {
    res.sendStatus(401);
  }
});

// Authenticated request with token to get the user profile

export default authSessionRouter;
