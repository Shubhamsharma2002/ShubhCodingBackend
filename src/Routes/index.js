import express from "express";
import userRouter from "./auth/AuthRouter.js";
import projectRouter from "./Projects/ProjectsRouter.js";
const router = express.Router();
router.use('/user', userRouter);
router.use('/project', projectRouter)
export default router;