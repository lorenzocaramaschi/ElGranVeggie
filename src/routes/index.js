import { Router } from "express";
import { cartRouter } from "./cart.route.js";
import { productRouter } from "./product.route.js";

const router = Router();

router.use("/cart", cartRouter);
router.use("/product", productRouter);

export default router;