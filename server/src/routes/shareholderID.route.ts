import { Router } from "express";
import {
  createShareholderID,
  getShareholderIDs,
} from "../controllers/shareholderID.controller";

const router = Router();

router.get("/", getShareholderIDs);
router.post("/", createShareholderID);

export default router;
