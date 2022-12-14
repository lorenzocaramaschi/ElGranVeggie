import express, {json,urlencoded} from "express";
import { Server as IOServer } from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url";
import moment from "moment";
import productsRouter from "./routes/products.route.js";

const PORT = 8080
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const expressServer = app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});
const io = new IOServer(expressServer);
const messages = [];

app.use("/api/products",productsRouter)
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs')
app.set('views',__dirname+"/views")
app.get("/", (req, res) => {
  res.render("products.html");
});
app.use(json())
app.use(urlencoded({ extended: true }));




io.on("connection", (socket) => {
  console.log(
    `New connection, socket ID: ${socket.id}, ${moment().format("HH:mm")}`
  );

  socket.emit("server:message", messages);

  socket.on("client:message", (messageInfo) => {
    messages.push(messageInfo);

    io.emit("server:message", messages);
  });
});
