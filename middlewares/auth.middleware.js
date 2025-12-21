import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .send({ message: "Access Denied. No token provided." });
  }
  //   console.log("token from auth : ",token);
  const jwtToken = token.replace("Bearer", "").trim();
  //   console.log("Jwttoken from auth ",jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log("userData : ", userData);
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token." });
  }
};
