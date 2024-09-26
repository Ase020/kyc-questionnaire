import { Router } from "express";
import {
  createNatureOfCustomer,
  getNatureOfCustomers,
} from "../controllers/natureOfCustomer.controller";

const router = Router();

router.get("/", getNatureOfCustomers);
router.post("/", createNatureOfCustomer);

export default router;
