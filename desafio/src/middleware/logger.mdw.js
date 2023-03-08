import { consoleLogger } from "../lib/logger.lib.js";

const urlRegister = (req, res, next) => {
  const { url, method } = req;
  consoleLogger().info(`Method & route: ${method} ${url}`);
  next();
};

export default urlRegister;
