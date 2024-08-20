import express from "express";

// routes
import userRoute from "./user.route.js";
import StreamRoute from "./stream.route.js";
import EpisodeRoute from "./episode.route.js";
import SeasonRoute from "./season.route.js";
import FileRoute from "./file.route.js";
import SeriesRoute from "./series.route.js";
import GenreRoute from "./genre.route.js";
import GenreSeriesRoute from "./genreseries.route.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/stream", StreamRoute);

protectedRouter.use("/episode", EpisodeRoute);

protectedRouter.use("/season", SeasonRoute);

protectedRouter.use("/file", FileRoute);

protectedRouter.use("/series", SeriesRoute);

protectedRouter.use("/genre", GenreRoute);

protectedRouter.use("/genre_series", GenreSeriesRoute);
// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);

// unProtectedRouter.use("/stream", StreamRoute);

// unProtectedRouter.use("/episode", EpisodeRoute);

// unProtectedRouter.use("/season", SeasonRoute);

// unProtectedRouter.use("/file", FileRoute);

// unProtectedRouter.use("/series", SeriesRoute);

// unProtectedRouter.use("/genre", GenreRoute);

// unProtectedRouter.use("/genre_series", GenreSeriesRoute);

export { protectedRouter, unProtectedRouter };
