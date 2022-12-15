import database from "../db/index.js";

const selectProductsWhereByYear = async (from,to) => {
  try {
    const products = await database.from("products").select("*").where('year','>=',from).andWhere('year','<=',to).orderBy('price','desc');
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

selectProductsWhereByYear(2016,2020);
