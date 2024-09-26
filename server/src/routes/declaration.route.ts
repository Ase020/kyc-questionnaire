import { Router } from "express";
import {
  createDeclaration,
  getDeclarations,
} from "../controllers/declaration.controller";

const router = Router();

router.get("/", getDeclarations);
router.post("/", createDeclaration);

export default router;
