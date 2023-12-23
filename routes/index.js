import express from 'express'
import { register,loginMiddleware, logoutUser } from '../controllers/auth_controller.js';
import { redirectFunc, urlShortener } from '../controllers/url_controller.js';
import passport from 'passport';


const router = express.Router();


// For User Registration
router.post('/register', register)

// For User Sign In
router.post('/login', loginMiddleware)

// for Logout
router.get('/logout', logoutUser)

// For Url Shortening
router.post('/urlShort', urlShortener)

// Redirection to Orginal Url for Shortened Links
router.get('/shorty/:id', redirectFunc)

export default router;