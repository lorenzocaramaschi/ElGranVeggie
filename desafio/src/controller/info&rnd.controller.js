import { args } from "../server.js";
import { fork } from "child_process";
import os from "os";

const getInfo = (req, res) => {
    const cpus = os.cpus();   
    res.end(JSON.stringify({
        "Input Args": args.port,
        "Operating System": process.platform,
        "Node Version": process.version,
        "Memory Usage": process.memoryUsage().rss,
        "ExecPath": process.execPath,
        "Process ID (PID)": process.pid,
        "Actual Folder ": process.cwd(),
        "Total Cores ": cpus.length,
    }, null, 2))
}

const getRandomNumber = (req, res) => {
    const { cant } = req.query;

    const childProcess = fork("child.js");
    const quantity = cant ? cant : 100000000;
    res.end(JSON.stringify(response, null, 2));   
}

export const Controller2 = { getInfo, getRandomNumber }