import { Router } from "express";
import {
  createRiskAssessment,
  getRiskAssessments,
} from "../controllers/riskAssessment.controller";

const router = Router();

router.get("/", getRiskAssessments);
router.post("/", createRiskAssessment);

export default router;
