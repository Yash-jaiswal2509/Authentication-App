import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User successfull created" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
