import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { GenreController } from "../controllers/index.js";

const router = express.Router();
router.get("/", GenreController.getAll);
router.post("/", GenreController.add);
router.get("/:id", GenreController.getById);
router.patch("/:id", GenreController.update);
router.delete("/:id", GenreController.delete);
router.get("/:id/series", GenreController.getGenreSeries);

export default router;
