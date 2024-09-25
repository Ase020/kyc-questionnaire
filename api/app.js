import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import express from "express";

import kycRouter from "./routes/kycRoute.route.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(morgan("common"));
app.use(cors({ origin: "http://localhost:5173", credentails: true }));

app.use("/api/kyc", kycRouter);

app.listen(8800, () => console.log("Server running!"));
