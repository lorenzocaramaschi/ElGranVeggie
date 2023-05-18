import { Router } from "express";
import { productController } from "../controllers/product.controller.js";

const router = Router();

router
  .route("/")
  .get(productController.findAllProducts)
  .post(productController.createProduct);

router.route("/categoria/:categoria").get(productController.findProductsByCategory);

router
  .route("/:id")
  .get(productController.findProductById)
  .delete(productController.deleteProduct)
  .patch(productController.updateProduct);

export const productRouter = router;
