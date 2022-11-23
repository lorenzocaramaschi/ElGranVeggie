import { Router } from "express";

const router = Router();
const products = [
  {
    title: "Camara",
    price: 100,
    thumbnail: "Foto1",
    id: 1,
  },
  {
    title: "Camara 2",
    price: 200,
    thumbnail: "Foto2",
    id: 2,
  },
  {
    title: "Camara 3",
    price: 300,
    thumbnail: "Foto3",
    id: 3,
  },
];

router
  .route("/")
  .get((req, res) => {
    const response = {
      status: "ok",
      data: products,
    };

    res.json(response);
  })
  .post((req, res) => {
    const { title, price, thumbnail } = req.body;
    const newProductId = products[products.length - 1].id + 1;
    const newProduct = {
      title,
      price,
      thumbnail,
      id: newProductId,
    };

    const response = {
      status: "Created Product",
      data: newProduct,
    };

    products.push(newProduct);

    res.status(201).json(response);
  });

router
  .route("/id:")
  .put((req, res) => {
    const { id } = req.params;
    const { title, price, thumbnail } = req.body;
    const productToUpdateIndex = products.find(
      (product) => product.id === Number(id)
    );

    if (!productToUpdateIndex) {
      return res.status(404).json({ status: "Not found", data: null });
    }

    products.splice(productToUpdateIndex, 1, { id, title, price, thumbnail });

    res.status(200).json({
      status: "Updated!",
      data: { id, title, price, thumbnail },
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    const { title, price, thumbnail } = req.body;
    const productToDeleteIndex = products.find(
      (product) => product.id === Number(id)
    );
    const productToDelete = products[productToDeleteIndex];

    if (!productToDeleteIndex) {
      return res.status(404).json({ status: "Not found", data: null });
    }

    products.splice(productToDeleteIndex, 1);

    res.status(200).json({
      status: "Deleted!",
      data: productToDelete,
    });
  })
  .get((req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));
    let response;
    let statusCode;

    if (product) {
      response = {
        status: "ok",
        data: product,
      };

      statusCode = 200;
    } else {
      response = {
        status: "Not found",
        data: null,
      };

      statusCode = 404;
    }

    res.status(statusCode).json(response);
  });

export default router;