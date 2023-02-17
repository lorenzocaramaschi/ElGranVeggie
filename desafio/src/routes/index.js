import { Router } from "express";
import { randomController } from "../controllers/random.controller.js";

const router = Router();

router.get("/api/randoms", randomController.getRandom);

router.get("/info", randomController.getInfo);

export default router;
