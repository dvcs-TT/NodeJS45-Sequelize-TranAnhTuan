import express from "express";
import restaurantController from "../../controller/restaurant.controller";

const restaurantRouter = express.Router();

restaurantRouter.get("/", restaurantController.getRestaurants());
restaurantRouter.get(
  "/:resId/likes",
  restaurantController.getRestaurantLikes()
);
restaurantRouter.get(
  "/:resId/rates",
  restaurantController.getRestaurantRates()
);

export default restaurantRouter;
