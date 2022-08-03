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
        try {
          await User.findByIdAndDelete(
            req.params.id,
          );
          res.status(200).json("User has been deleted.");
        } catch (err) {
          next(err);
        }
      } else {
        return next(createError(403, "you can only delete your account"));
      }
};
export const getUser = async (req, res, next) => {
  try{
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  }catch(err){
    next(err)
  }
};
export const subscribe = async (req, res, next) => {
  try{
    const subscribe = await User.findByIdAndUpdate(req.user.id, {
      $push:{subscribedUsers:req.params.id}
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc:{subscribers:1},
    });
    res.status(200).json("subscribe successfulll")
  }catch(err){
    next(err)
  }
  
};
export const unSubscribe = async (req, res, next) => {
  try{
    const unsubscribe = await User.findByIdAndUpdate(req.user.id, {
      $pull:{subscribedUsers:req.params.id}
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc:{subscribers: -1},
    });
    res.status(200).json("unsubscribe successfulll")
  }catch(err){
    next(err)
  }
};
export const like = (req, res, next) => {
  try{

  }catch(err){
    next(err)
  }
};
export const dislike = (req, res, next) => {
  try{

  }catch(err){
    next(err)
  }
};
