import { Router } from "express";
import { createOrder } from "../controllers/order.controller";
import { jwtDecode } from "../middlewares/jwt.decode";
import { createOrderTes } from "../controllers/order.tes.controller";

const orderRouter = Router();

orderRouter.post("/create", jwtDecode, createOrder);
// orderRouter.get("/", jwtDecode, getOrder);
orderRouter.post("/create-order", createOrderTes)

export default orderRouter;
