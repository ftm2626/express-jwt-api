const jwt = require("jsonwebtoken");
const { UnauthError } = require("../errors");
const secret = "jwtSecret"; 
const authMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer")) {
    throw new UnauthError("no token provided");
  }
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, secret);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthError("you can not access this route");
  }
};

module.exports = { authMiddleware };
