import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const healthCheck = asyncHandler(async (req, res) => {
    // create a health-check response
    return res.status(200).json(new ApiResponse(200, "Healthcheck OK", null))   
    //TODO: build a health-check response that simply returns the OK status as json with a message
})

export {
    healthCheck
    }
    