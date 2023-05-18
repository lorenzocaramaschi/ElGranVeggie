import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router
  .route("/")
  .get(userController.findAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.findUserById)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

export const userRouter = router;
