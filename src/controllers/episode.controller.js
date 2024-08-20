import { EpisodeService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const EpisodeController = {
  getAll: async (req, res) => {
    try {
      const data = await EpisodeService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const book = await EpisodeService.getById(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  add: async (req, res) => {
    try {
      const data = await EpisodeService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const result = await EpisodeService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await EpisodeService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
  getEpisodesStreams: async (req, res) => {
    try {
      const streams = await EpisodeService.getEpisodesStreams(req.params.id);
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No Stream found for this user");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
};
