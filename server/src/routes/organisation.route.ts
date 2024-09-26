import { Router } from "express";
import {
  createOrganisation,
  getOrganisations,
} from "../controllers/organisation.controller";

const router = Router();

router.get("/", getOrganisations);
router.post("/", createOrganisation);

export default router;
