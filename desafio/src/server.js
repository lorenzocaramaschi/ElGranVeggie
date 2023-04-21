import express, { json, urlencoded } from "express";

import { graphqlHTTP } from "express-graphql";

import mongoose from "mongoose";

import config from "./config/config.js";

import { productController } from "./controllers/product.controller.js";

import schema from "./graphql/product.schema.js";

import errorMiddleware from "./middlewares/error.middleware.js";

import router from "./routes/index.js";

const app = express();

const port = config.port || 3000;

const host = config.host;

app.use(json());

app.use(urlencoded({ extended: true }));

app.use(router);

app.use(
  "/graphql",

  graphqlHTTP({
    schema,

    rootValue: {
      getProduct: productController.findProductById,

      getProducts: productController.findAllProducts,

      createProduct: productController.createProduct,

      updateProduct: productController.updateProduct,

      deleteProduct: productController.deleteProduct,
    },

    graphiql: true,
  })
);

app.use(errorMiddleware);

await mongoose.connect(config.dbUrl);

console.log("Database connected!");

app.listen(port, (err) => {
  if (err) {
    console.log(`Error intializing server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening: http://${host}:${port}`);
});
