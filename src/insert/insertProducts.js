import database from "../db/index.js";

const insertProducts = async () => {
  try {
    const products = [
      { brand: "GoPro", model: "1", year: 2017, price: 1000 },
      { brand: "GoPro", model: "2", year: 2015, price: 750 },
      { brand: "GoPro", model: "3", year: 2016, price: 800 },
      { brand: "GoPro", model: "4", year: 2018, price: 1200 },
      { brand: "GoPro", model: "5", year: 2011, price: 400 },
    ];

    await database("products").insert(products);

    console.log("Products inserted");
    database.destroy();
  } catch (error) {
    console.log(error);
    database.destroy();
  }
};

insertProducts();
