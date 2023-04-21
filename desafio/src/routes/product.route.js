import { Router } from "express";
import { productController } from "../controllers/index.js";
import { productValidations } from "../validations/product.validations.js";

const router = Router();

router
  .route("/")
  .get(productController.findAllProducts)
  .post(
    productValidations.createProductValidations,
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.findProductById)
  .delete(productController.deleteProduct)
  .patch(productController.updateProduct);

export const productRouter = router;
