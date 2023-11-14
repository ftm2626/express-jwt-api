const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
const secret = "jwtSecret"; // jwt secret :just for demo, use long complex strings, put in in .env

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("please provice email and password");
  }

  const id = new Date().getDate(); //only for demo, normally provided by database
  const token = jwt.sign({ id, username }, secret, { expiresIn: "30d" });

  res.status(200).json({ msg: "user created", token: token });
};

const dashboard = async (req, res) => {  
  const luckynumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `welcome ${req.user.username}`, secret: luckynumber });
};

module.exports = {
  login,
  dashboard,
};
