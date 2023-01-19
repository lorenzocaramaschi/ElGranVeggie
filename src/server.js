import express, { json } from "express";
import { config } from "./config/config.js";
import { db } from "./db/db.js";
import routes from "./routes/index.js";

const app = express();

app.use(json());
app.use("/api", routes);

const PORT = 8080;

db.connectDb(config.dbUrl).then(() => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Server listening to port: "+PORT);
  });
});