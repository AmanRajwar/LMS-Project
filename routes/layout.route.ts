import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { authorizeRoles } from "../controller/user.controller";
import { createLayout } from "../controller/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout",isAuthenticated,authorizeRoles("admin"),createLayout);

export default layoutRouter;