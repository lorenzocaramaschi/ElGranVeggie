import { Router } from "express";
import { orderController } from "../controllers/order.controller.js";

const router = Router();

router
  .route("/")
  .get(orderController.findAllOrders)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(orderController.findOrderById)
  .delete(orderController.deleteOrder)
  .patch(orderController.updateOrder);

export const orderRouter = router;
