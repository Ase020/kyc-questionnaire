import { Router } from "express";

import {
  createEntityInfo,
  getEntityInfos,
} from "../controllers/entityInfo.controller";

const router = Router();

router.get("/", getEntityInfos);
router.post("/", createEntityInfo);

export default router;
