import { Router } from "express";
import authControllers from "../controllers/authControllers.js";

const router = Router();
router.route("/").get((req, res) => {
  res.redirect("login");
});
router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(authControllers.loginHandler);

router
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(authControllers.registerHandler);

export const authRouter = router;
