import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";

export const home = async (req, res) => {
  try {
    res.status(200).send("Hello Worlddddddddddddddddddddddddd!");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getRegister = async (req, res) => {
  try {
    res.status(200).send("Hello Register!");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const postRegister = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });
    res
      .status(201)
      .send({
        message: "User registered successfully",
        user: newUser,
        token: await newUser.generateToken(),
        userId: newUser._id.toString(),
      });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
