import { useFormContext } from "react-hook-form";

import { Divider, Grid, Stack } from "@mui/material";

const MonitoringReview = () => {
  const { getValues } = useFormContext();
  return (
    <>
      <Divider textAlign="left">MONITORING</Divider>
      <div className="my-8 px-8 pb-4 bg-grey-1">
        {/* 1 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                1. Does the Correspondent have any Compliance/watch filters
                specifically established for Mobile Wallet?
              </h3>
              <span className="italic">{getValues().complianceFilters}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, describe them:
              </h3>
              <span className="italic">
                {getValues().complianceFiltersDesc}
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 2 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                2. Does the Correspondent have amount limits per
                customer/day/month?
              </h3>
              <span className="italic">{getValues().amountLimit}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify the limits for payout/sending/both:
              </h3>
              <span className="italic">{getValues().amountLimitAmt}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 3 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                3. Are the limits for paying/sending through Mobile Wallet
                different from those for cash transactions? (If Applicable)
              </h3>
              <span className="italic">{getValues().limitDiffer}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">{getValues().limitDifferDesc}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 4 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                4. Does the customer have any limitation on number of
                beneficiaries or countries to be sent to?
              </h3>
              <span className="italic">
                {getValues().limitationOfBeneficiaries}
              </span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                {getValues().limitationOfBeneficiariesDesc}
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 5 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                5. Does the Correspondent any limitation on the number of Mobile
                Wallet accounts per customer?
              </h3>
              <span className="italic">{getValues().limitationOfWallet}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                {getValues().limitationOfWalletDesc}
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 6 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                6. Does the Correspondent have a screening process in place?
              </h3>
              <span className="italic">{getValues().screeningProcess}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, how does the correspondent manage any potential matches?
                (Transaction rejected/On Hold/...):
              </h3>
              <span className="italic">{getValues().potentialMatchMgt}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 7 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                7. Will correspondent run real time verification filters?
              </h3>
              <span className="italic">{getValues().realtimeFilters}</span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">{getValues().realtimeFiltersDesc}</span>
            </Stack>
          </Grid>
        </Grid>

        {/* 8 */}
        <Grid container spacing={2}>
          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                8. Will correspondent perform post-transactional analysis to
                identify suspicious patterns on transactions performed Yes No
                through Mobile Wallet?
              </h3>
              <span className="italic">
                {getValues().postTransactionalAnalysis}
              </span>
            </Stack>
          </Grid>

          <Grid xs={6} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                If YES, please specify:
              </h3>
              <span className="italic">
                {getValues().postTransactionalAnalysisDesc}
              </span>
            </Stack>
          </Grid>
        </Grid>

        {/* 9 */}
        <Grid container spacing={2}>
          <Grid xs={12} marginBlock="20px">
            <Stack direction="column">
              <h3 className="text-sm text-blue-289 font-semibold">
                9. What type of monitoring and verification is performed for
                account holders?
              </h3>
              <span className="italic">{getValues().typeOfMonitoring}</span>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MonitoringReview;
