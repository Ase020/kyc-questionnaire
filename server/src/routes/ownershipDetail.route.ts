import { Router } from "express";

import {
  createOwnershipDetail,
  getOwnershipDetails,
} from "../controllers/ownershipDetail.controller";

const router = Router();

router.get("/", getOwnershipDetails);
router.post("/", createOwnershipDetail);

export default router;
