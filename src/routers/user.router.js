import express from "express";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers());
userRouter.get("/:userId/likes", userController.getUserLikes());
userRouter.get("/:userId/rates", userController.getUserRates());

export default userRouter;
