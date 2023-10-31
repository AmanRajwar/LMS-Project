import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { authorizeRoles } from "../controller/user.controller";
import { editCourse, uploadCourse } from "../controller/course.controller";
const courseRouter = express.Router();

courseRouter.post('/create-course',
    isAuthenticated,
    authorizeRoles('admin'),
    uploadCourse
);

courseRouter.put('/edit-course',
    isAuthenticated,
    authorizeRoles('admin'),
    editCourse
);

export default courseRouter;

