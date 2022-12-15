import knex from "knex";

const config = {
  client: "sqlite3",
  connection: { filename: "../db/mydb.sqlite" },
  useNullAsDefault: true,
};

const databaseSqlite = knex(config);

export default databaseSqlite;
