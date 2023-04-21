import { Router } from "express";
import { userController } from "../controllers/index.js";
import { userValidations } from "../validations/user.validations.js";

const router = Router();

router
  .route("/")
  .get(userController.findAllUsers)
  .post(
    userValidations.createUserValidations,
    userController.createUser
  );

router
  .route("/:id")
  .get(userController.findUserById)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

export const userRouter = router;
