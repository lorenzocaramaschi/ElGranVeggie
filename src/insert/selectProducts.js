import database from "../db/index.js";

const selectProducts = async () => {
  try {
    const products = await database.from("products").select("*");
    products.forEach((product) => {
      console.log(`
        Marca: ${product.brand}, Modelo: ${product.model}, Año: ${product.year}, Precio: ${product.price}`);
    });

    database.destroy();
  } catch (error) {
    console.log(error);
    database.destroy();
  }
};

selectProducts();
