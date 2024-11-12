import express from "express";
import likeRouter from "./like.router";
import rateRouter from "./rate.router";
import orderRouter from "./order.router";
import userRouter from "./user.router";
import restaurantRouter from "./restaurant.router";

const rootRouter = express.Router();

rootRouter.use("/likes", likeRouter);
rootRouter.use("/rates", rateRouter);
rootRouter.use("/orders", orderRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/restaurants", restaurantRouter);

export default rootRouter;
