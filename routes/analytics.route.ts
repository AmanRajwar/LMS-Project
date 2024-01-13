import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { authorizeRoles } from "../controller/user.controller";
import { getCoursesAnalytics, getOrderAnalytics, getUserAnalytics } from "../controller/analytics.controller";
const analyticsRouter = express.Router();


analyticsRouter.get("/get-users-analytics",isAuthenticated,authorizeRoles("admin"),getUserAnalytics)
analyticsRouter.get("/get-orders-analytics",isAuthenticated,authorizeRoles("admin"),getOrderAnalytics)
analyticsRouter.get("/get-courses-analytics",isAuthenticated,authorizeRoles("admin"),getCoursesAnalytics)

export default analyticsRouter;