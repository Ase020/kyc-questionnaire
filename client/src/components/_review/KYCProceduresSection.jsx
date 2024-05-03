import { useFormContext } from "react-hook-form";

import { Chip, Divider, Grid, Stack } from "@mui/material";

const KYCProceduresSection = () => {
  const { getValues } = useFormContext();
  return (
    <>
      <Divider textAlign="left">KYC PROCEDURES</Divider>
      <Chip label="KYC for Customers" size="small" />

      <div className="my-8 px-8 pb-4 bg-grey-1">
        {/* 1 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                1. Does the customer need to be registered to use Mobile Wallet?
              </h3>
              <span className="italic">{getValues().customerRegistered}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If Not, explain when will the Customer KYC be performed{" "}
              </h3>
              <span className="italic">{getValues().performKYC}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 2 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                2. Please describe the KYC process in place and provide the list
                of documents required to register a customer
              </h3>
              <span className="italic">{getValues().kYCDescription}</span>
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
              <span className="italic">{getValues().online}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, describe the due diligence process in place:
              </h3>
              <span className="italic">{getValues().dueDiligence}</span>
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
              <span className="italic">{getValues().customerType}</span>
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
              <span className="italic">{getValues().enhancedDueDiligence}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, describe the enhanced due diligence process in place:
              </h3>
              <span className="italic">{getValues().dueDiligenceDesc}</span>
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
              <span className="italic">{getValues().customerScreened}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES: a) indicate against which lists are customers screened:
              </h3>
              <span className="italic">{getValues().screenList}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                b) what is the procedure in case of a possible hit?
              </h3>
              <span className="italic">{getValues().possibleHit}</span>
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
              <span className="italic">{getValues().kycLinkedToBank}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">{getValues().kycLinkedToBankDesc}</span>
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
              <span className="italic">
                {getValues().beneficiaryRegistered}
              </span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, describe the registration process:
              </h3>
              <span className="italic">
                {getValues().beneficiaryRegistrationProcess}
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
              <span className="italic">{getValues().beneficiaryScreened}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, indicate against which lists are customers screened:
              </h3>
              <span className="italic">
                {getValues().beneficiaryScreeningList}
              </span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default KYCProceduresSection;
