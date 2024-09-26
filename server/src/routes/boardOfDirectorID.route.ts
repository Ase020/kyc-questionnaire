import { Router } from "express";
import {
  createBoardOfDirectorID,
  getBoardOfDirectorIDs,
} from "../controllers/boardOfDirectorID.controller";

const router = Router();

router.get("/", getBoardOfDirectorIDs);
router.post("/", createBoardOfDirectorID);

export default router;
