import { Router } from "express";
import { cartController } from "../controllers/cart.controller.js";

const router = Router();

router
  .route("/")
  .get(cartController.findAllCarts)
  .post(cartController.createCart);

router
  .route("/:id")
  .get(cartController.findCartById)
  .delete(cartController.deleteCart)
  .patch(cartController.updateCart);

export const cartRouter = router;
