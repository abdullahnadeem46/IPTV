import { FileService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const FileController = {
  getAll: async (req, res) => {
    try {
      const data = await FileService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const book = await FileService.getById(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  add: async (req, res) => {
    try {
      const data = await FileService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const result = await FileService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await FileService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
