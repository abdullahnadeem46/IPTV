import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { StreamController } from "../controllers/index.js";

const router = express.Router();
router.get("/", StreamController.getAll);
router.post("/", StreamController.add);
router.get("/:id", StreamController.getById);
router.patch("/:id", StreamController.update);
router.delete("/:id", StreamController.delete);
router.get("/:id/episode", StreamController.getStreamEpisodes);
router.get("/:id/user", StreamController.getStreamUsers);
router.get("/:id/episode/season", StreamController.getStreamUsers);
router.get( "/:id/episode/season/serie",StreamController.getStreamEpisodesSeasonSeries);
router.get("/:id/episode/season/serie/genre",StreamController.getStreamEpisodesSeasonSeriesGenres);

export default router;
