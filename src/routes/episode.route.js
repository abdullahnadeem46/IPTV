import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { EpisodeController } from "../controllers/index.js";

const router = express.Router();
router.get("/", EpisodeController.getAll);
router.post("/", EpisodeController.add);
router.get("/:id", EpisodeController.getById);
router.patch("/:id", EpisodeController.update);
router.delete("/:id", EpisodeController.delete);
router.get("/:id/stream", EpisodeController.getEpisodesStreams);

export default router;
