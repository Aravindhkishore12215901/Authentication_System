// controllers/loginController.js
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email }, // payload
      process.env.JWT_SECRET,              // secret key
      { expiresIn: '1h' }                  // token expiry
    );

    res.json({ 
      message: `✅ Welcome back, ${user.name}!`,
      token 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '❌ Error logging in' });
  }
};
