import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || "";

const authMdw = (req:any, res:any, next:any) => {
  // Step 1: get token from header
  const token = req.headers["auth-token"];
  if (!token) {
    return res.status(400).json({
      message: "Access token is required",
    });
  }

  //Step 2: Verify token
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded) {
      req.user = decoded;
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: "Invalid token, no authorization!",
    });
  }
};

export default authMdw;
