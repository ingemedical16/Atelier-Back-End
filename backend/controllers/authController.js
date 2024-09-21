import jwt from 'jsonwebtoken';
import passport from 'passport';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  const { username, password } = req.body;

  // Mock user authentication logic
  const user = { id: 1, username: 'testUser' };
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in' });
};

// Google OAuth and Facebook OAuth would use Passport strategies (similar to earlier steps)
export const googleAuth = passport.authenticate('google', { scope: ['profile'] });
export const facebookAuth = passport.authenticate('facebook');
