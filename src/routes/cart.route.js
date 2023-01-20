import { Router } from "express";
import { cartController } from "../controllers/cart.controller.js";

const router = Router();

router.route("/")
.get(cartController.getAllCarts)
.post(cartController.createCart);
router.route(":id")
.put(cartController.updateCart)
.delete(cartController.deleteCart);

export const cartRouter = router;