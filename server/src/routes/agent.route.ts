import { Router } from "express";
import { createAgent, getAgents } from "../controllers/agent.controller";

const router = Router();

router.get("/", getAgents);
router.post("/", createAgent);

export default router;
