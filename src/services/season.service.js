import { SeasonModel } from "../models/index.js";
import mongoose from "mongoose";
export const SeasonService = {
  getAll: async () => {
    return SeasonModel.find();
  },

  getById: async (id) => {
    return SeasonModel.findById(id);
  },

  add: async (body) => {
    return SeasonModel.create(body);
  },

  update: async (id) => {
    return SeasonModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return SeasonModel.findByIdAndDelete(id);
  },

  getSeasonsEpisodes: async (id) => {
    return SeasonModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "_id",
          from: "episodes",
          foreignField: "season_id",
          as: "Season_Episodes",
        },
      },
    ]);
  },
};
