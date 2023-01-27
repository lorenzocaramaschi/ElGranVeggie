import { Router } from "express";
import { mockController } from "../controllers/mock.controller.js";

const router = Router();

router.route("/products").post(mockController.generateProducts);

router
  .route("/products/:id?")
  .get(mockController.getProduct)
  .post(mockController.createProduct)
  .put(mockController.updateProduct)
  .delete(mockController.deleteProduct);

export default router;
