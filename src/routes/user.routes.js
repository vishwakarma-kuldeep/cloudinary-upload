import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  sendOTP,
  forgotPassword,
  // updateUserAvatar,
  // updateUserCoverImage,
  // getUserChannelProfile,
  //   getWatchHistory,
  verifyEmail,
  updateAccountDetails,
  getAllUsers
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import verifyRoles from "../middlewares/roles.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import ROLES_LIST from '../utils/rolesList.js'


const router = Router();

// Uploading files use the upload.any() middleware
router.route("/register").post(registerUser);
// router.route("/register").post(upload.any(), registerUser);

router.route("/verify-email").post(verifyEmail);

router.route("/login").post(loginUser);
router.route("/send-otp").post(sendOTP);
router.route("/reset-password").post(forgotPassword);
//secured routes
router.use(verifyJWT);
router.route("/logout").post(logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(changeCurrentPassword);
router.route("/current-user").get(getCurrentUser);
router.route("/update-account").patch(verifyRoles(ROLES_LIST.Admin), updateAccountDetails);
router.route("/get").get(async (req, res) => {
  return res.status(200).json({ message: "Hello" });
});
router.route("/all").get(
  // verifyRoles(ROLES_LIST.Admin),
   getAllUsers);

export default router;
