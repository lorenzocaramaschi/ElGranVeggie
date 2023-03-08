import MongoStore from "connect-mongo";
import express, { json, urlencoded } from "express";
import session from "express-session";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Server as IOServer } from "socket.io";
import { engine } from "express-handlebars";
import Container from "./db/DB-container.js";
import configMySql from "./db/config/config_mysql.js";
import configSqlite from "./db/config/config_sqlite.js";
import router from "./routes/index.js";
import passport from "passport";
import { passportStrategies } from "./lib/passport.lib.js";
import { User } from "./db/config/user.model.js";
import { configObject, dbInit } from "./db/config/index.js";
import invalidUrl from "./middleware/invalidUrl.middleware.js";
import yargs from "yargs";
import cluster from "cluster";
import os from "os";
import urlRegister from "./middleware/logger.mdw.js";
import { errorLogger } from "./lib/logger.lib.js";

export const args = yargs(process.argv.slice(2))
  .alias({
    p: "port",
    m: "mode",
  })
  .default({
    port: 8080,
    mode: "fork",
  }).argv;

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let dbProducts = new Container("products", configMySql);
let dbChats = new Container("chats", configSqlite);

app.use(
  session({
    secret: "coderhouse",
    resave: false,
    rolling: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: configObject.mongoUrl,
      mongoOptions,
    }),
    cookie: {
      expires: 60000,
    },
  })
);

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);
app.set("view engine", ".hbs");
app.use("/static", express.static(__dirname + "/public"));

app.use(passport.initialize());
app.use(passport.session());

passport.use("login", passportStrategies.loginStrategy);
passport.use("register", passportStrategies.registerStrategy);

if (args.mode === "fork") await dbInit();
const cpus = os.cpus();
if (cluster.isPrimary && args.mode === "cluster") {
  await dbInit();
  console.log(`
    CPUS: ${cpus.length}
    Primary PID: ${process.pid}
    `);
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((data) => {
        done(null, data);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  app.use("/", urlRegister, router);
  app.use(invalidUrl);
  const expressServer = app.listen(args.port, () =>
    console.log(
      "Server listening on port :" + args.port + " Mode: " + args.mode
    )
  );
  app.on("error", (err) => {
    console.log(err);
  });
  const io = new IOServer(expressServer);

  io.on("connection", async (socket) => {
    try {
      console.log(`New client connection ${socket.id}`);

      socket.emit("server:products", await dbProducts.getAll());

      socket.on("client:productData", async (productData) => {
        try {
          productData.price = parseInt(productData.price);
          await dbProducts.save(productData);

          io.emit("server:products", await dbProducts.getAll());
        } catch (err) {
          console.log(err);
          errorLogger().error(`Error on the application: ${err}`);
        }
      });

      socket.emit("server:message", await dbChats.getAll());

      socket.on("client:message", async (messageInfo) => {
        try {
          await dbChats.save(messageInfo);

          io.emit("server:message", await dbChats.getAll());
        } catch (err) {
          console.log(err);
          errorLogger().error(`Error on the application: ${err}`);
        }
      });
    } catch (err) {
      console.log(err);
      errorLogger().error(`Error on the application: ${err}`);
    }
  });
}
