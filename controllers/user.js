import { createError } from "../error.js";
import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    // todo
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "you can only update your account"));
  }
};
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        // todo
        try {
          const deleteUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            {
              new: true,
            }
          );
          res.status(200).json(deleteUser);
        } catch (err) {
          next(err);
        }
      } else {
        return next(createError(403, "you can only update your account"));
      }
};
export const getUser = (req, res, next) => {
  
};
export const subscribe = (req, res, next) => {
  
};
export const unSubscribe = (req, res, next) => {
  
};
export const like = (req, res, next) => {
  
};
export const dislike = (req, res, next) => {
  
};
