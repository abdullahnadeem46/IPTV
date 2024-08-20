import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { FileController } from "../controllers/index.js";

const router = express.Router();
router.get("/", FileController.getAll);
router.post("/", FileController.add);
router.get("/:id", FileController.getById);
router.patch("/:id", FileController.update);
router.delete("/:id", FileController.delete);

export default router;
