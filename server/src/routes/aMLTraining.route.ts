import { Router } from "express";
import {
  createAMLTraining,
  getAMLTrainings,
} from "../controllers/aMLTraining.controller";

const router = Router();

router.get("/", getAMLTrainings);
router.post("/", createAMLTraining);

export default router;
