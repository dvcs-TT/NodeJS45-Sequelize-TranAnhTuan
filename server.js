import express from "express";
import rootRouter from "./src/routers/root.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(rootRouter);

app.listen(PORT);
