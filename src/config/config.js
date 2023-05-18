import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  db_url: process.env.DB_URL,
};
