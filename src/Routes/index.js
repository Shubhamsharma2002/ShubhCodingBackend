import express from "express";
import userRouter from "./auth/AuthRouter.js";
const router = express.Router();
router.use('/user', userRouter);

export default router;