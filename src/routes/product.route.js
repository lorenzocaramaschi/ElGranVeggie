import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const router = Router();

router.route("/")
.get(ProductController.getAllProducts)
.post(ProductController.createProduct);
router.route("/:id")
.put(ProductController.updateProduct)
.delete(ProductController.deleteProduct);

export const productRouter = router;