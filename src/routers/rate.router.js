import express from "express";
import rateController from "../controllers/rate.controller.js";

const rateRouter = express.Router();

rateRouter.get("/", rateController.getRates());
rateRouter.post("/", rateController.createRate());

export default rateRouter;
