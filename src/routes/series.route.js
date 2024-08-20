import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { SeriesController } from "../controllers/index.js";

const router = express.Router();
router.get("/", SeriesController.getAll);
router.post("/", SeriesController.add);
router.get("/:id", SeriesController.getById);
router.patch("/:id", SeriesController.update);
router.delete("/:id", SeriesController.delete);
router.get("/:id/episodes", SeriesController.getSeriesEp);

export default router;
