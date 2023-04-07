import bcrypt from 'bcryptjs';
import UserAdmin from '../models/userAdmin.model';
import jwt from '../helper/jwt';

const loginUser = async (req:any, res:any) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({
        message: "Missing require keys",
    });
  }

  // Check isExist user
  const existingUser:any = await UserAdmin.findOne({ username });
  if (!existingUser) {
    return res.status(400).json({
        message: "Invalid credentials",
    });
  }

  // Match password
  const isMatchPassword = await bcrypt.compare(password, existingUser.password);
  if (!isMatchPassword) {
    return res.status(400).json({
        message: "Invalid credentials",
    });
  }

  const payload = {
    id: existingUser._id,
    username: existingUser.username,
    email: existingUser.email,
    role: existingUser.role,
  };

  const token = jwt.signJWt(payload);

  // Response client
  return res.json({
    isAuthenticated: true,
    accessToken: token,
  });
};

export default { loginUser };