import { EpisodeModel } from "../models/index.js";
import mongoose from "mongoose";
export const EpisodeService = {
  getAll: async () => {
    return EpisodeModel.find();
  },

  getById: async (id) => {
    return EpisodeModel.findById(id);
  },

  add: async (body) => {
    return EpisodeModel.create(body);
  },

  update: async (id) => {
    return EpisodeModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return EpisodeModel.findByIdAndDelete(id);
  },

  getEpisodesStreams: async (id) => {
    return EpisodeModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "_id",
          from: "streams",
          foreignField: "episode_id",
          as: "Episodes_Stream",
        },
      },
    ]);
  },
};
