import { GenreSeriesModel } from "../models/index.js";

export const GenreSeriesService = {
  getAll: async () => {
    return GenreSeriesModel.find();
  },

  getById: async (id) => {
    return GenreSeriesModel.findById(id);
  },

  add: async (body) => {
    return GenreSeriesModel.create(body);
  },

  update: async (id) => {
    return GenreSeriesModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return GenreSeriesModel.findByIdAndDelete(id);
  },
};
