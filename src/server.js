import express, { json } from "express";
import { config } from "./config/config.js";
import { db } from "./db/db.js";
import routes from "./routes/index.js";

const app = express();

app.use(json());
app.use("/api", routes);

const PORT = 3000

db.connectDb(config.dbUrl).then(() => {
    console.log("You've connected to the database!");
    app.listen(PORT, () => {
        console.log("Server listening to PORT: "+PORT);
    });
});
