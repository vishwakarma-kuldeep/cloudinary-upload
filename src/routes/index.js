import userRouter from "./user.routes.js";
import healthCheckRouter from "./healthCheck.routes.js";
// import threadRouter from "./thread.routes.js";
import carRoute from "./car.routes.js";
import express from "express";
// import {getLocalImage} from "../controllers/thread.controller.js"
const Router = express.Router();
//routes declaration
Router.use("/health-check", healthCheckRouter);
Router.use("/users", userRouter);
Router.use("/cars", carRoute);
// Router.use("/users", userRouter);
// Router.use("/thread", threadRouter);
// Router.route("/").get(getLocalImage);
export default Router ;