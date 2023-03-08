import insertProds from "../../data/create-prods.js";
import createProdTable from "../../data/table/create-prod-table-mysql.js";
import createChatTable from "../../data/table/create-chat-table-sqlite.js";
import { mongoConnect } from "../../db/config/mongoConfig.js";
import { config } from "dotenv";
config();

export const configObject = {
  mongoUrl: process.env.MONGO_URL,
};

export async function dbInit() {
  try {
    await createChatTable("chats");

    await createProdTable("products");

    await insertProds();
    await mongoConnect();
  } catch (err) {
    throw new Error(`Error while connecting to Mongo DB ${err}`);
  }
}
