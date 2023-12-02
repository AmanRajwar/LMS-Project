import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controller/order.controller";
import { authorizeRoles } from "../controller/user.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.get("/get-orders", isAuthenticated, authorizeRoles("admin"), getAllOrders);

export default orderRouter;