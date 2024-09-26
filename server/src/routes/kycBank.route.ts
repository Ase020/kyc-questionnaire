import { Router } from "express";
import { createKycBank, getKycBanks } from "../controllers/kycBank.controller";

const router = Router();

router.get("/", getKycBanks);
router.post("/", createKycBank);

export default router;
