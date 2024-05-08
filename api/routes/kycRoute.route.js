import express from "express";
import { getKYC } from "../controllers/kyc.controller.js";

const kycRouter = express.Router();

kycRouter.get("/", getKYC);

export default kycRouter;
