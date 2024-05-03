import { useFormContext } from "react-hook-form";
import GrayBackgroundText from "./GrayBackgroundText";
import { Chip, Divider, Grid, Stack } from "@mui/material";

function Review() {
  const { getValues } = useFormContext();

  return (
    <div>
      <GrayBackgroundText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Review</h3>
        </div>
      </GrayBackgroundText>

      <div className="my-4">
        {/* General Information */}
        <Divider textAlign="left">GENERAL INFORMATION</Divider>

        <div className="my-8 px-8 pb-4 bg-grey-1">
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  Connectivity
                </h3>
                <span className="italic">FxOnline</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  Mobile Wallet Service
                </h3>
                <span className="italic">Sending</span>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid xs={12} marginBlock="8px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-medium">
                  <span className="font-bold">Service Accessibility: </span>Will
                  the customer be able to perform the transaction at a physical
                  location as well?
                </h3>
                <span className="italic">
                  NO. The service will be offered through mobile payments
                </span>
              </Stack>
            </Grid>

            <Grid xs={12} marginBlock="8px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-medium">
                  <span className="font-bold">Service Territory: </span>Mobile
                  Wallet can be used by correspondent’s customer: only in the
                  correspondent’s registered country or also outside it? Can the
                  customer initiate a transaction while out of the territory?
                </h3>
                <span className="italic">
                  No. Airtel Money mobile payments service is set-up to be
                  available within the territory of Kenya
                </span>
              </Stack>
            </Grid>
          </Grid>
        </div>

        {/* Anti-Money Laundering & Regulation */}
        <Divider textAlign="left">ANTI-MONEY LAUNDERING & REGULATION</Divider>

        <div className="my-8 px-8 pb-4 bg-grey-1">
          {/* 1 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  1. Does the correspondent have a separate AML policy in place
                  for the Mobile Wallet?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If Yes, has the Correspondent provided the policy?{" "}
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>
          </Grid>

          {/* 2 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  2. Does the Correspondent conduct a periodic review of the
                  Mobile Wallet’s AML policy?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If Yes, please indicate how often{" "}
                </h3>
                <span className="italic">Every 2 years</span>
              </Stack>
            </Grid>
          </Grid>

          {/* 3 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  3. Does the Correspondent’s license allow to operate to
                  conduct transactions using the Mobile Wallet?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  Please specify the type of license{" "}
                </h3>
                <span className="italic">
                  Money Remittance (License international money transfer)
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 4 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  4. Does the Correspondent have any other license for providing
                  financial services/ other Money transfer services?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If Yes, please specify{" "}
                </h3>
                <span className="italic">
                  Payments Service Provider (local Money Transfer)
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 5 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  5. Does the Correspondent have specific AML reporting
                  obligations or regulatory requirements for Mobile Wallet?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  Please describe the requirements below{" "}
                </h3>
                <span className="italic">
                  Registration with the Financial Intelligence Unit (Financial
                  Reporting Center - Kenya), Appointment of a Money Laundering
                  Reporting Officer (MLRO), Reporting of Suspicious Transactions
                  to the FRC, Reporting of large cash transactions (USD 15,000)
                  to the FRC
                </span>
              </Stack>
            </Grid>
          </Grid>
        </div>

        {/* Anti-Money Laundering & Regulation */}
        <Divider textAlign="left">KYC PROCEDURES</Divider>
        <Chip label="KYC for Customers" size="small" />

        <div className="my-8 px-8 pb-4 bg-grey-1">
          {/* 1 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  1. Does the customer need to be registered to use Mobile
                  Wallet?
                </h3>
                <span className="italic">No</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If Not, explain when will the Customer KYC be performed{" "}
                </h3>
                <span className="italic">
                  Registration with the Financial Intelligence Unit (Financial
                  Reporting Center - Kenya), Appointment of a Money Laundering
                  Reporting Officer (MLRO), Reporting of Suspicious Transactions
                  to the FRC, Reporting of large cash transactions (USD 15,000)
                  to the FRC
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 2 */}
          <Grid container spacing={2}>
            <Grid xs={12} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  2. Please describe the KYC process in place and provide the
                  list of documents required to register a customer
                </h3>
                <span className="italic">
                  Customer provides copy of National ID or Passport at Agent
                  premises for on-boarding, Customer details captured in
                  on-boarding application as per application form, Image of the
                  ID or Passport & customer taken, verification of customer
                  details against government database, sanctions & pep screening
                  of customer details, approval to transact on mobile money
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 3 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  3. Can a customer open an account on-line?
                </h3>
                <span className="italic">No</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If YES, describe the due diligence process in place:
                </h3>
                <span className="italic">
                  Registration with the Financial Intelligence Unit (Financial
                  Reporting Center - Kenya), Appointment of a Money Laundering
                  Reporting Officer (MLRO)
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 4 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  4. Indicate what type of customers are allowed to open an
                  account
                </h3>
                <span className="italic">Foreign</span>
              </Stack>
            </Grid>
          </Grid>

          {/* 5 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  5. Does the Correspondent have any Enhanced Due Diligence for
                  High Risk customers?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If YES, describe the enhanced due diligence process in place:
                </h3>
                <span className="italic">
                  Verification of customer details against Government database,
                  Screening of customer details to determine Sanctions, PEP
                  exposure, Senior Manager Approval for PEP customers
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 6 */}
          <Grid container spacing={2}>
            <Grid xs={12} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  6. Are new customers screened against sanction lists?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If YES: a) indicate against which lists are customers
                  screened:
                </h3>
                <span className="italic">
                  OFAC, UN, EU, UKHMT & Local Kenya Lists
                </span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  b) what is the procedure in case of a possible hit?
                </h3>
                <span className="italic">
                  Wallets held in pending state incases of possible hit against
                  sanctions lists, Suspicious Transaction Report raised with the
                  Financial Reporting Center (FRC).
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 7 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  7. Is the KYC process linked to a bank account?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If YES, please specify:
                </h3>
                <span className="italic">
                  OFAC, UN, EU, UKHMT & Local Kenya Lists
                </span>
              </Stack>
            </Grid>
          </Grid>
        </div>

        <Chip label="KYC for Beneficiaries" size="small" />
        <div className="my-8 px-8 pb-4 bg-grey-1">
          {/* 1 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  1. Does the beneficiary need to be registered to receive the
                  transaction?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If YES, describe the registration process:
                </h3>
                <span className="italic">
                  OFAC, UN, EU, UKHMT & Local Kenya Lists
                </span>
              </Stack>
            </Grid>
          </Grid>

          {/* 2 */}
          <Grid container spacing={2}>
            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  2. Are new beneficiaries screened against sanction lists?
                </h3>
                <span className="italic">Yes</span>
              </Stack>
            </Grid>

            <Grid xs={6} marginBlock="20px">
              <Stack direction="column">
                <h3 className="text-sm text-blue-289 font-semibold">
                  If YES, indicate against which lists are customers screened:
                </h3>
                <span className="italic">
                  OFAC, UN, EU, UKHMT & Local Kenya Lists
                </span>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Review;
