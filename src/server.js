import express, { json, urlencoded } from "express";
import baseRouter from "./routes/base.route.js";
import router from "./routes/product.route.js";
import { fileURLToPath } from 'url'
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(urlencoded({ extended: true }));
app.use("/api/product", router);
app.use("/", baseRouter);
app.listen(8080, (error) => {
  if (error) {
    console.log("Error al iniciar la app", error);
  } else {
    console.log("Servidor escuchando el puerto 8080");
  }
});
