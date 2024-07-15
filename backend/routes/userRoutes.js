import express from "express";
import {
  followUnFollowUser,
  loginUser,
  logoutUser,
  signupUser,
  updateUser,
  getUserProfile,
} from "../controller/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow)
router.put("/update/:id", protectRoute, updateUser); // Toggle state(follow/unfollow)

export default router;
