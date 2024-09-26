import { Router } from "express";
import {
  createConfirmationOfReliance,
  getConfirmationOfReliances,
} from "../controllers/confirmationOfReliance.controller";

const router = Router();

router.get("/", getConfirmationOfReliances);
router.post("/", createConfirmationOfReliance);

export default router;
