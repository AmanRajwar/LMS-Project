import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { authorizeRoles } from "../controller/user.controller";
import { getNotification, updateNotification } from "../controller/notification.controller";
const notificationRoute = express.Router();

notificationRoute.get("/get-all-notifications", isAuthenticated, authorizeRoles("admin"), getNotification)
notificationRoute.put("/update-notification/:id", isAuthenticated, authorizeRoles("admin"), updateNotification)
export default notificationRoute;