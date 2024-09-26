import { Router } from "express";
import {
  createPepMemberDetail,
  getPepMemberDetails,
} from "../controllers/pepMemberDetail.controller";

const router = Router();

router.get("/", getPepMemberDetails);
router.post("/", createPepMemberDetail);

export default router;
