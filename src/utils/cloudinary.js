import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { localFilePath } from "./localFilePath.js";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
var filePath;
const uploadOnCloudinary = async (localFilePathUrl) => {
  console.log("localFilePathUrl", localFilePathUrl);
  try {
    filePath = path.join(localFilePath(), "../../" + localFilePathUrl.path);
    console.log("filePath", filePath);
    if (!filePath) return null;
    console.log("file is being uploaded on cloudinary");
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log("response", response);
    // file has been uploaded successfull
    console.log("file is uploaded on cloudinary ", response.url);
    if (!response || !response?.url) throw new Error("Failed to upload file on cloudinary");
    return response?.url;

  } catch (error) {
    // fs.unlinkSync(filePath); // remove the locally saved temporary file as the upload operation got failed
    return error;
  }
};

export { uploadOnCloudinary} ;