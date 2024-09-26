import { Router } from "express";
import {
  createAMLPoliciesProcedure,
  getAMLPoliciesProcedures,
} from "../controllers/aMLPoliciesProcedure.controller";

const router = Router();

router.get("/", getAMLPoliciesProcedures);
router.post("/", createAMLPoliciesProcedure);

export default router;
