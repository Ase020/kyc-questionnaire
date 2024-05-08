import express from "express";
import { createKYC, getKYC } from "../controllers/kyc.controller.js";

const kycRouter = express.Router();

kycRouter.get("/", getKYC);
kycRouter.post("/", createKYC);

export default kycRouter;
