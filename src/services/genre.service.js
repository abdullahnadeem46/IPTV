import { GenreModel } from "../models/index.js";
import mongoose from "mongoose";

export const GenreService = {
  getAll: async () => {
    return GenreModel.find();
  },

  getById: async (id) => {
    return GenreModel.findById(id);
  },

  add: async (body) => {
    return GenreModel.create(body);
  },

  update: async (id) => {
    return GenreModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return GenreModel.findByIdAndDelete(id);
  },

  getGenreSeries: async (id) => {
    return GenreModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "_id",
          from: "genre_series",
          foreignField: "genre_id",
          as: "Genre_Series",
          pipeline: [
            {
              $lookup: {
                localField: "series_id",
                from: "series",
                foreignField: "_id",
                as: "All_series",
              },
            },
          ],
        },
      },
    ]);
  },
};
