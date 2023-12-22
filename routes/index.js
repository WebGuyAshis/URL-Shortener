import express from 'express'
import { register } from '../controllers/auth_controller.js';
import { redirectFunc, urlShortener } from '../controllers/url_controller.js';

const router = express.Router();


// router.get('/', register)
router.post('/', urlShortener)

router.get('/shortenurl/:id', redirectFunc)

export default router;