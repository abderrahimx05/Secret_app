import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (!existUser)
      return res.status(404).json({ message: "User doesn't exist !" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Password ." });
    const token = jwt.sign(
      { email: existUser.email, id: existUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ message: "User already exist !" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Enter a correct password . " });
    const hashPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
