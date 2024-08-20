import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { SeasonController } from "../controllers/index.js";

const router = express.Router();
router.get("/", SeasonController.getAll);
router.post("/", SeasonController.add);
router.get("/:id", SeasonController.getById);
router.patch("/:id", SeasonController.update);
router.delete("/:id", SeasonController.delete);
router.get("/:id/episodes", SeasonController.getSeasonsEpisodes);


export default router;
