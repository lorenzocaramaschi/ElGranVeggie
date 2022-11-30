import express, { json, urlencoded } from "express";
import baseRouter from "./routes/base.route.js";
import router from "./routes/product.route.js";
import { fileURLToPath } from 'url'
import { dirname } from "path";
import { Server as IOServer } from "socket.io";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(json())
app.use(urlencoded({ extended: true }));
app.use("/api/product", router);
app.use("/", router);
app.use(express.static(__dirname+"/public"))
app.set('view engine','ejs')
app.set('views',__dirname+"/views")
const serverConnected = app.listen(8080, (error) => {
  if (error) {
    console.log("Error al iniciar la app", error);
  } else {
    console.log("Servidor escuchando el puerto 8080");
  }
});
const io = new IOServer (serverConnected)

io.on("connection",(socket)=>{
  console.log("New connection: socket ID: ");
})
