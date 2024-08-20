import { SeriesService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const SeriesController = {
  getAll: async (req, res) => {
    try {
      const data = await SeriesService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const book = await SeriesService.getById(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  add: async (req, res) => {
    try {
      const data = await SeriesService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const result = await SeriesService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await SeriesService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getSeriesEp: async (req, res) => {
    try {
      const streams = await SeriesService.getSeriesEp(req.params.id);
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No Episodes found for this user");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getSeriesSeasons: async (req, res) => {
    try {
      const streams = await SeriesService.getSeriesSeasons(req.params.id);
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No Season found for this user");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
};
