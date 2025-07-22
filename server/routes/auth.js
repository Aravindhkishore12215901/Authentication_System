import express from 'express';
import { signup } from '../controllers/SignUpController.js';
import { login } from '../controllers/LoginController.js';
import { protect } from '../middleware/authMiddleware.js';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  signup
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').exists().withMessage('Password is required'),
  ],
  login
);

router.get('/profile', protect, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, this is your profile route!` });
});

export default router;
