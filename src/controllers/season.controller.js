import { SeasonService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const SeasonController = {
  getAll: async (req, res) => {
    try {
      const data = await SeasonService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const book = await SeasonService.getById(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  add: async (req, res) => {
    try {
      const data = await SeasonService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const result = await SeasonService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await SeasonService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getSeasonsEpisodes: async (req, res) => {
    try {
      const streams = await SeasonService.getSeasonsEpisodes(req.params.id);
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No Season found for this user");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
};
