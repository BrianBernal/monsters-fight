// libraries
import { Router } from "express";
import { SignJWT, jwtVerify } from "jose";

// utils
import { authByEmailPwd } from "../utils/authHelpers.js";
import { createSuccessfulResponse as createRes } from "../utils/responseHelpers.js";
import { USERS_BBDD } from "../data.js";

const authTokenRouter = Router();
const encoder = new TextEncoder();
const JWT_KEY = process.env.JWT_PRIVATE_KEY;

// login with user and password
authTokenRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(400);

  try {
    const { guid } = authByEmailPwd(email, password);

    // Generate token and send it back
    const jwtConstructor = new SignJWT({ guid });
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt() // like a creation date
      .setExpirationTime("1h")
      .sign(encoder.encode(JWT_KEY)); // only this method returns a promise

    return res.send(createRes({ jwt }));
  } catch (error) {
    return res.sendStatus(401);
  }
});

// Authenticated request with token to get the user profile
authTokenRouter.get("/profile", async (req, res) => {
  // Get token header and check its authenticity and expiration
  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);

  try {
    const { payload } = await jwtVerify(authorization, encoder.encode(JWT_KEY));

    const user = USERS_BBDD.find((user) => user.guid === payload.guid);
    if (!user) return res.sendStatus(401);

    const safeUser = { ...user };
    delete safeUser.password;

    return res.send(createRes(safeUser));
  } catch (error) {
    return res.sendStatus(401);
  }
});

export default authTokenRouter;
