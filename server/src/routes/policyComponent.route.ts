import { Router } from "express";
import {
  createPolicyComponent,
  getPolicyComponents,
} from "../controllers/policyComponent.controller";

const router = Router();

router.get("/", getPolicyComponents);
router.post("/", createPolicyComponent);

export default router;
