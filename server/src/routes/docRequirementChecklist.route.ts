import { Router } from "express";
import {
  createDocRequirementChecklist,
  getDocRequirementChecklists,
} from "../controllers/docRequirementChecklist.controller";

const router = Router();

router.get("/", getDocRequirementChecklists);
router.post("/", createDocRequirementChecklist);

export default router;
