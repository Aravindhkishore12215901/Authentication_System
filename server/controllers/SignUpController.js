// controllers/SignUpController.js
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received signup data:", req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: '✅ Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '❌ Error signing up' });
  }
};
