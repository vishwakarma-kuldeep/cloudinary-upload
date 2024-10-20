import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app = express();
app.use(
  cors({
    origin:  "*",//process.env.CORS_ORIGIN  8080,
    credentials: false,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

// imoport routes

import Routes from "./routes/index.js";

// use routes
app.use("/api/v1", Routes);

// http://localhost:8000/api/v1/users/register

export { app };
