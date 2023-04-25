// libraries
import express, { json } from "express";
import dotenv from "dotenv";

// routes
import monsterRouter from "./routes/monsters.js";
import fightRouter from "./routes/fight.js";
import accountRouter from "./routes/account.js";
import authRouter from "./routes/auth.js";
import authTokenRouter from "./routes/authToken.js";
import authSessionRouter from "./routes/authSession.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

function allowCrossDomain(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
}

app.use(allowCrossDomain);
app.use(json());

app.get("/", (_req, res) => {
  return res.send("Yes, I am the server and I am alive!");
});

app.use("/monsters", monsterRouter);
app.use("/battle", fightRouter);
app.use("/account", accountRouter);
app.use("/auth", authRouter);
app.use("/auth-token", authTokenRouter);
app.use("/auth-session", authSessionRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
