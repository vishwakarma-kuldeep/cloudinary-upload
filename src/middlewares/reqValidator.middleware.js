import { validationResult } from "express-validator";
const {ApiError} = await import("../utils/ApiError.js")

// import { ApiError } from "../utils/ApiError";
const reqValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(400, errors.array());
  }
  next();
};

export { reqValidator };