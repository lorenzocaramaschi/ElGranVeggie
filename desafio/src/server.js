import express, { json, urlencoded } from "express";
import router from "./routes/index.js";

const app = express();
app.listen(3000, ()=>{
    console.log('Listening port 3000');
})
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", router);
app.on("error", (err) => {
  console.log(err);
});
