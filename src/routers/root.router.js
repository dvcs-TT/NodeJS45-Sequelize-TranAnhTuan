import express from "express";
import likeRouter from "./like.router.js";
import orderRouter from "./order.router.js";
import rateRouter from "./rate.router.js";
import restaurantRouter from "./restaurant.router.js";
import userRouter from "./user.router.js";


const rootRouter = express.Router();

rootRouter.use("/likes", likeRouter);
rootRouter.use("/rates", rateRouter);
rootRouter.use("/orders", orderRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/restaurants", restaurantRouter);

export default rootRouter;
