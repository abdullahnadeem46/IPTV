import { StreamModel } from "../models/index.js";
import mongoose from "mongoose";
export const StreamService = {
  getAll: async () => {
    return StreamModel.find();
  },

  getById: async (id) => {
    return StreamModel.findById(id);
  },

  add: async (body) => {
    return StreamModel.create(body);
  },

  update: async (id) => {
    return StreamModel.findByIdAndUpdate(id);
  },

  delete: async (id) => {
    return StreamModel.findByIdAndDelete(id);
  },

  getStreamEpisodes: async (id) => {
    return StreamModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "episode_id",
          from: "episodes",
          foreignField: "_id",
          as: "Stream_Episode",
        },
      },
    ]);
  },

  getStreamUsers: async (id) => {
    return StreamModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "user_id",
          from: "users",
          foreignField: "_id",
          as: "Stream_Users",
        },
      },
    ]);
  },

  getStreamEpisodesSeason: async (id) => {
    return StreamModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "episode_id",
          from: "episodes",
          foreignField: "_id",
          as: "Stream_Episodes",
          pipeline: [
            {
              $lookup: {
                localField: "season_id",
                from: "seasons",
                foreignField: "_id",
                as: "All_Stream_Episodes_Seasons",
              },
            },
          ],
        },
      },
    ]);
  },

  getStreamEpisodesSeasonSeries: async (id) => {
    return StreamModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "episode_id",
          from: "episodes",
          foreignField: "_id",
          as: "Stream_Episodes",
          pipeline: [
            {
              $lookup: {
                localField: "season_id",
                from: "seasons",
                foreignField: "_id",
                as: "All_Stream_Episodes_Seasons",
                pipeline: [
                  {
                    $lookup: {
                      localField: "series_id",
                      from: "series",
                      foreignField: "_id",
                      as: "All_Stream_Episodes_Seasons_Series",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ]);
  },

  getStreamEpisodesSeasonSeriesGenres: async (id) => {
    return StreamModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          localField: "episode_id",
          from: "episodes",
          foreignField: "_id",
          as: "Stream_Episodes",
          pipeline: [
            {
              $lookup: {
                localField: "season_id",
                from: "seasons",
                foreignField: "_id",
                as: "All_Stream_Episodes_Seasons",
                pipeline: [
                  {
                    $lookup: {
                      localField: "series_id",
                      from: "series",
                      foreignField: "_id",
                      as: "All_Stream_Episodes_Seasons_Series",
                      pipeline: [
                        {
                          $lookup: {
                            localField: "_id",
                            from: "genre_series",
                            foreignField: "series_id",
                            as: "All_Stream_Episodes_Seasons_Series_GenreSeries",
                            pipeline: [
                              {
                                $lookup: {
                                  localField: "genre_id",
                                  from: "genres",
                                  foreignField: "_id",
                                  as: "All_Stream_Episodes_Seasons_Series_Genreseries_Genre",
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ]);
  },
};
