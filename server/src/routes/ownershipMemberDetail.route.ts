import { Router } from "express";
import {
  createOwnershipMemberDetail,
  getOwnershipMemberDetails,
} from "../controllers/ownershipMemberDetail.controller";

const router = Router();

router.get("/", getOwnershipMemberDetails);
router.post("/", createOwnershipMemberDetail);

export default router;
