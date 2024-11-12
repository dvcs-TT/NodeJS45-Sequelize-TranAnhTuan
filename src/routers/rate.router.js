import express from "express";
import rateController from "../../controller/rate.controller";

const rateRouter = express.Router();

rateRouter.get("/", rateController.getRates());
rateRouter.post("/", rateController.createRate());

export default rateRouter;
