// src/routes/shipping.route.ts
import { Router } from "express";
import { getShippingCost } from "../controllers/shipping.controller";

const router = Router();
router.post("/cost", getShippingCost);
export default router;
