import passport from "passport";
import User from "../models/user.js";

// User Registration
export const register = async (req, res) => {
  // Destructuring Data from req.body
  let { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    // If User ALready exists
    if (existingUser) {
      return res.status(409).json({
        success:"False",
        error: "User already exists!",
      });
    }

    // Registering New User
    const registerUser = await User.create(req.body);
    return res
      .status(201)
      .json({ success: "True", message: "Registration Successfull!" });
  } catch (error) {
    // Error Handling
    return res.status(500).json({
      error: "User Registration Failed!",
    });
  }
};

// auth middleware
export const loginMiddleware = (req, res, next) => {
  passport.authenticate(
    "local",
    { passReqToCallback: true },
    (err, user, info) => {
      if (err) {
        return res
          .status(500)
          .json({ success: "False", error: "Error Signing In!" });
      }
      if (!user) {
        return res.status(401).json({
          success: "False",
          error: "User Not Found!",
        });
      }
      // Log in the user manually
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({
            success: "False",
            error: "Error Logging in User!",
          });
        }
        // Successful authentication
        return res
          .status(200)
          .json({ success: "True", message: "Login Successfull!" });
      });
    }
  )(req, res, next);
};

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res
        .status(500)
        .json({
          success: "False",
          error: "Error Logging Out! Please try again!",
        });
    }
    return res
      .status(201)
      .json({ success: "True", message: "Logout Successfull!" });
  });
};
