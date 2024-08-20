import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { GenreSeriesController } from "../controllers/index.js";

const router = express.Router();
router.get("/", GenreSeriesController.getAll);
router.post("/", GenreSeriesController.add);
router.get("/:id", GenreSeriesController.getById);
router.patch("/:id", GenreSeriesController.update);
router.delete("/:id", GenreSeriesController.delete);

export default router;
