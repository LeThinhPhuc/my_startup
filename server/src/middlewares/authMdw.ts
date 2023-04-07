import jwt from "../helper/jwt";


// AuthMdw Login
const authMdw = (req:any, res:any, next:any) => {
  // Step 1: get token from header
  const bearer = req.headers.authorization;
  const token = bearer.split(' ')[1];
  if (!token) {
    return res.status(400).json({
      message: "Access token is required",
    });
  }

  //Step 2: Verify token
  try {
    const decoded = jwt.verifyToken(token);
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

// Check Role
const adminMdw = (req:any, res:any, next:any) => {
  const bearer = req.headers.authorization;
  const token = bearer.split(' ')[1];

  const decoded:any = jwt.verifyToken(token);
  req.decoded = decoded;

  if (decoded.role === 'admin') {
    next();
  } else {
    res.json({
      message: 'Is not admin',
    });
  }
}

export default { authMdw, adminMdw };
