import config from "../../db/config/config_sqlite.js";
import knex from "knex";
const database = knex(config);

const createChatTable = async (table) => {
  try {
    await database.schema.dropTableIfExists(table);

    await database.schema.createTable(table, (newTable) => {
      newTable.increments("id").primary();
      newTable.string("username", 25).notNullable();
      newTable.string("hourDate", 20).notNullable();
      newTable.string("message", 100).notNullable();
    });

    console.log(table + " table created in SQL lite!");
  } catch (err) {
    database.destroy();
    throw new Error(`Error while creating DataBase: ${err}`);
  }
};
export default createChatTable;
