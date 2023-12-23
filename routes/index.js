import express from "express";
import {
  register,
  loginMiddleware,
  logoutUser,
} from "../controllers/auth_controller.js";
import { redirectFunc, urlShortener } from "../controllers/url_controller.js";
import passport from "passport";

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(404).json({
      message: "Welcome to the URL Shortening API!",
      instructions: "Use Postman or Thunderclient to interact with this API!",
    });
  });
  

// For User Registration
router.post("/register", register);

// For User Sign In
router.post("/login", loginMiddleware);

// for Logout
router.get("/logout", logoutUser);

// For Url Shortening
router.post("/urlShort", urlShortener);

// Redirection to Orginal Url for Shortened Links
router.get("/shorty/:id", redirectFunc);

export default router;
