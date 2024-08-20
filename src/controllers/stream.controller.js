import { StreamService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const StreamController = {
  getAll: async (req, res) => {
    try {
      const data = await StreamService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const book = await StreamService.getById(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  add: async (req, res) => {
    try {
      const data = await StreamService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const result = await StreamService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await StreamService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getStreamEpisodes: async (req, res) => {
    try {
      const streams = await StreamService.getStreamEpisodes(req.params.id);
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No episodes found for this user");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getStreamUsers: async (req, res) => {
    try {
      const streams = await StreamService.getStreamUsers(req.params.id);
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No user found for this stream");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getStreamEpisodesSeason: async (req, res) => {
    try {
      const streams = await StreamService.getStreamEpisodesSeason(
        req.params.id
      );
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No season found for this stream");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getStreamEpisodesSeasonSeries: async (req, res) => {
    try {
      const streams = await StreamService.getStreamEpisodesSeasonSeries(
        req.params.id
      );
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No season found for this stream");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getStreamEpisodesSeasonSeriesGenres: async (req, res) => {
    try {
      const streams = await StreamService.getStreamEpisodesSeasonSeriesGenres(
        req.params.id
      );
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No genre found for this stream");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
};
