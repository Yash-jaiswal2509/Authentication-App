import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
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
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validatePassword = bcryptjs.compareSync(password, validUser.password);

    if (!validatePassword) {
      return next(errorHandler(401, "Wrong Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000*24); // 1 day
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
      })
      .status(201)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
