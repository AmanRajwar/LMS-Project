import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { authorizeRoles } from "../controller/user.controller";
import { createLayout, editLayout, getLayoutByType } from "../controller/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout",isAuthenticated,authorizeRoles("admin"),createLayout);
layoutRouter.put("/edit-layout",isAuthenticated,authorizeRoles("admin"),editLayout);
layoutRouter.get("/get-layout",getLayoutByType);

export default layoutRouter;