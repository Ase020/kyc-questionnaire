import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

// Route Imports
import organisationRoutes from "./routes/organisation.route";
import entityInfoRoutes from "./routes/entityInfo.route";
import ownershipDetailRoutes from "./routes/ownershipDetail.route";
import riskAssessmentRoutes from "./routes/riskAssessment.route";
import kycBankRoutes from "./routes/kycBank.route";
import agentRoutes from "./routes/agent.route";
import aMLTrainingRoutes from "./routes/aMLTraining.route";
import natureOfCustomerRoutes from "./routes/natureOfCustomer.route";
import declarationRoutes from "./routes/natureOfCustomer.route";
import confirmationOfRelianceRoutes from "./routes/confirmationOfReliance.route";
import docRequirementChecklistRoutes from "./routes/docRequirementChecklist.route";
import designatedOfficerRoutes from "./routes/designatedOfficer.route";

import policyComponentRoutes from "./routes/policyComponent.route";
import externalAuditorRoutes from "./routes/externalAuditor.route";
import ownershipMemberDetailRoutes from "./routes/ownershipMemberDetail.route";
import pepMemberDetailRoutes from "./routes/pepMemberDetail.route";
import shareholderIDRoutes from "./routes/shareholderID.route";
import boardOfDirectorIDRoutes from "./routes/boardOfDirectorID.route";
import authorizedSignatoryIDRoutes from "./routes/authorizedSignatoryID.route";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get("/api", (req, res) => res.send("This is the home route!"));
app.use("/api/organisations", organisationRoutes);
app.use("/api/entity-infos", entityInfoRoutes);
app.use("/api/ownership-details", ownershipDetailRoutes);
app.use("/api/risk-assessments", riskAssessmentRoutes);
app.use("/api/kyc-banks", kycBankRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/aml-trainings", aMLTrainingRoutes);
app.use("/api/nature-of-customers", natureOfCustomerRoutes);
app.use("/api/declarations", declarationRoutes);
app.use("/api/confirmation-of-reliances", confirmationOfRelianceRoutes);
app.use("/api/doc-requirement-checklists", docRequirementChecklistRoutes);
app.use("/api/designated-officers", designatedOfficerRoutes);
app.use("/api/policy-components", policyComponentRoutes);
app.use("/api/external-auditors", externalAuditorRoutes);
app.use("/api/ownership-member-details", ownershipMemberDetailRoutes);
app.use("/api/pep-member-details", pepMemberDetailRoutes);
app.use("/api/shareholder-id", shareholderIDRoutes);
app.use("/api/board-of-director-id", boardOfDirectorIDRoutes);
app.use("/api/authorized-signatory-id", authorizedSignatoryIDRoutes);

const port = Number(process.env.PORT || 8001);
app.listen(port, "0.0.0.0", () =>
  console.log(`Server running on Port:${port}`)
);
