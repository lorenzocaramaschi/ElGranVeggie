import os from "os";
import cluster from "cluster";
import yargs from "yargs";
import express from 'express'
import router from "./routes/index.js";


const params = yargs(process.argv.slice(2)).alias({
  p: "port",
  m: "mode",
}).default({
    mode: 'FORK',
    port: 8080
}).argv;
const cpus = os.cpus();
console.log(params);
if (cluster.isPrimary && params.mode.toUpperCase() === "CLUSTER") {
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`El worker ${worker} ha muerto`);
    cluster.fork();
  });
} else {
}

const app = express()

const expressServer = app.listen(params.port,()=>{
    console.log(`Escuchando al puerto ${params.port}`);
})
app.use('/api/randoms',router)
