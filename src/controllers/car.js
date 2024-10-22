const cloudinary = await import("../utils/cloudinary.js");
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Car } from "../models/car.model.js";

import { ApiResponse } from "../utils/ApiResponse.js";

const createCar = asyncHandler(async (req, res) => {
  try {
    console.log(req.body)
    const owner = JSON.parse(req.body.owner);
    const {
      title,

      yearOfProduction,
      color,
      typeOfCar,
      interior,
      numberOfSeats,
      additionalAmenities,
      rentalPrice,
      location,
      rentalDuration,
      specialOptionsForWedding,
      description,
      isVerified,
    } = req.body;

    if (
      !owner ||
      typeof owner !== "object" ||
      !owner.name ||
      !owner.phone ||
      !owner.email
    ) {
      throw new ApiError(400, "Owner details are required");
    }

    const uploadedPhotos = req.files?.photos || [];
    const uploadedVideos = req.files?.videos || [];

    // console.log(uploadedPhotos);
    // console.log(uploadedVideos);
    const validPhotos = [];
    const validVideos = [];

    // let file

    if (uploadedPhotos.length > 0) {
        for(let file = 0 ; file< uploadedPhotos.length; file++){
            const url = await cloudinary.uploadOnCloudinary(uploadedPhotos[file], "image");
   
            validPhotos.push( url );
        }

    }
    console.log(validPhotos)
console.log(validPhotos)
    // if (uploadedVideos.length > 0) {
    //   const videoPromises = uploadedVideos.map((file) =>
    //     uploadToCloudinary(file, "video")
    //   );
    //   const videoUrls = await Promise.all(videoPromises);
    //   videoUrls.forEach((url) => validVideos.push({ url }));
    // }

    if (!description) {
      throw new ApiError(400, "Description is required");
    }

    const newCar = new Car({
      title,
      owner,
      yearOfProduction,
      color,
      typeOfCar,
      interior,
      numberOfSeats,
      additionalAmenities,
      rentalPrice,
      location,
      rentalDuration,
      specialOptionsForWedding,
      description,
      isVerified: isVerified === "true",
      photos: validPhotos,
      videos: validVideos,
    });
    const savedCar = await newCar.save();
    return res
      .status(201)
      .json(new ApiResponse(201, savedCar, "Car created successfully"));
  } catch (error) {
    throw new ApiError(
      400,
      error?.message || "An error occurred while creating car"
    );
  }
});

const getCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    throw new ApiError(404, "Car not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, car, "Car fetched successfully"));
});

const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  return res
    .status(200)
    .json(new ApiResponse(200, cars, "Cars fetched successfully"));
});

const testFunc = asyncHandler(async (req, res) => {
  console.log("Test function");
  console.log(req.files);
  console.log(req.body);
  console.log(req.file);
  return res.status(200).json(new ApiResponse(200, {}, "Test function"));
});
export { testFunc, createCar, getAllCars, getCar };
