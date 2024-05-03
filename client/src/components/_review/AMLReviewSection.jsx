import { useFormContext } from "react-hook-form";

import { Divider, Grid, Stack } from "@mui/material";

const AMLReviewSection = () => {
  const { getValues } = useFormContext();

  return (
    <>
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
              <span className="italic">{getValues().separateAMLPolicy}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If Yes, has the Correspondent provided the policy?{" "}
              </h3>
              <span className="italic">{getValues().policyProvided}</span>
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
              <span className="italic">{getValues().periodicReview}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If Yes, please indicate how often{" "}
              </h3>
              <span className="italic">{getValues().howOften}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 3 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                3. Does the Correspondent’s license allow to operate to conduct
                transactions using the Mobile Wallet?
              </h3>
              <span className="italic">{getValues().license}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Please specify the type of license{" "}
              </h3>
              <span className="italic">{getValues().licenseType}</span>
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
              <span className="italic">{getValues().otherLicense}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If Yes, please specify{" "}
              </h3>
              <span className="italic">{getValues().otherLicenseType}</span>
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
              <span className="italic">{getValues().reportingObligation}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                Please describe the requirements below{" "}
              </h3>
              <span className="italic">
                {getValues().reportingObligationRequirement}
              </span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AMLReviewSection;
