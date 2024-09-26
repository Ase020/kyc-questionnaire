import { Router } from "express";

import {
  createDesignatedOfficer,
  getDesignatedOfficers,
} from "../controllers/designatedOfficer.controller";

const router = Router();

router.get("/", getDesignatedOfficers);
router.post("/", createDesignatedOfficer);

export default router;
