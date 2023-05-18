import { Router } from "express";
import { productRouter } from "./product.route.js";
import { messageRouter } from "./message.route.js";
import { orderRouter } from "./order.route.js";
import { userRouter } from "./user.route.js";
import { cartRouter } from "./cart.route.js";
import { authRouter } from "./auth.route.js";

const router = Router();

router.use("/", authRouter);
router.use("/productos", productRouter);
router.use("/carrito", cartRouter);
router.use("/usuarios", userRouter);
router.use("/mensajes", messageRouter);
router.use("/ordenes", orderRouter);

export default router;
