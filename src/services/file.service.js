import { FileModel } from "../models/index.js";

export const FileService = {
  getAll: async () => {
    return FileModel.find();
  },

  getById: async (id) => {
    return FileModel.findById(id);
  },

  add: async (body) => {
    return FileModel.create(body);
  },

  update: async (id) => {
    return FileModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return FileModel.findByIdAndDelete(id);
  },
};
