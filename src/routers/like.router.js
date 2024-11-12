import express from "express";
import likeController from "../../controller/like.controller";

const likeRouter = express.Router();

likeRouter.get("/", likeController.getLikes());
likeRouter.post("/", likeController.createLike());
likeRouter.delete("/:id", likeController.deleteLike());

export default likeRouter;
