import { SeriesModel } from "../models/index.js";
import mongoose from "mongoose";

export const SeriesService = {
  getAll: async () => {
    return SeriesModel.find();
  },

  getById: async (id) => {
    return SeriesModel.findById(id);
  },

  add: async (body) => {
    return SeriesModel.create(body);
  },

  update: async (id) => {
    return SeriesModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return SeriesModel.findByIdAndDelete(id);
  },
  getSeriesEp: async (id) => {
    return SeriesModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "_id",
          from: "seasons",
          foreignField: "series_id",
          as: "Series_episodes",
          pipeline: [
            {
              $lookup: {
                localField: "_id",
                from: "episodes",
                foreignField: "season_id",
                as: "All_episodes",
              },
            },
          ],
        },
      },
    ]);
  },

  getSeriesSeasons: async (id) => {
    return SeriesModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "_id",
          from: "seasons",
          foreignField: "series_id",
          as: "Series_Season",
        },
      },
    ]);
  },
};
