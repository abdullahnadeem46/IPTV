import { UserModel } from "../models/index.js";
import mongoose from "mongoose";
export const UserService = {
  getAll: async () => {
    return UserModel.find();
  },

  getById: async (id) => {
    return UserModel.findById(id);
  },

  add: async (body) => {
    return UserModel.create(body);
  },

  update: async (id) => {
    return UserModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return UserModel.findByIdAndDelete(id);
  },

  getUserStreams: async (id) => {
    return UserModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "_id",
          from: "streams",
          foreignField: "genre_id",
          as: "User_Streams",
        },
      },
    ]);
  },

  findOne: async (filter) => {
    return await UserModel.findOne(filter);
  },
  getUserStreamById: async (userId, streamId) => {},
};
