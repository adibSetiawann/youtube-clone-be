import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
  // console.log(req.body)
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    // handle error
    next(createError(404, "user not ditemukan"));
  }
};

export const signin = async (req, res, next) => {
    // console.log(req.body)
    try {
      const user = await User.findOne({name:req.body.name})
      if(!user) return next(createError(404, "user not found"))
    } catch (err) {
      // handle error
      next(createError(404, "User tidka ditemukan"));
    }
  };