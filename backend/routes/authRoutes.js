import express from 'express';
import { login, googleAuth, facebookAuth } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// JWT Authentication
router.post('/login', login);

// OAuth Routes
router.get('/google', googleAuth);
router.get('/facebook', facebookAuth);

// Example protected route
router.get('/profile', verifyToken, (req, res) => {
  res.send('User profile');
});

export default router;
