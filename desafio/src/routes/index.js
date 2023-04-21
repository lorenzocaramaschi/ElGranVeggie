import { Router } from "express";
import { productRouter } from "./product.route.js";
import { userRouter } from "./user.route.js";

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);

export default router;
