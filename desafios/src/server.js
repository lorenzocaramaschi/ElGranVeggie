import express, { json } from "express";
import routes from "./routes/index.js";

const app = express();

app.use(json());

app.use("/", routes);

const PORT = 3000

app.listen(PORT, () => {
  console.log("Server listening to port: "+PORT);
});