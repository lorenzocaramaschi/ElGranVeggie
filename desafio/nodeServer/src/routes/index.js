import { Router } from "express";

const router = Router()
router.get("/api/randoms", randomController.getRandom);
router.get("/info", randomController.getInfo);
import { randomController } from "../controllers/random.controller.js";

export default router