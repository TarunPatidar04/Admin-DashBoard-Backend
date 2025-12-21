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
    res.status(201).send({
      message: "User registered successfully",
      status: true,
      user: newUser,
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
  } catch (error) {
    // res.status(500).send({ message: "Internal Server Error" });
    next(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    res.status(200).send({
      message: "Login successful",
      status: true,
      user: user,
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    // res.status(500).send({ message: "Internal Server Error" });
    next(error);
  }
};

//logged in user data
export const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    res.status(200).send({ message: userData });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
