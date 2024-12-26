import express from "express";
import { login, register } from "../../Controller/UserController.js";
const userRouter = express.Router();

userRouter.route('/registaer').post(
    
    register
)
userRouter.route('/login').post(
   
    login
)
export default userRouter;