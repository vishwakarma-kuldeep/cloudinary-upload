import { Router } from "express";
const router = Router();
import path from "path";
const __dirname = path.resolve();
let relativePath = `${__dirname}/src/middlewares/multer.middleware.js`;
// console.log(relativePath)
const { upload } = await import(relativePath);
// Import files

relativePath = `${__dirname}/src/controllers/car.js`;
const { createCar, getAllCars, getCar, testFunc } = await import(relativePath);
relativePath = `${__dirname}/src/middlewares/reqValidator.middleware.js`;
const { reqValidator } = await import(relativePath);

router.route("/create").post(
  upload.fields([
    { name: "photos", maxCount: 5 },
    { name: "videos", maxCount: 2 },
  ]),
  reqValidator,
  createCar
);

router.route("/all").get(getAllCars);

router.route("/:id").get(getCar);

router.route("/test").post(upload.any(), testFunc);
export default router;
