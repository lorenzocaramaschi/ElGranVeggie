import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from "cors";
import { config } from "./config/config.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = config.port;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);
await mongoose.connect(config.db_url);

console.log("Database connected!");

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error intializing server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening port: ${PORT}`);
});
