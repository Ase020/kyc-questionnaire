import { Router } from "express";
import {
  createAuthorizedSignatoryID,
  getAuthorizedSignatoryIDs,
} from "../controllers/authorizedSignatoryID.controller";

const router = Router();

router.get("/", getAuthorizedSignatoryIDs);
router.post("/", createAuthorizedSignatoryID);

export default router;
