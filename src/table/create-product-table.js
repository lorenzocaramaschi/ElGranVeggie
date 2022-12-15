import database from "../db/index.js";

const createProductTable = async () => {
  try {
    await database.schema.dropTableIfExists("products");

    await database.schema.createTable("products", (productTable) => {
      productTable.increments("id").primary();
      productTable.string("brand", 50).notNullable();
      productTable.string("model", 50).notNullable();
      productTable.integer("year").notNullable();
      productTable.integer("price").notNullable();
    });

    console.log("Product table created");

    database.destroy();
  } catch (error) {
    console.log(error);
    database.destroy();
  }
};

createProductTable();
