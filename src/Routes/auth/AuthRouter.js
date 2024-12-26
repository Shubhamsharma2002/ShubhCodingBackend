import express from "express";
import { getuserDetails, login, register } from "../../Controller/UserController.js";
const userRouter = express.Router();

userRouter.route('/registaer').post(
    
    register
)
userRouter.route('/login').post(
   
    login
)

userRouter.route('/getuserDetails').post(
    getuserDetails
)
export default userRouter;